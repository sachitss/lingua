#!/usr/bin/env python3
"""Build the Lingua brand asset package from the master geometry in the Lingua logo files.

Usage: python3 tools/build_brand.py <bricolage-800.woff2> <dm-mono-400.woff2> <out-dir>
Fonts: @fontsource/bricolage-grotesque and @fontsource/dm-mono (SIL Open Font License 1.1).
The wordmark and the language-code line are converted to outlined paths, so no font is needed to render the SVGs.
"""
import json, os, sys
import uharfbuzz as hb
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
import cairosvg

T = {  # colour tokens, exact values from the Lingua logo SVGs
    "brand.navy": "#14213D", "brand.ink": "#0E1526", "surface.paper": "#F7F6F2",
    "text.secondary": "#5A6275", "white": "#FFFFFF",
    "lang.en": "#3D6BFF", "lang.de": "#F5B21B", "lang.es": "#F0533F", "lang.it": "#22B07D", "lang.fr": "#A07BFF",
}
DOTS5 = ["lang.en", "lang.de", "lang.es", "lang.it", "lang.fr"]
BUBBLE = "M22 6 H98 A18 18 0 0 1 116 24 V62 A18 18 0 0 1 98 80 H46 L24 97 L28 80 H22 A18 18 0 0 1 4 62 V24 A18 18 0 0 1 22 6 Z"


def bubble(fill, dots="five", r=7):
    """Mark in its 120 x 100 master space."""
    if dots == "five":
        cs = "".join(f'<circle cx="{28 + 16 * i}" cy="43" r="{r}" fill="{T[k]}"/>' for i, k in enumerate(DOTS5))
    else:  # favicon: three larger dots, as in the Lingua favicon artwork
        cs = "".join(f'<circle cx="{x}" cy="43" r="10" fill="{T[k]}"/>' for x, k in [(32, "lang.en"), (60, "lang.es"), (88, "lang.it")])
    return f'<path d="{BUBBLE}" fill="{fill}"/>{cs}'


_TTF = {}


def _ttf(font_path):
    """HarfBuzz cannot read WOFF2, so decompress to a temporary TTF once."""
    if font_path not in _TTF:
        import tempfile
        f = TTFont(font_path); f.flavor = None
        tmp = tempfile.NamedTemporaryFile(suffix=".ttf", delete=False); f.save(tmp.name)
        _TTF[font_path] = tmp.name
    return _TTF[font_path]


def text_path(font_path, text, size, tracking_px, x, baseline):
    """Shape text with HarfBuzz and return it as one outlined SVG path."""
    font_path = _ttf(font_path)
    blob = hb.Blob.from_file_path(font_path)
    face = hb.Face(blob); font = hb.Font(face)
    buf = hb.Buffer(); buf.add_str(text); buf.guess_segment_properties()
    hb.shape(font, buf, {"kern": True, "liga": True})
    tt = TTFont(font_path); gs = tt.getGlyphSet(); order = tt.getGlyphOrder()
    upm = tt["head"].unitsPerEm; s = size / upm
    pen = SVGPathPen(gs); cx = x
    for info, pos in zip(buf.glyph_infos, buf.glyph_positions):
        name = order[info.codepoint]
        tp = TransformPen(pen, (s, 0, 0, -s, cx + pos.x_offset * s, baseline - pos.y_offset * s))
        gs[name].draw(tp)
        cx += pos.x_advance * s + tracking_px
    return pen.getCommands(), cx - tracking_px


def svg(w, h, body, title):
    return (f'<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}" role="img">'
            f'<title>{title}</title>{body}</svg>\n')


def main(bri, mono, out):
    os.makedirs(out, exist_ok=True)
    W = lambda name, data: open(os.path.join(out, name), "w").write(data)
    png = lambda name, w, h=None: cairosvg.svg2png(url=os.path.join(out, name), write_to=os.path.join(out, name.rsplit(".", 1)[0] + f"-{w}.png"), output_width=w, output_height=h or w)

    # Mark
    W("lingua-mark.svg", svg(120, 100, bubble(T["brand.navy"]), "Lingua"))
    W("lingua-mark-reversed.svg", svg(120, 100, bubble(T["surface.paper"]), "Lingua"))

    # Wordmark: Bricolage Grotesque 800, 148 px, tracking -6.66 px (from the primary lockup)
    wm, wm_end = text_path(bri, "lingua", 148, -6.66, 0, 148)
    # Lockup: mark scaled 13/6 (260 px wide), wordmark 44 px to its right, code line under the wordmark
    k = 13 / 6; gx = 304
    base = 138  # wordmark baseline, as in the primary lockup board
    for name, ink, mark_fill, bg in [("lingua-lockup", T["brand.navy"], T["brand.navy"], None),
                                     ("lingua-lockup-reversed", T["surface.paper"], T["surface.paper"], T["brand.ink"])]:
        w_path, w_end = text_path(bri, "lingua", 148, -6.66, gx, base)
        c_path, c_end = text_path(mono, "EN · DE · ES · IT · FR", 20, 6.4, gx + 6, base + 50)
        width = int(max(w_end, c_end) + 8); height = 217
        bgr = f'<rect width="{width}" height="{height}" fill="{bg}"/>' if bg else ""
        code = T["text.secondary"] if not bg else "#9AA3B5"
        body = (f'{bgr}<g transform="scale({k})">{bubble(mark_fill)}</g>'
                f'<path d="{w_path}" fill="{ink}"/><path d="{c_path}" fill="{code}"/>')
        W(name + ".svg", svg(width, height, body, "Lingua"))
    W("lingua-wordmark.svg", svg(int(wm_end + 4), 190, f'<path d="{wm}" fill="{T["brand.navy"]}"/>', "lingua"))

    # App icon: 240 master, corner radius 54, white bubble scaled 1.4 at (36, 50)
    icon = (f'<rect width="240" height="240" rx="54" fill="{T["brand.navy"]}"/>'
            f'<g transform="translate(36 50) scale(1.4)">{bubble(T["white"])}</g>')
    W("app-icon.svg", svg(240, 240, icon, "Lingua"))
    for s in (1024, 512, 192, 180, 48):
        png("app-icon.svg", s)
    # Full-bleed square for iOS (the OS applies its own mask) and Android/PWA maskable (mark inside the 80% safe zone)
    W("app-icon-square.svg", svg(240, 240, f'<rect width="240" height="240" fill="{T["brand.navy"]}"/>'
                                 f'<g transform="translate(36 50) scale(1.4)">{bubble(T["white"])}</g>', "Lingua"))
    png("app-icon-square.svg", 1024)
    W("maskable.svg", svg(240, 240, f'<rect width="240" height="240" fill="{T["brand.navy"]}"/>'
                          f'<g transform="translate(54 65) scale(1.1)">{bubble(T["white"])}</g>', "Lingua"))
    for s in (512, 192):
        png("maskable.svg", s)
    # Android adaptive icon layers (108 dp canvas, 72 dp safe zone)
    W("android-adaptive-foreground.svg", svg(108, 108, f'<g transform="translate(24 30) scale(0.5)">{bubble(T["white"])}</g>', "Lingua"))
    W("android-adaptive-background.svg", svg(108, 108, f'<rect width="108" height="108" fill="{T["brand.navy"]}"/>', "Lingua"))
    png("android-adaptive-foreground.svg", 432); png("android-adaptive-background.svg", 432)

    # Favicon: 48 master, radius 11, three-dot bubble scaled 0.28 at (7.2, 10)
    fav = (f'<rect width="48" height="48" rx="11" fill="{T["brand.navy"]}"/>'
           f'<g transform="translate(7.2 10) scale(0.28)">{bubble(T["white"], dots="three")}</g>')
    W("favicon.svg", svg(48, 48, fav, "Lingua"))
    for s in (48, 32, 16):
        png("favicon.svg", s)
    from PIL import Image
    ims = [Image.open(os.path.join(out, f"favicon-{s}.png")) for s in (16, 32, 48)]
    ims[2].save(os.path.join(out, "favicon.ico"), sizes=[(16, 16), (32, 32), (48, 48)])

    # Splash screens (portrait, light and dark)
    for name, bg, fill in [("splash-light", T["surface.paper"], T["brand.navy"]), ("splash-dark", T["brand.ink"], T["surface.paper"])]:
        w_path, w_end = text_path(bri, "lingua", 148, -6.66, 0, 0)
        sc = 0.62; tw = w_end * sc
        body = (f'<rect width="1284" height="2778" fill="{bg}"/>'
                f'<g transform="translate({642 - 150} 1120) scale(2.5)">{bubble(fill)}</g>'
                f'<path d="{w_path}" fill="{fill}" transform="translate({642 - tw / 2} 1520) scale({sc})"/>')
        W(name + ".svg", svg(1284, 2778, body, "Lingua"))
        cairosvg.svg2png(url=os.path.join(out, name + ".svg"), write_to=os.path.join(out, name + ".png"))

    # Tokens
    tokens = {"color": {}, "font": {
        "wordmark": {"family": "Bricolage Grotesque", "weight": 800, "letterSpacing": "-0.045em"},
        "ui": {"family": "Bricolage Grotesque", "weights": [400, 500]},
        "label": {"family": "DM Mono", "weight": 400, "letterSpacing": "0.14em"},
        "devanagari": {"family": "Mukta", "weights": [300, 400, 500, 700]},
        "license": "SIL Open Font License 1.1"},
        "radius": {"appIcon": "22.5%", "favicon": "23%"},
        "languageOrder": ["en", "de", "es", "it", "fr"]}
    for k2, v in T.items():
        grp, key = k2.split(".") if "." in k2 else ("brand", k2)
        tokens["color"].setdefault(grp, {})[key] = v
    W("tokens.json", json.dumps(tokens, indent=2, ensure_ascii=False) + "\n")
    css = ":root {\n" + "".join(f"  --lingua-{k2.replace('.', '-')}: {v};\n" for k2, v in T.items()) + \
          '  --lingua-font-ui: "Bricolage Grotesque", system-ui, sans-serif;\n  --lingua-font-label: "DM Mono", ui-monospace, monospace;\n}\n'
    W("tokens.css", css)


if __name__ == "__main__":
    main(*sys.argv[1:4])
