/* ==========================================================================
   CHEESORIA LUXURY EDITORIAL BLOG JAVASCRIPT (js/blog.js)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initCategoryFilters();
  initLiveSearch();
  initBookmarks();
  initNewsletterForms();
  initLoadMore();
});

/* ==========================================================================
   1. Category Pill Filtering Logic
   ========================================================================== */
function initCategoryFilters() {
  const categoryPills = document.querySelectorAll('.cat-pill');
  const blogCards = document.querySelectorAll('.blog-card');
  const countBadge = document.getElementById('article-count-badge');
  const emptyState = document.getElementById('blog-empty-state');
  const resetBtn = document.getElementById('reset-filter-btn');

  if (!categoryPills.length || !blogCards.length) return;

  const filterArticles = (selectedCategory) => {
    let visibleCount = 0;
    const searchInput = document.getElementById('blog-search-input');
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';

    blogCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      const titleText = card.querySelector('.card-title').textContent.toLowerCase();
      const excerptText = card.querySelector('.card-excerpt').textContent.toLowerCase();

      const matchesCategory = (selectedCategory === 'all' || cardCategory === selectedCategory);
      const matchesSearch = (!query || titleText.includes(query) || excerptText.includes(query));

      if (matchesCategory && matchesSearch) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    // Update story count badge
    if (countBadge) {
      countBadge.textContent = `${visibleCount} ${visibleCount === 1 ? 'Story' : 'Stories'} Found`;
    }

    // Toggle empty state display
    if (emptyState) {
      if (visibleCount === 0) {
        emptyState.classList.remove('hidden');
      } else {
        emptyState.classList.add('hidden');
      }
    }
  };

  categoryPills.forEach(pill => {
    pill.addEventListener('click', () => {
      categoryPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const category = pill.getAttribute('data-category');
      filterArticles(category);
    });
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      const searchInput = document.getElementById('blog-search-input');
      const searchClear = document.getElementById('blog-search-clear');
      if (searchInput) searchInput.value = '';
      if (searchClear) searchClear.classList.add('hidden');

      categoryPills.forEach(p => p.classList.remove('active'));
      const allPill = document.querySelector('.cat-pill[data-category="all"]');
      if (allPill) allPill.classList.add('active');

      filterArticles('all');
    });
  }
}

/* ==========================================================================
   2. Live Search Keyword Filtering
   ========================================================================== */
function initLiveSearch() {
  const searchInput = document.getElementById('blog-search-input');
  const searchClear = document.getElementById('blog-search-clear');
  const categoryPills = document.querySelectorAll('.cat-pill');

  if (!searchInput) return;

  const triggerFilter = () => {
    const activePill = document.querySelector('.cat-pill.active');
    const selectedCategory = activePill ? activePill.getAttribute('data-category') : 'all';

    if (searchClear) {
      if (searchInput.value.length > 0) {
        searchClear.classList.remove('hidden');
      } else {
        searchClear.classList.add('hidden');
      }
    }

    const blogCards = document.querySelectorAll('.blog-card');
    const countBadge = document.getElementById('article-count-badge');
    const emptyState = document.getElementById('blog-empty-state');
    const query = searchInput.value.toLowerCase().trim();

    let visibleCount = 0;
    blogCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      const titleText = card.querySelector('.card-title').textContent.toLowerCase();
      const excerptText = card.querySelector('.card-excerpt').textContent.toLowerCase();

      const matchesCategory = (selectedCategory === 'all' || cardCategory === selectedCategory);
      const matchesSearch = (!query || titleText.includes(query) || excerptText.includes(query));

      if (matchesCategory && matchesSearch) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (countBadge) {
      countBadge.textContent = `${visibleCount} ${visibleCount === 1 ? 'Story' : 'Stories'} Found`;
    }

    if (emptyState) {
      if (visibleCount === 0) {
        emptyState.classList.remove('hidden');
      } else {
        emptyState.classList.add('hidden');
      }
    }
  };

  searchInput.addEventListener('input', triggerFilter);

  if (searchClear) {
    searchClear.addEventListener('click', () => {
      searchInput.value = '';
      searchClear.classList.add('hidden');
      triggerFilter();
    });
  }
}

/* ==========================================================================
   3. Bookmark / Like Toggle Handler
   ========================================================================== */
function initBookmarks() {
  const bookmarkBtns = document.querySelectorAll('.bookmark-btn, .bookmark-btn-sm');

  bookmarkBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();

      btn.classList.toggle('active');
      const isBookmarked = btn.classList.contains('active');

      if (isBookmarked) {
        showBlogToast('Story Bookmarked', 'Saved to your private Connoisseur reading list.');
      } else {
        showBlogToast('Bookmark Removed', 'Story removed from your saved list.');
      }
    });
  });
}

/* ==========================================================================
   4. Newsletter Subscription Form Handler
   ========================================================================== */
function initNewsletterForms() {
  const mainForm = document.getElementById('main-newsletter-form');
  const sidebarForm = document.getElementById('sidebar-newsletter-form');

  const handleSub = (e, emailValue) => {
    e.preventDefault();
    if (!emailValue) return;

    showBlogToast(
      'Subscribed to The Connoisseur Gazette!',
      `Welcome ${emailValue}. You will now receive private cave release alerts and sommelier pairing notes.`
    );
  };

  if (mainForm) {
    mainForm.addEventListener('submit', (e) => {
      const emailInput = document.getElementById('main-newsletter-email');
      handleSub(e, emailInput ? emailInput.value : '');
      if (emailInput) emailInput.value = '';
    });
  }

  if (sidebarForm) {
    sidebarForm.addEventListener('submit', (e) => {
      const emailInput = sidebarForm.querySelector('.sidebar-email-input');
      handleSub(e, emailInput ? emailInput.value : '');
      if (emailInput) emailInput.value = '';
    });
  }
}

/* ==========================================================================
   5. Load More Stories Simulation
   ========================================================================== */
function initLoadMore() {
  const loadMoreBtn = document.getElementById('btn-load-more');
  if (!loadMoreBtn) return;

  let loadCount = 0;

  loadMoreBtn.addEventListener('click', () => {
    const spinner = loadMoreBtn.querySelector('.spinner-icon');
    const textSpan = loadMoreBtn.querySelector('span:not(.spinner-icon)');

    if (spinner) spinner.classList.remove('hidden');
    if (textSpan) textSpan.textContent = 'Fetching Subterranean Vault Stories...';
    loadMoreBtn.disabled = true;

    setTimeout(() => {
      if (spinner) spinner.classList.add('hidden');
      loadCount++;

      if (loadCount >= 2) {
        if (textSpan) textSpan.textContent = 'All Vault Stories Loaded ✨';
        loadMoreBtn.style.opacity = '0.6';
        loadMoreBtn.style.cursor = 'default';
        showBlogToast('Archive Complete', 'You have viewed all published stories in The Gazette.');
      } else {
        if (textSpan) textSpan.textContent = 'Load More Gazette Stories';
        loadMoreBtn.disabled = false;
        showBlogToast('Stories Updated', 'Additional master affineur articles loaded into view.');
      }
    }, 900);
  });
}

/* Helper Toast Function */
function showBlogToast(title, message) {
  const toast = document.getElementById('blog-toast');
  const toastTitle = document.getElementById('toast-title');
  const toastMessage = document.getElementById('toast-message');
  const toastClose = document.getElementById('toast-close-btn');

  if (!toast) return;

  if (toastTitle) toastTitle.textContent = title;
  if (toastMessage) toastMessage.textContent = message;

  toast.classList.remove('hidden');

  const closeToast = () => {
    toast.classList.add('hidden');
  };

  if (toastClose) toastClose.onclick = closeToast;

  setTimeout(closeToast, 4000);
}
