/**
 * Simple Image Optimizer for ImNaHn's Portfolio
 * 
 * This script helps optimize images before displaying them on the page
 * It resizes large images and creates lower quality versions for faster loading
 */

// Image Optimization with Lazy Loading and WebP Support
class ImageOptimizer {
    constructor(options = {}) {
        this.options = {
            placeholder: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkxvYWRpbmcuLi48L3RleHQ+PC9zdmc+',
            maxWidth: 1200,
            maxHeight: 800,
            quality: 0.8,
            ...options
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
        if (!src) return;
        
        // Create temporary image for loading
        const tempImg = new Image();
        
        tempImg.onload = () => {
            // Apply pixel-perfect rendering
            img.style.imageRendering = 'pixelated';
            
            // Set the src and remove data-src
            img.src = src;
            img.removeAttribute('data-src');
            
            // Add fade-in effect
            requestAnimationFrame(() => {
                img.classList.add('fade-in');
                
                // Remove placeholder effect
                const placeholder = img.closest('.img-placeholder');
                if (placeholder) {
                    placeholder.classList.remove('img-placeholder');
                }
            });
        };
        
        tempImg.onerror = () => {
            console.warn('Failed to load image:', src);
            img.alt = 'Image failed to load';
        };
        
        // Start loading
        tempImg.src = src;
    }
    
    // Check WebP support (static method)
    static supportsWebP() {
        return new Promise((resolve) => {
            const webP = new Image();
            webP.onload = webP.onerror = () => {
                resolve(webP.height === 2);
            };
            webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
        });
    }
    
    // Compress image (if needed in future)
    compressImage(file, quality = this.options.quality) {
        return new Promise((resolve) => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            const img = new Image();
            
            img.onload = () => {
                canvas.width = Math.min(img.width, this.options.maxWidth);
                canvas.height = Math.min(img.height, this.options.maxHeight);
                
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                canvas.toBlob(resolve, 'image/jpeg', quality);
            };
            
            img.src = URL.createObjectURL(file);
        });
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