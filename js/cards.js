/* Project cards for the home and projects pages.
   A project with a `video` becomes the highlight: full-width intro video on top, text below.
   Others keep the screenshot on the right. */
window.projectCard = p => {
  const info = `
        <div class="meta"><span>${p.name}</span><b></b><span>${p.label}</span></div>
        <h3>${p.title}</h3>
        <p class="d">${p.intro}</p>`;
  const res = `<div class="res">${p.results.map(([n, l]) => `<div><b>${n}</b><span>${l}</span></div>`).join('')}</div>`;
  const btn = p.href ? `<a class="btn" href="${p.href}">Explore ${p.name} <i class="ph ph-arrow-right"></i></a>` : `<a class="btn" href="project.html?p=${p.id}">Read case study <i class="ph ph-arrow-right"></i></a>`;
  if (p.video) return `
  <div class="pwrap rv">
    <article class="pcard sel vcard">
      <div class="vid">
        <video src="${p.video}" poster="${p.poster}" muted loop playsinline controls preload="metadata"></video>
        <span class="vbadge"><i class="ph-fill ph-star"></i>Highlight · ${p.vdur || '25s intro'}</span>
      </div>
      <div class="vrow">
        <div class="info">${info}</div>
        <div class="vside">${res}${btn}</div>
      </div>
    </article>
  </div>`;
  return `
  <div class="pwrap rv">
    <article class="pcard sel">
      <div class="info">${info}${res}${btn}</div>
      <a class="img" href="project.html?p=${p.id}" aria-label="${p.name} case study"><img src="${p.img}" alt="${p.name}" loading="lazy"></a>
    </article>
  </div>`;
};

/* Video showcase: big player on the left, all automations listed on the right (playlist style).
   items: [{name, dur, label, title, intro, stats:[[n,l]], video, poster, id?}] */
/* Reusable showcase: big player on the left, list on the right (playlist style).
   An item is either a video  {name, dur, label, title, intro, stats, video, poster, id?, href?}
   or a live web page          {name, page:'img.jpg', url, host, line, intro, tags} which slowly scrolls in the player. */
window.showcase = (key, items, count) => `
  <div class="show rv" data-sc="${key}">
    <div class="sh-main sel">
      <div class="sh-vid"><video muted playsinline controls preload="metadata"></video><div class="sh-page" role="link" tabindex="0"><img alt=""></div><span class="sh-open">Open live page <i class="ph ph-arrow-up-right"></i></span><span class="vbadge"></span></div>
      <div class="sh-info"></div>
    </div>
    <aside class="sh-rail">
      <div class="rail-h"><b>${count}</b><span>Tap to ${items[1] && items[1].page ? 'view' : 'watch'}</span></div>
      <div class="rail-list">${items.map((a, i) => `
      <button class="ri" data-i="${i}">
        <span class="th"><img src="${a.poster || a.page.replace('assets/pages/', 'assets/pages/thumbs/')}" alt="">${a.dur ? `<em>${a.dur}</em>` : ''}</span>
        <span class="tx"><b>${a.name}</b><small>${a.line}</small></span>
        <span class="pg"><i></i></span>
      </button>`).join('')}</div>
    </aside>
  </div>`;

window.wireShowcase = (key, items) => {
  const root = document.querySelector(`[data-sc="${key}"]`); if (!root) return;
  const v = root.querySelector('video'), pg = root.querySelector('.sh-page'), pimg = pg.querySelector('img'), info = root.querySelector('.sh-info'), badge = root.querySelector('.vbadge');
  const rail = [...root.querySelectorAll('.ri')]; let cur = -1, timer = 0, inView = false;
  const next = () => show((cur + 1) % items.length, true);
  const show = (i, play) => {
    cur = i; const a = items[i]; clearTimeout(timer);
    rail.forEach((r, k) => { r.classList.toggle('on', k === i); const b = r.querySelector('.pg i'); b.style.transition = 'none'; b.style.width = '0'; });
    const isPage = !!a.page;
    root.classList.toggle('is-page', isPage);
    if (isPage) {
      v.pause(); pimg.style.animation = 'none'; pimg.src = a.page;
      const go = () => { const d = Math.max(0, pimg.offsetHeight - pg.offsetHeight); pimg.style.setProperty('--d', -d + 'px'); void pimg.offsetWidth; pimg.style.animation = `pagescroll ${Math.max(6, d / 120)}s ease-in-out .6s both`; };
      pimg.complete ? go() : (pimg.onload = go);
      if (play || inView) timer = setTimeout(next, 9000);
      const bar = rail[i].querySelector('.pg i'); bar.style.transition = 'none'; bar.style.width = '0'; void bar.offsetWidth; bar.style.transition = 'width 9s linear'; bar.style.width = '100%';
      badge.innerHTML = `<i class="ph-fill ph-globe"></i>Live page · ${a.host}`;
    } else {
      v.src = a.video; v.poster = a.poster;
      badge.innerHTML = i === 0 ? '<i class="ph-fill ph-star"></i>Highlight · ' + a.dur : '<i class="ph-fill ph-play"></i>' + (i + 1) + ' of ' + items.length + ' · ' + a.dur;
      if (play) v.play().catch(() => {});
    }
    info.classList.remove('in'); void info.offsetWidth;
    const link = a.href ? `<a class="btn" href="${a.href}">Open project page <i class="ph ph-arrow-right"></i></a>` : a.id ? `<a class="btn" href="project.html?p=${a.id}">Read case study <i class="ph ph-arrow-right"></i></a>` : '';
    info.innerHTML = isPage ? `
      <div class="sh-l"><div class="meta"><span>${a.name}</span><b></b><span>${a.host}</span></div><h3>${a.title || a.name}</h3><p class="d">${a.intro || a.line}</p></div>
      <div class="sh-r"><div class="atags">${(a.tags || []).map(t => `<span>${t}</span>`).join('')}</div><a class="btn" href="${a.url}" target="_blank" rel="noopener">Visit live page <i class="ph ph-arrow-up-right"></i></a></div>` : `
      <div class="sh-l"><div class="meta"><span>${a.name}</span><b></b><span>${a.label}</span></div><h3>${a.title}</h3><p class="d">${a.intro}</p></div>
      <div class="sh-r"><div class="res">${a.stats.map(([n, l]) => `<div><b>${n}</b><span>${l}</span></div>`).join('')}</div>${link}</div>`;
    info.classList.add('in');
    if (play) { const list = rail[i].parentElement; // scroll only the list, never the page
      if (innerWidth < 768) list.scrollTo({ left: rail[i].offsetLeft - 16, behavior: 'smooth' });
      else list.scrollTo({ top: rail[i].offsetTop - list.offsetTop - 8, behavior: 'smooth' }); }
  };
  rail.forEach((r, i) => r.addEventListener('click', () => show(i, true)));
  const openLive = () => { const a = items[cur]; if (a && a.page && a.url) window.open(a.url, '_blank', 'noopener'); };
  pg.addEventListener('click', openLive);
  pg.addEventListener('keydown', e => { if (e.key === 'Enter') openLive(); });
  v.addEventListener('timeupdate', () => { const p = rail[cur] && rail[cur].querySelector('.pg i'); if (p && v.duration && !items[cur].page) p.style.width = (v.currentTime / v.duration * 100) + '%'; });
  v.addEventListener('ended', next);
  show(0, false);
  new IntersectionObserver(es => es.forEach(e => { inView = e.isIntersecting; if (items[cur].page) return; if (inView) v.play().catch(() => {}); else v.pause(); }), { threshold: .4 }).observe(root.querySelector('.sh-vid'));
};

/* Grid of shorter automation videos (kept for other pages). */
window.automationsBlock = list => `
  <div class="autos rv">
    <div class="autos-head"><h3>More automations I built</h3><span>Each video is about 20 seconds. Tap for sound.</span></div>
    <div class="agrid">${list.map(a => `
      <article class="acard">
        <div class="avid"><video src="${a.video}" poster="${a.poster}" muted loop playsinline controls preload="metadata"></video></div>
        <div class="abody"><h4>${a.name}</h4><p>${a.line}</p><div class="atags">${a.tags.map(t => `<span>${t}</span>`).join('')}</div></div>
      </article>`).join('')}
    </div>
  </div>`;

/* Play videos only while they are on screen (saves battery and data). */
window.wireCardVideos = () => {
  const io = new IntersectionObserver(es => es.forEach(e => {
    const v = e.target; if (e.isIntersecting) v.play().catch(() => {}); else v.pause();
  }), { threshold: .35 });
  document.querySelectorAll('.vcard video, .acard video').forEach(v => io.observe(v));
};
