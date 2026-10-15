// Honey Bun Games: small, dependency-free interactions.
(() => {
  const root = document.documentElement;
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];

  // Analytics: GoatCounter loads only once a site code is set in <meta name="goatcounter-code">.
  // Links tagged with data-goatcounter-click are counted by GoatCounter itself; track() covers the rest.
  const gcCode = ($('meta[name="goatcounter-code"]')?.content || '').trim();
  if (/^[a-z0-9-]+$/i.test(gcCode)) {
    const gc = document.createElement('script');
    gc.async = true;
    gc.src = 'https://gc.zgo.at/count.js';
    gc.dataset.goatcounter = `https://${gcCode}.goatcounter.com/count`;
    document.head.append(gc);
  }
  const track = (path, title) => {
    if (window.goatcounter && window.goatcounter.count) window.goatcounter.count({ path, title: title || path, event: true });
  };

  // Header: glass panel once scrolled, hide on scroll down, show on scroll up.
  const header = $('[data-header]');
  const hero = $('[data-hero]');
  const progress = $('[data-progress]');
  let lastY = scrollY;
  let ticking = false;
  const onScroll = () => {
    const y = scrollY;
    const max = document.documentElement.scrollHeight - innerHeight;
    if (progress) progress.style.transform = `scaleX(${max > 0 ? Math.min(1, y / max) : 0})`;
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

  // Split display headings into letters so they can bounce in and jiggle on hover.
  // All split headings sit below the fold, so this waits until the browser is idle.
  const splitHeading = (el) => {
    el.setAttribute('aria-label', el.textContent.replace(/\s+/g, ' ').trim());
    let i = 0;
    const walk = (node) => {
      [...node.childNodes].forEach((child) => {
        if (child.nodeType === 1) { walk(child); return; }
        if (child.nodeType !== 3 || !child.textContent.trim()) return;
        const frag = document.createDocumentFragment();
        child.textContent.split(/(\s+)/).forEach((part) => {
          if (!part) return;
          if (/^\s+$/.test(part)) { frag.append(' '); return; }
          const w = document.createElement('span');
          w.className = 'w';
          w.setAttribute('aria-hidden', 'true');
          [...part].forEach((c) => {
            const ch = document.createElement('span');
            ch.className = 'ch';
            ch.style.setProperty('--i', i++);
            ch.textContent = c;
            w.append(ch);
          });
          frag.append(w);
        });
        child.replaceWith(frag);
      });
    };
    walk(el);
    el.classList.add('split');
    el.addEventListener('pointerover', (e) => {
      const ch = e.target.closest('.ch');
      if (!ch || reduceMotion || ch.classList.contains('is-jelly')) return;
      ch.classList.add('is-jelly');
      ch.addEventListener('animationend', () => ch.classList.remove('is-jelly'), { once: true });
    });
  };
  const idle = window.requestIdleCallback || ((fn) => setTimeout(fn, 200));
  idle(() => $$('[data-split]').forEach(splitHeading), { timeout: 1500 });

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
        track('email/copy');
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
      track('trailer/' + id, btn.dataset.trailerTitle);
      frame.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1" title="${btn.dataset.trailerTitle || 'Trailer'}" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>`;
      dialog.showModal();
    });
  });
  if (dialog) {
    $('[data-trailer-close]').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', (e) => { if (e.target === dialog) dialog.close(); });
    dialog.addEventListener('close', () => { frame.innerHTML = ''; if (opener) opener.focus(); });
  }

  // Magnetic buttons: they lean toward the pointer.
  if (finePointer && !reduceMotion) {
    $$('.btn').forEach((btn) => {
      btn.addEventListener('pointermove', (e) => {
        const r = btn.getBoundingClientRect();
        btn.style.setProperty('--mag-x', ((e.clientX - r.left - r.width / 2) * 0.22).toFixed(1) + 'px');
        btn.style.setProperty('--mag-y', ((e.clientY - r.top - r.height / 2) * 0.32).toFixed(1) + 'px');
      });
      btn.addEventListener('pointerleave', () => {
        btn.style.removeProperty('--mag-x');
        btn.style.removeProperty('--mag-y');
      });
    });
  }

  // Marquee that speeds up with scroll velocity.
  const marquee = $('.marquee');
  if (marquee && !reduceMotion) {
    const track = $('.marquee__track', marquee);
    root.classList.add('js-marquee');
    let x = 0, boost = 0, prevY = scrollY, last = performance.now(), visible = false, hover = false, raf = 0;
    let half = track.scrollWidth / 2;
    addEventListener('resize', () => { half = track.scrollWidth / 2; }, { passive: true });
    const loop = (now) => {
      const dt = Math.min(64, now - last);
      last = now;
      const dy = scrollY - prevY;
      prevY = scrollY;
      boost = boost * 0.92 + Math.abs(dy) * 0.08;
      const speed = (hover ? 0.015 : 0.05) + Math.min(boost * 0.05, 1.2);
      x -= speed * dt * (dy < 0 ? -0.35 : 1);
      if (x <= -half) x += half;
      if (x > 0) x -= half;
      track.style.transform = `translate3d(${x.toFixed(2)}px, 0, 0)`;
      raf = visible ? requestAnimationFrame(loop) : 0;
    };
    new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !raf) { last = performance.now(); raf = requestAnimationFrame(loop); }
    }).observe(marquee);
    marquee.addEventListener('pointerenter', () => { hover = true; });
    marquee.addEventListener('pointerleave', () => { hover = false; });
  }

  // Hero: a soft trail of hearts behind the pointer.
  if (hero && finePointer && !reduceMotion) {
    let lastTrail = 0;
    hero.addEventListener('pointermove', (e) => {
      const now = performance.now();
      if (now - lastTrail < 70 || e.target.closest('a, button')) return;
      lastTrail = now;
      const t = document.createElement('span');
      t.className = 'trail';
      t.innerHTML = heart;
      t.style.left = e.clientX + 'px';
      t.style.top = e.clientY + 'px';
      t.style.setProperty('--rot', (Math.random() * 40 - 20).toFixed(0) + 'deg');
      if (Math.random() < 0.3) t.style.color = '#ca96ff';
      document.body.appendChild(t);
      t.addEventListener('animationend', () => t.remove());
    });
  }

  // Mini demo: swipe right on humans, left on vampires.
  const app = $('[data-swipe]');
  if (app) {
    const deck = $('[data-deck]', app);
    const cards = $$('.pcard', deck);
    const bar = $('[data-thirst]', app);
    const barFill = $('span', bar);
    const thirstRow = $('.app-thirst', app);
    const queue = $('[data-queue]', app);
    const result = $('[data-result]', app);
    const live = $('[data-swipe-live]', app);
    const screen = $('.phone__screen', app);
    const R = {
      kicker: $('[data-result-kicker]', app), title: $('[data-result-title]', app), sub: $('[data-result-sub]', app),
      fangs: $('[data-result-fangs]', app), actions: $('[data-result-actions]', app),
    };
    let index = 0, thirst = 50, caught = 0, busy = false, resultTimer = 0;

    queue.innerHTML = cards.map(() => '<svg viewBox="0 0 24 24"><use href="#i-user"/></svg>').join('');
    const icons = $$('svg', queue);

    const layout = () => {
      cards.forEach((c, i) => {
        const depth = i - index;
        c.style.zIndex = String(cards.length - i);
        c.style.setProperty('--depth', Math.max(0, Math.min(depth, 2)));
        c.style.opacity = depth < 0 ? '0' : depth > 2 ? '0' : '1';
        c.setAttribute('aria-hidden', String(depth !== 0));
        if (depth >= 0) { c.classList.remove('is-gone'); c.style.transform = ''; }
      });
      icons.forEach((ic, i) => ic.classList.toggle('is-done', i < index));
    };
    const setThirst = (v) => {
      thirst = Math.max(0, Math.min(100, v));
      barFill.style.setProperty('--t', (thirst / 100).toFixed(2));
      bar.setAttribute('aria-valuenow', String(Math.round(thirst)));
      thirstRow.classList.remove('is-pulse');
      void thirstRow.offsetWidth;
      thirstRow.classList.add('is-pulse');
    };
    const drips = (n = 10) => {
      if (reduceMotion) return;
      for (let i = 0; i < n; i++) {
        const d = document.createElement('span');
        d.className = 'drip';
        d.innerHTML = '<svg viewBox="0 0 24 24"><use href="#i-drop"/></svg>';
        d.style.left = 6 + Math.random() * 88 + '%';
        d.style.animationDelay = (Math.random() * 0.4).toFixed(2) + 's';
        d.style.setProperty('--fall', 300 + Math.random() * 300 + 'px');
        screen.appendChild(d);
        d.addEventListener('animationend', () => d.remove());
      }
    };
    const showResult = (kicker, title, sub, { chomp = false, end = false, fangs = chomp || end } = {}) => {
      R.kicker.textContent = kicker;
      R.title.textContent = title;
      R.sub.textContent = sub;
      R.fangs.hidden = !fangs;
      R.actions.hidden = !end;
      result.hidden = false;
      result.classList.toggle('is-chomp', chomp);
      live.textContent = `${kicker} ${title}. ${sub}`;
      clearTimeout(resultTimer);
      if (!end) resultTimer = setTimeout(hideResult, 1700);
    };
    const hideResult = () => {
      result.hidden = true;
      busy = false;
      if (index >= cards.length || thirst <= 0) endNight();
    };
    const endNight = () => {
      track(thirst <= 0 ? 'swipe-demo/game-over' : 'swipe-demo/survived');
      if (thirst <= 0) {
        showResult('You died of thirst…', 'GAME OVER', 'Do you want to retry?', { end: true });
      } else {
        const humans = cards.filter((c) => c.dataset.human === 'true').length;
        showResult('The sun is rising…', `Night 1 survived!`, `You caught ${caught} of ${humans} humans. The full game has many more nights (and teeth).`, { end: true });
      }
      busy = true;
    };
    const decide = (dir) => {
      if (busy || index >= cards.length) return;
      busy = true;
      if (index === 0) track('swipe-demo/start');
      const card = cards[index];
      const human = card.dataset.human === 'true';
      const right = dir > 0;
      card.classList.remove('is-dragging');
      card.classList.add('is-gone');
      const fly = innerWidth * 0.9 * dir;
      card.style.transition = 'transform .55s cubic-bezier(.3,.6,.4,1), opacity .55s';
      card.style.transform = `translate(${fly}px, -40px) rotate(${dir * 28}deg)`;
      card.style.opacity = '0';
      $('.stamp--yum', card).style.opacity = right ? '1' : '0';
      $('.stamp--yuck', card).style.opacity = right ? '0' : '1';
      index++;
      setTimeout(() => {
        card.style.transition = '';
        layout();
        if (right && human) {
          caught++;
          setThirst(thirst + 40);
          drips(14);
          showResult('You got lucky…', 'What a great catch!', 'You’ve replenished your strength.', { chomp: true });
        } else if (right && !human) {
          setThirst(thirst - 15);
          showResult('And so…', 'they were both vampires', 'No blood was sucked tonight.', { fangs: true });
        } else if (!right && !human) {
          setThirst(thirst - 5);
          showResult('Good instincts…', 'that one bites back', 'Nobody got bitten. Your thirst still grows.', { fangs: true });
        } else {
          setThirst(thirst - 20);
          showResult('Hmm…', 'dinner got away', 'They were human. Your thirst grows.');
        }
      }, 260);
    };
    const restart = () => {
      track('swipe-demo/replay');
      index = 0; caught = 0; busy = false;
      result.hidden = true;
      cards.forEach((c) => { c.style.transition = 'none'; $$('.stamp', c).forEach((st) => (st.style.opacity = '')); });
      layout();
      requestAnimationFrame(() => cards.forEach((c) => (c.style.transition = '')));
      setThirst(50);
      live.textContent = 'New night. Four profiles to go.';
    };

    // Dragging
    let drag = null;
    deck.addEventListener('pointerdown', (e) => {
      const card = cards[index];
      if (busy || !card || !card.contains(e.target)) return;
      drag = { id: e.pointerId, x: e.clientX, y: e.clientY, dx: 0, dy: 0, card };
      card.setPointerCapture(e.pointerId);
      card.classList.add('is-dragging');
    });
    deck.addEventListener('pointermove', (e) => {
      if (!drag || e.pointerId !== drag.id) return;
      drag.dx = e.clientX - drag.x;
      drag.dy = (e.clientY - drag.y) * 0.4;
      const { card, dx, dy } = drag;
      card.style.transform = `translate(${dx}px, ${dy}px) rotate(${dx / 14}deg)`;
      const k = Math.min(1, Math.abs(dx) / 110);
      const yum = $('.stamp--yum', card), yuck = $('.stamp--yuck', card);
      yum.style.opacity = dx > 0 ? k : 0;
      yuck.style.opacity = dx < 0 ? k : 0;
      yum.style.setProperty('--sy', 0.6 + 0.4 * (dx > 0 ? k : 0));
      yuck.style.setProperty('--sn', 0.6 + 0.4 * (dx < 0 ? k : 0));
    });
    const release = (e) => {
      if (!drag || e.pointerId !== drag.id) return;
      const { card, dx } = drag;
      drag = null;
      if (Math.abs(dx) > 90) { decide(Math.sign(dx)); return; }
      card.classList.remove('is-dragging');
      card.style.transform = '';
      $$('.stamp', card).forEach((st) => (st.style.opacity = ''));
    };
    deck.addEventListener('pointerup', release);
    deck.addEventListener('pointercancel', release);

    const press = (btn) => { btn.classList.add('is-press'); setTimeout(() => btn.classList.remove('is-press'), 140); };
    $$('[data-swipe-btn]', app).forEach((btn) => btn.addEventListener('click', () => decide(btn.dataset.swipeBtn === 'right' ? 1 : -1)));
    deck.addEventListener('keydown', (e) => {
      if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
      e.preventDefault();
      const right = e.key === 'ArrowRight';
      press($(`[data-swipe-btn="${right ? 'right' : 'left'}"]`, app));
      decide(right ? 1 : -1);
    });
    result.addEventListener('click', (e) => { if (!R.actions.hidden || e.target.closest('a, button')) return; clearTimeout(resultTimer); hideResult(); });
    $('[data-swipe-restart]', app).addEventListener('click', restart);

    layout();
  }

  // Blaster Buds card: gameplay clips play while the card is in view.
  $$('.card__clip').forEach((video) => {
    const media = video.closest('.card__media');
    const h264 = video.canPlayType('video/mp4; codecs="avc1.42E01E"');
    const clips = video.dataset.clips.split(' ').map((c) => (h264 ? c : c.replace(/\.mp4$/, '.webm')));
    let n = 0, loaded = false;
    const play = () => {
      if (!loaded) { video.src = clips[0]; loaded = true; }
      video.play().then(() => { video.classList.add('is-playing'); media.classList.add('is-playing'); }).catch(() => {});
    };
    const stop = () => { video.pause(); video.classList.remove('is-playing'); media.classList.remove('is-playing'); };
    video.addEventListener('ended', () => { n = (n + 1) % clips.length; video.src = clips[n]; video.play().catch(() => {}); });
    if (reduceMotion) {
      media.addEventListener('pointerenter', play);
      media.addEventListener('pointerleave', stop);
      return;
    }
    new IntersectionObserver(([entry]) => (entry.isIntersecting ? play() : stop()), { threshold: 0.6 }).observe(media);
  });

  // Contact: chat bubbles "type" before their message appears.
  const bubbles = $$('[data-bubble]');
  if (bubbles.length) {
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      bubbles.forEach((b, i) => {
        setTimeout(() => b.classList.add('is-on'), 300 + i * 900);
        setTimeout(() => b.classList.add('is-typed'), (reduceMotion ? 300 : 1500) + i * 900);
      });
    }, { threshold: 0.4 });
    io.observe(bubbles[0].parentElement);
  }

  // Footer: a bun peeks over the edge, and hops when poked.
  const peek = $('[data-peek]');
  if (peek) {
    new IntersectionObserver(([entry]) => peek.parentElement.classList.toggle('is-up', entry.isIntersecting), { threshold: 0.3 })
      .observe($('.site-footer'));
    peek.addEventListener('click', (e) => {
      peek.classList.add('is-hop');
      burst(e.clientX, e.clientY, 6);
      setTimeout(() => peek.classList.remove('is-hop'), 500);
    });
  }

  const year = $('[data-year]');
  if (year) year.textContent = new Date().getFullYear();
})();
