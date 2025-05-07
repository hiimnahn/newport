document.addEventListener('DOMContentLoaded', () => {
    // Get project ID from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');
    
    // If no project ID or not on the project details page, exit early
    if (!projectId || !document.querySelector('.project-details-section')) {
        return;
    }
    
    // Project data (in a real application, this could come from an API or database)
    const projects = [
        {
            id: 1,
            title: 'E-commerce Website',
            category: 'Web Development',
            client: 'RetailCorp Inc.',
            completionDate: 'June 2023',
            description: `
                <p>This fully responsive e-commerce platform features a comprehensive product management system, 
                secure payment gateway integration, and a user-friendly admin dashboard.</p>
                <p>Built with React for the frontend and Node.js with Express for the backend, the site 
                utilizes MongoDB for data storage and Redis for caching frequently accessed content.</p>
                <p>Key features include:</p>
                <ul>
                    <li>Responsive design across all devices</li>
                    <li>Advanced product filtering and search capabilities</li>
                    <li>User authentication and profile management</li>
                    <li>Order tracking and history</li>
                    <li>Secure payment processing</li>
                    <li>Content management system for admins</li>
                </ul>
            `,
            technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'MongoDB', 'Express', 'Redis'],
            images: [
                'project-images/ecommerce-home.jpg',
                'project-images/ecommerce-products.jpg',
                'project-images/ecommerce-checkout.jpg'
            ],
            link: 'https://example-ecommerce.com'
        },
        {
            id: 2,
            title: 'Mobile Application',
            category: 'Mobile Development',
            client: 'FitLife Solutions',
            completionDate: 'October 2023',
            description: `
                <p>Cross-platform fitness tracking application built with React Native that enables users to 
                monitor workouts, nutrition, and health metrics with real-time data visualization.</p>
                <p>The app synchronizes with wearable devices using Bluetooth, stores data in the cloud, and 
                provides personalized fitness recommendations using machine learning algorithms.</p>
                <p>Key features include:</p>
                <ul>
                    <li>Activity and workout tracking</li>
                    <li>Nutrition logging and calorie calculator</li>
                    <li>Sleep quality monitoring</li>
                    <li>Progress charts and statistics</li>
                    <li>Social sharing and community challenges</li>
                    <li>Personalized workout plans and recommendations</li>
                </ul>
            `,
            technologies: ['React Native', 'JavaScript', 'Firebase', 'Redux', 'TensorFlow Lite', 'Google Fit API'],
            images: [
                'project-images/fitness-dashboard.jpg',
                'project-images/fitness-tracking.jpg',
                'project-images/fitness-stats.jpg'
            ],
            link: 'https://play.google.com/store/apps/fitapp'
        },
        {
            id: 3,
            title: 'Portfolio Design',
            category: 'Web Design',
            client: 'Creative Studio',
            completionDate: 'January 2024',
            description: `
                <p>Custom portfolio website designed for a creative agency featuring animated transitions, 
                parallax scrolling effects, and interactive elements that showcase their work.</p>
                <p>The site was built with a focus on visual storytelling, incorporating WebGL animations, 
                CSS3 animations, and custom JavaScript interactions.</p>
                <p>Key features include:</p>
                <ul>
                    <li>Custom animations and transitions</li>
                    <li>Interactive project showcase</li>
                    <li>Dynamic content loading</li>
                    <li>Performance-optimized media display</li>
                    <li>Innovative UI/UX design</li>
                    <li>Integrated contact and inquiry system</li>
                </ul>
            `,
            technologies: ['HTML5', 'CSS3', 'JavaScript', 'GSAP', 'Three.js', 'WebGL'],
            images: [
                'project-images/portfolio-home.jpg',
                'project-images/portfolio-projects.jpg',
                'project-images/portfolio-about.jpg'
            ],
            link: 'https://creativestudio.com'
        },
        {
            id: 4,
            title: 'Web Application',
            category: 'Full-stack Development',
            client: 'Project Management Inc.',
            completionDate: 'April 2024',
            description: `
                <p>Full-stack project management application with robust user authentication, role-based 
                access control, real-time updates, and comprehensive reporting capabilities.</p>
                <p>Built using the MERN stack (MongoDB, Express, React, Node.js) with Socket.io for 
                real-time functionality and AWS S3 for file storage.</p>
                <p>Key features include:</p>
                <ul>
                    <li>Project planning and task management</li>
                    <li>Team collaboration tools</li>
                    <li>Document sharing and version control</li>
                    <li>Time tracking and reporting</li>
                    <li>Custom dashboards and analytics</li>
                    <li>Notification system and activity feed</li>
                </ul>
            `,
            technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'AWS S3', 'Chart.js'],
            images: [
                'project-images/webapp-dashboard.jpg',
                'project-images/webapp-projects.jpg',
                'project-images/webapp-reports.jpg'
            ],
            link: 'https://project-management-app.com'
        }
    ];
    
    // Find the selected project
    const project = projects.find(p => p.id === parseInt(projectId));
    
    if (!project) {
        // Handle case where project is not found
        document.querySelector('.project-details-container').innerHTML = `
            <div class="error-message">
                <h2>Project Not Found</h2>
                <p>Sorry, the project you're looking for doesn't exist.</p>
                <a href="index.html" class="btn">Back to Portfolio</a>
            </div>
        `;
        return;
    }
    
    // Populate project details - Add null checks before setting innerHTML
    const projectTitle = document.getElementById('project-title');
    const projectInfo = document.getElementById('project-info');
    const projectDescription = document.getElementById('project-description');
    const projectTechnologies = document.getElementById('project-technologies');
    const projectGallery = document.getElementById('project-gallery');
    const projectLink = document.getElementById('project-link');
    
    if (projectTitle) projectTitle.textContent = project.title;
    
    if (projectInfo) {
        projectInfo.innerHTML = `
            <div class="info-item">
                <span class="label">Category:</span>
                <span class="value">${project.category}</span>
            </div>
            <div class="info-item">
                <span class="label">Client:</span>
                <span class="value">${project.client}</span>
            </div>
            <div class="info-item">
                <span class="label">Completion Date:</span>
                <span class="value">${project.completionDate}</span>
            </div>
        `;
    }
    
    if (projectDescription) {
        projectDescription.innerHTML = project.description;
    }
    
    if (projectTechnologies) {
        projectTechnologies.innerHTML = '';
        project.technologies.forEach(tech => {
            const techBadge = document.createElement('span');
            techBadge.className = 'tech-badge';
            techBadge.textContent = tech;
            projectTechnologies.appendChild(techBadge);
        });
    }
    
    if (projectGallery) {
        projectGallery.innerHTML = '';
        project.images.forEach(image => {
            const imgContainer = document.createElement('div');
            imgContainer.className = 'gallery-item';
            
            const img = document.createElement('img');
            img.src = image;
            img.alt = project.title;
            
            imgContainer.appendChild(img);
            projectGallery.appendChild(imgContainer);
        });
    }
    
    if (projectLink && project.link) {
        projectLink.href = project.link;
        projectLink.textContent = 'Visit Project';
    }
});