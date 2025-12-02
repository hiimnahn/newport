
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

    // Optimized pixel trail effect with throttling
    let lastTrailTime = 0;
    function createPixelTrail(e) {
        const now = Date.now();
        if (now - lastTrailTime < 100) return; // Throttle to 10fps
        lastTrailTime = now;
        
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
                if (pixel.parentNode) pixel.remove();
            }, 1000);
        }
    }
    
    document.addEventListener('mousemove', createPixelTrail);

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
        
        window.addEventListener('load', () => {
            setTimeout(() => {
                loader.classList.add('loader-fade');
                setTimeout(() => {
                    if (loader.parentNode) loader.remove();
                }, 500);
            }, 500);
        });
    }
    
    showLoadingAnimation();
    
    // Add CRT effects
    const scanlines = document.createElement('div');
    scanlines.classList.add('scanlines');
    document.body.appendChild(scanlines);
    
    const crtEffect = document.createElement('div');
    crtEffect.classList.add('crt-effect');
    document.body.appendChild(crtEffect);
    
    setTimeout(() => {
        crtEffect.classList.add('crt-on');
        setTimeout(() => {
            if (crtEffect.parentNode) crtEffect.remove();
        }, 1500);
    }, 100);
}); 