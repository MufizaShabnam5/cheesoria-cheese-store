document.addEventListener('DOMContentLoaded', async () => {
  // Initialize scroll reveal animations for all pages
  initScrollAnimations();

  // Load navbar and footer templates
  const navbarPromise = loadComponent('navbar', 'components/navbar.html');
  const footerPromise = loadComponent('footer', 'components/footer.html');

  // Wait for navbar to load and initialize navbar-dependent systems
  const navbarLoaded = await navbarPromise;
  if (navbarLoaded) {
    initNavbarEvents();
    highlightActiveNavLink();
    initThemeEngine();
    initRtlEngine();
    initMobileDrawerActions();
  }

  await footerPromise;
});

/* ==========================================================================
   0. Component Loader Helper, Navbar Event Binding & Active Link Detector
   ========================================================================== */
async function loadComponent(elementId, filepath) {
  const element = document.getElementById(elementId);
  if (!element) return false;
  try {
    const response = await fetch(filepath);
    if (!response.ok) throw new Error(`Failed to load ${filepath}: ${response.statusText}`);
    const html = await response.text();
    element.innerHTML = html;
    return true;
  } catch (error) {
    console.error(`Error loading component for element #${elementId} from ${filepath}:`, error);
    return false;
  }
}

function highlightActiveNavLink() {
  let path = window.location.pathname;
  let pageName = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
  if (pageName === '' || pageName === '/') pageName = 'index.html';

  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  // Clear previous active classes
  navbar.querySelectorAll('.active').forEach(el => el.classList.remove('active'));

  const allLinks = navbar.querySelectorAll('a[href]');
  allLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href || href === '#' || href.startsWith('javascript:')) return;

    const linkFile = href.split('#')[0].split('?')[0];
    if (linkFile && linkFile === pageName) {
      link.classList.add('active');

      // Highlight parent dropdown if inside a dropdown menu
      const parentDropdown = link.closest('.menu-item.dropdown');
      if (parentDropdown) {
        const toggleLink = parentDropdown.querySelector('.dropdown-toggle');
        if (toggleLink) toggleLink.classList.add('active');
      }
    }
  });

  // Highlight Login button on auth pages
  if (pageName === 'login.html' || pageName === 'signup.html') {
    const loginBtn = navbar.querySelector('#login-btn');
    const drawerLoginBtn = navbar.querySelector('#drawer-login-btn');
    if (loginBtn) loginBtn.classList.add('active');
    if (drawerLoginBtn) drawerLoginBtn.classList.add('active');
  }
}

function initNavbarEvents() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const mobileBtn = navbar.querySelector('#mobile-menu-btn');
  const closeBtn = navbar.querySelector('#drawer-close-btn');
  const drawer = navbar.querySelector('#mobile-drawer');
  const overlay = navbar.querySelector('#drawer-overlay');

  if (!mobileBtn || !closeBtn || !drawer || !overlay) return;

  const toggleDrawer = () => {
    drawer.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = drawer.classList.contains('active') ? 'hidden' : '';
  };

  mobileBtn.addEventListener('click', toggleDrawer);
  closeBtn.addEventListener('click', toggleDrawer);
  overlay.addEventListener('click', toggleDrawer);

  // Setup links in drawer to close drawer when clicked
  navbar.querySelectorAll('.drawer-link').forEach(link => {
    link.addEventListener('click', () => {
      if (drawer.classList.contains('active')) {
        toggleDrawer();
      }
    });
  });
}


/* ==========================================================================
   1. Theme Engine (Light / Dark Mode with light-dark() CSS variables)
   ========================================================================== */
function initThemeEngine() {
  const themeToggle = document.getElementById('theme-toggle');
  if (!themeToggle) return;

  // Retrieve theme preference or default to system
  const savedTheme = localStorage.getItem('cheesso-theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');

  // Apply initial state
  setTheme(initialTheme);

  // Bind toggle click
  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  });
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  document.documentElement.style.colorScheme = theme; // Force light-dark() evaluation
  localStorage.setItem('cheesso-theme', theme);

  // Dispatch custom event if navbar or components need to react
  document.dispatchEvent(new CustomEvent('themechanged', { detail: { theme } }));
}

/* ==========================================================================
   2. RTL Engine (Right to Left layout toggling)
   ========================================================================== */
function initRtlEngine() {
  const rtlToggle = document.getElementById('rtl-toggle');
  if (!rtlToggle) return;

  // Check saved setting
  const savedRtl = localStorage.getItem('cheesso-rtl') === 'true';
  setRtl(savedRtl);

  rtlToggle.addEventListener('click', () => {
    const isRtl = document.documentElement.getAttribute('dir') === 'rtl';
    setRtl(!isRtl);
  });
}

function setRtl(enable) {
  const toggleBtn = document.getElementById('rtl-toggle');
  if (enable) {
    document.documentElement.setAttribute('dir', 'rtl');
    if (toggleBtn) toggleBtn.querySelector('span').textContent = 'LTR';
    localStorage.setItem('cheesso-rtl', 'true');
  } else {
    document.documentElement.setAttribute('dir', 'ltr');
    if (toggleBtn) toggleBtn.querySelector('span').textContent = 'RTL';
    localStorage.setItem('cheesso-rtl', 'false');
  }
}


/* ==========================================================================
   6. Mobile Drawer Synced Button actions
   ========================================================================== */
function initMobileDrawerActions() {
  // Sync the mobile drawer login click to normal login button behavior
  const drawerLoginBtn = document.getElementById('drawer-login-btn');
  const mainLoginBtn = document.getElementById('login-btn');
  
  if (drawerLoginBtn && mainLoginBtn) {
    drawerLoginBtn.addEventListener('click', () => {
      mainLoginBtn.click();
    });
  }
}

/* ==========================================================================
   7. Global Scroll Reveal & Hero Section Immediate Visibility
   ========================================================================== */
function initScrollAnimations() {
  const revealElements = document.querySelectorAll('.scroll-reveal');
  if (!revealElements.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -20px 0px',
    threshold: 0.01
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    // If element is already in initial viewport or hero section, reveal immediately
    if (rect.top < window.innerHeight || el.closest('.hero-section, .about-hero-section, .blog-hero-section, .contact-hero-section')) {
      el.classList.add('revealed');
    } else {
      observer.observe(el);
    }
  });
}

