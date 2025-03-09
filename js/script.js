document.addEventListener('DOMContentLoaded', () => {
    const progressBars = document.querySelectorAll('.progress');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progress = entry.target;
                const value = progress.getAttribute('data-value');
                progress.style.width = `${value}%`;
                observer.unobserve(progress);
            }
        });
    }, {
        threshold: 0.5 // Trigger when 50% of the section is visible
    });

    progressBars.forEach(bar => {
        observer.observe(bar);
    });

    console.log('Website loaded successfully!');
});
