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
            title: 'UIT Car Racing - Professinal Board',
            category: 'Game Development',
            client: 'Computer Engineering Embedded Club',
            completionDate: '2020 - 2024',
            description: `
                <p>This is a project that I and a few other members have been working on from 2020 to 2024. Previous versions were quite outdated, but since around 2023, there has been a significant breakthrough thanks to the assistance of Mr. Phong</p>
                <p>The purpose of this project is to serve the UIT Car Racing competition organized by the Department of Computer Engineering at the University of Information Technology. The competition is organized to create a playground for young people passionate about autonomous vehicles. By creating a car simulation game, participants will rely on the returned images and process the car controls to overcome obstacles and challenges set by the organizers. The participant with the highest stability and who completes the race the fastest will win. My main task in this project is to program and optimize the Front End and a small part of the Back End of the game to enhance the participants' experience, making the processing smoother for the best performance in the competition. </p>
                <p>Key features include:</p>
                <ul>
                    <li>Design and implement the Front End of the game</li>
                    <li>Optimize the game for better performance</li>
                    <li>Implement new features to enhance the game</li>
                    <li>Debug and fix bugs</li>
                </ul>
                <p> A link to the video of the game use in the competition attached below. </p>
            `,
            technologies: ['C#', 'UnityEngine', 'Python', 'Profiller'],
            images: [
                'src/img/project1/project1-1.png',
                'src/img/project1/project1-2.png',
                'src/img/project1/project1-3.png'
            ],
            link: 'https://www.youtube.com/watch?v=FvJYfd1q2KQ&t=2750s'
        },
        {
            id: 3,
            title: 'Tool test CABINET for Tep Bac',
            category: 'Web Extension Development',
            client: 'TEP BAC ',
            completionDate: 'October 2023',
            description: `
                <p>I developed this project two years ago during my internship at Tep Bac JSC to make my testing process more convenient and easier. Fortunately, it worked quite well. Although it is now outdated, it remains my first project outside of school.</p>

                <p>Key features include:</p>
                <ul>
                    <li>Design and implement the Web Extension</li>
                    <li>Auto fill the form with the correct information</li>
                    <li>Debug and fix bugs</li>
                </ul>
            `,
            technologies: ['JavaScript', 'HTML', 'CSS', 'Chrome Extension API', 'Manifest V3'],
            images: [
                // 'src/img/project2.jpg',
                // 'src/img/project2-detail1.jpg',
                // 'src/img/project2-detail2.jpg'
            ],
            link: 'https://github.com/imnotnahn/tool-test-extension'
        },
        {
            id: 4,
            title: 'Portfolio and Blog Design',
            category: 'Web Design',
            client: 'Invidual',
            completionDate: 'end of 2024 - beginning of 2025',
            description: `
                <p>This is my personal portfolio website that I designed and implemented in 2025. It showcases my projects and skills as a Developer.</p>
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
                <p>I also have a blog on the site, where I share my thoughts and experiences as a Developer.</p>
                <p>Key features of the blog include:</p>
                <ul>
                    <li>Responsive Design: Optimized for various screen sizes</li>
                    <li>Multi-language Support: Language toggle with internationalization</li>
                    <li>Dynamic Content: Projects and blog posts loaded dynamically from Supabase</li>
                    <li>Performance-optimized media display</li>
                </ul>
            `,
            technologies: ['HTML5', 'CSS3', 'JavaScript', 'Three.js', 'WebGL'],
            images: [
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
                <p>This is a project that I developed in 2025 to make my testing process more convenient and easier. Fortunately, it worked quite well. Although it is now outdated, it remains my first project outside of school.</p>
                <p>Key features include:</p>
                <ul>
                    <li>Set up their Git authentication credentials once via the menu</li>
                    <li>Save PAT credentials in Git config for persistence between sessions</li>
                    <li>Receive a notification if their stored credentials become invalid</li>
                    <li>Update their credentials easily through the File menu</li>
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
                <p>A feature-rich Discord bot built with discord.py that offers a variety of board games, language learning tools, voice channel management, and AI chat capabilities. </p>
                <p>Key features include:</p>
                <ul>
                    <li>Board Games: Co Tuong, Co Vay, Co Ca Ngua</li>
                    <li>Voice Management: manage voice channels and the voice of the bot</li>
                    <li>Language Learning: register and then the bot will help you learn the language</li>
                    <li>AI Integration: based on Gemini API</li>
                    <li>Tactical Game: A tactical game with a turn-based combat system</li>
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