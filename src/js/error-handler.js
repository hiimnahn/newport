// Enhanced Error Handling for Portfolio Website
class ErrorHandler {
    constructor() {
        this.setupGlobalErrorHandling();
        this.setupConsoleErrorFiltering();
    }

    setupGlobalErrorHandling() {
        // Handle JavaScript errors
        window.addEventListener('error', (event) => {
            const error = {
                message: event.message,
                filename: event.filename,
                lineno: event.lineno,
                colno: event.colno,
                error: event.error
            };

            this.logError('JavaScript Error', error);
            
            // Send to analytics if available
            if (typeof gtag !== 'undefined') {
                gtag('event', 'exception', {
                    description: `${error.message} at ${error.filename}:${error.lineno}`,
                    fatal: false
                });
            }
        });

        // Handle unhandled promise rejections
        window.addEventListener('unhandledrejection', (event) => {
            const error = {
                reason: event.reason,
                stack: event.reason?.stack
            };

            this.logError('Unhandled Promise Rejection', error);
            
            // Send to analytics if available
            if (typeof gtag !== 'undefined') {
                gtag('event', 'exception', {
                    description: `Promise rejection: ${error.reason}`,
                    fatal: false
                });
            }

            // Prevent the default browser behavior
            event.preventDefault();
        });

        // Handle resource loading errors
        window.addEventListener('error', (event) => {
            if (event.target !== window) {
                const resource = {
                    type: event.target.tagName,
                    src: event.target.src || event.target.href,
                    message: 'Resource failed to load'
                };

                this.logError('Resource Loading Error', resource);
            }
        }, true);
    }

    setupConsoleErrorFiltering() {
        // Filter out common development warnings
        const originalConsoleWarn = console.warn;
        console.warn = (...args) => {
            const message = args.join(' ');
            
            // Filter out specific warnings
            if (message.includes('X-Frame-Options may only be set via an HTTP header') ||
                message.includes('Live reload enabled') ||
                message.includes('DevTools')) {
                return; // Don't log these warnings
            }
            
            originalConsoleWarn.apply(console, args);
        };

        // Filter out console errors for development
        const originalConsoleError = console.error;
        console.error = (...args) => {
            const message = args.join(' ');
            
            // Filter out development-specific errors
            if (message.includes(':5500/null') ||
                message.includes('Failed to load resource') && message.includes('null')) {
                return; // Don't log these errors in development
            }
            
            originalConsoleError.apply(console, args);
        };
    }

    logError(type, error) {
        // Only log in development or if detailed logging is enabled
        if (window.location.hostname === 'localhost' || 
            window.location.hostname === '127.0.0.1' ||
            localStorage.getItem('debug') === 'true') {
            
            console.group(`🚨 ${type}`);
            console.error(error);
            console.groupEnd();
        }
    }

    // Method to handle specific errors
    handleImageLoadError(img, fallbackSrc = null) {
        img.onerror = () => {
            if (fallbackSrc) {
                img.src = fallbackSrc;
            } else {
                // Create a placeholder
                img.style.background = '#f0f0f0';
                img.style.display = 'flex';
                img.style.alignItems = 'center';
                img.style.justifyContent = 'center';
                img.innerHTML = '<span style="color: #666; font-size: 12px;">Image not found</span>';
            }
        };
    }

    // Method to handle fetch errors
    async safeFetch(url, options = {}) {
        try {
            const response = await fetch(url, {
                ...options,
                timeout: 10000 // 10 second timeout
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            return response;
        } catch (error) {
            this.logError('Fetch Error', { url, error: error.message });
            throw error;
        }
    }

    // Method to handle service worker errors
    handleServiceWorkerError(error) {
        this.logError('Service Worker Error', error);
        
        // Optionally disable service worker if it's causing issues
        if (error.message.includes('quota') || error.message.includes('storage')) {
            navigator.serviceWorker.getRegistrations().then((registrations) => {
                registrations.forEach((registration) => {
                    registration.unregister();
                });
            });
        }
    }
}

// Initialize error handler
document.addEventListener('DOMContentLoaded', () => {
    window.errorHandler = new ErrorHandler();
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ErrorHandler;
} 