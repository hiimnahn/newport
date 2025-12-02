# Pixel Art Portfolio Website - SEO Optimized

A comprehensive, SEO-optimized portfolio website showcasing professional skills, projects, and experience. Built with modern web standards, featuring pixel art design, PWA capabilities, and enterprise-level SEO optimization.

![Portfolio Preview](src/img/IMG_8556.jpg)

## 🆕 Latest Updates (v1.2.0)

### 🚀 Enhanced Skills System
- **Complete Popup Redesign**: Fully functional popups with detailed skill information
- **Rich Skill Details**: Each skill now shows level, experience, projects, AND detailed technical descriptions
- **Optimized CSS**: Removed duplicate code, unified styling for better performance
- **Enhanced Accessibility**: Better ARIA support, keyboard navigation, and responsive design
- **Performance Optimized**: Cleaner code structure and faster loading

### ⚡ System Optimization & SEO
- **Code Cleanup**: Removed duplicate CSS, optimized JavaScript performance
- **SEO Improvements**: Enhanced meta tags, updated structured data, optimized titles
- **Service Worker v1.2.0**: Better caching strategy, improved offline functionality
- **Security Enhanced**: Updated CSP headers with worker-src support
- **Cache Optimization**: Smarter resource caching and external request filtering

## 🚀 SEO & Performance Features

### ✅ Complete SEO Optimization
- **Meta Tags**: Comprehensive meta tags including title, description, keywords, and author
- **Open Graph**: Full Facebook/LinkedIn sharing optimization
- **Twitter Cards**: Rich Twitter card support with large images
- **Structured Data**: JSON-LD schema markup for Person, WebSite, and CreativeWork
- **Canonical URLs**: Proper canonical URL implementation
- **Microdata**: Schema.org microdata for enhanced search visibility
- **Sitemap**: XML sitemap with all pages and priority settings
- **Robots.txt**: Search engine directive optimization

### ⚡ Performance Enhancements
- **Critical CSS**: Above-the-fold CSS inlined for faster rendering
- **Lazy Loading**: Intersection Observer API for optimized image loading
- **Service Worker**: PWA caching with offline support
- **Resource Hints**: DNS prefetch, preconnect, and preload optimization
- **Core Web Vitals**: LCP, FID, and CLS tracking and optimization
- **Image Optimization**: WebP support with fallbacks and compression

### 🔒 Security & Headers
- **Security Headers**: CSP, X-Frame-Options, X-XSS-Protection
- **Font-src CSP Fix**: Added `https://cdnjs.cloudflare.com` and `data:` to font-src directive
- **HTTPS Enforcement**: Secure connections only
- **Permissions Policy**: Camera, microphone, and location restrictions
- **Content Security Policy**: Strict CSP implementation with Font Awesome support

### ♿ Accessibility (WCAG 2.1 AA)
- **ARIA Labels**: Comprehensive ARIA labeling for screen readers
- **Semantic HTML**: Proper HTML5 semantic structure
- **Keyboard Navigation**: Full keyboard accessibility
- **Alt Text**: Descriptive alt text for all images
- **Color Contrast**: WCAG AA color contrast compliance
- **Focus Management**: Visible focus indicators

### 📱 Progressive Web App (PWA)
- **App Manifest**: Complete PWA manifest configuration
- **Service Worker**: Offline functionality and caching
- **Install Prompt**: Native app installation capability
- **Push Notifications**: Optional notification support
- **App Shortcuts**: Quick access to key sections

## Technologies Used

### Frontend
- **HTML5** - Semantic markup with microdata
- **CSS3** - Modern styling with performance optimization
- **JavaScript ES6+** - Modern JavaScript with performance tracking
- **Service Worker** - PWA functionality and caching

### SEO & Performance
- **JSON-LD** - Structured data implementation
- **Intersection Observer** - Efficient lazy loading
- **Performance API** - Core Web Vitals tracking
- **Critical Resource Hints** - DNS prefetch, preconnect, preload

### Design & Animation
- **Pixel Art CSS** - Custom pixel art styling
- **CSS Animations** - Smooth, hardware-accelerated animations
- **Responsive Design** - Mobile-first responsive layout
- **Dark Theme Support** - System preference detection

## Project Structure

```
portfolio/
├── index.html              # Main landing page (SEO optimized)
├── project-detail.html     # Project details (dynamic SEO)
├── manifest.json           # PWA manifest
├── sw.js                   # Service worker (v1.2.0)
├── sitemap.xml            # SEO sitemap
├── robots.txt             # Search engine directives
├── netlify.toml           # Deployment configuration
├── _headers               # Security headers (CSP optimized)
├── google2db56bcf5658715c.html # Google Search Console verification
├── src/
│   ├── css/
│   │   ├── styles.css          # Main stylesheet
│   │   ├── pixel-art.css       # Pixel art styling
│   │   ├── pixel-effects.css   # Animation effects
│   │   ├── project-styles.css  # Project page styles
│   │   └── font-awesome-local.css # Local SVG-based icons
│   ├── js/
│   │   ├── script.js           # Main functionality
│   │   ├── seo-optimizer.js    # SEO & performance optimization
│   │   ├── project-details.js  # Project data management
│   │   ├── image-optimizer.js  # Image optimization (optimized)
│   │   ├── pixel-effects.js    # Pixel animations (optimized)
│   │   ├── pixel-stars.js      # Background effects
│   │   ├── image-modal.js      # Image gallery (optimized)
│   │   └── error-handler.js    # Error tracking
│   └── img/                    # Optimized image assets
└── README.md              # This file
```

## 🚀 Deployment Instructions

### Fixed Issues Before Deploy
1. **CSP Font Issue**: Completely eliminated by implementing local SVG icons
2. **Code Optimization**: Removed duplicate code and improved performance
3. **Debug Files**: Removed test files (test-seo.html, debug-fonts.html)
4. **External Dependencies**: Removed Font Awesome CDN dependency

### Netlify Deployment
```bash
# 1. Build and deploy to Netlify
git add .
git commit -m "Enhanced skills system with detailed popups, optimized CSS/JS, improved SEO"
git push origin main

# 2. Netlify will automatically deploy with:
# - Optimized CSP headers (no external font dependencies)
# - Local SVG-based icon system
# - Optimized JavaScript files
# - Updated service worker (v1.2.0)
```

### Verification Steps
1. **Check Icon Display**: Verify all SVG icons display properly (no external requests)
2. **Performance Test**: Run Lighthouse audit (should score 98+ on all metrics)
3. **CSP Validation**: Check browser console for CSP violations (should be zero)
4. **PWA Test**: Test offline functionality and app installation
5. **Network Tab**: Verify no Font Awesome CDN requests in DevTools

## SEO Features Breakdown

### 1. Meta Tags Optimization
```html
<!-- Primary Meta Tags -->
<title>Chu Thanh Nhan - Game Developer | Web Developer | Designer | Portfolio</title>
<meta name="description" content="Chuyên gia phát triển game và web từ Việt Nam...">
<meta name="keywords" content="Game Developer, Web Developer, Unity, C#, Python...">

<!-- Open Graph / Facebook -->
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:image" content="...">

<!-- Twitter Cards -->
<meta property="twitter:card" content="summary_large_image">
```

### 2. Fixed Content Security Policy
```
Content-Security-Policy: default-src 'self'; 
script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://cdnjs.cloudflare.com; 
style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com; 
font-src 'self' https://fonts.gstatic.com https://cdnjs.cloudflare.com data:; 
img-src 'self' data: https: blob:; 
connect-src 'self' https:; 
media-src 'self'; 
object-src 'none'; 
frame-src 'none';
```

### 3. Performance Monitoring
```javascript
// Core Web Vitals tracking
measureCoreWebVitals() {
    // LCP, FID, CLS measurement
    // Google Analytics integration
    // Performance API utilization
}
```

### 4. Image Optimization
- Lazy loading with Intersection Observer
- WebP format with fallbacks
- Proper sizing and compression
- Alt text optimization

## Getting Started

### Prerequisites
- Modern web browser with ES6+ support
- HTTPS environment for PWA features

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/imnotnahn/newport.git
cd newport
```

2. **Serve with HTTPS (required for PWA):**
```bash
# Using Python with HTTPS
python -m http.server 8000 --bind 127.0.0.1

# Using Node.js with HTTPS
npx http-server -S -C cert.pem -K key.pem

# Using Netlify CLI (recommended)
npm install -g netlify-cli
netlify dev
```

3. **Test PWA features:**
- Open Chrome DevTools
- Go to Application tab
- Check Manifest and Service Worker tabs
- Test offline functionality

## 🔧 Troubleshooting

### Font Loading Issues
If fonts don't load properly:
1. Check CSP headers are applied correctly
2. Verify CDN accessibility
3. Check browser console for CSP violations

### Performance Issues
1. **Run Lighthouse audit** to identify bottlenecks
2. **Check Core Web Vitals** in Google Search Console
3. **Verify service worker** is caching resources properly

### CSP Violations
If you see CSP violations:
1. Check `_headers` and `netlify.toml` configuration
2. Ensure all external resources are allowed in CSP
3. Test locally with the same CSP settings

## SEO Testing & Validation

### Tools for Testing
1. **Google PageSpeed Insights** - Performance and Core Web Vitals
2. **Google Search Console** - Search appearance and indexing
3. **Facebook Sharing Debugger** - Open Graph validation
4. **Twitter Card Validator** - Twitter card testing
5. **Lighthouse** - Comprehensive audit (SEO, Performance, Accessibility, PWA)
6. **WAVE** - Accessibility testing

### Validation Commands
```bash
# Test structured data
curl -X POST https://search.google.com/structured-data/testing-tool/u/0/

# Validate HTML
npx html-validate index.html

# Check accessibility
npx @axe-core/cli https://your-domain.com

# Performance audit
npx lighthouse https://your-domain.com --view
```

## Performance Metrics

### Target Scores
- **Lighthouse Performance**: 95+
- **Lighthouse SEO**: 100
- **Lighthouse Accessibility**: 95+
- **Lighthouse PWA**: 100
- **Core Web Vitals**: All "Good"

### Optimization Techniques
1. **Critical CSS inlining** for above-the-fold content
2. **Resource hints** (dns-prefetch, preconnect, preload)
3. **Image lazy loading** with Intersection Observer
4. **Service Worker caching** for repeat visits
5. **Minification** of CSS and JavaScript
6. **Compression** (Gzip/Brotli) via hosting platform
7. **Event delegation** for better JavaScript performance

## Browser Support

### Minimum Requirements
- **Chrome**: 60+
- **Firefox**: 55+
- **Safari**: 12+
- **Edge**: 79+

### Progressive Enhancement
- Service Worker: Chrome 45+, Firefox 44+, Safari 11.1+
- Intersection Observer: Chrome 51+, Firefox 55+, Safari 12.1+
- CSS Grid: Chrome 57+, Firefox 52+, Safari 10.1+

## Contributing

### Code Quality
- Follow semantic HTML practices
- Maintain WCAG 2.1 AA compliance
- Test all new features in Lighthouse
- Validate structured data changes
- Test PWA functionality offline

### SEO Guidelines
- Always include proper meta tags for new pages
- Add structured data for new content types
- Update sitemap.xml for new URLs
- Test social media sharing after changes
- Monitor Core Web Vitals impact

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact & Support

- **Email**: thanhnhan.contact.work@gmail.com
- **Portfolio**: [https://imnahn.netlify.app/](https://imnahn.netlify.app/)
- **Blog**: [https://imnahn.io.vn/](https://imnahn.io.vn/)
- **GitHub**: [imnotnahn](https://github.com/imnotnahn)
- **LinkedIn**: [imnotnhan](https://www.linkedin.com/in/imnotnhan/)

---

**Built with ❤️ using modern web standards and SEO best practices** 