

document.addEventListener('DOMContentLoaded', () => {
  initFloatingLabels();
  initFormValidation();
  initFaqAccordion();
  initScrollReveal();
  initToastControls();
});

function initFloatingLabels() {
  const inputs = document.querySelectorAll('.floating-input');
  
  inputs.forEach(input => {
    if (input.value.trim() !== '') {
      input.classList.add('has-value');
    }

    input.addEventListener('blur', () => {
      if (input.value.trim() !== '') {
        input.classList.add('has-value');
      } else {
        input.classList.remove('has-value');
      }
    });

    input.addEventListener('input', () => {
      const parentGroup = input.closest('.floating-group');
      if (parentGroup && parentGroup.classList.contains('invalid')) {
        parentGroup.classList.remove('invalid');
      }
    });
  });
}

function initFormValidation() {
  const form = document.getElementById('luxury-contact-form');
  if (!form) return;

  const submitBtn = document.getElementById('form-submit-btn');
  const btnText = submitBtn ? submitBtn.querySelector('.btn-text') : null;
  const btnSpinner = submitBtn ? submitBtn.querySelector('.btn-spinner') : null;
  const btnArrow = submitBtn ? submitBtn.querySelector('.h-btn-arrow') : null;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const isNameValid = validateInput('form-name');
    const isEmailValid = validateEmail('form-email');
    const isSubjectValid = validateSelect('form-subject');
    const isMessageValid = validateInput('form-message');

    if (!isNameValid || !isEmailValid || !isSubjectValid || !isMessageValid) {
      const firstInvalid = form.querySelector('.floating-group.invalid .floating-input');
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    if (submitBtn) submitBtn.disabled = true;
    if (btnText) btnText.textContent = 'Dispatching Inquiry...';
    if (btnSpinner) btnSpinner.classList.remove('hidden');
    if (btnArrow) btnArrow.style.display = 'none';

    setTimeout(() => {
      if (submitBtn) submitBtn.disabled = false;
      if (btnText) btnText.textContent = 'Submit Inquiry';
      if (btnSpinner) btnSpinner.classList.add('hidden');
      if (btnArrow) btnArrow.style.display = 'inline-block';

      showToast();

      form.reset();
      document.querySelectorAll('.floating-input').forEach(inp => inp.classList.remove('has-value'));
    }, 1200);
  });
}

function validateInput(inputId) {
  const input = document.getElementById(inputId);
  if (!input) return false;

  const parent = input.closest('.floating-group');
  if (!input.value.trim()) {
    if (parent) parent.classList.add('invalid');
    return false;
  } else {
    if (parent) parent.classList.remove('invalid');
    return true;
  }
}

function validateEmail(inputId) {
  const input = document.getElementById(inputId);
  if (!input) return false;

  const parent = input.closest('.floating-group');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValid = emailRegex.test(input.value.trim());

  if (!isValid) {
    if (parent) parent.classList.add('invalid');
    return false;
  } else {
    if (parent) parent.classList.remove('invalid');
    return true;
  }
}

function validateSelect(selectId) {
  const select = document.getElementById(selectId);
  if (!select) return false;

  const parent = select.closest('.floating-group');
  if (!select.value) {
    if (parent) parent.classList.add('invalid');
    return false;
  } else {
    if (parent) parent.classList.remove('invalid');
    return true;
  }
}

function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const content = item.querySelector('.faq-content');

    if (!trigger || !content) return;

    trigger.addEventListener('click', () => {
      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          const otherTrigger = otherItem.querySelector('.faq-trigger');
          const otherContent = otherItem.querySelector('.faq-content');
          if (otherTrigger && otherContent) {
            otherTrigger.setAttribute('aria-expanded', 'false');
            otherContent.style.maxHeight = null;
          }
        }
      });

      if (isExpanded) {
        trigger.setAttribute('aria-expanded', 'false');
        content.style.maxHeight = null;
      } else {
        trigger.setAttribute('aria-expanded', 'true');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });
}

function initScrollReveal() {
  const revealElements = document.querySelectorAll('.scroll-reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}

function showToast() {
  const toast = document.getElementById('contact-toast');
  if (!toast) return;

  toast.classList.remove('hidden');

  setTimeout(() => {
    toast.classList.add('hidden');
  }, 6000);
}

function initToastControls() {
  const closeBtn = document.getElementById('toast-close');
  const toast = document.getElementById('contact-toast');

  if (closeBtn && toast) {
    closeBtn.addEventListener('click', () => {
      toast.classList.add('hidden');
    });
  }
}
