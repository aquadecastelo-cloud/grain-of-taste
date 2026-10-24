"""Build the watermarked recipe PDFs.

    python3 tools/make_pdf.py                 # all recipes, en/sr/ru
    python3 tools/make_pdf.py wheat-sourdough # one recipe

Needs: pip install playwright pypdf  (+ `playwright install chromium` on a new machine).
Output: pdf/<recipe>-<lang>.pdf — commit them, the site's "download PDF" button links to these files.
Every page carries the @grain_of_taste watermark grid, and a footer with the site address and page number.
The PDF is locked against editing (printing allowed)."""
import os, re, sys, secrets, pathlib
from playwright.sync_api import sync_playwright
from pypdf import PdfReader, PdfWriter
from pypdf.constants import UserAccessPermissions as P

ROOT = pathlib.Path(__file__).resolve().parent.parent
SITE = os.environ.get('GOT_SITE', 'https://aquadecastelo-cloud.github.io/grain-of-taste')  # change to the domain once bought
RECIPES = {'wheat-sourdough': 'recipes/wheat-sourdough.html'}
TITLES = {'wheat-sourdough': {'en': 'wheat sourdough', 'sr': 'pšenični hleb na kiselom testu', 'ru': 'пшеничный хлеб на закваске'}}
LANGS = ['en', 'sr', 'ru']

FONTS = []
for f in sorted((ROOT / 'tools/fonts').glob('*.woff2')):
    m = re.match(r'(.+)-(latin-ext|latin|cyrillic)-(\d+)-(normal|italic)', f.stem)
    fam = {'caveat': 'Caveat', 'playfair-display': 'Playfair Display', 'jetbrains-mono': 'JetBrains Mono', 'golos-text': 'Golos Text'}[m.group(1)]
    FONTS.append(f"@font-face{{font-family:'{fam}';font-weight:{m.group(3)};font-style:{m.group(4)};src:url('{f.as_uri()}') format('woff2')}}")
FONT_CSS = '\n'.join(FONTS)

def footer(title, lang):
    label = {'en': 'page', 'sr': 'strana', 'ru': 'стр.'}[lang]
    return f'''<style>#header,#footer{{padding:0!important;margin:0!important}}</style><div style="width:100%;height:16mm;box-sizing:border-box;background:#F7F6EE;display:flex;align-items:center;font-family:'JetBrains Mono',monospace;font-size:7.5px;letter-spacing:1.2px;text-transform:uppercase;color:#5A584F;padding:0 15mm;justify-content:space-between;-webkit-print-color-adjust:exact;print-color-adjust:exact">
      <span>grain of taste · {title}</span><span>@grain_of_taste · {SITE.replace('https://', '')}</span><span>{label} <span class="pageNumber"></span> / <span class="totalPages"></span></span></div>'''

def build(slug, page_path, lang, browser):
    ctx = browser.new_context(locale=lang, viewport={'width': 1100, 'height': 1400})
    ctx.add_init_script(f"try{{localStorage.setItem('got-lang','{lang}')}}catch(e){{}}")
    ctx.route(re.compile(r'^https?://'), lambda r: r.abort())   # everything is local
    pg = ctx.new_page()
    pg.goto((ROOT / page_path).as_uri())
    pg.add_style_tag(content=FONT_CSS)
    pg.evaluate(f"""() => {{
      document.querySelectorAll('.step').forEach(s => {{
        const p = document.createElement('p'); p.className = 'pdf-only pdf-video';
        p.innerHTML = '<b>▶ watch this step:</b> {SITE.replace('https://','')}/{page_path}#' + s.id;
        s.querySelector(':scope > div:not(.head):not(.side)').appendChild(p);
        if (window.gotI18n) window.gotI18n.apply(p);
      }});
    }}""")
    pg.evaluate("Promise.all([...document.images].map(i=>i.complete?1:new Promise(r=>{i.onload=i.onerror=r})))")
    pg.evaluate("document.fonts.ready")
    title = TITLES[slug][lang]
    raw = ROOT / 'pdf' / f'.{slug}-{lang}.raw.pdf'
    pg.pdf(path=str(raw), format='A4', print_background=True, scale=0.78, prefer_css_page_size=True,
           display_header_footer=True, header_template='<style>#header,#footer{padding:0!important;margin:0!important}</style><div style="width:100%;height:16mm;background:#F7F6EE;-webkit-print-color-adjust:exact;print-color-adjust:exact"></div>', footer_template=footer(title, lang))
    ctx.close()
    # metadata + lock against editing
    r = PdfReader(str(raw)); w = PdfWriter(clone_from=r)
    w.add_metadata({'/Title': f'{title} · grain of taste', '/Author': 'Svetlana · @grain_of_taste',
                    '/Subject': f'Recipe from {SITE}', '/Keywords': 'grain of taste, sourdough, @grain_of_taste',
                    '/Creator': 'grain of taste'})
    w.encrypt(user_password='', owner_password=secrets.token_hex(16), algorithm='AES-256',
              permissions_flag=P.PRINT | P.PRINT_TO_REPRESENTATION | P.EXTRACT_TEXT_AND_GRAPHICS)
    out = ROOT / 'pdf' / f'{slug}-{lang}.pdf'
    with open(out, 'wb') as fh: w.write(fh)
    raw.unlink()
    print(out.relative_to(ROOT), len(r.pages), 'pages', round(out.stat().st_size / 1e6, 2), 'MB')

if __name__ == '__main__':
    todo = sys.argv[1:] or list(RECIPES)
    with sync_playwright() as p:
        b = p.chromium.launch()
        for slug in todo:
            for lang in LANGS:
                build(slug, RECIPES[slug], lang, b)
        b.close()
