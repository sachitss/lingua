# Lingua app

Lingua 0.2.0 is built on the Bhasha 1.3.0 code (plain JavaScript ES modules in `www/`, wrapped with Capacitor for Android and iOS).

| Command | What it does |
| --- | --- |
| `npm ci` | Install Capacitor and the test tools |
| `npm test` | Unit tests: content in six languages, numbers, FSRS scheduling, interface strings |
| `npm run e2e` | Browser tests with Playwright (desktop and mobile Chromium) |
| `npm run serve` | Serve `www/` on http://localhost:8080 |
| `npx cap sync` | Copy `www/` into the Android and iOS projects |
| `python3 tools/native_assets.py` | Regenerate app icons and splash screens from `../brand` |

Builds run on GitHub Actions (`.github/workflows/build.yml`): web zip, Android APK and Play bundle, iOS device archive and simulator app.
Android release signing reads `LINGUA_KEYSTORE_FILE`, `LINGUA_KEYSTORE_PASSWORD`, `LINGUA_KEY_ALIAS` and `LINGUA_KEY_PASSWORD`; the keystore is never stored in the repository.

Italian and French content (`www/js/itfr.js`) and the Italian and French interface were drafted for 0.2.0 and need review by native speakers before a store release.
