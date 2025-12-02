// Optimized Image Modal with Event Delegation
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
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; 
    }

    // Event listeners
    closeButton.addEventListener('click', closeModal);

    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'flex') {
            closeModal();
        }
    });

    // Use event delegation for better performance
    document.addEventListener('click', function(event) {
        const target = event.target;
        
        // Check if clicked element is an image in gallery or project
        if (target.tagName === 'IMG' && 
            (target.closest('.gallery-item') || 
             target.closest('.project-gallery') ||
             target.closest('.project-image'))) {
            event.preventDefault();
            openModal(target.src);
        }
    });
}); 