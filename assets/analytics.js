/* grain of taste — visit & action counting with GoatCounter (no cookies, no personal data).
   Turn on: put the site code in GC_CODE (from https://<code>.goatcounter.com). Empty = off.
   Counts only on the prod domain, never on the mirror, previews or local files.
   Reports: https://<code>.goatcounter.com → Pages (visits) and the "event" rows (actions). */
(function () {
  var GC_CODE = '';
  var PROD = ['grainoftaste.com', 'www.grainoftaste.com'];
  if (!GC_CODE || PROD.indexOf(location.hostname) < 0) return;

  window.goatcounter = { allow_local: false };
  var s = document.createElement('script');
  s.async = true; s.src = 'https://gc.zgo.at/count.js';
  s.setAttribute('data-goatcounter', 'https://' + GC_CODE + '.goatcounter.com/count');
  document.head.appendChild(s);

  var lang = function () { return (window.gotI18n && window.gotI18n.current()) || 'en'; };
  var page = location.pathname.replace(/\/index\.html$/, '/').replace(/\.html$/, '');
  function count(name, title) {
    var send = function () { window.goatcounter.count({ path: name, title: title || name, event: true }); };
    if (window.goatcounter && window.goatcounter.count) send();
    else s.addEventListener('load', send);
  }
  var once = {};
  function countOnce(key, name, title) { if (once[key]) return; once[key] = 1; count(name, title); }

  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a, button, label');
    if (!a) return;
    if (a.matches('a[data-pdf]')) count('pdf-download/' + a.getAttribute('data-pdf') + '/' + lang(), 'PDF download (' + lang() + ')');
    else if (a.matches('.calc-print')) count('calc-print' + page, 'Calculator: print / save PDF');
    else if (a.matches('.lang a')) count('language/' + a.getAttribute('data-lang'), 'Language switch → ' + a.getAttribute('data-lang'));
    else if (a.matches('.clip-tabs button')) { var t = ((a.firstChild && a.firstChild.__en) || a.textContent).trim(); count('video-tab' + page + '/' + t, 'Video tab: ' + t); }
    else if (a.matches('a[href*="instagram.com"]')) count('instagram-click' + page, 'Instagram click');
  }, true);

  document.addEventListener('play', function (e) {
    var v = e.target; if (!v || v.tagName !== 'VIDEO') return;
    var step = (v.closest('.step') || {}).id || 'video';
    countOnce('play-' + step + v.currentSrc, 'video-play' + page + '/' + step, 'Video play: ' + step);
  }, true);

  document.addEventListener('input', function (e) {
    if (e.target.closest && e.target.closest('.scaler')) countOnce('calc' + page, 'calc-used' + page, 'Calculator used');
  }, true);
  document.addEventListener('change', function (e) {
    if (e.target.matches && e.target.matches('.kit-check input') && e.target.checked) countOnce('kit' + page, 'kit-checklist' + page, 'Kit checklist used');
  }, true);

  /* first-visit language the site picked (what visitors actually read in) */
  countOnce('lang', 'reading-language/' + lang(), 'Reading in ' + lang());
})();
