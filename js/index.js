document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.scroll-reveal') || document.querySelector('.hero-section')) {
    initScrollAnimations();
  }
  if (document.getElementById('builder')) {
    initInteractiveBoardBuilder();
  }
  if (document.querySelector('.faq-item')) {
    initFaqAccordions();
  }
  
  const orderPlatterBtn = document.getElementById('btn-order-platter');
  if (orderPlatterBtn) {
    orderPlatterBtn.addEventListener('click', () => {
      alert('Platter ordered successfully!');
    });
  }
});

function initScrollAnimations() {
  const revealElements = document.querySelectorAll('.scroll-reveal');
  
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -100px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(el => observer.observe(el));

  const heroSection = document.querySelector('.hero-section');
  if (heroSection) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const bg = heroSection.querySelector('.hero-bg-media');
      if (bg) {
        bg.style.transform = `translateY(${scrolled * 0.4}px)`;
      }
    }, { passive: true });
  }
}

function initInteractiveBoardBuilder() {
  const builderSec = document.getElementById('builder');
  if (!builderSec) return;

  const boardContainer = builderSec.querySelector('#board-active-nodes');
  const summaryList = builderSec.querySelector('#board-summary-list');
  const totalPriceEl = builderSec.querySelector('#board-total-price');
  const options = builderSec.querySelectorAll('.ingredient-opt');
  
  if (!boardContainer || !summaryList || !totalPriceEl || options.length === 0) return;

  let activeSelections = new Map();

  options.forEach(button => {
    button.addEventListener('click', () => {
      const id = button.dataset.id;
      const name = button.dataset.name;
      const price = parseFloat(button.dataset.price);
      const x = button.dataset.x;
      const y = button.dataset.y;

      if (activeSelections.has(id)) {
        activeSelections.delete(id);
        button.classList.remove('active');
        const node = boardContainer.querySelector(`#node-${id}`);
        if (node) node.remove();
      } else {
        activeSelections.set(id, { name, price });
        button.classList.add('active');
        
        const node = document.createElement('div');
        node.className = 'visual-node';
        node.id = `node-${id}`;
        node.style.left = x;
        node.style.top = y;
        node.innerHTML = `<span class="visual-node-label">${name}</span>`;
        boardContainer.appendChild(node);
      }
      
      updateSummary();
    });
  });

  function updateSummary() {
    summaryList.innerHTML = '';
    let total = 0;

    activeSelections.forEach((value, key) => {
      total += value.price;
      const li = document.createElement('li');
      li.className = 'summary-item';
      li.innerHTML = `
        <span>${value.name}</span>
        <span>+$${value.price.toFixed(2)}</span>
      `;
      summaryList.appendChild(li);
    });

    if (activeSelections.size === 0) {
      summaryList.innerHTML = '<li class="summary-empty">No items selected. Click options to build.</li>';
    }

    totalPriceEl.textContent = `$${total.toFixed(2)}`;
  }

  const initialIds = ['swiss', 'honey'];
  options.forEach(opt => {
    if (initialIds.includes(opt.dataset.id)) {
      opt.dispatchEvent(new Event('click'));
    }
  });
}

function initFaqAccordions() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const header = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    
    if (!header || !answer) return;

    header.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');
      
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          otherItem.querySelector('.faq-answer').style.maxHeight = null;
        }
      });

      if (isOpen) {
        item.classList.remove('active');
        answer.style.maxHeight = null;
      } else {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
}

