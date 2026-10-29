/* grain of taste — icons, video slots, recipe calculator. No dependencies. */
(function () {
  /* ---------- 16 line icons (brandbook §7/§8). viewBox 120, stroke 1.6, no fill. ---------- */
  var ICONS = {
    loaf: '<path d="M22 72c0-20 17-34 38-34s38 14 38 34v6H22z"/><path d="M44 50l-6 20M60 46v24M76 50l6 20"/>',
    jar: '<rect x="42" y="30" width="36" height="12"/><path d="M38 42h44v40a8 8 0 0 1-8 8H46a8 8 0 0 1-8-8z"/><path d="M38 60c8-4 16 4 24 0s16-4 20 0"/><circle cx="50" cy="72" r="2"/><circle cx="66" cy="78" r="2"/><circle cx="58" cy="68" r="1.5"/>',
    flask: '<path d="M52 30h16M56 30v22L36 86h48L64 52V30"/><path d="M42 74h36"/>',
    wheat: '<path d="M60 90V46"/><path d="M60 46c-10-2-16-10-14-20 10 2 16 10 14 20z"/><path d="M60 46c10-2 16-10 14-20-10 2-16 10-14 20z"/><path d="M60 62c-10-2-16-10-14-20 10 2 16 10 14 20z"/><path d="M60 62c10-2 16-10 14-20-10 2-16 10-14 20z"/><path d="M60 78c-10-2-16-10-14-20 10 2 16 10 14 20z"/><path d="M60 78c10-2 16-10 14-20-10 2-16 10-14 20z"/>',
    thermo: '<path d="M52 34a8 8 0 0 1 16 0v38a12 12 0 1 1-16 0z"/><circle cx="60" cy="80" r="5"/><path d="M60 74V52"/><path d="M76 40h8M76 50h8M76 60h8"/>',
    pot: '<path d="M30 56h60v18a12 12 0 0 1-12 12H42a12 12 0 0 1-12-12z"/><path d="M38 56c0-12 10-20 22-20s22 8 22 20"/><path d="M22 62h8M90 62h8"/><path d="M56 36v-6h8v6"/>',
    oven: '<rect x="30" y="36" width="60" height="52"/><circle cx="40" cy="44" r="2"/><circle cx="50" cy="44" r="2"/><rect x="40" y="54" width="40" height="22"/><path d="M34 88v6M86 88v6"/>',
    sack: '<path d="M44 40c-8 10-10 22-8 44a4 4 0 0 0 4 4h40a4 4 0 0 0 4-4c2-22 0-34-8-44z"/><path d="M44 40c4-6 28-6 32 0"/><path d="M48 34c0-6 24-6 24 0"/><path d="M50 62c6 2 14 2 20 0"/>',
    basket: '<path d="M28 60h64l-6 28H34z"/><path d="M28 60h64"/><path d="M40 60l2 28M60 60v28M80 60l-2 28"/><path d="M34 74h52"/><path d="M40 60c0-14 8-22 20-22s20 8 20 22"/>',
    bowl: '<path d="M26 56h68c0 18-14 32-34 32S26 74 26 56z"/><path d="M68 56l16-20"/><path d="M80 34l8 6"/>',
    scale: '<rect x="30" y="52" width="60" height="32"/><path d="M50 52v-8h20v8"/><circle cx="52" cy="68" r="5"/><path d="M64 68h14"/>',
    blade: '<path d="M34 60l8-8h36l8 8-8 8H42z"/><path d="M60 52v16M50 60h20"/>',
    clock: '<circle cx="60" cy="60" r="28"/><path d="M60 40v20l12 8"/>',
    window: '<path d="M34 60c0-16 12-26 26-26s26 10 26 26-12 26-26 26-26-10-26-26z"/><path d="M50 60c0-6 4-10 10-10s10 4 10 10-4 10-10 10-10-4-10-10z"/>',
    crumb: '<rect x="30" y="34" width="60" height="52"/><circle cx="44" cy="48" r="3"/><circle cx="62" cy="44" r="2"/><circle cx="76" cy="56" r="3"/><circle cx="50" cy="68" r="2"/><circle cx="68" cy="74" r="3"/>',
    bun: '<path d="M26 80c0-22 15-38 34-38s34 16 34 38z"/><path d="M26 80h68"/><path d="M48 62c6-4 10-4 16 0"/><path d="M56 70c4-3 8-3 12 0"/>',
    play: '<path d="M46 36l36 24-36 24z"/>'
  };
  function icon(name, cls) {
    return '<svg class="icon ' + (cls || '') + '" viewBox="0 0 120 120" aria-hidden="true">' + (ICONS[name] || '') + '</svg>';
  }
  window.gotIcon = icon;
  document.querySelectorAll('[data-icon]').forEach(function (el) {
    el.innerHTML = icon(el.getAttribute('data-icon'), el.className);
  });

  /* ---------- video slots ----------
     One clip:   <div class="video" data-src="../videos/x.mp4" data-poster="../videos/x.jpg"></div>
     Several:    <div class="video" data-src="../videos/a.mp4 | ../videos/b.mp4" data-poster="../videos/a.jpg | ../videos/b.jpg"
                      data-clips="all folds | fold 3"></div>   → tabs under the player
     data-src: .mp4/.webm file → <video> (loads only when played, shows the poster frame);
               youtube / vimeo / instagram URL → embed; empty → "coming soon" placeholder.
     Vertical phone videos (9:16) are shown whole, nothing is cropped. */
  function split(v) { return (v || '').split('|').map(function (x) { return x.trim(); }).filter(Boolean); }
  function player(src, poster, label) {
    var m;
    if ((m = src.match(/(?:youtube\.com\/(?:watch\?v=|shorts\/)|youtu\.be\/)([\w-]{11})/)))
      return '<iframe src="https://www.youtube-nocookie.com/embed/' + m[1] + '" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="' + label + '"></iframe>';
    if ((m = src.match(/vimeo\.com\/(\d+)/)))
      return '<iframe src="https://player.vimeo.com/video/' + m[1] + '" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="' + label + '"></iframe>';
    if ((m = src.match(/instagram\.com\/(reel|p)\/([\w-]+)/)))
      return '<iframe src="https://www.instagram.com/' + m[1] + '/' + m[2] + '/embed" loading="lazy" allowfullscreen title="' + label + '"></iframe>';
    return '<video controls playsinline preload="none"' + (poster ? ' poster="' + poster + '"' : '') + ' aria-label="' + label + '"><source src="' + src + '" type="video/mp4"></video>';
  }
  document.querySelectorAll('.video').forEach(function (box) {
    var srcs = split(box.getAttribute('data-src'));
    var posters = split(box.getAttribute('data-poster'));
    var names = split(box.getAttribute('data-clips'));
    var label = box.getAttribute('data-label') || 'video';
    if (!srcs.length) {
      box.innerHTML = '<div class="empty">' + icon('play') + '<span class="caps">' + label + '</span><span class="hand">coming soon</span></div>';
      return;
    }
    if (srcs.some(function (x) { return /\.(mp4|webm|mov)(\?|$)/i.test(x); })) box.classList.add('tall');
    var tabs = null;
    function show(i) {
      var screen = box.querySelector('.screen');
      var old = screen.querySelector('video'); if (old) old.pause();
      screen.innerHTML = player(srcs[i], posters[i], label);
      if (tabs) tabs.querySelectorAll('button').forEach(function (b, j) { b.classList.toggle('on', j === i); b.setAttribute('aria-pressed', String(j === i)); });
    }
    box.innerHTML = '<div class="screen"></div>';
    if (srcs.length > 1) {
      tabs = document.createElement('div'); tabs.className = 'clip-tabs';
      tabs.innerHTML = srcs.map(function (x, i) { return '<button type="button">' + (names[i] || ('clip ' + (i + 1))) + '</button>'; }).join('');
      box.parentNode.insertBefore(tabs, box.nextSibling);
      tabs.querySelectorAll('button').forEach(function (b, i) { b.addEventListener('click', function () { show(i); }); });
    }
    show(0);
  });

  /* ---------- recipe formulas (baker's percentages, flour = 100) ----------
     pff = prefermented flour as % of total flour (starter contributes it).
     Reference loaf: 600 g = starter 71 / ww 85 / white 204 / water 233 / salt 7 (stiff 43%). */
  var FORMULAS = {
    /* bread recipes — type 'bread' shows up in the calculator's recipe list.
       To add one: copy the line, give it a new key, name, numbers and the page it links to. */
    wheat: { type: 'bread', name: 'wheat sourdough', page: 'recipes/wheat-sourdough.html', hydration: 75, salt: 2, ww: 25, pff: 14.7 },
    stiff: { name: 'stiff starter · 43%', hydration: 43, salt: 0, ww: 0, pff: 0 },
    liquid: { name: 'liquid starter · 100%', hydration: 100, salt: 0, ww: 0, pff: 0 }
  };
  window.gotFormulas = FORMULAS;

  /* compute grams from total flour F (g).
     Rounds the way the written recipe does: flour first, then the flour inside the starter,
     then water — so 600 g gives 71/85/204/233/7 and 1150 g gives 137/163/391/446/13,
     and the liquid swap gives 100/204 and 192/391, exactly as in the recipe. */
  function compute(f, F, starterType) {
    var sh = starterType === 'liquid' ? 100 : 43;
    F = Math.round(F);
    var ww = Math.round(F * f.ww / 100);
    var pff = Math.round(F * f.pff / 100);
    var white = F - ww - pff;
    var sw43 = Math.floor(pff * 0.43);
    var water43 = Math.round(F * f.hydration / 100 - pff * 0.43);
    var sw = Math.floor(pff * sh / 100);
    var starter = pff + sw;
    var water = water43 - (sw - sw43);
    var salt = Math.round(F * f.salt / 100);
    return { flour: F, starter: starter, ww: ww, white: white, water: water, salt: salt, total: starter + ww + white + water + salt, sh: sh, pffFlour: pff, pffWater: sw };
  }
  function r(x) { return Math.round(x); }
  window.gotCompute = compute;

  /* ---------- printable calculation (print / save as PDF from the browser) ---------- */
  function printSheet(root, f, n, one, st) {
    var old = document.querySelector('.print-sheet'); if (old) old.remove();
    var sheet = document.createElement('div'); sheet.className = 'print-sheet';
    var pick = root.querySelector('[name=recipe]'), stSel = root.querySelector('[name=starter]');
    var title = pick ? pick.options[pick.selectedIndex].textContent : f.name;
    var d = new Date(), date = ('0' + d.getDate()).slice(-2) + '.' + ('0' + (d.getMonth() + 1)).slice(-2) + '.' + d.getFullYear();
    sheet.innerHTML = '<div class="page-head"><span class="caps">grain of taste</span><span class="caps">recipe calculator</span><span class="caps">' + date + '</span></div>'
      + '<h1 class="hand">' + title + '</h1>'
      + '<p class="caps print-sum">' + (root.querySelector('[name=loaves]') ? '<span>loaves:</span> ' + n + ' × <span>' + one + ' g</span> · ' : '')
      + (stSel ? '<span>starter:</span> ' + stSel.options[stSel.selectedIndex].textContent : '') + '</p>';
    var res = root.querySelector('.calc-out').cloneNode(true);
    res.querySelectorAll('.calc-actions').forEach(function (x) { x.remove(); });
    sheet.appendChild(res);
    var foot = document.createElement('p'); foot.className = 'caps print-foot';
    var a = document.querySelector('.site-header .brand');
    foot.textContent = '@grain_of_taste · ' + (a ? a.href.replace(/index\.html$/, '') : location.origin);
    sheet.appendChild(foot);
    document.querySelector('.wrap').appendChild(sheet);
    if (window.gotI18n) window.gotI18n.apply(sheet);
    document.body.classList.add('print-calc');
    /* some browsers fire afterprint before the sheet is painted — leave print mode a moment later */
    var done = function () { window.removeEventListener('afterprint', done); setTimeout(function () { document.body.classList.remove('print-calc'); }, 1500); };
    window.addEventListener('afterprint', done);
    window.print();
  }

  /* ---------- scaler widget ----------
     <div class="scaler" data-formula="wheat"> … </div> with inputs inside (see calculator.html / recipe page) */
  document.querySelectorAll('.scaler').forEach(function (root) {
    var f = FORMULAS[root.getAttribute('data-formula')] || FORMULAS.wheat;
    var pick = root.querySelector('[name=recipe]');
    function spec(x) { return x.hydration + '% · ' + (x.ww ? x.ww + '% whole wheat · ' : '') + x.salt + '% salt'; }
    if (pick) {
      pick.innerHTML = Object.keys(FORMULAS).filter(function (k) { return FORMULAS[k].type === 'bread'; })
        .map(function (k) { return '<option value="' + k + '">' + FORMULAS[k].name + '</option>'; }).join('');
      var syncRecipe = function () {
        f = FORMULAS[pick.value];
        var sp = document.querySelector('[data-spec-for="' + root.id + '"]'); if (sp) { sp.textContent = spec(f); if (window.gotI18n) window.gotI18n.apply(sp.parentNode); }
        var ln = root.querySelector('[data-recipe-link]'); if (ln) ln.setAttribute('href', f.page);
      };
      pick.addEventListener('change', syncRecipe);
      syncRecipe();
    }
        var loaves = root.querySelector('[name=loaves]');
    var starterType = root.querySelector('[name=starter]');
    var out = root.querySelector('.calc-out');
    function val(name) { var el = root.querySelector('[name="' + name + '"]'); return el ? Math.max(0, parseFloat(el.value) || 0) : null; }
    function render() {
      var m = (root.querySelector('[name^=mode]:checked') || {}).value || 'flour';
      var n = loaves ? Math.max(1, parseInt(loaves.value, 10) || 1) : 1;
      var st = starterType ? starterType.value : 'stiff';
      var hasStock = !!root.querySelector('[name="have-white"]');
      var k = 1 + f.hydration / 100 + f.salt / 100;          /* dough weight = flour × k */
      root.querySelectorAll('[data-when]').forEach(function (el) {
        el.hidden = el.getAttribute('data-when') !== m || (el.hasAttribute('data-ww') && !f.ww);
      });
      /* F1 = flour in ONE loaf. Totals are always exactly n × one loaf, so the columns agree. */
      var F1, stockNote = '';
      if (m === 'dough') {
        F1 = (val('amount') || 0) / k;                       /* the field is the weight of one loaf */
      } else if (hasStock) {
        /* flour I have, per flour: the biggest loaves both stocks allow at the recipe's ratio.
           The starter's own flour is not taken from these stocks — the starter is fed separately. */
        var W = val('have-white') || 0, Z = f.ww ? (val('have-ww') || 0) : Infinity;
        var whiteShare = 1 - f.ww / 100 - f.pff / 100, wwShare = f.ww / 100;
        var byWhite = W / whiteShare, byWw = f.ww ? Z / wwShare : Infinity;
        F1 = Math.floor(Math.min(byWhite, byWw) / n);
        while (F1 > 0) { var t = compute(f, F1, st); if (t.white * n <= W && t.ww * n <= Z) break; F1--; }
        if (f.ww) {
          var d0 = compute(f, F1, st), wwFirst = byWw <= byWhite;
          var leftG = wwFirst ? W - d0.white * n : Z - d0.ww * n;
          stockNote = '<p class="note stock-note"><span>runs out first:</span> <b>' + (wwFirst ? 'whole wheat flour' : 'white bread flour') + '</b><br>'
            + '<span>left over:</span> <b>' + r(leftG) + ' g</b> <span>' + (wwFirst ? 'white bread flour' : 'whole wheat flour') + '</span><br>'
            + '<span>starter not included — feed it separately.</span></p>';
        }
      } else {
        F1 = val('amount') || 0;                             /* starters: one batch */
      }
      var d = compute(f, F1, st);
      var rows = [];
      if (f.pff > 0) rows.push(['starter · ' + d.sh + '%', d.starter]);
      if (f.ww > 0) rows.push(['whole wheat flour', d.ww]);
      rows.push([f.ww > 0 ? 'white bread flour' : 'flour', d.white]);
      rows.push(['water', d.water]);
      if (f.salt > 0) rows.push(['salt', d.salt]);
      var one = d.total, all = one * n, many = n > 1;
      var unitWord = loaves ? 'g of dough' : 'g';
      var html = '<div class="big num">' + all + ' <span class="caps" style="font-size:15px">' + unitWord + '</span></div>';
      if (loaves) html += '<p class="note baked">≈ <span class="num">' + Math.round(one * 0.85) + '</span> <span>g of baked bread per loaf, approx.</span></p>';
      if (many) html += '<p class="caps calc-split"><span class="num">' + n + '</span> × <span class="num">' + one + ' g</span></p>';
      html += '<div class="calc-card"><p class="caps calc-card-head">weigh this</p>';
      html += '<table class="t"><tr><th>ingredient</th>' + (many ? '<th class="r">1 loaf</th><th class="r">total</th>' : '<th class="r">grams</th>') + '</tr>';
      rows.forEach(function (row) {
        html += '<tr><td>' + row[0] + '</td>' + (many ? '<td class="r num">' + row[1] + ' g</td>' : '') + '<td class="r num">' + row[1] * n + ' g</td></tr>';
      });
      html += '<tr class="sum"><td>' + (loaves ? 'total dough' : 'total') + '</td>' + (many ? '<td class="r num">' + one + ' g</td>' : '') + '<td class="r num">' + all + ' g</td></tr></table></div>';
      html += stockNote;
      html += '<p class="note"><span>flour in total (100%):</span> <span>' + d.flour * n + ' g</span><br><span>hydration ' + f.hydration + '% · salt ' + f.salt + '%' + (f.ww ? ' · whole wheat ' + f.ww + '%' : '') + (f.pff ? ' · prefermented flour ' + f.pff + '%' : '') + '. Rounded to the gram — your scale does the same.</span></p>';
      html += '<p class="calc-actions"><button type="button" class="btn small calc-print">print / save PDF</button></p>';
      out.innerHTML = html;
      out.querySelector('.calc-print').addEventListener('click', function () { printSheet(root, f, n, one, st); });
      if (window.gotI18n) window.gotI18n.apply(out);
    }
    /* quick weights: <button data-set="600"> */
    root.querySelectorAll('[data-set]').forEach(function (b) {
      b.addEventListener('click', function () { var a = root.querySelector('[name="amount"]'); a.value = b.getAttribute('data-set'); render(); });
    });
    root.addEventListener('input', render);
    root.addEventListener('change', render);
    render();
  });

  /* ---------- ingredient table on recipe page (two columns, fixed) ---------- */
  document.querySelectorAll('[data-recipe-table]').forEach(function (el) {
    var f = FORMULAS[el.getAttribute('data-recipe-table')];
    var sizes = (el.getAttribute('data-sizes') || '600,1150').split(',').map(Number);
    var st = el.getAttribute('data-starter') || 'stiff';
    var cols = sizes.map(function (w) { return compute(f, w / (1 + f.hydration / 100 + f.salt / 100), st); });
    var rows = [['starter · ' + cols[0].sh + '%', 'starter'], ['whole wheat flour', 'ww'], ['white bread flour', 'white'], ['water', 'water'], ['salt', 'salt']];
    var h = '<table class="t"><tr><th>ingredient</th>' + sizes.map(function (w, i) { return '<th class="r">' + (i === 0 ? 'small loaf' : 'big loaf') + '<br><span class="caps">' + w + ' g</span></th>'; }).join('') + '</tr>';
    rows.forEach(function (row) { h += '<tr><td>' + row[0] + '</td>' + cols.map(function (c) { return '<td class="r num">' + r(c[row[1]]) + '\u00a0g</td>'; }).join('') + '</tr>'; });
    h += '</table>';
    el.innerHTML = h;
  });
})();

/* ---------- recipe: sticky step navigation ----------
   <nav class="step-nav"> slides in once the cover is out of view; the part you are reading is marked. */
(function () {
  var nav = document.querySelector('.step-nav');
  if (!nav) return;
  var inner = nav.querySelector('.in');
  var hero = document.querySelector('.hero');
  var links = [].slice.call(nav.querySelectorAll('a[href^="#"]'));
  var targets = links.map(function (a) { return document.querySelector(a.getAttribute('href')); });
  var ticking = false;
  function update() {
    ticking = false;
    var bar = document.querySelector('.dev-bar');
    nav.style.top = bar ? bar.offsetHeight + 'px' : '0px';
    var show = hero ? hero.getBoundingClientRect().bottom < 0 : true;
    nav.classList.toggle('show', show);
    var line = nav.offsetHeight + 60, cur = -1;
    targets.forEach(function (t, i) { if (t && t.getBoundingClientRect().top <= line) cur = i; });
    links.forEach(function (a, i) {
      var on = i === cur;
      if (on === a.classList.contains('on')) return;
      a.classList.toggle('on', on);
      if (on && inner.scrollWidth > inner.clientWidth) inner.scrollTo({ left: a.offsetLeft - 24, behavior: 'smooth' });
    });
  }
  function req() { if (!ticking) { ticking = true; requestAnimationFrame(update); } }
  window.addEventListener('scroll', req, { passive: true });
  window.addEventListener('resize', req);
  update();
})();

/* ---------- mirror (dev) marker ----------
   Prod = branch main, the address followers see. Mirror = branch dev, address starting with "dev."
   (dev.grainoftaste.com or grain-of-taste.pages.dev). On the mirror: a red DEV bar on top and noindex for search engines. */
(function () {
  var h = location.hostname;
  var isMirror = /^dev\./.test(h) || /^[0-9a-f]{6,}\./.test(h) || /\.pages\.dev$/.test(h);
  if (!isMirror) return;
  var m = document.createElement('meta'); m.name = 'robots'; m.content = 'noindex, nofollow'; document.head.appendChild(m);
  var bar = document.createElement('div');
  bar.className = 'dev-bar';
  bar.textContent = 'DEV · mirror · not prod';
  document.body.insertBefore(bar, document.body.firstChild);
})();

/* ---------- PDF: watermark layer + download buttons ----------
   The watermark is printed on every page of any PDF or printout of the site.
   Download buttons: <a class="btn pdf" data-pdf="wheat-sourdough" href="../pdf/wheat-sourdough-en.pdf">
   pick the file in the reader's current language (en / sr / ru). */
(function () {
  var wm = document.createElement('div');
  wm.className = 'watermark'; wm.setAttribute('aria-hidden', 'true');
  var inner = '';
  for (var i = 0; i < 160; i++) inner += '<span>@grain_of_taste</span>';
  wm.innerHTML = '<div>' + inner + '</div>';
  document.body.appendChild(wm);
  document.querySelectorAll('a[data-pdf]').forEach(function (a) {
    a.addEventListener('click', function () {
      var lang = (window.gotI18n && window.gotI18n.current()) || 'en';
      var base = a.getAttribute('href').replace(/-(en|sr|ru)\.pdf$/, '');
      a.setAttribute('href', base + '-' + lang + '.pdf');
    });
  });
})();

/* ---------- kit checklist: ticks remembered in this browser, shared between the recipe and "what you need" ---------- */
(function () {
  document.querySelectorAll('.kit-check input[type=checkbox]').forEach(function (cb) {
    try { cb.checked = localStorage.getItem('got-' + cb.id) === '1'; } catch (e) {}
    cb.addEventListener('change', function () { try { localStorage.setItem('got-' + cb.id, cb.checked ? '1' : '0'); } catch (e) {} });
  });
})();
