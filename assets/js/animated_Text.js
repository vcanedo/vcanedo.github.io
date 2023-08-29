const animatedElement = document.querySelector('.animated-element');
// const scrollTrigger = document.querySelector('.scroll-trigger');

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5 // 50% of the element visible
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animatedElement.classList.add('animate');
        } else {
            animatedElement.classList.remove('animate');
        }
    });
}, observerOptions);

observer.observe(animatedElement);
