// Smooth scrolling for website navigation
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (event) {
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


// Simple reveal animation when sections enter the screen
const revealItems = document.querySelectorAll(
    '.section, .service-card, .portfolio-item, .step'
);

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    },
    {
        threshold: 0.1
    }
);

revealItems.forEach(item => {
    item.classList.add('reveal');
    observer.observe(item);
});