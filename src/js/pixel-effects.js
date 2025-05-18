// Pixel Art Effects

document.addEventListener('DOMContentLoaded', function() {
    // Add pixel noise effect to the home section
    const homeSection = document.querySelector('.home-section');
    if (homeSection) {
        const pixelNoise = document.createElement('div');
        pixelNoise.classList.add('pixel-noise');
        homeSection.appendChild(pixelNoise);

        // Create scanner effect for the banner
        const scannerLine = document.createElement('div');
        scannerLine.classList.add('scanner-line');
        homeSection.appendChild(scannerLine);
    }

    // Add pixelation effect to images
    const allImages = document.querySelectorAll('img');
    allImages.forEach(img => {
        img.addEventListener('load', function() {
            this.classList.add('pixelated');
        });
    });

    // Add pixel glitch effect to headings on hover
    const headings = document.querySelectorAll('h1, h2, h3');
    headings.forEach(heading => {
        heading.addEventListener('mouseover', function() {
            this.classList.add('glitch-effect');
            setTimeout(() => {
                this.classList.remove('glitch-effect');
            }, 1000);
        });
    });

    // Pixelate progress bars animation
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach(bar => {
        const originalWidth = bar.style.width;
        bar.style.width = '0%';
        
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        animateProgressBar(bar, originalWidth);
                    }, 300);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(bar.parentElement);
    });

    function animateProgressBar(bar, targetWidth) {
        let width = 0;
        const interval = setInterval(() => {
            if (width >= parseInt(targetWidth)) {
                clearInterval(interval);
                return;
            }
            width += 1;
            bar.style.width = width + '%';
        }, 10);
    }

    // Add pixel trail effect on mouse move
    document.addEventListener('mousemove', createPixelTrail);

    function createPixelTrail(e) {
        // Limit the rate of pixel creation
        if (Math.random() > 0.9) {
            const pixel = document.createElement('div');
            pixel.classList.add('pixel-trail');
            pixel.style.left = e.pageX + 'px';
            pixel.style.top = e.pageY + 'px';
            
            // Random size between 2-4px
            const size = Math.floor(Math.random() * 3) + 2;
            pixel.style.width = size + 'px';
            pixel.style.height = size + 'px';
            
            document.body.appendChild(pixel);
            
            // Remove the pixel after animation completes
            setTimeout(() => {
                pixel.remove();
            }, 1000);
        }
    }

    // Add blinking effect to typing text
    const typingText = document.querySelector('.typing-text');
    if (typingText) {
        setInterval(() => {
            typingText.classList.toggle('blink');
        }, 500);
    }

    // Add retro loading animation
    function showLoadingAnimation() {
        const loader = document.createElement('div');
        loader.classList.add('pixel-loader');
        
        // Create pixel blocks
        for (let i = 0; i < 8; i++) {
            const block = document.createElement('div');
            block.classList.add('loader-block');
            loader.appendChild(block);
        }
        
        document.body.appendChild(loader);
        
        // Remove loader after page content is fully loaded
        window.addEventListener('load', () => {
            setTimeout(() => {
                loader.classList.add('loader-fade');
                setTimeout(() => {
                    loader.remove();
                }, 500);
            }, 500);
        });
    }
    
    showLoadingAnimation();
    
    // Add scanline effect to the entire page
    const scanlines = document.createElement('div');
    scanlines.classList.add('scanlines');
    document.body.appendChild(scanlines);
    
    // Add CRT power-on effect
    const crtEffect = document.createElement('div');
    crtEffect.classList.add('crt-effect');
    document.body.appendChild(crtEffect);
    
    setTimeout(() => {
        crtEffect.classList.add('crt-on');
    }, 100);
    
    setTimeout(() => {
        crtEffect.remove();
    }, 2000);
}); 