

document.addEventListener('DOMContentLoaded', () => {
  initThemeAndDir();
  initPasswordToggles();
  initFormHandler();
});

function initThemeAndDir() {
  const htmlEl = document.documentElement;

  const savedTheme = localStorage.getItem('cheesso-theme') || localStorage.getItem('cheesoria_theme') || 'dark';
  applyTheme(savedTheme);

  const savedDir = localStorage.getItem('cheesoria_dir') || (localStorage.getItem('cheesso-rtl') === 'true' ? 'rtl' : 'ltr');
  applyDir(savedDir);

  const themeBtn = document.getElementById('auth-theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const currentTheme = htmlEl.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
    });
  }

  const rtlBtn = document.getElementById('auth-rtl-toggle');
  if (rtlBtn) {
    rtlBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const currentDir = htmlEl.getAttribute('dir') || 'ltr';
      const newDir = currentDir === 'ltr' ? 'rtl' : 'ltr';
      applyDir(newDir);
    });
  }
}

function applyTheme(theme) {
  const htmlEl = document.documentElement;
  htmlEl.setAttribute('data-theme', theme);
  htmlEl.style.colorScheme = theme;
  localStorage.setItem('cheesso-theme', theme);
  localStorage.setItem('cheesoria_theme', theme);
}

function applyDir(dir) {
  const htmlEl = document.documentElement;
  htmlEl.setAttribute('dir', dir);
  localStorage.setItem('cheesso-rtl', dir === 'rtl' ? 'true' : 'false');
  localStorage.setItem('cheesoria_dir', dir);
}

function initPasswordToggles() {
  const eyeButtons = document.querySelectorAll('.eye-toggle-btn');

  eyeButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = btn.getAttribute('data-target');
      const inputEl = document.getElementById(targetId);

      if (!inputEl) return;

      const isPassword = inputEl.type === 'password';
      inputEl.type = isPassword ? 'text' : 'password';

      const iconSpan = btn.querySelector('.eye-icon');
      if (iconSpan) {
        iconSpan.innerHTML = isPassword 
          ? '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>'
          : '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>';
      }

      btn.setAttribute('aria-label', isPassword ? 'Hide password' : 'Show password');
    });
  });
}

function initFormHandler() {
  const loginForm = document.getElementById('login-form');
  const signupForm = document.getElementById('signup-form');
  const alertEl = document.getElementById('auth-alert-box');

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = document.getElementById('email');
      const passInput = document.getElementById('password');

      if (!emailInput.value || !passInput.value) {
        showAlert('Please fill in all required fields.', 'error');
        return;
      }

      showAlert('✨ Welcome back! Redirecting to Dashboard...', 'success');
      setTimeout(() => {
        window.location.href = 'dashboard.html';
      }, 1200);
    });
  }

  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = document.getElementById('fullname');
      const emailInput = document.getElementById('email');
      const passInput = document.getElementById('password');
      const confirmInput = document.getElementById('confirm_password');
      const termsCheckbox = document.getElementById('terms_agree');

      if (!nameInput.value || !emailInput.value || !passInput.value || !confirmInput.value) {
        showAlert('Please complete all required fields.', 'error');
        return;
      }

      if (passInput.value !== confirmInput.value) {
        showAlert('Passwords do not match. Please verify.', 'error');
        return;
      }

      if (termsCheckbox && !termsCheckbox.checked) {
        showAlert('Please agree to the Terms of Service & Privacy Policy.', 'error');
        return;
      }

      showAlert('🎉 Account created successfully! Redirecting to Dashboard...', 'success');
      setTimeout(() => {
        window.location.href = 'dashboard.html';
      }, 1200);
    });
  }

  function showAlert(msg, type) {
    if (!alertEl) return;
    alertEl.textContent = msg;
    alertEl.className = `auth-alert ${type}`;
    alertEl.classList.remove('hidden');
  }
}
