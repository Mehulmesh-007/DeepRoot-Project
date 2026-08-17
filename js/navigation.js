// js/navigation.js
// Handles mobile hamburger menu and sticky header logic

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const links = document.querySelectorAll('.nav-links li');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      // Toggle Nav
      navLinks.classList.toggle('nav-active');

      // Hamburger Animation
      hamburger.classList.toggle('toggle');
      
      // Accessibility: toggle aria-expanded
      const isExpanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
      hamburger.setAttribute('aria-expanded', !isExpanded);
    });
  }

  // Active link highlighting
  const currentPath = window.location.pathname;
  const navItems = document.querySelectorAll('.nav-links a');
  
  navItems.forEach(item => {
    // Basic exact match or startsWith logic for nested pages
    if (item.getAttribute('href') !== '/' && currentPath.includes(item.getAttribute('href'))) {
      item.classList.add('active');
    } else if (item.getAttribute('href') === '/' && currentPath === '/') {
      item.classList.add('active');
    } else if (item.getAttribute('href') === 'index.html' && (currentPath.endsWith('index.html') || currentPath === '/')) {
      item.classList.add('active');
    }
  });
});
