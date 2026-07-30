/* ==========================================================================
   CHEESORIA LUXURY AUTHENTICATION JAVASCRIPT (js/auth.js)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initThemeAndDir();
  initPasswordToggles();
  initFormHandler();
});

/**
 * 1. Initialize Theme & Text Direction (RTL / LTR) with LocalStorage Persistence
 */
function initThemeAndDir() {
  const htmlEl = document.documentElement;

  // Restore Theme
  const savedTheme = localStorage.getItem('cheesso-theme') || localStorage.getItem('cheesoria_theme') || 'dark';
  applyTheme(savedTheme);

  // Restore Direction
  const savedDir = localStorage.getItem('cheesoria_dir') || (localStorage.getItem('cheesso-rtl') === 'true' ? 'rtl' : 'ltr');
  applyDir(savedDir);

  // Theme Toggle Button
  const themeBtn = document.getElementById('auth-theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const currentTheme = htmlEl.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
    });
  }

  // RTL Toggle Button
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

/**
 * 2. Password Visibility Eye Toggle Handler
 */
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

      // Toggle Icon
      const iconSpan = btn.querySelector('.eye-icon');
      if (iconSpan) {
        iconSpan.textContent = isPassword ? '🙈' : '👁️';
      }

      btn.setAttribute('aria-label', isPassword ? 'Hide password' : 'Show password');
    });
  });
}

/**
 * 3. Form Submission Handling with Feedback Alert
 */
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
