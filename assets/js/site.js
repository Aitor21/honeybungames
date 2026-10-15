// Honey Bun Games: small, dependency-free interactions.
(() => {
  const root = document.documentElement;
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];

  // Header: glass panel once scrolled, hide on scroll down, show on scroll up.
  const header = $('[data-header]');
  const hero = $('[data-hero]');
  let lastY = scrollY;
  let ticking = false;
  const onScroll = () => {
    const y = scrollY;
    header.classList.toggle('is-scrolled', y > 40);
    header.classList.toggle('is-hidden', y > 600 && y > lastY && !root.classList.contains('menu-open'));
    if (hero && !reduceMotion && y < innerHeight * 1.2) hero.style.setProperty('--sy', y.toFixed(1));
    lastY = y;
    ticking = false;
  };
  addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(onScroll); ticking = true; }
  }, { passive: true });
  onScroll();

  // Mobile menu
  const toggle = $('[data-menu-toggle]');
  const menu = $('[data-menu]');
  const setMenu = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    root.classList.toggle('menu-open', open);
    if (open) {
      menu.hidden = false;
      requestAnimationFrame(() => requestAnimationFrame(() => menu.classList.add('is-open')));
    } else {
      menu.classList.remove('is-open');
      setTimeout(() => { if (!menu.classList.contains('is-open')) menu.hidden = true; }, reduceMotion ? 0 : 600);
    }
  };
  toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  menu.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
  addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && root.classList.contains('menu-open')) { setMenu(false); toggle.focus(); }
  });
  matchMedia('(min-width: 861px)').addEventListener('change', (e) => { if (e.matches) setMenu(false); });

  // Highlight the nav link for the section in view.
  const navLinks = $$('.nav__links a[href^="#"]');
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((a) => a.classList.toggle('is-current', a.getAttribute('href') === '#' + entry.target.id));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  $$('main section[id]').forEach((s) => spy.observe(s));

  // Scroll reveal, staggered within each parent.
  const reveal = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const siblings = $$(':scope > [data-reveal]', entry.target.parentElement);
      entry.target.style.setProperty('--d', Math.max(0, siblings.indexOf(entry.target)) * 0.08 + 's');
      entry.target.classList.add('is-in');
      reveal.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  $$('[data-reveal]').forEach((el) => reveal.observe(el));

  // Hero: layered parallax that follows the pointer.
  if (hero && finePointer && !reduceMotion) {
    let raf = 0;
    hero.addEventListener('pointermove', (e) => {
      const r = hero.getBoundingClientRect();
      const mx = ((e.clientX - r.left) / r.width - 0.5) * 2;
      const my = ((e.clientY - r.top) / r.height - 0.5) * 2;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        hero.style.setProperty('--mx', mx.toFixed(3));
        hero.style.setProperty('--my', my.toFixed(3));
      });
    });
    hero.addEventListener('pointerleave', () => {
      hero.style.setProperty('--mx', 0);
      hero.style.setProperty('--my', 0);
    });
  }

  // Heart burst on clicks inside the hero and on the "love" buttons.
  const heart = '<svg viewBox="0 0 24 24"><use href="#i-heart"/></svg>';
  const burst = (x, y, n = 9) => {
    if (reduceMotion) return;
    for (let i = 0; i < n; i++) {
      const p = document.createElement('span');
      p.className = 'burst';
      p.innerHTML = heart;
      const a = (Math.PI * 2 * i) / n + Math.random() * 0.6;
      const d = 50 + Math.random() * 60;
      p.style.left = x + 'px';
      p.style.top = y + 'px';
      p.style.setProperty('--dx', Math.cos(a) * d + 'px');
      p.style.setProperty('--dy', Math.sin(a) * d - 30 + 'px');
      p.style.setProperty('--s', (0.6 + Math.random() * 0.8).toFixed(2));
      p.style.setProperty('--rot', (Math.random() * 80 - 40).toFixed(0) + 'deg');
      if (i % 3 === 0) p.style.color = '#efa332';
      document.body.appendChild(p);
      p.addEventListener('animationend', () => p.remove());
    }
  };
  document.addEventListener('click', (e) => {
    if (e.target.closest('.btn--love') || (e.target.closest('[data-hero]') && !e.target.closest('a, button'))) {
      burst(e.clientX, e.clientY);
    }
  });

  // Boop the capybara.
  $$('[data-boop]').forEach((el) => {
    el.addEventListener('click', (e) => {
      el.classList.remove('is-booped');
      void el.offsetWidth;
      el.classList.add('is-booped');
      burst(e.clientX, e.clientY, 6);
    });
    el.addEventListener('animationend', (e) => { if (e.animationName === 'boop') el.classList.remove('is-booped'); });
  });

  // 3D tilt + glare on game art.
  if (finePointer && !reduceMotion) {
    $$('[data-tilt]').forEach((el) => {
      el.addEventListener('pointermove', (e) => {
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        el.classList.add('is-tilting');
        el.style.setProperty('--ry', ((px - 0.5) * 10).toFixed(2) + 'deg');
        el.style.setProperty('--rx', ((0.5 - py) * 8).toFixed(2) + 'deg');
        el.style.setProperty('--gx', (px * 100).toFixed(1) + '%');
        el.style.setProperty('--gy', (py * 100).toFixed(1) + '%');
        el.style.setProperty('--go', 1);
      });
      el.addEventListener('pointerleave', () => {
        el.classList.remove('is-tilting');
        ['--rx', '--ry'].forEach((p) => el.style.setProperty(p, '0deg'));
        el.style.setProperty('--go', 0);
      });
    });
  }

  // Featured game gallery: thumbnails swap the main image.
  const main = $('[data-gallery-main]');
  if (main) {
    const img = $('img', main);
    const source = $('source', main);
    const thumbs = $$('.thumb');
    thumbs.forEach((btn) => {
      btn.addEventListener('click', () => {
        if (btn.classList.contains('is-active')) return;
        thumbs.forEach((t) => { t.classList.toggle('is-active', t === btn); t.setAttribute('aria-pressed', String(t === btn)); });
        const { src, w, h, alt } = btn.dataset;
        const small = Math.round(w / 2);
        const set = (ext) => `${src}-${small}.${ext} ${small}w, ${src}-${w}.${ext} ${w}w`;
        const next = new Image();
        next.sizes = img.sizes;
        next.srcset = set('webp');
        img.classList.add('is-swapping');
        const swap = () => {
          source.srcset = set('avif');
          img.srcset = set('webp');
          img.src = `${src}-${small}.webp`;
          img.width = w;
          img.height = h;
          img.alt = alt;
          requestAnimationFrame(() => img.classList.remove('is-swapping'));
        };
        (next.decode ? next.decode() : Promise.resolve()).then(swap, swap);
      });
    });
  }

  // Copy email to clipboard.
  $$('[data-copy]').forEach((btn) => {
    const label = $('[data-copy-label]', btn);
    btn.addEventListener('click', async (e) => {
      try {
        await navigator.clipboard.writeText(btn.dataset.copy);
        label.textContent = 'Copied!';
        btn.classList.add('is-copied');
        burst(e.clientX, e.clientY, 7);
      } catch {
        label.textContent = 'Press Ctrl+C';
        const range = document.createRange();
        range.selectNodeContents($('.mailcard__addr'));
        getSelection().removeAllRanges();
        getSelection().addRange(range);
      }
      setTimeout(() => { label.textContent = 'Copy'; btn.classList.remove('is-copied'); }, 2200);
    });
  });

  // Trailer modal: the YouTube iframe only loads when someone asks for it.
  const dialog = $('[data-trailer-dialog]');
  const frame = $('[data-trailer-frame]');
  let opener = null;
  $$('[data-trailer]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.trailer;
      if (typeof dialog.showModal !== 'function') {
        open(`https://www.youtube.com/watch?v=${id}`, '_blank', 'noopener');
        return;
      }
      opener = btn;
      frame.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1" title="${btn.dataset.trailerTitle || 'Trailer'}" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>`;
      dialog.showModal();
    });
  });
  if (dialog) {
    $('[data-trailer-close]').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', (e) => { if (e.target === dialog) dialog.close(); });
    dialog.addEventListener('close', () => { frame.innerHTML = ''; if (opener) opener.focus(); });
  }

  const year = $('[data-year]');
  if (year) year.textContent = new Date().getFullYear();
})();
