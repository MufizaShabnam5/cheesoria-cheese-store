

document.addEventListener('DOMContentLoaded', () => {
  initThemeEngine();
  initRtlEngine();
  initSidebarDrawer();
  initTopbarDropdowns();
  initSidebarNavigation();
  initLogoutHandlers();
  initSettingsForm();
});

function initThemeEngine() {
  const themeBtn = document.getElementById('dash-theme-toggle');
  
  const savedTheme = localStorage.getItem('cheesso-theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');

  setTheme(initialTheme);

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      setTheme(next);
    });
  }
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  document.documentElement.style.colorScheme = theme; 
  localStorage.setItem('cheesso-theme', theme);
  document.dispatchEvent(new CustomEvent('themechanged', { detail: { theme } }));
}

function initRtlEngine() {
  const rtlBtn = document.getElementById('dash-rtl-toggle');
  const savedRtl = localStorage.getItem('cheesso-rtl') === 'true';

  setRtl(savedRtl);

  if (rtlBtn) {
    rtlBtn.addEventListener('click', () => {
      const currentDir = document.documentElement.getAttribute('dir');
      const isRtl = currentDir === 'rtl';
      setRtl(!isRtl);
    });
  }
}

function setRtl(enable) {
  document.documentElement.setAttribute('dir', enable ? 'rtl' : 'ltr');
  localStorage.setItem('cheesso-rtl', enable);
}

function initSidebarDrawer() {
  const hamburger = document.getElementById('hamburger-menu-btn');
  const sidebar = document.getElementById('dashboard-sidebar');
  const closeBtn = document.getElementById('sidebar-close-btn');
  const backdrop = document.getElementById('sidebar-backdrop');

  function openSidebar() {
    if (sidebar) sidebar.classList.add('active');
    if (backdrop) backdrop.classList.add('active');
  }

  function closeSidebar() {
    if (sidebar) sidebar.classList.remove('active');
    if (backdrop) backdrop.classList.remove('active');
  }

  if (hamburger) hamburger.addEventListener('click', openSidebar);
  if (closeBtn) closeBtn.addEventListener('click', closeSidebar);
  if (backdrop) backdrop.addEventListener('click', closeSidebar);
}

function initTopbarDropdowns() {
  const notifBtn = document.getElementById('notif-bell-btn');
  const notifDropdown = document.getElementById('notif-dropdown');
  const markReadBtn = document.getElementById('mark-all-read');
  const notifBadge = document.querySelector('.notif-badge');

  const profileBtn = document.getElementById('profile-menu-btn');
  const profileDropdown = document.getElementById('profile-dropdown');

  if (notifBtn && notifDropdown) {
    notifBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (profileDropdown) profileDropdown.classList.add('hidden');
      notifDropdown.classList.toggle('hidden');
    });
  }

  if (markReadBtn && notifBadge) {
    markReadBtn.addEventListener('click', () => {
      const unreadItems = document.querySelectorAll('.notif-item.unread');
      unreadItems.forEach(item => item.classList.remove('unread'));
      notifBadge.style.display = 'none';
    });
  }

  if (profileBtn && profileDropdown) {
    profileBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (notifDropdown) notifDropdown.classList.add('hidden');
      profileDropdown.classList.toggle('hidden');
    });
  }

  document.addEventListener('click', () => {
    if (notifDropdown) notifDropdown.classList.add('hidden');
    if (profileDropdown) profileDropdown.classList.add('hidden');
  });
}

function initSidebarNavigation() {
  const navItems = document.querySelectorAll('.sidebar-nav .nav-item');
  const navTriggers = document.querySelectorAll('.nav-trigger');
  const viewSections = document.querySelectorAll('.dash-view-section');
  const bcTitle = document.getElementById('current-section-title');

  function switchSection(sectionId) {
    navItems.forEach(item => {
      const itemSection = item.getAttribute('data-section');
      if (itemSection === sectionId) {
        item.classList.add('active');
        const text = item.querySelector('.nav-text')?.textContent || 'Dashboard';
        if (bcTitle) bcTitle.textContent = text;
      } else {
        item.classList.remove('active');
      }
    });

    viewSections.forEach(section => {
      section.classList.remove('active');
    });

    const targetSection = document.getElementById(`section-${sectionId}`);
    if (targetSection) {
      targetSection.classList.add('active');
    } else {
      const defaultSection = document.getElementById('section-overview');
      if (defaultSection) defaultSection.classList.add('active');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });

    const sidebar = document.getElementById('dashboard-sidebar');
    const backdrop = document.getElementById('sidebar-backdrop');
    if (sidebar) sidebar.classList.remove('active');
    if (backdrop) backdrop.classList.remove('active');
  }

  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const sectionId = item.getAttribute('data-section');
      if (sectionId) switchSection(sectionId);
    });
  });

  navTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const target = trigger.getAttribute('data-target');
      if (target) switchSection(target);
    });
  });

  const hash = window.location.hash.replace('#', '');
  if (hash && document.getElementById(`section-${hash}`)) {
    switchSection(hash);
  }
}

function initLogoutHandlers() {
  const sidebarLogout = document.getElementById('sidebar-logout-btn');
  const headerLogout = document.getElementById('header-logout-btn');
  const toast = document.getElementById('logout-toast');

  function handleLogout() {
    if (toast) toast.classList.remove('hidden');
    setTimeout(() => {
      window.location.href = 'home1.html';
    }, 1400);
  }

  if (sidebarLogout) sidebarLogout.addEventListener('click', handleLogout);
  if (headerLogout) headerLogout.addEventListener('click', handleLogout);
}

function initSettingsForm() {
  const form = document.getElementById('settings-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      if (btn) {
        const originalText = btn.innerHTML;
        btn.innerHTML = '<span>Settings Saved! ✨</span>';
        setTimeout(() => {
          btn.innerHTML = originalText;
        }, 2000);
      }
    });
  }
}
