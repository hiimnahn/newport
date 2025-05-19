
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.createElement('div');
    modal.className = 'image-modal';
    modal.innerHTML = `
        <span class="close-modal">&times;</span>
        <img class="modal-content" id="modal-img">
    `;
    document.body.appendChild(modal);

    const modalImg = document.getElementById('modal-img');
    const closeButton = modal.querySelector('.close-modal');

    function openModal(imgSrc) {
        modal.style.display = 'flex';
        modalImg.src = imgSrc;
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    }

    // Function to close the modal
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; 
    }

    closeButton.addEventListener('click', closeModal);

    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });

    const galleryItems = document.querySelectorAll('.gallery-item img');
    galleryItems.forEach(img => {
        img.addEventListener('click', function() {
            openModal(this.src);
        });
    });

    function setupGalleryImages() {
        const galleryImages = document.querySelectorAll('.gallery-item img');
        galleryImages.forEach(img => {
            img.addEventListener('click', function() {
                openModal(this.src);
            });
        });
    }

    setInterval(setupGalleryImages, 1000);

    const projectImages = document.querySelectorAll('.project-image img');
    projectImages.forEach(img => {
        img.parentElement.addEventListener('click', function(e) {
            if (e.target === img) {
                openModal(img.src);
                e.preventDefault();
                e.stopPropagation();
            }
        });
    });
}); 