# Pixel Art Portfolio Website

A modern, responsive portfolio website showcasing my skills, projects, and professional experience. The website features a unique pixel art design with an elegant black and white color scheme, interactive pixel animations, and retro gaming-inspired elements.

![Portfolio Preview](src)

## Features

- **Pixel Art Design:** Distinctive 8-bit style with black and white color scheme
- **Responsive Layout:** Fully responsive design that works seamlessly across all devices
- **Retro Animations:** CRT screen effects, scanlines, pixel animations, and glitch effects
- **Pixel-Perfect Typography:** Using retro pixel fonts (Press Start 2P and VT323)
- **Interactive Elements:** Cursor trails, hover effects, and animated progress bars
- **Dynamic Content Loading:** Projects load dynamically with dedicated detail pages
- **Optimized Images:** Built-in image optimization with pixelated filters

## Technologies Used

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with pixelated effects and animations
- **JavaScript** - ES6+ for interactive elements and pixel animations
- **Font Awesome** - Icon library

### Pixel Art Features
- Custom pixel cursors
- Scanline effects
- CRT screen simulation
- Pixel trail animations
- Retro loading screens
- Animated pixel dividers

## Project Structure

```
portfolio/
├── index.html              # Main landing page
├── project-detail.html     # Project details template
├── src/
│   ├── css/
│   │   ├── styles.css          # Base stylesheet
│   │   ├── project-styles.css  # Project-specific styles
│   │   ├── pixel-art.css       # Pixel art styling
│   │   └── pixel-effects.css   # Pixel animation effects
│   ├── js/
│   │   ├── script.js           # Main JavaScript functionality
│   │   ├── project-details.js  # Project detail page logic
│   │   ├── image-optimizer.js  # Image optimization logic
│   │   └── pixel-effects.js    # Pixel animation effects
│   └── img/                # Image assets
│       ├── project1/       # Project 1 images
│       ├── project2/       # Project 2 images
│       ├── project3/       # Project 3 images
│       ├── project4/       # Project 4 images
│       └── fav/            # Favicon files
```

## Key Components

1. **Home Section:** Engaging introduction with retro typing animation and scanline effects
2. **About Section:** Professional background information with pixelated image and border effects
3. **Skills Section:** Visual representation of technical skills with animated pixelated progress bars
4. **Projects Section:** Featured projects with pixel art styling and hover effects
5. **Education/Experience:** Pixelated timeline with animated elements
6. **Contact Section:** Contact information and social media links with pixel art styling

## Pixel Art Styling

The portfolio uses several techniques to achieve the pixel art aesthetic:
- Custom CSS properties for consistent pixel sizes and borders
- Image rendering properties for pixelation effects
- Blocky typography using specialized pixel fonts
- Scanline overlays for retro monitor effects
- Pixel-perfect cursor designs
- Dithering patterns for gradient effects
- Custom animated pixel dividers

## Getting Started

### Prerequisites
- A modern web browser
- Basic understanding of HTML, CSS, and JavaScript

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/yourusername/pixel-portfolio.git
cd pixel-portfolio
```

2. Open the project in your code editor

3. Launch with a local server:
   - Using Python:
     ```bash
     # Python 3
     python -m http.server
     
     # Python 2
     python -m SimpleHTTPServer
     ```
   - Using Node.js (with http-server):
     ```bash
     npm install -g http-server
     http-server
     ```

4. Open your browser and navigate to `http://localhost:8000` (or the port specified by your server)

## Customization

### Modifying Pixel Art Style
- Adjust pixel size and border properties in `src/css/pixel-art.css`
- Change the color scheme while maintaining the black and white theme
- Add or modify pixel animations in `src/js/pixel-effects.js`

### Styling Changes
- Primary colors and variables are defined in the CSS files
- Pixel properties can be adjusted for different levels of pixelation

### Adding New Projects
1. Add project details to the `projects` array in `src/js/project-details.js`
2. Create a new folder in `src/img/` for project images
3. Add a new project card in the Projects section of `index.html`

## Deployment

This portfolio can be deployed to any static site hosting platform:
- GitHub Pages
- Netlify
- Vercel
- Any traditional web hosting provider

Simply upload all files to your hosting provider's specified directory or connect your repository for continuous deployment.

## Contact

- Email: thanhnhan.contact.work@gmail.com
- GitHub: [imnotnahn](https://github.com/imnotnahn) 