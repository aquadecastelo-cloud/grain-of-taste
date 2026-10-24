# Lists any English text left on the RU/SR versions, as the mirror and as prod (release flags on).
# Run: python3 tools/check_translations.py
import re,mimetypes,pathlib
from playwright.sync_api import sync_playwright
ROOT=pathlib.Path(__file__).resolve().parent.parent; HOST='https://aquadecastelo-cloud.github.io/grain-of-taste/'
def serve(route):
    u=route.request.url
    if not u.startswith(HOST): return route.abort()
    p=ROOT/(u[len(HOST):].split('?')[0].split('#')[0] or 'index.html')
    if p.is_dir(): p=p/'index.html'
    if not p.exists(): return route.fulfill(status=404,body='nf')
    route.fulfill(status=200,body=p.read_bytes(),content_type=mimetypes.guess_type(str(p))[0] or 'text/html')
JS="""() => { const out=[]; const tw=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
 let n; while(n=tw.nextNode()){ const p=n.parentNode.nodeName; if(p=='SCRIPT'||p=='STYLE')continue; if(n.parentNode.closest('.watermark'))continue;
 const t=n.nodeValue.replace(/\\s+/g,' ').trim(); if(t && /[A-Za-z]{3}/.test(t) && !t.includes('‹') && (n.__en===undefined || n.nodeValue===n.__en)) out.push(t);} return [...new Set(out)]; }"""
SKIP={'kcal','grain of taste','@grain_of_taste','BreadVenture','grain','of taste','instagram →','doi','video','Svetlana','30 min','lievito madre'}
pages=[str(p.relative_to(ROOT)) for p in sorted(ROOT.rglob('*.html')) if 'tools' not in p.parts]
with sync_playwright() as pw:
    b=pw.chromium.launch(); bad=0
    for mode in ['prod','mirror']:
        for lang in ['ru','sr']:
            c=b.new_context(locale=lang); c.add_init_script(f"localStorage.setItem('got-lang','{lang}')")
            if mode=='prod': c.route(re.compile(r'^https?://'),serve)
            for f in pages:
                pg=c.new_page(); pg.goto((HOST+f) if mode=='prod' else (ROOT/f).as_uri()); pg.wait_for_timeout(250)
                if mode=='prod' and pg.url.rstrip('/').endswith('index.html') and not f.endswith('index.html'): pg.close(); continue
                left=[t for t in pg.evaluate(JS) if t not in SKIP and not re.fullmatch(r'[\d\s·./%°×:+–\-→←|()gGmin~]+',t)]
                if left: bad+=1; print(mode,lang,f,left[:6])
                pg.close()
            c.close()
    b.close(); print('pages with untranslated text:',bad)
