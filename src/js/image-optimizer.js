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