/* grain of taste — which sections are released on prod.
   Prod = the address followers see (PROD_HOSTS). Everywhere else (mirror dev.*, local files, previews)
   everything is visible, and sections not yet released are marked "not on prod".
   To release a section: set it to true here, push to dev, check, then "выкатываем". */
(function () {
  var RELEASED = {
    starters: false,
    science: false,
    myths: false,
    calculator: true
  };
  var PROD_HOSTS = ['aquadecastelo-cloud.github.io'];   /* add the domain here once it's bought */

  var SECTIONS = {
    starters: /\/recipes\/(stiff-starter-43|liquid-starter-100)\.html$/,
    science: /\/science\/[^/]*$/,
    myths: /\/myths\/[^/]*$/,
    calculator: /\/calculator\.html$/
  };
  var isProd = PROD_HOSTS.indexOf(location.hostname) > -1 || window.GOT_AS_PROD === true;  /* PDF builder renders as prod */
  function hiddenSection(path) {
    for (var k in SECTIONS) if (!RELEASED[k] && SECTIONS[k].test(path)) return k;
    return null;
  }
  function home() {
    var a = document.querySelector('.site-header .brand');
    return a ? a.href : '/';
  }

  /* opened a hidden page directly on prod → home */
  if (isProd && hiddenSection(location.pathname)) { location.replace(home()); return; }

  document.querySelectorAll('a[href]').forEach(function (a) {
    var url;
    try { url = new URL(a.href, location.href); } catch (e) { return; }
    if (url.origin !== location.origin && url.protocol !== 'file:') return;
    var k = hiddenSection(url.pathname);
    if (!k) return;
    if (!isProd) { a.classList.add('unreleased'); a.title = k + ' — not on prod yet'; return; }
    var inline = a.parentElement && /^(P|SPAN|LI)$/.test(a.parentElement.tagName) && !a.classList.length;
    if (inline) { a.replaceWith(document.createTextNode(a.textContent)); return; }
    a.remove();
  });
  /* text that only makes sense when a section is out: <span data-needs="calculator">…</span> */
  document.querySelectorAll('[data-needs]').forEach(function (el) {
    if (isProd && !RELEASED[el.getAttribute('data-needs')]) el.remove();
  });
  /* keep the home cards numbered 01, 02, 03… after hiding some */
  if (isProd) document.querySelectorAll('.cover-card .no').forEach(function (n, i) { n.textContent = (i < 9 ? '0' : '') + (i + 1); });
})();
