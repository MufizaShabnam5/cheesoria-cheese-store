document.addEventListener('DOMContentLoaded', () => {
  initSignatureFilter();
  initGalleryFilter();
  initHome1BuyButtons();
});

function initSignatureFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const sigCards = document.querySelectorAll('.sig-card');

  if (filterBtns.length === 0 || sigCards.length === 0) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      sigCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          card.style.opacity = '1';
          card.style.transform = 'scale(1)';
        } else {
          card.style.display = 'none';
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
        }
      });
    });
  });
}

function initHome1BuyButtons() {
  const buyBtns = document.querySelectorAll('.sig-buy-btn, .btn-buy-now');
  
  buyBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const name = btn.getAttribute('data-name') || 'Selected Cheese';
      const price = btn.getAttribute('data-price') ? `₹${btn.getAttribute('data-price')}` : '';
      
      const originalText = btn.textContent;
      btn.textContent = '✓ Added!';
      btn.style.backgroundColor = '#2e7d32';
      btn.style.borderColor = '#2e7d32';
      btn.style.color = '#ffffff';

      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.backgroundColor = '';
        btn.style.borderColor = '';
        btn.style.color = '';
      }, 2500);
    });
  });
}

function initGalleryFilter() {
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  const galleryCards = document.querySelectorAll('.gallery-showcase-card');

  if (filterBtns.length === 0 || galleryCards.length === 0) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-gallery-filter');

      galleryCards.forEach(card => {
        const category = card.getAttribute('data-gallery-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          card.style.opacity = '1';
          card.style.transform = 'scale(1)';
        } else {
          card.style.display = 'none';
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
        }
      });
    });
  });
}
