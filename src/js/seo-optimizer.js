// SEO Optimizer - Dynamic Meta Tags and Structured Data
class SEOOptimizer {
    constructor() {
        this.init();
    }

    init() {
        this.registerServiceWorker();
        this.updateMetaTags();
        this.addStructuredData();
        this.optimizeImages();
        this.trackPerformance();
    }

    // Register Service Worker for PWA
    registerServiceWorker() {
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js')
                    .then((registration) => {
                        console.log('SW registered: ', registration);
                        
                        // Check for updates
                        registration.addEventListener('updatefound', () => {
                            const newWorker = registration.installing;
                            newWorker.addEventListener('statechange', () => {
                                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                                    // New content is available, refresh page
                                    console.log('New content available, refreshing...');
                                    window.location.reload();
                                }
                            });
                        });
                    })
                    .catch((registrationError) => {
                        console.error('SW registration failed: ', registrationError);
                    });
            });
        }
    }

    // Update meta tags based on page content
    updateMetaTags() {
        // Update meta description based on page content
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription && document.body.classList.contains('project-details')) {
            const projectTitle = document.querySelector('#project-title')?.textContent;
            if (projectTitle) {
                metaDescription.content = `Chi tiết dự án: ${projectTitle} - Chu Thanh Nhan Portfolio`;
            }
        }

        // Update Open Graph tags
        this.updateOpenGraphTags();
    }

    // Update Open Graph tags dynamically
    updateOpenGraphTags() {
        if (window.location.pathname.includes('project-detail.html')) {
            const urlParams = new URLSearchParams(window.location.search);
            const projectId = urlParams.get('id');
            
            if (projectId) {
                // Update OG URL
                const ogUrl = document.querySelector('meta[property="og:url"]');
                if (ogUrl) {
                    ogUrl.content = `https://imnahn.netlify.app/project-detail.html?id=${projectId}`;
                }

                // Update Twitter URL
                const twitterUrl = document.querySelector('meta[property="twitter:url"]');
                if (twitterUrl) {
                    twitterUrl.content = `https://imnahn.netlify.app/project-detail.html?id=${projectId}`;
                }
            }
        }
    }

    // Add structured data for projects
    addStructuredData() {
        if (window.location.pathname.includes('project-detail.html')) {
            const urlParams = new URLSearchParams(window.location.search);
            const projectId = urlParams.get('id');
            
            if (projectId && window.projects) {
                const project = window.projects.find(p => p.id == projectId);
                if (project) {
                    this.updateProjectStructuredData(project);
                }
            }
        }
    }

    // Update project structured data
    updateProjectStructuredData(project) {
        const structuredDataScript = document.getElementById('project-structured-data');
        if (structuredDataScript) {
            const structuredData = {
                "@context": "https://schema.org",
                "@type": "CreativeWork",
                "name": project.title,
                "description": project.description.replace(/<[^>]*>/g, '').substring(0, 200),
                "category": project.category,
                "author": {
                    "@type": "Person",
                    "name": "Chu Thanh Nhan",
                    "url": "https://imnahn.netlify.app/"
                },
                "url": `https://imnahn.netlify.app/project-detail.html?id=${project.id}`,
                "image": project.images[0] ? `https://imnahn.netlify.app/${project.images[0]}` : null,
                "dateCreated": project.completionDate,
                "programmingLanguage": project.technologies,
                "keywords": project.technologies.join(', ')
            };

            structuredDataScript.textContent = JSON.stringify(structuredData, null, 2);
        }
    }

    // Optimize images for performance
    optimizeImages() {
        // Implement intersection observer for lazy loading
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const src = img.getAttribute('data-src');
                    
                    if (src) {
                        img.src = src;
                        img.classList.add('fade-in');
                        img.removeAttribute('data-src');
                        observer.unobserve(img);
                    }
                }
            });
        }, {
            rootMargin: '50px 0px',
            threshold: 0.01
        });

        // Observe all images with data-src
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // Track performance metrics
    trackPerformance() {
        // Core Web Vitals
        this.measureCoreWebVitals();
        
        // Custom performance metrics using modern Performance API
        window.addEventListener('load', () => {
            // Use Performance API instead of deprecated timing
            if ('performance' in window && 'getEntriesByType' in performance) {
                const navigationEntries = performance.getEntriesByType('navigation');
                if (navigationEntries.length > 0) {
                    const loadTime = navigationEntries[0].loadEventEnd - navigationEntries[0].loadEventStart;
                    console.log('Page load time:', Math.round(loadTime), 'ms');
                    
                    // Send to analytics if available
                    if (typeof gtag !== 'undefined' && loadTime > 0) {
                        gtag('event', 'timing_complete', {
                            name: 'load',
                            value: Math.round(loadTime)
                        });
                    }
                }
            } else {
                // Fallback for older browsers
                setTimeout(() => {
                    const loadTime = Date.now() - performance.timeOrigin;
                    console.log('Page load time (fallback):', Math.round(loadTime), 'ms');
                }, 100);
            }
        });
    }

    // Measure Core Web Vitals
    measureCoreWebVitals() {
        // Largest Contentful Paint (LCP)
        if ('PerformanceObserver' in window) {
            const lcpObserver = new PerformanceObserver((entryList) => {
                const entries = entryList.getEntries();
                const lastEntry = entries[entries.length - 1];
                console.log('LCP:', lastEntry.startTime);
                
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'web_vital', {
                        name: 'LCP',
                        value: Math.round(lastEntry.startTime),
                        event_category: 'Web Vitals'
                    });
                }
            });
            
            lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

            // First Input Delay (FID)
            const fidObserver = new PerformanceObserver((entryList) => {
                const entries = entryList.getEntries();
                entries.forEach((entry) => {
                    console.log('FID:', entry.processingStart - entry.startTime);
                    
                    if (typeof gtag !== 'undefined') {
                        gtag('event', 'web_vital', {
                            name: 'FID',
                            value: Math.round(entry.processingStart - entry.startTime),
                            event_category: 'Web Vitals'
                        });
                    }
                });
            });
            
            fidObserver.observe({ entryTypes: ['first-input'] });
        }
    }

    // Generate dynamic sitemap (for SPA)
    generateDynamicSitemap() {
        const urls = [
            { loc: '/', priority: 1.0, changefreq: 'monthly' },
            { loc: '/project-detail.html', priority: 0.8, changefreq: 'monthly' }
        ];

        // Add project URLs
        if (window.projects) {
            window.projects.forEach(project => {
                urls.push({
                    loc: `/project-detail.html?id=${project.id}`,
                    priority: 0.7,
                    changefreq: 'monthly'
                });
            });
        }

        return urls;
    }

    // Add breadcrumb structured data
    addBreadcrumbStructuredData() {
        const breadcrumbData = {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://imnahn.netlify.app/"
                }
            ]
        };

        if (window.location.pathname.includes('project-detail.html')) {
            breadcrumbData.itemListElement.push({
                "@type": "ListItem",
                "position": 2,
                "name": "Project Details",
                "item": window.location.href
            });
        }

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(breadcrumbData);
        document.head.appendChild(script);
    }
}

// Initialize SEO Optimizer when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new SEOOptimizer();
}); 