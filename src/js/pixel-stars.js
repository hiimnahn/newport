
document.addEventListener('DOMContentLoaded', function() {
    // Only add stars to the home section if it exists
    const homeSection = document.querySelector('.home-section');
    if (!homeSection) return;
    
    // Create stars container
    const starsContainer = document.createElement('div');
    starsContainer.classList.add('stars');
    homeSection.appendChild(starsContainer);
    
    // Generate random number of stars (between 50-100)
    const numberOfStars = Math.floor(Math.random() * 50) + 50;
    
    for (let i = 0; i < numberOfStars; i++) {
        createStar(starsContainer);
    }
    
    // Function to create a single star
    function createStar(container) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        const x = Math.floor(Math.random() * 100);
        const y = Math.floor(Math.random() * 100);
        
        // Random size (1-3px)
        const size = Math.floor(Math.random() * 3) + 1;
        
        // Random animation delay
        const delay = Math.random() * 2;
        
        // Random animation duration
        const duration = Math.random() * 2 + 1;
        
        // Set star properties
        star.style.left = x + '%';
        star.style.top = y + '%';
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.opacity = Math.random() * 0.7 + 0.3;
        star.style.animationDelay = delay + 's';
        star.style.animationDuration = duration + 's';
        
        // Occasionally add a larger star with a different color
        if (Math.random() > 0.9) {
            star.style.width = '4px';
            star.style.height = '4px';
            star.style.backgroundColor = '#c0c0c0';
            star.classList.add('shooting-star');
            
            // Add keyframe animation for occasional shooting stars
            if (Math.random() > 0.7) {
                star.style.animation = `twinkle ${duration}s infinite alternate, 
                                       shoot ${Math.random() * 5 + 5}s ${Math.random() * 10}s linear infinite`;
                
                // Set a random direction for the shooting star
                const angle = Math.random() * 360;
                star.style.setProperty('--angle', angle + 'deg');
            }
        }
        
        // Add star to container
        container.appendChild(star);
    }
    
    // Add the shooting star animation to the style sheet
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes shoot {
            0% {
                transform: translate(0, 0) scale(1);
                opacity: var(--initial-opacity, 0.8);
            }
            1% {
                transform: translate(calc(cos(var(--angle, 45deg)) * 10px), 
                                    calc(sin(var(--angle, 45deg)) * 10px)) scale(1.5);
                opacity: 1;
            }
            2% {
                transform: translate(calc(cos(var(--angle, 45deg)) * 20px), 
                                    calc(sin(var(--angle, 45deg)) * 20px)) scale(0.8);
                opacity: 0.4;
            }
            3% {
                opacity: 0;
            }
            100% {
                transform: translate(0, 0) scale(1);
                opacity: var(--initial-opacity, 0.8);
            }
        }
    `;
    document.head.appendChild(style);
    
    setInterval(() => {
        if (Math.random() > 0.7) {
            createStar(starsContainer);
            
            if (starsContainer.children.length > 150) {
                starsContainer.removeChild(starsContainer.children[0]);
            }
        }
    }, 2000);
}); 