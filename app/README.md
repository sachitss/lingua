# Lingua app

Lingua 0.2.1 is built on the Bhasha 1.3.0 code (plain JavaScript ES modules in `www/`, wrapped with Capacitor for Android and iOS).

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

### Apple (iOS)

| Setting | Value |
| --- | --- |
| Bundle ID (explicit App ID) | `com.medtec24.lingua` |
| Team ID (App ID prefix) | `5F8UXTYXYJ` |

The build always makes an unsigned IPA. It also makes a signed `lingua-<version>-ios.ipa` when these GitHub secrets exist (Settings → Secrets and variables → Actions):

| Secret | What to put in it |
| --- | --- |
| `IOS_CERT_P12_BASE64` | Your **Apple Distribution** certificate with its private key, exported from Keychain Access as `.p12`, then base64-encoded |
| `IOS_CERT_PASSWORD` | The password you gave the `.p12` |
| `IOS_PROFILE_BASE64` | A provisioning profile for `com.medtec24.lingua`, base64-encoded: **Ad Hoc** to install on registered iPhones, **App Store** for TestFlight and the App Store |

With an App Store profile, adding an App Store Connect API key also uploads the build to TestFlight: `ASC_KEY_ID`, `ASC_ISSUER_ID` and `ASC_KEY_P8_BASE64` (the `.p8` file, base64-encoded). To base64-encode a file on Windows: `certutil -encodehex -f file.p12 file.txt 0x40000001`; on a Mac: `base64 -i file.p12 | pbcopy`.

Italian and French content (`www/js/itfr.js`) and the Italian and French interface were drafted for 0.2.0 and need review by native speakers before a store release.
