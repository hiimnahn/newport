# Personal Portfolio Website

A modern, responsive portfolio website showcasing my skills, projects, and professional experience. The website features elegant animations, interactive elements, and a clean, minimalist design.

![Portfolio Preview](src)

## Features

- **Responsive Design:** Fully responsive layout that works seamlessly across all devices and screen sizes
- **Interactive Navigation:** Smooth-scrolling navigation with active state indicators
- **Animated Elements:** Elegant animations for skills bars, project cards, and timeline sections
- **Dynamic Content Loading:** Projects load dynamically with dedicated detail pages
- **Image Optimization:** Built-in image optimization for faster loading times
- **Mobile-Friendly Navigation:** Hamburger menu for mobile devices with smooth transitions

## Technologies Used

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with flexbox and grid layouts
- **JavaScript** - ES6+ for interactive elements and animations
- **Font Awesome** - Icon library

### Performance Optimization
- Custom image optimizer for lazy loading and resizing
- Efficient CSS animations with hardware acceleration
- Intersection Observer API for lazy loading elements

## Project Structure

```
portfolio/
├── index.html              # Main landing page
├── project-detail.html     # Project details template
├── src/
│   ├── css/
│   │   ├── styles.css      # Main stylesheet
│   │   └── project-styles.css # Project-specific styles
│   ├── js/
│   │   ├── script.js       # Main JavaScript functionality
│   │   ├── project-details.js # Project detail page logic
│   │   └── image-optimizer.js # Image optimization logic
│   └── img/                # Image assets
│       ├── project1/       # Project 1 images
│       ├── project2/       # Project 2 images
│       ├── project3/       # Project 3 images
│       ├── project4/       # Project 4 images
│       └── fav/            # Favicon files
```

## Key Components

1. **Home Section:** Engaging introduction with typing animation showcasing my key roles and skills
2. **About Section:** Professional background information with downloadable CV
3. **Skills Section:** Visual representation of technical skills with animated progress bars
4. **Projects Section:** Featured projects with thumbnails and detailed project pages
5. **Education/Experience:** Timeline showcasing academic and professional history
6. **Contact Section:** Contact information and social media links

## Project Details System

The portfolio includes a dynamic project details system:
- Projects are defined in the `project-details.js` file
- Each project has details like title, client, completion date, description, technologies, and images
- Projects are loaded dynamically based on URL parameters
- The system supports fallbacks for missing images

## Getting Started

### Prerequisites
- A modern web browser
- Basic understanding of HTML, CSS, and JavaScript

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
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

### Modifying Content
- Edit text content in `index.html`
- Update project details in `src/js/project-details.js`
- Change skills percentages in the HTML markup

### Styling Changes
- Primary colors and variables are defined at the top of `src/css/styles.css`
- Responsive breakpoints are set at the bottom of the stylesheet

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