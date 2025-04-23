document.addEventListener("DOMContentLoaded", function () {
    const photoContainer = document.querySelector('.photo-container');

    // Trigger the animation after a short delay
    setTimeout(() => {
        photoContainer.classList.add('active');
    }, 500); // 0.5 second delay
});
