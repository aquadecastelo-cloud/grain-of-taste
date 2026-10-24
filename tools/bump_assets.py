"""Stamp asset links with a content hash so browsers never mix a new page with old CSS/JS.

    python3 tools/bump_assets.py      # run before every release (make_pdf.py does it too)

Rewrites  assets/style.css  ->  assets/style.css?v=<8 hex>  (same for every file in assets/) in all pages."""
import hashlib, pathlib, re
ROOT = pathlib.Path(__file__).resolve().parent.parent
def bump():
    ver = {p.name: hashlib.sha1(p.read_bytes()).hexdigest()[:8] for p in (ROOT / 'assets').iterdir() if p.is_file()}
    changed = 0
    for page in ROOT.rglob('*.html'):
        if 'tools' in page.parts: continue
        s = page.read_text(encoding='utf8')
        n = re.sub(r'(assets/)([\w.-]+\.(?:css|js))(\?v=[0-9a-f]+)?', lambda m: m.group(1) + m.group(2) + ('?v=' + ver[m.group(2)] if m.group(2) in ver else ''), s)
        if n != s: page.write_text(n, encoding='utf8'); changed += 1
    return changed
if __name__ == '__main__':
    print('pages updated:', bump())
