// js/counters.js
// Handles intersection observer for impact numbers animation

document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.counter-value');
  const speed = 200; // The lower the slower

  // Function to animate a single counter
  const animateCounter = (counter) => {
    // If it's a placeholder string from data.js, don't animate it like a number
    if (counter.innerText.includes('[INSERT')) return;

    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    
    // Calculate increment
    const inc = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + inc);
      setTimeout(() => animateCounter(counter), 20);
    } else {
      counter.innerText = target;
    }
  };

  // Intersection Observer to trigger animations when scrolled into view
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        animateCounter(counter);
        observer.unobserve(counter); // Only animate once
      }
    });
  }, observerOptions);

  counters.forEach(counter => {
    observer.observe(counter);
  });
});
