# Pixel Art Portfolio Website - SEO Optimized

A comprehensive, SEO-optimized portfolio website showcasing professional skills, projects, and experience. Built with modern web standards, featuring pixel art design, PWA capabilities, and enterprise-level SEO optimization.

![Portfolio Preview](src/img/IMG_8556.jpg)

## 🚀 New SEO & Performance Features

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
- **HTTPS Enforcement**: Secure connections only
- **Permissions Policy**: Camera, microphone, and location restrictions
- **Content Security Policy**: Strict CSP implementation

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
├── sw.js                   # Service worker
├── sitemap.xml            # SEO sitemap
├── robots.txt             # Search engine directives
├── netlify.toml           # Deployment configuration
├── _headers               # Security headers
├── src/
│   ├── css/
│   │   ├── styles.css          # Main stylesheet
│   │   ├── pixel-art.css       # Pixel art styling
│   │   ├── pixel-effects.css   # Animation effects
│   │   └── project-styles.css  # Project page styles
│   ├── js/
│   │   ├── script.js           # Main functionality
│   │   ├── seo-optimizer.js    # SEO & performance optimization
│   │   ├── project-details.js  # Project data management
│   │   ├── image-optimizer.js  # Image optimization
│   │   ├── pixel-effects.js    # Pixel animations
│   │   ├── pixel-stars.js      # Background effects
│   │   └── image-modal.js      # Image gallery
│   └── img/                    # Optimized image assets
└── README.md              # This file
```

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

### 2. Structured Data (JSON-LD)
- **Person Schema**: Complete professional profile
- **WebSite Schema**: Site search and navigation
- **CreativeWork Schema**: Individual projects
- **BreadcrumbList**: Navigation breadcrumbs

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

## Deployment

### Netlify (Recommended)
```bash
# Deploy to Netlify
npm install -g netlify-cli
netlify init
netlify deploy --prod
```

Features enabled:
- Automatic HTTPS
- Security headers via `netlify.toml`
- Asset optimization
- Form handling
- Redirect management

### Other Platforms
- **Vercel**: Copy `netlify.toml` settings to `vercel.json`
- **GitHub Pages**: Add `_headers` file for security headers
- **Firebase Hosting**: Configure `firebase.json` with headers

## SEO Maintenance

### Regular Tasks
1. **Update sitemap.xml** when adding new projects
2. **Monitor Core Web Vitals** via Google Search Console
3. **Test structured data** after content changes
4. **Validate social media cards** before sharing
5. **Check broken links** monthly
6. **Update meta descriptions** for new content

### Analytics Setup
```javascript
// Google Analytics 4 (replace GA_MEASUREMENT_ID)
gtag('config', 'GA_MEASUREMENT_ID', {
    page_title: document.title,
    page_location: window.location.href
});
```

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