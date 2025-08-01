
class SkillsPopup {
    constructor() {
        this.popups = new Map();
        this.currentPopup = null;
        this.init();
    }

    init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.bindEvents());
        } else {
            this.bindEvents();
        }
    }

    bindEvents() {
        // Find all skill arrows and bind hover events
        const skillArrows = document.querySelectorAll('.skill-arrow');
        
        skillArrows.forEach(arrow => {
            const skillCard = arrow.closest('.skill-card');
            if (skillCard) {
                // Create popup for this skill
                this.createPopup(skillCard, arrow);
                
                // Bind hover events for desktop
                arrow.addEventListener('mouseenter', (e) => this.showPopup(e, skillCard));
                arrow.addEventListener('mouseleave', (e) => this.hidePopup(e, skillCard));
                
                // Touch events for mobile
                arrow.addEventListener('touchstart', (e) => {
                    e.preventDefault();
                    this.showPopup(e, skillCard);
                });
                
                // Click events for both desktop and mobile
                arrow.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    const popup = this.popups.get(skillCard);
                    if (this.currentPopup === popup) {
                        this.hidePopup(e, skillCard);
                    } else {
                        this.showPopup(e, skillCard);
                    }
                });
                
                // Also bind to skill card for better UX on desktop
                skillCard.addEventListener('mouseenter', (e) => {
                    if (e.target === arrow || arrow.contains(e.target)) {
                        this.showPopup(e, skillCard);
                    }
                });
                
                skillCard.addEventListener('mouseleave', (e) => {
                    // Only hide if we're actually leaving the card and not on mobile
                    if (!skillCard.contains(e.relatedTarget) && !this.isTouchDevice()) {
                        this.hidePopup(e, skillCard);
                    }
                });
            }
        });
    }

    createPopup(skillCard, arrow) {
        // Extract skill data from attributes
        const skillName = skillCard.querySelector('.skill-name').textContent;
        const skillData = {
            name: skillName,
            level: skillCard.dataset.level || 'Intermediate',
            experience: skillCard.dataset.experience || 'N/A',
            projects: skillCard.dataset.projects || 'Various projects'
        };

        // Create enhanced popup with full content
        const popup = document.createElement('div');
        popup.className = 'skill-popup';
        popup.setAttribute('role', 'tooltip');
        popup.setAttribute('aria-hidden', 'true');
        popup.setAttribute('data-skill-id', skillCard.dataset.skill || 'unknown');
        
        // Use the complete popup content generator
        popup.innerHTML = this.generatePopupContent(skillData);
        
        // Add to body
        document.body.appendChild(popup);
        
        // Store reference
        this.popups.set(skillCard, popup);
        
        return popup;
    }

    generatePopupContent(skillData) {
        // Generate detailed content based on skill
        const detailedInfo = this.getSkillDetails(skillData.name.toLowerCase());
        
        return `
            <h4>${skillData.name}</h4>
            <div class="skill-level">${skillData.level}</div>
            <p class="experience"><strong>Experience:</strong> ${skillData.experience}</p>
            <p class="projects"><strong>Projects:</strong> ${skillData.projects}</p>
            ${detailedInfo ? `<p class="details">${detailedInfo}</p>` : ''}
            <div class="popup-arrow"></div>
        `;
    }

    getSkillDetails(skillName) {
        const skillDetails = {
            'html/css': 'Responsive design, CSS Grid/Flexbox, SASS/SCSS, CSS animations, modern web standards',
            'javascript': 'ES6+, DOM manipulation, async/await, API integration, modern frameworks',
            'python': 'Django, Flask, data analysis, automation scripts, CLI tools, REST APIs',
            'c/c++': 'Systems programming, algorithms, data structures, memory management, performance optimization',
            'c#': 'Unity development, .NET applications, object-oriented design, game programming',
            'node.js': 'Express.js, REST APIs, middleware, npm packages, server-side JavaScript',
            'unity': '2D/3D game development, physics systems, UI systems, asset management, scripting',
            'blender': '3D modeling, texturing, animation, rendering, game asset creation',
            'photoshop': 'Photo editing, UI mockups, digital art, layer management, advanced filters',
            'illustrator': 'Vector graphics, logo design, illustrations, icon creation, print design',
            'linux': 'Command line, shell scripting, system administration, package management, Fedora',
            'aws': 'EC2, S3, Lambda, deployment strategies, cloud architecture basics',
            'problem solving': 'Algorithm design, debugging, optimization, analytical thinking, creative solutions',
            'communication': 'Technical documentation, presentations, team collaboration, stakeholder management',
            'ui/ux design': 'User research, wireframing, prototyping, usability testing, design systems',
            'project management': 'Agile methodologies, task planning, team coordination, timeline management',
            'team leadership': 'Mentoring, delegation, conflict resolution, motivation, team building',
            'english': 'Technical writing, documentation, international communication, presentation skills'
        };

        return skillDetails[skillName] || null;
    }

    showPopup(event, skillCard) {
        // Hide any existing popup
        this.hideCurrentPopup();
        
        const popup = this.popups.get(skillCard);
        if (!popup) return;

        // Position popup
        this.positionPopup(popup, skillCard);
        
        // Show popup
        popup.classList.add('show');
        popup.setAttribute('aria-hidden', 'false');
        
        // Store current popup reference
        this.currentPopup = popup;
        
        // Add escape key listener
        document.addEventListener('keydown', this.handleEscapeKey.bind(this));
        
        // Add click outside listener
        setTimeout(() => {
            document.addEventListener('click', this.handleClickOutside.bind(this));
        }, 100);
    }

    hidePopup(event, skillCard) {
        const popup = this.popups.get(skillCard);
        if (!popup) return;

        // Add small delay to prevent flickering
        setTimeout(() => {
            if (popup === this.currentPopup) {
                popup.classList.remove('show');
                popup.style.display = 'none';
                popup.setAttribute('aria-hidden', 'true');
                this.currentPopup = null;
                
                // Remove escape key listener
                document.removeEventListener('keydown', this.handleEscapeKey.bind(this));
                
                // Remove click outside listener
                document.removeEventListener('click', this.handleClickOutside.bind(this));
            }
        }, 100);
    }

    hideCurrentPopup() {
        if (this.currentPopup) {
            this.currentPopup.classList.remove('show');
            this.currentPopup.style.display = 'none';
            this.currentPopup.setAttribute('aria-hidden', 'true');
            this.currentPopup = null;
        }
    }

    positionPopup(popup, skillCard) {
        const arrow = skillCard.querySelector('.skill-arrow');
        if (!arrow) return;
        
        // Get arrow position relative to viewport
        const arrowRect = arrow.getBoundingClientRect();
        
        // Calculate position (right side of arrow)
        let popupLeft = arrowRect.right + 8;
        let popupTop = arrowRect.top;
        
        // Apply position
        popup.style.position = 'fixed';
        popup.style.left = popupLeft + 'px';
        popup.style.top = popupTop + 'px';
        popup.style.zIndex = '999999999';
        popup.style.display = 'block';
    }

    handleEscapeKey(event) {
        if (event.key === 'Escape' && this.currentPopup) {
            this.hideCurrentPopup();
        }
    }

    isTouchDevice() {
        return ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0);
    }

    handleClickOutside(event) {
        if (this.currentPopup && !this.currentPopup.contains(event.target)) {
            // Check if click is not on any skill arrow
            const isArrowClick = event.target.classList.contains('skill-arrow') || 
                               event.target.closest('.skill-arrow');
            
            if (!isArrowClick) {
                this.hideCurrentPopup();
            }
        }
    }

    // Public method to add new skills dynamically
    addSkill(categorySelector, skillData) {
        const category = document.querySelector(categorySelector);
        if (!category) return false;

        const skillsList = category.querySelector('.skills-list');
        if (!skillsList) return false;

        // Create new skill card
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card';
        skillCard.dataset.skill = skillData.id || skillData.name.toLowerCase().replace(/\s+/g, '-');
        skillCard.dataset.level = skillData.level || 'Intermediate';
        skillCard.dataset.experience = skillData.experience || 'N/A';
        skillCard.dataset.projects = skillData.projects || 'Various projects';

        skillCard.innerHTML = `
            <span class="skill-name">${skillData.name}</span>
            <span class="skill-arrow">></span>
        `;

        // Add to skills list
        skillsList.appendChild(skillCard);

        // Bind events for new skill
        const arrow = skillCard.querySelector('.skill-arrow');
        this.createPopup(skillCard, arrow);
        
        arrow.addEventListener('mouseenter', (e) => this.showPopup(e, skillCard));
        arrow.addEventListener('mouseleave', (e) => this.hidePopup(e, skillCard));

        return true;
    }

    // Public method to remove skills
    removeSkill(skillSelector) {
        const skillCard = typeof skillSelector === 'string' ? 
                         document.querySelector(skillSelector) : skillSelector;
        if (!skillCard) return false;

        // Clean up popup from body
        const popup = this.popups.get(skillCard);
        if (popup) {
            popup.remove(); // This will remove popup from body
            this.popups.delete(skillCard);
        }

        // Remove skill card
        skillCard.remove();
        return true;
    }
    
    // Cleanup method to remove all popups
    cleanup() {
        this.popups.forEach((popup, skillCard) => {
            popup.remove(); // Remove popup from body
        });
        this.popups.clear();
        this.currentPopup = null;
    }
}

// Initialize when DOM is ready
const skillsPopup = new SkillsPopup();

// Cleanup on page unload to prevent memory leaks
window.addEventListener('beforeunload', () => {
    skillsPopup.cleanup();
});

// Export for potential external use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SkillsPopup;
} else if (typeof window !== 'undefined') {
    window.SkillsPopup = SkillsPopup;
    window.skillsPopup = skillsPopup;
}