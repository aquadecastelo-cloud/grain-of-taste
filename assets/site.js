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
     <div class="video" data-src="..." data-poster="..."></div>
     data-src: .mp4/.webm on your hosting → <video>; youtube / vimeo / instagram URL → iframe; empty → placeholder. */
  document.querySelectorAll('.video').forEach(function (box) {
    var src = (box.getAttribute('data-src') || '').trim();
    var label = box.getAttribute('data-label') || 'video';
    if (!src) {
      box.innerHTML = '<div class="empty">' + icon('play') + '<span class="caps">' + label + '</span><span class="hand">coming soon</span></div>';
      return;
    }
    var m;
    if ((m = src.match(/(?:youtube\.com\/(?:watch\?v=|shorts\/)|youtu\.be\/)([\w-]{11})/))) {
      box.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + m[1] + '" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="' + label + '"></iframe>';
    } else if ((m = src.match(/vimeo\.com\/(\d+)/))) {
      box.innerHTML = '<iframe src="https://player.vimeo.com/video/' + m[1] + '" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="' + label + '"></iframe>';
    } else if ((m = src.match(/instagram\.com\/(reel|p)\/([\w-]+)/))) {
      box.innerHTML = '<iframe src="https://www.instagram.com/' + m[1] + '/' + m[2] + '/embed" loading="lazy" allowfullscreen title="' + label + '"></iframe>';
    } else {
      var poster = box.getAttribute('data-poster');
      box.innerHTML = '<video controls playsinline preload="metadata"' + (poster ? ' poster="' + poster + '"' : '') + '><source src="' + src + '"></video>';
    }
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
        var amount = root.querySelector('[name=amount]');
    var loaves = root.querySelector('[name=loaves]');
    var starterType = root.querySelector('[name=starter]');
    var out = root.querySelector('.calc-out');
    function render() {
      var m = (root.querySelector('[name^=mode]:checked') || {}).value || 'flour';
      var a = parseFloat(amount.value) || 0;
      var n = loaves ? (parseInt(loaves.value, 10) || 1) : 1;
      var st = starterType ? starterType.value : 'stiff';
      var F;
      if (m === 'dough') F = a / (1 + f.hydration / 100 + f.salt / 100);
      else F = a;
      var d = compute(f, F, st);
      var per = n > 1 ? compute(f, F / n, st) : null;
      var rows = [];
      if (f.pff > 0) rows.push(['starter · ' + d.sh + '%', d.starter]);
      if (f.ww > 0) rows.push(['whole wheat flour', d.ww]);
      rows.push([f.ww > 0 ? 'white bread flour' : 'flour', d.white]);
      rows.push(['water', d.water]);
      if (f.salt > 0) rows.push(['salt', d.salt]);
      var html = '<div class="big num">' + r(d.total) + ' <span class="caps" style="font-size:15px">g dough</span></div>';
      html += '<table class="t"><tr><th>ingredient</th><th class="r">' + (per ? 'total' : 'grams') + '</th>' + (per ? '<th class="r">× 1 of ' + n + '</th>' : '') + '</tr>';
      rows.forEach(function (row) {
        html += '<tr><td>' + row[0] + '</td><td class="r num">' + r(row[1]) + '\u00a0g</td>' + (per ? '<td class="r num">' + r(row[1] / n) + '\u00a0g</td>' : '') + '</tr>';
      });
      html += '<tr class="total"><td class="caps">total flour · 100%</td><td class="r num">' + r(d.flour) + '\u00a0g</td>' + (per ? '<td class="r num">' + r(d.flour / n) + '\u00a0g</td>' : '') + '</tr></table>';
      html += '<p class="note">hydration ' + f.hydration + '% · salt ' + f.salt + '%' + (f.ww ? ' · whole wheat ' + f.ww + '%' : '') + (f.pff ? ' · prefermented flour ' + f.pff + '%' : '') + '. Rounded to the gram — your scale does the same.</p>';
      out.innerHTML = html;
      if (window.gotI18n) window.gotI18n.apply(out);
    }
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

/* ---------- mirror (dev) marker ----------
   Prod = branch main, the address followers see. Mirror = branch dev, address starting with "dev."
   (e.g. dev.grain-of-taste.pages.dev). On the mirror: a red DEV bar on top and noindex for search engines. */
(function () {
  var h = location.hostname;
  var isMirror = /^dev\./.test(h) || /^[0-9a-f]{6,}\./.test(h);
  if (!isMirror) return;
  var m = document.createElement('meta'); m.name = 'robots'; m.content = 'noindex, nofollow'; document.head.appendChild(m);
  var bar = document.createElement('div');
  bar.className = 'dev-bar';
  bar.textContent = 'DEV · mirror · not prod';
  document.body.insertBefore(bar, document.body.firstChild);
})();
