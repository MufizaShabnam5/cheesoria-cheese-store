

document.addEventListener('DOMContentLoaded', () => {
  initServicesFaq();
  initTestimonialCarousel();
  initCollectionFilters();
});

function initServicesFaq() {
  const faqItems = document.querySelectorAll('.srv-faq-item');
  if (!faqItems.length) return;

  faqItems.forEach((item, index) => {
    const questionBtn = item.querySelector('.srv-faq-question');
    const answer = item.querySelector('.srv-faq-answer');

    if (!questionBtn || !answer) return;

    if (index === 0) {
      item.classList.add('active');
      answer.style.maxHeight = answer.scrollHeight + 'px';
      questionBtn.setAttribute('aria-expanded', 'true');
    }

    questionBtn.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');

      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherAnswer = otherItem.querySelector('.srv-faq-answer');
          const otherBtn = otherItem.querySelector('.srv-faq-question');
          if (otherAnswer) otherAnswer.style.maxHeight = null;
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        }
      });

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
    const isRtl = document.documentElement.getAttribute('dir') === 'rtl';
    const offset = currentIndex * 100;
    
    track.style.transform = isRtl ? `translateX(${offset}%)` : `translateX(-${offset}%)`;

    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll('.srv-dot');
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
      });
    }

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

  const carouselWrapper = document.querySelector('.srv-testimonials-carousel');
  if (carouselWrapper) {
    carouselWrapper.addEventListener('mouseenter', stopAutoplay);
    carouselWrapper.addEventListener('mouseleave', startAutoplay);
  }

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

  updateCarousel();
  startAutoplay();
}

function initCollectionFilters() {
  const tabs = document.querySelectorAll('.srv-col-tab');
  const cards = document.querySelectorAll('.srv-col-card');

  if (!tabs.length || !cards.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const category = tab.dataset.filter;

      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

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
