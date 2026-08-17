// js/main.js
// Global initializers

document.addEventListener('DOMContentLoaded', () => {
  // Setup fade-in animations
  const fadeElements = document.querySelectorAll('.fade-in-up, .stagger-parent');
  
  const fadeObserverOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const fadeObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, fadeObserverOptions);

  fadeElements.forEach(el => {
    fadeObserver.observe(el);
  });

  // Inject data placeholders if elements have data-inject attribute
  const injectables = document.querySelectorAll('[data-inject]');
  injectables.forEach(el => {
    const keys = el.getAttribute('data-inject').split('.');
    let value = window.fmfData;
    keys.forEach(k => {
      if (value) value = value[k];
    });
    
    if (value) {
      if (el.tagName === 'IMG') {
        el.src = value;
      } else if (el.tagName === 'A') {
        el.href = value;
      } else {
        el.innerText = value;
      }
    }
  });
});
