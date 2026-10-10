#!/usr/bin/env python3
"""Write Lingua icons and splash screens into the Capacitor Android and iOS projects from ../brand.

Usage: python3 tools/native_assets.py   (run from app/, after `npx cap add android ios`)
"""
import glob, os, re
import cairosvg
from PIL import Image

BRAND = os.path.join(os.path.dirname(__file__), "..", "..", "brand")
RES = "android/app/src/main/res"
PAPER, NAVY = (247, 246, 242), (20, 33, 61)


def svg_png(name, out, w, h=None):
    cairosvg.svg2png(url=os.path.join(BRAND, name), write_to=out, output_width=w, output_height=h or w)


def flatten(path, bg=NAVY):
    """App Store icons must not have an alpha channel."""
    im = Image.open(path).convert("RGBA"); base = Image.new("RGB", im.size, bg); base.paste(im, mask=im.split()[3]); base.save(path)


def splash(out, w, h, dark=False):
    """Mark and wordmark centred on paper (or ink), cropped from the master splash."""
    src = "/tmp/lingua-splash-%s.png" % ("dark" if dark else "light")
    if not os.path.exists(src):
        svg_png("splash-dark.svg" if dark else "splash-light.svg", src, 1284, 2778)
    im = Image.open(src).convert("RGB")
    bg = (14, 21, 38) if dark else PAPER
    # Take the central square holding mark + wordmark, scale it to 40 % of the short side and centre it.
    box = im.crop((242, 1000, 1042, 1800))
    side = int(min(w, h) * 0.4)
    box = box.resize((side, side), Image.LANCZOS)
    canvas = Image.new("RGB", (w, h), bg); canvas.paste(box, ((w - side) // 2, (h - side) // 2)); canvas.save(out)


# Android launcher icons (legacy + round + adaptive foreground)
for d, px in {"mdpi": 48, "hdpi": 72, "xhdpi": 96, "xxhdpi": 144, "xxxhdpi": 192}.items():
    svg_png("app-icon.svg", f"{RES}/mipmap-{d}/ic_launcher.png", px)
    svg_png("app-icon.svg", f"{RES}/mipmap-{d}/ic_launcher_round.png", px)
    svg_png("android-adaptive-foreground.svg", f"{RES}/mipmap-{d}/ic_launcher_foreground.png", px * 108 // 48)
bg_xml = f"{RES}/values/ic_launcher_background.xml"
open(bg_xml, "w").write('<?xml version="1.0" encoding="utf-8"?>\n<resources>\n    <color name="ic_launcher_background">#14213D</color>\n</resources>\n')

# Notification icon (white silhouette of the bubble)
os.makedirs(f"{RES}/drawable", exist_ok=True)
open(f"{RES}/drawable/ic_stat_lingua.xml", "w").write('''<?xml version="1.0" encoding="utf-8"?>
<vector xmlns:android="http://schemas.android.com/apk/res/android" android:width="24dp" android:height="24dp"
    android:viewportWidth="120" android:viewportHeight="100">
    <path android:fillColor="#FFFFFFFF"
        android:pathData="M22 6 H98 A18 18 0 0 1 116 24 V62 A18 18 0 0 1 98 80 H46 L24 97 L28 80 H22 A18 18 0 0 1 4 62 V24 A18 18 0 0 1 22 6 Z"/>
</vector>
''')

# Android splash screens
for f in glob.glob(f"{RES}/drawable*/splash.png"):
    w, h = Image.open(f).size
    splash(f, w, h)

# iOS app icon (1024, no alpha) and splash (2732 square)
ios_icon = "ios/App/App/Assets.xcassets/AppIcon.appiconset/AppIcon-512@2x.png"
svg_png("app-icon-square.svg", ios_icon, 1024); flatten(ios_icon)
for f in glob.glob("ios/App/App/Assets.xcassets/Splash.imageset/*.png"):
    splash(f, 2732, 2732)
print("native assets written")
