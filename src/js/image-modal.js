// Image Modal Popup Functionality

document.addEventListener('DOMContentLoaded', function() {
    // Create the modal container and add it to the body
    const modal = document.createElement('div');
    modal.className = 'image-modal';
    modal.innerHTML = `
        <span class="close-modal">&times;</span>
        <img class="modal-content" id="modal-img">
    `;
    document.body.appendChild(modal);

    // Get the modal elements
    const modalImg = document.getElementById('modal-img');
    const closeButton = modal.querySelector('.close-modal');

    // Function to open the modal
    function openModal(imgSrc) {
        modal.style.display = 'flex';
        modalImg.src = imgSrc;
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    }

    // Function to close the modal
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    }

    // Close modal when clicking the close button
    closeButton.addEventListener('click', closeModal);

    // Close modal when clicking outside the image
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Close modal with ESC key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });

    // Add click event listeners to all gallery images on project detail page
    const galleryItems = document.querySelectorAll('.gallery-item img');
    galleryItems.forEach(img => {
        img.addEventListener('click', function() {
            openModal(this.src);
        });
    });

    // Add click event listeners to project images for dynamic loading
    function setupGalleryImages() {
        // Try again for dynamically loaded gallery images
        const galleryImages = document.querySelectorAll('.gallery-item img');
        galleryImages.forEach(img => {
            img.addEventListener('click', function() {
                openModal(this.src);
            });
        });
    }

    // Check for newly loaded gallery images periodically
    setInterval(setupGalleryImages, 1000);

    // Add click event listeners to all project images on the main page
    const projectImages = document.querySelectorAll('.project-image img');
    projectImages.forEach(img => {
        img.parentElement.addEventListener('click', function(e) {
            // Don't open modal if clicking on the project card itself
            if (e.target === img) {
                openModal(img.src);
                e.preventDefault();
                e.stopPropagation();
            }
        });
    });
}); 