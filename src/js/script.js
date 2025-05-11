document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            body.classList.toggle('menu-open'); // Prevent scrolling when menu is open
        });
    }
    
    // Close menu when clicking on a nav link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            body.classList.remove('menu-open');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navLinks.classList.contains('active') && 
            !navLinks.contains(e.target) && 
            !hamburger.contains(e.target)) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            body.classList.remove('menu-open');
        }
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

    // Add data-speed attributes to education items for parallax effect (remove project items)
    document.querySelectorAll('.education-item').forEach((item, index) => {
        item.setAttribute('data-speed', 0.08 + (index * 0.02));
    });

    // Project cards animation
    const animateProjectCards = () => {
        const projectCards = document.querySelectorAll('.project-card');
        
        const projectObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    projectObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        
        projectCards.forEach((card, index) => {
            // Add different animation delay for each card
            card.style.transitionDelay = `${index * 0.1}s`;
            projectObserver.observe(card);
        });
    };

    // Timeline animation for education section
    const animateTimeline = () => {
        const timelineItems = document.querySelectorAll('.timeline-item');
        
        const timelineObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('timeline-item-visible');
                    timelineObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        
        timelineItems.forEach(item => {
            timelineObserver.observe(item);
        });
    };

    // Initialize animations when document is loaded
    animateProjectCards();
    animateTimeline();
    
    // Update year in footer
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Typing effect for intro text
    const typeWriter = () => {
        const texts = [
            "I create amazing digital experiences.",
            "I design beautiful user interfaces.",
            "I develop modern web applications.",
            "I bring creative ideas to life."
        ];
        const typingElement = document.querySelector('.typing-text');
        
        if (typingElement) {
            let textIndex = 0;
            let charIndex = 0;
            
            function type() {
                // If we've typed all characters in the current text
                if (charIndex < texts[textIndex].length) {
                    typingElement.innerHTML += texts[textIndex].charAt(charIndex);
                    charIndex++;
                    setTimeout(type, 100);
                } else {
                    // Wait 2 seconds before erasing
                    setTimeout(erase, 2000);
                }
            }
            
            function erase() {
                if (typingElement.innerHTML.length > 0) {
                    typingElement.innerHTML = typingElement.innerHTML.substring(0, typingElement.innerHTML.length - 1);
                    setTimeout(erase, 50); // Erase a bit faster than typing
                } else {
                    // Move to next text
                    textIndex = (textIndex + 1) % texts.length;
                    charIndex = 0;
                    
                    // Start typing the next text after a small delay
                    setTimeout(type, 500);
                }
            }
            
            // Start the typing effect
            type();
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

    // Update project links
    document.querySelectorAll('.project-card .btn-small').forEach((btn, index) => {
        // Use the proper index for the project ID (starting from 1)
        const projectId = index + 1;
        btn.setAttribute('href', `project-detail.html?id=${projectId}`);
        btn.setAttribute('target', '_blank');
        
        // Add click event listener to ensure navigation works
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            window.open(`project-detail.html?id=${projectId}`, '_blank');
        });
    });

    // Add animation class to timeline items on page load
    setTimeout(() => {
        document.querySelectorAll('.timeline-item').forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('timeline-item-visible');
            }, 200 * index);
        });
    }, 500);
    
    // Add animation class to project cards on page load
    setTimeout(() => {
        document.querySelectorAll('.project-card').forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('visible');
            }, 100 * index);
        });
    }, 300);
});