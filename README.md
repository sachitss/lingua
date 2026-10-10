<p align="center"><img src="brand/lingua-lockup.svg" alt="lingua" width="520"></p>

# Lingua

Lingua is a multilingual, adaptive language-learning app for **English, German, Spanish, Italian and French**. It is built on the existing Bhasha app (version 1.3.0), not written from scratch. It ships as an Android app, an iOS app and a web app (PWA) from one shared codebase.

> **Status: specification and brand (v0.1.0).** This repository holds the developer architecture, the Bhasha 1.3.0 audit and the brand asset package. There is no application code or app build yet.

## Contents

| Path | What it is |
| --- | --- |
| [`docs/architecture.md`](docs/architecture.md) | Developer architecture: Bhasha audit, brand, system architecture, content model, learning engine, audio, data model, APIs, privacy, testing, open questions |
| [`docs/lingua-architecture.pdf`](docs/lingua-architecture.pdf) | The same document as an A4 PDF |
| [`docs/vocabulary-principles.md`](docs/vocabulary-principles.md) | The four vocabulary principles the learning engine enforces |
| [`docs/prompts/`](docs/prompts) | The Lingua master prompt and the Bhasha enhancement prompt |
| [`brand/`](brand) | Logo, wordmark, app icons, favicon, splash screens and design tokens |
| [`brand/source/`](brand/source) | The original Lingua logo boards (primary lockup, app icon variants) |
| [`brand/powered-by/`](brand/powered-by) | Team Nepal Solutions logo for the "Powered by" line |
| [`releases/`](releases) | Packaged releases with release notes, one folder per version |
| [`tools/build_brand.py`](tools/build_brand.py) | Rebuilds everything in `brand/` from the master geometry |

## Release 1 decisions

| Topic | Decision |
| --- | --- |
| Languages taught | EN, DE, ES, IT, FR only; Nepali stays as an interface language |
| Interface languages | German, English, Nepali |
| Platforms | Android and iOS (Capacitor) plus the web app (PWA), one codebase |
| Backend | Added in Release 1 for accounts, sync and cloud speech scoring; the app still works offline |
| Spaced repetition | FSRS, replacing Bhasha's SM-2 variant; existing history is replayed on migration |
| Reference audio | Azure neural text-to-speech |
| Recordings | Kept on the device only, deleted after 30 days |
| Speech scoring | Azure AI Speech pronunciation assessment (proposed, to be confirmed) |
| Content review | Native reviewers for each of the five languages |

The full list, including what is still open, is in [Open questions](docs/architecture.md#open-questions).

## Brand assets

| File | Use |
| --- | --- |
| `lingua-lockup.svg`, `lingua-lockup-reversed.svg` | Primary lockup on light and dark backgrounds |
| `lingua-mark.svg`, `lingua-mark-reversed.svg` | Speech-bubble mark alone |
| `lingua-wordmark.svg` | Wordmark alone, as outlined paths |
| `app-icon.svg` and `app-icon-1024/512/192/180/48.png` | App icon with rounded corners |
| `app-icon-square-1024.png` | Full-bleed icon for the App Store (iOS applies its own mask) |
| `maskable.svg`, `maskable-512/192.png` | PWA maskable icon |
| `android-adaptive-foreground/background` | Android adaptive icon layers |
| `favicon.svg`, `favicon.ico`, `favicon-48/32/16.png` | Browser favicon with three dots |
| `splash-light`, `splash-dark` | Splash screens, 1284 × 2778 |
| `tokens.json`, `tokens.css` | Colour and type tokens |

The wordmark and the language-code line are converted to outlines, so the SVGs render the same on every device without the fonts installed. To rebuild after a change, install `cairosvg`, `fonttools`, `brotli` and `uharfbuzz`, then pass the Bricolage Grotesque 800 and DM Mono 400 font files from `@fontsource`:

```sh
python3 tools/build_brand.py bricolage-grotesque-latin-800-normal.woff2 dm-mono-latin-400-normal.woff2 brand
```

Bricolage Grotesque and DM Mono are licensed under the SIL Open Font License 1.1.

---

<p>Powered by Ing.-Büro Sachit Shrestha<br><img src="brand/powered-by/powered-by-team-nepal-solutions.png" alt="Team Nepal Solutions" width="200"></p>
