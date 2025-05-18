/**
 * Simple Image Optimizer for ImNaHn's Portfolio
 * 
 * This script helps optimize images before displaying them on the page
 * It resizes large images and creates lower quality versions for faster loading
 */

class ImageOptimizer {
    constructor(options = {}) {
        this.options = {
            maxWidth: options.maxWidth || 1200,
            maxHeight: options.maxHeight || 800,
            quality: options.quality || 0.8,
            placeholder: options.placeholder || 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"%3E%3Crect width="300" height="200" fill="%23cccccc"%3E%3C/rect%3E%3C/svg%3E'
        };
        
        this.init();
    }
    
    init() {
        // Find all images to optimize
        const images = document.querySelectorAll('img[data-src]');
        
        // Set up intersection observer for lazy loading
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.loadImage(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            rootMargin: '50px 0px',
            threshold: 0.01
        });
        
        // Process each image
        images.forEach(img => {
            // Set placeholder
            img.src = this.options.placeholder;
            // Start observing
            observer.observe(img);
        });
    }
    
    loadImage(img) {
        const src = img.getAttribute('data-src');
        
        // Create a new image to load in the background
        const tempImg = new Image();
        
        tempImg.onload = () => {
            // Check if image needs resizing
            if (tempImg.width > this.options.maxWidth || tempImg.height > this.options.maxHeight) {
                const optimized = this.resizeImage(tempImg);
                img.src = optimized;
            } else {
                img.src = src;
            }
            
            // Add loading animation
            img.classList.add('fade-in');
            
            // Remove the data-src attribute to mark as processed
            img.removeAttribute('data-src');
        };
        
        tempImg.src = src;
    }
    
    resizeImage(img) {
        // Create canvas for resizing
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        // Calculate new dimensions
        let width = img.width;
        let height = img.height;
        
        if (width > this.options.maxWidth) {
            height = Math.round(height * (this.options.maxWidth / width));
            width = this.options.maxWidth;
        }
        
        if (height > this.options.maxHeight) {
            width = Math.round(width * (this.options.maxHeight / height));
            height = this.options.maxHeight;
        }
        
        // Resize on canvas
        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);
        
        // Return optimized image as data URL
        return canvas.toDataURL('image/jpeg', this.options.quality);
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.imageOptimizer = new ImageOptimizer({
        maxWidth: 1200,
        maxHeight: 800,
        quality: 0.8
    });
});

// Optimized Image Loading
document.addEventListener('DOMContentLoaded', function() {
    // Function to check if an element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= -300 &&
            rect.left >= -300 &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) + 300 &&
            rect.left <= (window.innerWidth || document.documentElement.clientWidth) + 300
        );
    }

    // Function to load images
    function loadImages() {
        const images = document.querySelectorAll('img[data-src]');
        
        images.forEach(img => {
            if (isInViewport(img)) {
                const src = img.getAttribute('data-src');
                
                // Create a temporary image to handle loading
                const tempImg = new Image();
                
                tempImg.onload = function() {
                    // Set dimensions based on original image
                    const aspectRatio = tempImg.width / tempImg.height;
                    
                    // Apply pixel-perfect rendering
                    img.style.imageRendering = 'pixelated';
                    
                    // Set the src attribute and remove data-src
                    img.src = src;
                    img.removeAttribute('data-src');
                    
                    // Add fade-in effect
                    setTimeout(() => {
                        img.classList.add('fade-in');
                        
                        // Remove the placeholder effect
                        const placeholder = img.closest('.img-placeholder');
                        if (placeholder) {
                            placeholder.classList.remove('img-placeholder');
                        }
                    }, 100);
                };
                
                tempImg.onerror = function() {
                    // Handle error - replace with a pixel art placeholder
                    img.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANUSURBVHic7d1PiE1RHMfx7x1jMhFZWIiNf7MgC1JKFrKwESVlJ0LSWFnQWIiFspCUlCzGRimRhY2GBUoWYoHG/0KZ4W18LO5Ns5hf59x7zzn3Pt/P8j1+7/Tu+dW575x77r0GIiIiIiIiIiIiIiIiKaAN6DOzuWZ2yszeO+eSvF40MzsRQnhnZl2lZlxmdtQ599E5N+qce1z0eBNjhJJ6YWbLzKyv1Ky0GDez9Wb20Tk37Jy7X+R4E44R5RaM1i6VYoz+Nb/UjpJdNbPFZnYjqR0qxxipjLFNZnaynAK+amQ8UYyx/z+FWdYMM7vrDl93kz0W+qCYvbWQfqLHyB9sBX8tY6QvUYxf4zlqZvvNbGVUxJZLHiP+sCfKMaSL8yJ5Y/znpKxu50UbY9xo3HkR1xhx4/s68aK98eRF2hjxg0+KF/rGE8eYbNAbTx7pYUw+yOTxorzxpDFmGqzmeMFvPGmM2QatwXjRbTwxxtSDmzhekBtPKkaeQWsqXlQbTwwj74DNGi+qjacVI+/ATRcvio2nFaNo8eniNX7jaUXX5LWwfzmLR0kY6L/DmQ80Xl4Ef++JF4ySMYYm+XK8pJTsATMw0PH/kYtKHhAzK/QXsZLHyKNolATjpIqRzUDZR0l0cVLGyG6g7KMkqjipY2Q9UCrKXThOkWNkP1AqSx8niT1GmoFSWXqcJN9GXXTbdJyxotvdZ2Z9OdxXLdqxJsqcxKgyUF4DJXWMKgOlAiXzaqNVDpQUlG5LoGxejZf8RIEyXwJlNeUmQIlhC0qXPrmmjFHlQElB6YBMmsRoAlBSUNBdnU0Zo6pASUFBGZoyRpWBkoJmZ1DuBUNZQXl3DGXtSXiZQqD5H5QHjFeUNQUpFFLoRk5QL7eMIFBC0A3RglLILcbk8ZY1KCho1xQUbCwZQZAeIKjTFFRkPAwSAnQWfQxfLALRKQfUbQ86dhEkkI4wOGnioJAvgFJIJ0Ww2JtRRgHfKA26xSPYzQooIwTeCB50c1DQa0sZTRxoVxT0+vpeGFBGCRgKejOKYuDd8NGbUqkDICC8PTL6jE7fGRQSGBrS5zcGhTYYHt7oPxoUGhwQEM7sOewFhTc8MjC00dF1iM7ARRPJl99mdsLMpnyDpYiIiIiIiIiIiIiIiPzHr4dHb7XeB7XHAAAAAElFTkSuQmCC';
                    img.removeAttribute('data-src');
                    
                    // Add fade-in effect
                    setTimeout(() => {
                        img.classList.add('fade-in');
                        
                        // Remove the placeholder effect
                        const placeholder = img.closest('.img-placeholder');
                        if (placeholder) {
                            placeholder.classList.remove('img-placeholder');
                        }
                    }, 100);
                };
                
                // Start loading the image
                tempImg.src = src;
            }
        });
    }

    // Check for images when scrolling
    window.addEventListener('scroll', loadImages);
    
    // Check for images when resizing
    window.addEventListener('resize', loadImages);
    
    // Initial check for images
    loadImages();
    
    // Recheck every second for newly added images
    setInterval(loadImages, 1000);
}); 