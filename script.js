document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
    
    // Close menu when clicking on a nav link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            // Only try to scroll if it's an anchor link (starts with #)
            if (targetId.startsWith('#')) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Skills animation
    const animateSkills = () => {
        const skillBars = document.querySelectorAll('.progress');
        skillBars.forEach(bar => {
            const targetWidth = bar.parentElement.nextElementSibling.textContent;
            bar.style.width = "0";
            setTimeout(() => {
                bar.style.width = targetWidth;
            }, 200);
        });
    };

    // Animate skills when section is in view
    const skillsSection = document.querySelector('.skills-section');
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkills();
                skillsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    if (skillsSection) {
        skillsObserver.observe(skillsSection);
    }

    // Navigation active state
    const sections = document.querySelectorAll('section');
    const navLinkItems = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinkItems.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Add data-speed attributes to project and education items for parallax effect
    document.querySelectorAll('.project-item').forEach((item, index) => {
        item.setAttribute('data-speed', 0.05 + (index * 0.02));
    });
    
    document.querySelectorAll('.education-item').forEach((item, index) => {
        item.setAttribute('data-speed', 0.08 + (index * 0.02));
    });

    // Draw curved path and position items
    const drawPathAndPositionItems = () => {
        // Draw Projects Path
        const projectsCanvas = document.querySelector('.projects-section .path-canvas');
        if (!projectsCanvas) return;
        
        const projectItems = document.querySelectorAll('.projects-section .project-item');
        const projectsCtx = projectsCanvas.getContext('2d');
        const projectsWidth = projectsCanvas.width;
        const projectsHeight = projectsCanvas.height;
        
        // Clear canvas
        projectsCtx.clearRect(0, 0, projectsWidth, projectsHeight);
        
        // Set path style
        projectsCtx.strokeStyle = '#000000';
        projectsCtx.lineWidth = 3;
        projectsCtx.setLineDash([10, 5]);
        
        // Draw path - Bezier Curve
        projectsCtx.beginPath();
        projectsCtx.moveTo(0, projectsHeight/2);
        projectsCtx.bezierCurveTo(
            projectsWidth * 0.3, projectsHeight * 0.3,
            projectsWidth * 0.6, projectsHeight * 0.7,
            projectsWidth, projectsHeight/2
        );
        projectsCtx.stroke();
        
        // Position project items along the path
        const totalItems = projectItems.length;
        projectItems.forEach((item, index) => {
            // Calculate position on the curve (t from 0 to 1)
            const t = index / (totalItems - 1);
            
            // Bezier curve formula for point at parameter t
            const x = (1-t)**3 * 0 + 
                      3 * (1-t)**2 * t * projectsWidth * 0.3 + 
                      3 * (1-t) * t**2 * projectsWidth * 0.6 + 
                      t**3 * projectsWidth;
            
            const y = (1-t)**3 * (projectsHeight/2) + 
                      3 * (1-t)**2 * t * projectsHeight * 0.3 + 
                      3 * (1-t) * t**2 * projectsHeight * 0.7 + 
                      t**3 * (projectsHeight/2);
            
            // Convert from canvas coordinates to actual container position
            // Get canvas container dimensions
            const containerRect = projectsCanvas.parentElement.getBoundingClientRect();
            
            // Calculate the scaling ratio between canvas dimensions and actual rendered dimensions
            const scaleX = containerRect.width / projectsWidth;
            const scaleY = containerRect.height / projectsHeight;
            
            // Scale the coordinates
            const xPos = x * scaleX;
            const yPos = y * scaleY;
            
            // Position the dot on the path
            const dot = item.querySelector('.connection-dot');
            if (dot) {
                dot.style.left = '50%';
                dot.style.top = '0';
            }
            
            // Position the item - apply transform for proper centering
            item.style.left = `${xPos}px`;
            item.style.top = `${yPos + 30}px`; // Add 30px offset for the connection line
            item.style.transform = 'translateX(-50%)'; // Only use translateX, no translateY
        });
        
        // Draw Education Path
        const educationCanvas = document.querySelector('.education-section .path-canvas');
        if (!educationCanvas) return;
        
        const educationItems = document.querySelectorAll('.education-section .education-item');
        const educationCtx = educationCanvas.getContext('2d');
        const educationWidth = educationCanvas.width;
        const educationHeight = educationCanvas.height;
        
        // Clear canvas
        educationCtx.clearRect(0, 0, educationWidth, educationHeight);
        
        // Set path style
        educationCtx.strokeStyle = '#000000';
        educationCtx.lineWidth = 3;
        educationCtx.setLineDash([10, 5]);
        
        // Draw path - different Bezier Curve
        educationCtx.beginPath();
        educationCtx.moveTo(0, educationHeight/2);
        educationCtx.bezierCurveTo(
            educationWidth * 0.25, educationHeight * 0.7,
            educationWidth * 0.75, educationHeight * 0.3,
            educationWidth, educationHeight/2
        );
        educationCtx.stroke();
        
        // Position education items along the path
        const totalEduItems = educationItems.length;
        educationItems.forEach((item, index) => {
            // Calculate position on the curve (t from 0 to 1)
            const t = index / (totalEduItems - 1);
            
            // Bezier curve formula for point at parameter t
            const x = (1-t)**3 * 0 + 
                      3 * (1-t)**2 * t * educationWidth * 0.25 + 
                      3 * (1-t) * t**2 * educationWidth * 0.75 + 
                      t**3 * educationWidth;
            
            const y = (1-t)**3 * (educationHeight/2) + 
                      3 * (1-t)**2 * t * educationHeight * 0.7 + 
                      3 * (1-t) * t**2 * educationHeight * 0.3 + 
                      t**3 * (educationHeight/2);
            
            // Convert from canvas coordinates to actual container position
            // Get canvas container dimensions
            const containerRect = educationCanvas.parentElement.getBoundingClientRect();
            
            // Calculate the scaling ratio between canvas dimensions and actual rendered dimensions
            const scaleX = containerRect.width / educationWidth;
            const scaleY = containerRect.height / educationHeight;
            
            // Scale the coordinates
            const xPos = x * scaleX;
            const yPos = y * scaleY;
            
            // Position the dot on the path
            const dot = item.querySelector('.connection-dot');
            if (dot) {
                dot.style.left = '50%';
                dot.style.top = '0';
            }
            
            // Position the item - apply transform for proper centering
            item.style.left = `${xPos}px`;
            item.style.top = `${yPos + 30}px`; // Add 30px offset for the connection line
            item.style.transform = 'translateX(-50%)'; // Only use translateX, no translateY
        });
    };
    
    // Run on load and resize
    window.addEventListener('load', drawPathAndPositionItems);
    window.addEventListener('resize', drawPathAndPositionItems);
    
    // Redraw periodically to ensure it works properly
    setInterval(drawPathAndPositionItems, 1000);

    // Add some parallax effect on scroll
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        
        // Parallax for home section
        const homeSection = document.querySelector('.home-section');
        if (homeSection) {
            homeSection.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
        }
        
        // Subtle movement for project and education items
        // document.querySelectorAll('.project-item, .education-item').forEach(item => {
        //     const speed = parseFloat(item.getAttribute('data-speed') || 0.1);
        //     const yPos = -(scrollPosition * speed);
        //     // Maintain the X transform while adding Y parallax
        //     item.style.transform = `translateX(-50%) translateY(${yPos}px)`;
        // });
    });

    // Typing effect for intro text
    const typeWriter = () => {
        const text = "I create amazing digital experiences.";
        const typingElement = document.querySelector('.typing-text');
        if (typingElement) {
            let i = 0;
            const typing = setInterval(() => {
                if (i < text.length) {
                    typingElement.innerHTML += text.charAt(i);
                    i++;
                } else {
                    clearInterval(typing);
                    setTimeout(() => {
                        typingElement.innerHTML = '';
                        typeWriter();
                    }, 2000);
                }
            }, 100);
        }
    };
    
    // Start typing effect
    typeWriter();

    // Form submission
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formElements = contactForm.elements;
            let isValid = true;
            
            // Simple validation
            for (let i = 0; i < formElements.length; i++) {
                if (formElements[i].type !== 'submit' && formElements[i].value.trim() === '') {
                    isValid = false;
                    formElements[i].classList.add('error');
                } else {
                    formElements[i].classList.remove('error');
                }
            }
            
            if (isValid) {
                contactForm.innerHTML = '<div class="success-message">Thank you for your message! I\'ll get back to you soon.</div>';
            }
        });
    }

    // Update copyright year
    const currentYear = document.getElementById('current-year');
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    // Update project links - FIX HERE
    document.querySelectorAll('.project-item .btn-small').forEach((btn, index) => {
        // Use the proper index for the project ID (starting from 1)
        const projectId = index + 1;
        btn.setAttribute('href', `project-detail.html?id=${projectId}`);
        btn.setAttribute('target', `_blank` );
        
        // Add click event listener to ensure navigation works
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            window.open(`project-detail.html?id=${projectId}`, '_blank');
        });
    });
});