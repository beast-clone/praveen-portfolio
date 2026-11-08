/* Shared chrome + motion. Every page loads data.js first, then this file. */
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const page = document.body.dataset.page || 'home';
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const M = window.ME;

  /* ---------- logo ---------- */
  document.body.insertAdjacentHTML('afterbegin', `<a class="logo" href="index.html" aria-label="Home">${M.first}<small>.folio</small></a>`);

  /* ---------- footer ---------- */
  const foot = $('#foot');
  if (foot) foot.outerHTML = `
  <footer class="foot" id="contact">
    <h2 class="rv">Want to see these systems in action?</h2>
    <div class="big" id="big"><span class="clip"><span>Let's talk</span></span></div>
    <div class="fgrid rv">
      <i class="hd l"></i><i class="hd r"></i>
      <div>
        <h4>Based in Bengaluru, India</h4>
        <button class="copy" id="copyMail" data-mail="${M.email}"><span>${M.email}</span><i class="ph ph-copy"></i></button>
        <ul class="clist">
          <li><i class="ph ph-envelope-simple"></i><span>Alternate</span><a href="mailto:${M.email2}">${M.email2}</a></li>
          <li><i class="ph ph-phone"></i><span>Phone</span><a href="tel:${M.tel}">${M.phone}</a></li>
          <li><i class="ph ph-linkedin-logo"></i><span>LinkedIn</span><a href="${M.linkedin}" target="_blank" rel="noopener">${M.linkedinLabel}</a></li>
        </ul>
      </div>
      <div>
        <h4>Connect with me</h4>
        <div class="soc">
          <a href="${M.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn"><i class="ph ph-linkedin-logo"></i></a>
          <a href="mailto:${M.email}?subject=Hello" aria-label="Email"><i class="ph ph-envelope-simple"></i></a>
          <a href="tel:${M.tel}" aria-label="Phone"><i class="ph ph-phone"></i></a>
          <a href="https://wa.me/${M.tel.replace('+', '')}" target="_blank" rel="noopener" aria-label="WhatsApp"><i class="ph ph-whatsapp-logo"></i></a>
        </div>
        <small>Happy to walk you through any of these systems live on a call.</small>
      </div>
    </div>
    <div class="copyright"><span>© 2026 ${M.name}</span><span>${M.role}</span></div>
  </footer>`;

  /* ---------- dock ---------- */
  const dock = [
    ['index.html', 'home', 'ph-house', 'Home'],
    ['about.html', 'about', 'ph-user', 'About'],
    ['projects.html', 'work', 'ph-list-bullets', 'Projects'],
    [`mailto:${M.email}?subject=Hello`, 'mail', 'ph-envelope-simple', 'Email me'],
  ];
  document.body.insertAdjacentHTML('beforeend', `<nav class="dock" aria-label="Main">${dock.map(([h, k, ic, t]) =>
    `<a href="${h}" class="${k === page ? 'on' : ''}" data-tip="${t}" aria-label="${t}"><i class="ph ph-bold ${ic}"></i></a>`).join('')}</nav>`);

  /* ---------- selection handles ---------- */
  $$('.sel, .tag').forEach(el => el.insertAdjacentHTML('beforeend', '<i class="hd tl"></i><i class="hd tr"></i><i class="hd bl"></i><i class="hd br"></i>'));

  /* ---------- swoosh path lengths ---------- */
  $$('.swoosh path').forEach(p => p.style.setProperty('--len', Math.ceil(p.getTotalLength()) + 1));

  /* ---------- reveal on scroll ---------- */
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add('in');
    e.target.dispatchEvent(new Event('reveal'));
    io.unobserve(e.target);
  }), { threshold: .15, rootMargin: '0px 0px -40px 0px' });
  $$('.rv, .rvg, .tag, .big, .ncard, .ck').forEach(el => io.observe(el));

  /* ---------- typewriter labels ---------- */
  $$('.tag').forEach(t => {
    const txt = t.dataset.type || '';
    const out = document.createElement('span');
    t.prepend(out);
    t.insertBefore(Object.assign(document.createElement('i'), { className: 'cur' }), out.nextSibling);
    if (reduce) { out.textContent = txt; return; }
    t.addEventListener('reveal', () => {
      let i = 0;
      const tick = () => { out.textContent = txt.slice(0, ++i); if (i < txt.length) setTimeout(tick, 55); };
      setTimeout(tick, 150);
    });
  });

  /* ---------- copy email ---------- */
  const cm = $('#copyMail');
  if (cm) cm.addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(cm.dataset.mail); } catch (_) { location.href = 'mailto:' + cm.dataset.mail; return; }
    cm.classList.add('ok'); cm.querySelector('span').textContent = 'Copied!';
    setTimeout(() => { cm.classList.remove('ok'); cm.querySelector('span').textContent = cm.dataset.mail; }, 1600);
  });

  /* ---------- big "Let's talk": fit to width ---------- */
  const big = $('#big');
  const fitBig = () => {
    if (!big) return;
    const w = Math.min(1200, innerWidth - 32);
    big.style.fontSize = '100px';
    const nat = big.querySelector('.clip span').getBoundingClientRect().width;
    big.style.fontSize = (100 * w / nat) + 'px';
  };
  document.fonts.ready.then(fitBig); addEventListener('resize', fitBig);

  /* ---------- number cards: count up + ruler ---------- */
  $$('.ncard').forEach(c => {
    const v = c.querySelector('.v'), ticks = $$('.ruler i', c), lit = Math.round(+c.dataset.r * ticks.length);
    const target = v.textContent, num = parseFloat(target.replace(/,/g, '')), suffix = target.replace(/[\d,.]/g, '');
    c.addEventListener('reveal', () => {
      if (reduce) { ticks.slice(0, lit).forEach(t => t.classList.add('on')); return; }
      const t0 = performance.now(), D = 1400;
      const step = now => {
        const k = Math.min(1, (now - t0) / D), e = 1 - Math.pow(1 - k, 3);
        v.textContent = Math.round(num * e).toLocaleString('en-IN') + suffix;
        ticks.forEach((t, i) => t.classList.toggle('on', i < Math.round(lit * e)));
        if (k < 1) requestAnimationFrame(step); else v.textContent = target;
      };
      requestAnimationFrame(step);
    });
  });

  /* ---------- scroll-driven bits ---------- */
  const fills = $$('.fill');
  fills.forEach(f => {
    f.innerHTML = f.textContent.trim().split(/\s+/).map(w => {
      const k = /^\*.*\*[.,]?$/.test(w);
      return `<span class="w${k ? ' k' : ''}">${w.replace(/\*/g, '')}</span> `;
    }).join('');
  });
  const fan = $('.skills');
  const cards = fan ? $$('.scard', fan) : [];
  const onScroll = () => {
    const vh = innerHeight;
    fills.forEach(f => {
      const r = f.getBoundingClientRect(), ws = f.querySelectorAll('.w');
      const p = reduce ? 1 : Math.min(1, Math.max(0, (vh * .8 - r.top) / (r.height + vh * .25)));
      const n = Math.round(p * ws.length);
      ws.forEach((w, i) => w.classList.toggle('on', i < n));
    });
    if (fan && innerWidth >= 768) {
      const r = fan.getBoundingClientRect();
      const p = reduce ? 1 : Math.min(1, Math.max(0, -r.top / (r.height - vh)));
      cards.forEach((c, i) => {
        const s = i * .17, k = Math.min(1, Math.max(0, (p - s) / .28));
        const e = 1 - Math.pow(1 - k, 3), q = 1 - e;
        c.style.transform = `translate(${q * (260 + i * 60)}px, ${q * vh * .9}px) rotate(${+c.dataset.r + q * (i % 2 ? -28 : 24)}deg)`;
        c.style.opacity = k > 0 ? 1 : 0;
      });
    } else cards.forEach(c => { c.style.transform = ''; c.style.opacity = 1; });
  };
  addEventListener('scroll', onScroll, { passive: true }); addEventListener('resize', onScroll); onScroll();

  /* ---------- FAQ accordion ---------- */
  $$('.qa button').forEach(b => b.addEventListener('click', () => {
    const qa = b.closest('.qa'), open = !qa.classList.contains('open');
    $$('.qa').forEach(x => { x.classList.remove('open'); x.querySelector('button').setAttribute('aria-expanded', 'false'); });
    if (open) { qa.classList.add('open'); b.setAttribute('aria-expanded', 'true'); }
  }));

  /* ---------- draggable stickers (playful, desktop) ---------- */
  $$('.sticker').forEach(s => {
    let sx, sy, ox = 0, oy = 0, drag = false;
    s.addEventListener('pointerdown', e => { drag = true; sx = e.clientX - ox; sy = e.clientY - oy; s.setPointerCapture(e.pointerId); s.style.cursor = 'grabbing'; });
    s.addEventListener('pointermove', e => { if (!drag) return; ox = e.clientX - sx; oy = e.clientY - sy; s.style.translate = `${ox}px ${oy}px`; });
    s.addEventListener('pointerup', () => { drag = false; s.style.cursor = ''; });
  });

  /* ---------- lightbox ---------- */
  const lb = $('#lb');
  if (lb) {
    document.addEventListener('click', e => {
      const im = e.target.closest('.dgal img, .dhero img, .fimg img');
      if (im) { lb.querySelector('img').src = im.src; lb.classList.add('on'); }
      else if (e.target.closest('#lb')) lb.classList.remove('on');
    });
    addEventListener('keydown', e => e.key === 'Escape' && lb.classList.remove('on'));
  }

  /* ---------- smooth scroll ---------- */
  if (window.Lenis && !reduce) {
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    const raf = t => { lenis.raf(t); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
    lenis.on('scroll', onScroll);
  }
})();
