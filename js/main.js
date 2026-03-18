/* ============================================================
   HOA Member Rights — Main JS
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ── Sticky nav scroll shadow ─────────────────────────────
  const nav = document.querySelector('.nav');
  if (nav) {
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ── Mobile nav toggle ────────────────────────────────────
  const hamburger = document.querySelector('.nav__hamburger');
  const navLinks  = document.querySelector('.nav__links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const open = hamburger.classList.toggle('open');
      navLinks.classList.toggle('open', open);
      hamburger.setAttribute('aria-expanded', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    // Close on link click
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // ── Active nav link ──────────────────────────────────────
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav__links a').forEach(a => {
    const href = a.getAttribute('href');
    if (!href) return;
    // Match current section
    const hrefPath = new URL(href, window.location.href).pathname;
    if (currentPath === hrefPath ||
        (hrefPath !== '/' && currentPath.startsWith(hrefPath.replace(/\/[^/]+\.html$/, '')))) {
      a.classList.add('active');
    }
  });

  // ── State search filter (states/index.html) ──────────────
  const stateSearch = document.getElementById('state-search');
  const stateCards  = document.querySelectorAll('.state-card');
  if (stateSearch && stateCards.length) {
    stateSearch.addEventListener('input', () => {
      const q = stateSearch.value.toLowerCase().trim();
      stateCards.forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = (!q || text.includes(q)) ? '' : 'none';
      });
    });
  }

  // ── Attorney state filter ─────────────────────────────────
  const attorneyFilter = document.getElementById('attorney-state-filter');
  const attorneyCards  = document.querySelectorAll('[data-state]');
  if (attorneyFilter && attorneyCards.length) {
    attorneyFilter.addEventListener('change', () => {
      const val = attorneyFilter.value;
      attorneyCards.forEach(card => {
        card.style.display = (!val || card.dataset.state === val) ? '' : 'none';
      });
    });
  }

  // ── Newsletter form ───────────────────────────────────────
  document.querySelectorAll('.newsletter-form').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const emailInput = form.querySelector('input[type="email"]');
      const btn        = form.querySelector('button');
      if (!emailInput || !emailInput.value) return;
      // Simulate submission (replace with real endpoint)
      btn.textContent = 'Subscribed!';
      btn.disabled = true;
      btn.style.background = '#2e7d32';
      emailInput.value = '';
    });
  });

  // ── Smooth scroll for anchor links ───────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 72;
        const top = target.getBoundingClientRect().top + window.scrollY - offset - 16;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // ── Animate cards on scroll ───────────────────────────────
  if ('IntersectionObserver' in window) {
    const cards = document.querySelectorAll('.card, .state-card, .stats-band__grid > *');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    cards.forEach((card, i) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = `opacity .45s ease ${i * 0.06}s, transform .45s ease ${i * 0.06}s, box-shadow .22s ease, border-color .22s ease`;
      io.observe(card);
    });
  }

  // ── Print button helper ───────────────────────────────────
  document.querySelectorAll('[data-print]').forEach(btn => {
    btn.addEventListener('click', () => window.print());
  });

  // ── Copy to clipboard ─────────────────────────────────────
  document.querySelectorAll('[data-copy]').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = document.querySelector(btn.dataset.copy);
      if (!target) return;
      navigator.clipboard.writeText(target.innerText).then(() => {
        const orig = btn.textContent;
        btn.textContent = 'Copied!';
        setTimeout(() => btn.textContent = orig, 2000);
      });
    });
  });

});
