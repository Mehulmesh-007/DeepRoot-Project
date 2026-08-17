// js/forms.js
// Client side validation for contact and volunteer forms

document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form');

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;
      const requiredFields = form.querySelectorAll('[required]');

      requiredFields.forEach(field => {
        const errorElement = document.getElementById(`${field.id}-error`);
        if (!field.value.trim()) {
          isValid = false;
          field.classList.add('invalid');
          if (errorElement) errorElement.style.display = 'block';
        } else {
          field.classList.remove('invalid');
          if (errorElement) errorElement.style.display = 'none';
        }

        // Email validation
        if (field.type === 'email' && field.value.trim() !== '') {
          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailPattern.test(field.value)) {
            isValid = false;
            field.classList.add('invalid');
            if (errorElement) {
              errorElement.innerText = 'Please enter a valid email address';
              errorElement.style.display = 'block';
            }
          }
        }
      });

      if (isValid) {
        // If there's no backend, redirect to thank you page
        // In real world, use fetch() to submit data here
        window.location.href = '/thank-you.html';
      }
    });
  });
});
