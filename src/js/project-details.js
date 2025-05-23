// Add image fallback function
function handleImageError(img, projectTitle) {
    img.onerror = null; // Prevent infinite loop
    img.src = `https://via.placeholder.com/800x600/f0f0f0/333333?text=${encodeURIComponent(projectTitle)}`;
}

// Function to add gallery images
function addGalleryImages(gallery, images) {
    gallery.innerHTML = '';
    
    images.forEach(img => {
        const imgWrapper = document.createElement('div');
        imgWrapper.className = 'gallery-image-wrapper img-placeholder';
        
        const imgElement = document.createElement('img');
        imgElement.setAttribute('data-src', img.src);
        imgElement.setAttribute('alt', img.alt || 'Project image');
        
        imgWrapper.appendChild(imgElement);
        gallery.appendChild(imgWrapper);
    });
}

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
            title: 'UIT Car Racing - Professional Board',
            category: 'Game Development',
            client: 'Computer Engineering Embedded Club',
            completionDate: '2020 - 2024',
            description: `
                <p>
                    UIT Car Racing - Professional Board is a flagship project developed in collaboration with a dedicated team from 2020 to 2024. The project underwent a remarkable transformation in 2023, thanks in large part to the invaluable guidance of Mr. Phong, which propelled it to a new level of sophistication and performance.
                </p>
                <p>
                    Created for the annual UIT Car Racing competition hosted by the Department of Computer Engineering at the University of Information Technology, this project provides an immersive simulation platform for students passionate about autonomous vehicles. The competition challenges participants to program and control virtual cars, navigating complex tracks and obstacles using real-time image processing and control algorithms. Victory goes to the competitor who demonstrates the most stable and efficient performance.
                </p>
                <p>
                    My primary role was to architect and optimize the Front End, as well as contribute to the Back End, ensuring a seamless and engaging user experience. Through continuous iteration, I focused on maximizing performance, introducing innovative features, and refining the gameplay to deliver a professional-grade simulation environment for all participants.
                </p>
                <p>Key features include:</p>
                <ul>
                    <li>Modern, responsive Front End design and implementation</li>
                    <li>Advanced performance optimizations for smooth gameplay</li>
                    <li>Integration of new features to enhance user engagement</li>
                    <li>Comprehensive debugging and issue resolution</li>
                </ul>
                <p>
                    Watch the game in action at the competition in the video below.
                </p>
            `,
            technologies: ['C#', 'UnityEngine', 'Python', 'Profiler'],
            images: [
                'src/img/project1/project1-1.png',
                'src/img/project1/project1-2.png',
                'src/img/project1/project1-3.png'
            ],
            link: 'https://www.youtube.com/watch?v=FvJYfd1q2KQ&t=2750s'
        },
        {
            id: 3,
            title: 'Terminal Note CLI',
            category: 'Linux',
            client: 'Individual',
            completionDate: '2025',
            description: `
                <p>
                    Terminal Note CLI is a Python library I developed and published on PyPI, designed to help you create and manage notes directly from your command line. It's perfect for anyone who prefers working in the terminal and wants a fast, flexible, and customizable note-taking solution.
                </p>
                <p>
                    <em>Key features:</em>
                </p>
                <ul>
                    <li>✏️ Create, edit, view, and delete notes from the CLI</li>
                    <li>🏷️ Tag notes for better organization</li>
                    <li>🎨 Customize colors for each tag</li>
                    <li>🔍 Filter notes by tags and search content</li>
                    <li>📝 Edit notes with your favorite editor (vim, nano, etc.)</li>
                    <li>📎 Attach files or directories to notes</li>
                    <li>🖥️ Open attachments directly from notes</li>
                    <li>📊 Statistics and note analysis</li>
                    <li>⏰ Reminders for notes</li>
                    <li>📤 Export notes to multiple formats (Markdown, HTML, Text)</li>
                </ul>
                <p>
                    You can install it from PyPI with <code>pip install terminal-note</code> and start managing your notes like a pro right from your terminal!
                </p>
            `,
            technologies: ['Python', 'Click', 'Rich'],
            images: [
                'src/img/project2/project2.png',
                'src/img/project2/project2-1.png',
                'src/img/project2/project2-2.png'
            ],
            link: 'https://github.com/imnotnahn/wnote'
        },
        {
            id: 4,
            title: 'Portfolio and Blog Design',
            category: 'Web Design',
            client: 'Individual',
            completionDate: 'end of 2024 - beginning of 2025',
            description: `
                <p>
                    My personal portfolio and blog is a creative digital space I designed and developed to reflect my journey as a developer and storyteller. This website is more than just a showcase—it's an immersive experience that brings my projects, skills, and ideas to life through modern web technologies and thoughtful design.
                </p>
                <p>
                    The site is crafted with a strong emphasis on visual storytelling, blending WebGL-powered effects, elegant CSS3 animations, and custom JavaScript interactions to create a dynamic and engaging user experience. Every detail, from the interactive project gallery to the seamless transitions, is tailored to highlight both creativity and technical expertise.
                </p>
                <p><strong>Portfolio highlights:</strong></p>
                <ul>
                    <li>Striking custom animations and smooth transitions</li>
                    <li>Interactive, filterable project showcase</li>
                    <li>Dynamic content loading for a seamless experience</li>
                    <li>Performance-optimized media and image handling</li>
                    <li>Innovative, user-centric UI/UX design</li>
                    <li>Integrated contact and inquiry system for easy communication</li>
                </ul>
                <p>
                    The blog section is where I share insights, tutorials, and personal reflections on technology and development. It’s designed to be accessible, engaging, and easy to navigate, making it a welcoming space for readers from all backgrounds.
                </p>
                <p><strong>Blog features:</strong></p>
                <ul>
                    <li>Fully responsive design for flawless viewing on any device</li>
                    <li>Multi-language support with intuitive language toggling</li>
                    <li>Dynamic content management—projects and posts loaded from Supabase</li>
                    <li>Optimized media display for fast, beautiful content delivery</li>
                </ul>
            `,
            technologies: ['HTML5', 'CSS3', 'JavaScript', 'Three.js', 'WebGL'],
            images: [
                'src/img/project3/project3.png',
                'src/img/project3/project3-1.png',
                'src/img/project3/project3-2.png',
                'src/img/project3/project3-3.png'
            ],
            link: 'https://imnahn.io.vn/'
        },
        {
            id: 2,
            title: 'Remake Git Fourchette',
            category: 'App Development',
            client: 'Invidual',
            completionDate: 'April 2025',
            description: `
                <p>Remaking Git Fourchette was a passion project where I reimagined and rebuilt a powerful Git management tool for developers. My goal was to deliver a seamless, modern experience—streamlining workflows, enhancing security, and making Git operations more accessible for everyone. The new version features a refreshed interface, improved performance, and smart automation to help users focus on what matters most: their code.</p>
                <p>This application simplifies authentication, manages credentials securely, and provides instant feedback if anything goes wrong. With just a few clicks, users can update their credentials and keep working without interruption. It's the perfect companion for anyone who values efficiency and reliability in their daily Git workflow.</p>
                <p>Key features include:</p>
                <ul>
                    <li>Set up Git authentication credentials once via an intuitive menu</li>
                    <li>Securely save PAT credentials in Git config for persistent sessions</li>
                    <li>Receive instant notifications if stored credentials become invalid</li>
                    <li>Easily update credentials through the File menu</li>
                </ul>
            `,
            technologies: ['Python', 'PyQt6', 'PyQt6-tools', 'PyQt6-sip', 'PyQt6-PySide6', 'Git Python'],
            images: [
                'src/img/project4/project4-1.png',
                'src/img/project4/project4-2.png',
                // 'src/img/project4/project4-3.png'
            ],
            link: 'https://github.com/imnotnahn/remakeGitFourchette'
        },
        {
            id: 5,
            title: 'Discord Game & Utility Bot',
            category: 'Bot Development',
            client: 'Invidual',
            completionDate: 'March 2025',
            description: `
                <p>
                    This advanced Discord bot is designed to transform any server into a vibrant, interactive community hub. Developed with <strong>discord.py</strong>, it seamlessly blends entertainment, learning, and utility—offering a unique experience for users of all interests.
                </p>
                <p>
                    Whether you want to challenge friends to classic board games, improve your language skills, manage voice channels with ease, or chat with an AI powered by the Gemini API, this bot has you covered. Its intuitive commands and smart automation make it a must-have companion for any Discord server.
                </p>
                <p><strong>Key features include:</strong></p>
                <ul>
                    <li><strong>Board Games:</strong> Play Co Tuong, Co Vay, Co Ca Ngua, and more with friends directly in your server.</li>
                    <li><strong>Voice Management:</strong> Effortlessly control voice channels and the bot's own voice settings.</li>
                    <li><strong>Language Learning:</strong> Register and receive personalized language practice and support.</li>
                    <li><strong>AI Integration:</strong> Engage in dynamic conversations with an AI powered by the Gemini API.</li>
                    <li><strong>Tactical Game:</strong> Enjoy a turn-based tactical game for strategic fun and competition.</li>
                </ul>
            `,
            technologies: ['Python', 'discord.py ', 'Google Gemini API', 'asyncio', 'Logging'],
            images: [
                'src/img/project5/project5-1.png',
                'src/img/project5/project5-2.png',
                'src/img/project5/project5-3.png',
                'src/img/project5/project5-4.png',
            ],
            link: 'https://github.com/imnotnahn/discordbot'
        },
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
            
            // Add fallback for missing images
            img.onerror = function() {
                handleImageError(this, project.title);
            };
            
            imgContainer.appendChild(img);
            projectGallery.appendChild(imgContainer);
        });
    }
    
    // Fix for project link button
    if (projectLink) {
        if (project.link) {
            projectLink.href = project.link;
            projectLink.textContent = 'Visit Project';
            projectLink.setAttribute('target', '_blank'); // Ensure it opens in a new tab
            projectLink.setAttribute('rel', 'noopener noreferrer'); // Security best practice
            
            // Add event listener to force the link to work
            projectLink.addEventListener('click', function(e) {
                e.preventDefault();
                window.open(project.link, '_blank', 'noopener,noreferrer');
            });
        } else {
            // Hide the button if there's no link
            projectLink.style.display = 'none';
        }
    }
});