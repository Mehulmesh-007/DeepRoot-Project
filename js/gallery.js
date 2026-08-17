// js/gallery.js
// Handles Lightbox logic for image galleries

document.addEventListener('DOMContentLoaded', () => {
  const galleryItems = document.querySelectorAll('.gallery-item img');
  if (galleryItems.length === 0) return;

  // Create lightbox overlay
  const lightbox = document.createElement('div');
  lightbox.id = 'lightbox';
  lightbox.style.display = 'none';
  lightbox.style.position = 'fixed';
  lightbox.style.top = '0';
  lightbox.style.left = '0';
  lightbox.style.width = '100%';
  lightbox.style.height = '100%';
  lightbox.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
  lightbox.style.zIndex = '2000';
  lightbox.style.alignItems = 'center';
  lightbox.style.justifyContent = 'center';
  lightbox.style.flexDirection = 'column';

  const img = document.createElement('img');
  img.style.maxWidth = '90%';
  img.style.maxHeight = '80%';
  img.style.boxShadow = '0 10px 25px rgba(0,0,0,0.5)';
  img.style.borderRadius = '8px';

  const closeBtn = document.createElement('button');
  closeBtn.innerHTML = '&times;';
  closeBtn.style.position = 'absolute';
  closeBtn.style.top = '20px';
  closeBtn.style.right = '30px';
  closeBtn.style.fontSize = '40px';
  closeBtn.style.color = '#fff';
  closeBtn.style.background = 'transparent';
  closeBtn.style.border = 'none';
  closeBtn.style.cursor = 'pointer';
  
  // Navigation
  const prevBtn = document.createElement('button');
  prevBtn.innerHTML = '&#10094;';
  prevBtn.style.position = 'absolute';
  prevBtn.style.left = '20px';
  prevBtn.style.fontSize = '30px';
  prevBtn.style.color = '#fff';
  prevBtn.style.background = 'transparent';
  prevBtn.style.border = 'none';
  prevBtn.style.cursor = 'pointer';

  const nextBtn = document.createElement('button');
  nextBtn.innerHTML = '&#10095;';
  nextBtn.style.position = 'absolute';
  nextBtn.style.right = '20px';
  nextBtn.style.fontSize = '30px';
  nextBtn.style.color = '#fff';
  nextBtn.style.background = 'transparent';
  nextBtn.style.border = 'none';
  nextBtn.style.cursor = 'pointer';

  lightbox.appendChild(img);
  lightbox.appendChild(closeBtn);
  lightbox.appendChild(prevBtn);
  lightbox.appendChild(nextBtn);
  document.body.appendChild(lightbox);

  let currentIndex = 0;

  const showImage = (index) => {
    if (index < 0) index = galleryItems.length - 1;
    if (index >= galleryItems.length) index = 0;
    currentIndex = index;
    img.src = galleryItems[currentIndex].src;
  };

  galleryItems.forEach((item, index) => {
    item.style.cursor = 'pointer';
    item.addEventListener('click', () => {
      showImage(index);
      lightbox.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    });
  });

  const closeLightbox = () => {
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
  };

  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  prevBtn.addEventListener('click', () => showImage(currentIndex - 1));
  nextBtn.addEventListener('click', () => showImage(currentIndex + 1));

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (lightbox.style.display === 'flex') {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showImage(currentIndex - 1);
      if (e.key === 'ArrowRight') showImage(currentIndex + 1);
    }
  });
});
