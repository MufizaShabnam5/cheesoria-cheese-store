/**
 * Cheesoria - Luxury Services Page Interactions
 * Handles FAQ accordion, Testimonial Carousel, and Featured Collections category filtering.
 */

document.addEventListener('DOMContentLoaded', () => {
  initServicesFaq();
  initTestimonialCarousel();
  initCollectionFilters();
});

/* ==========================================================================
   1. FAQ Accordion Engine
   ========================================================================== */
function initServicesFaq() {
  const faqItems = document.querySelectorAll('.srv-faq-item');
  if (!faqItems.length) return;

  faqItems.forEach((item, index) => {
    const questionBtn = item.querySelector('.srv-faq-question');
    const answer = item.querySelector('.srv-faq-answer');

    if (!questionBtn || !answer) return;

    // Open first item by default for luxury polish
    if (index === 0) {
      item.classList.add('active');
      answer.style.maxHeight = answer.scrollHeight + 'px';
      questionBtn.setAttribute('aria-expanded', 'true');
    }

    questionBtn.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');

      // Close all other items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherAnswer = otherItem.querySelector('.srv-faq-answer');
          const otherBtn = otherItem.querySelector('.srv-faq-question');
          if (otherAnswer) otherAnswer.style.maxHeight = null;
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle current item
      if (isOpen) {
        item.classList.remove('active');
        answer.style.maxHeight = null;
        questionBtn.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
        questionBtn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* ==========================================================================
   2. Testimonial Glassmorphism Carousel
   ========================================================================== */
function initTestimonialCarousel() {
  const track = document.querySelector('.srv-testimonial-track');
  const slides = document.querySelectorAll('.srv-testimonial-card');
  const prevBtn = document.querySelector('.srv-carousel-prev');
  const nextBtn = document.querySelector('.srv-carousel-next');
  const dotsContainer = document.querySelector('.srv-carousel-dots');

  if (!track || !slides.length) return;

  let currentIndex = 0;
  let autoplayTimer = null;
  const slideCount = slides.length;

  // Create dot indicators dynamically
  if (dotsContainer) {
    dotsContainer.innerHTML = '';
    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = `srv-dot ${i === 0 ? 'active' : ''}`;
      dot.setAttribute('aria-label', `Go to testimonial slide ${i + 1}`);
      dot.addEventListener('click', () => goToSlide(i));
      dotsContainer.appendChild(dot);
    });
  }

  function updateCarousel() {
    // Check direction (LTR/RTL)
    const isRtl = document.documentElement.getAttribute('dir') === 'rtl';
    const offset = currentIndex * 100;
    
    track.style.transform = isRtl ? `translateX(${offset}%)` : `translateX(-${offset}%)`;

    // Update dots
    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll('.srv-dot');
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
      });
    }

    // Update slides active class
    slides.forEach((slide, i) => {
      slide.classList.toggle('active-slide', i === currentIndex);
    });
  }

  function goToSlide(index) {
    currentIndex = (index + slideCount) % slideCount;
    updateCarousel();
    resetAutoplay();
  }

  function nextSlide() {
    goToSlide(currentIndex + 1);
  }

  function prevSlide() {
    goToSlide(currentIndex - 1);
  }

  if (nextBtn) nextBtn.addEventListener('click', nextSlide);
  if (prevBtn) prevBtn.addEventListener('click', prevSlide);

  // Autoplay functionality
  function startAutoplay() {
    stopAutoplay();
    autoplayTimer = setInterval(nextSlide, 5000);
  }

  function stopAutoplay() {
    if (autoplayTimer) clearInterval(autoplayTimer);
  }

  function resetAutoplay() {
    stopAutoplay();
    startAutoplay();
  }

  // Pause on hover
  const carouselWrapper = document.querySelector('.srv-testimonials-carousel');
  if (carouselWrapper) {
    carouselWrapper.addEventListener('mouseenter', stopAutoplay);
    carouselWrapper.addEventListener('mouseleave', startAutoplay);
  }

  // Touch Swipe support for Mobile
  let startX = 0;
  let endX = 0;

  track.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  }, { passive: true });

  track.addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].clientX;
    const diff = startX - endX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
  }, { passive: true });

  // Initialize carousel active state
  updateCarousel();
  startAutoplay();
}

/* ==========================================================================
   3. Featured Collections Category Tab Filter
   ========================================================================== */
function initCollectionFilters() {
  const tabs = document.querySelectorAll('.srv-col-tab');
  const cards = document.querySelectorAll('.srv-col-card');

  if (!tabs.length || !cards.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const category = tab.dataset.filter;

      // Update active tab
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Filter cards
      cards.forEach(card => {
        const cardCategory = card.dataset.category;
        
        if (category === 'all' || cardCategory === category) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.92)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}
