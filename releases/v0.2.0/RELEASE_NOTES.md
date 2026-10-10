# Lingua v0.2.0 — first cross-platform build

Released 10 Oct 2026. Built from commit `b37dd49` by GitHub Actions run 38085331124. **Preview release:** Italian and French content still needs review by native speakers before the store release.

### Downloads
| File | Platform | Signing |
| --- | --- | --- |
| `lingua-0.2.0-android.apk` | Android 7.0 and later; install directly | Signed with the Lingua release key (APK Signature Scheme v2 + v3) |
| `lingua-0.2.0-android.aab` | Google Play upload bundle | Signed with the Lingua release (upload) key |
| `lingua-0.2.0-ios-unsigned.ipa` | iPhone and iPad, iOS 15 and later | Unsigned: needs your Apple Developer certificate to install or submit |
| `lingua-0.2.0-ios-simulator.zip` | iOS Simulator (Xcode) | Not needed |
| `lingua-0.2.0-web.zip` | Web app (PWA): host the folder on any HTTPS server | Not needed |

Android signing certificate: `CN=Sachit Shrestha, O=Ing.-Buero Sachit Shrestha, C=DE`, SHA-256 `8d:95:a5:d4:6d:92:5f:2c:b0:5e:af:37:bb:94:91:a6:64:fa:ed:48:28:78:94:00:6c:f2:7b:6d:9d:d3:d1:af`.

### What's new compared with Bhasha 1.3.0
- **Lingua brand**: name, app ID `com.sachitss.lingua`, logo, icons, splash screens, colours, Bricolage Grotesque and DM Mono fonts, and "Powered by Ing.-Büro Sachit Shrestha" with the Team Nepal Solutions logo.
- **Six learning languages and six interface languages**: English, German, Spanish, Italian, French and Nepali. Korean was removed.
- **Italian and French added**: 227 words and phrases with example sentences, 6 reading texts, 6 conversations, 8 grammar topics, and number rules up to one million.
- **FSRS spaced repetition** replaces SM-2. **Mastered** now needs active recall: 3 correct typed, dictated or translated answers in a row, in 2 kinds of exercise, over at least 7 days.
- **Android, iOS and web app from one codebase** (Capacitor 8), tested and built automatically on GitHub.

### Tests
All passed. Details are in `TEST_REPORT.md`.
- 34 unit tests and 34 browser tests (desktop and mobile Chromium).
- Launch tests on an Android 14 emulator and an iPhone simulator.
- Signature verification of both Android files.

### Known limitations
- Italian and French texts and the Italian and French interface are drafts for native review.
- **Audio:**
  - Italian and French use the device's voices until Azure audio is generated.
  - English, German, Spanish and Nepali have built-in Azure neural audio.
- No accounts or sync yet (the backend comes later): progress stays on the device, and pronunciation scores are the on-device estimate.
- The iOS build is unsigned.
- Bhasha's Android home-screen widget is not included: its native code was not available.
- Bhasha progress does not carry over; Lingua is a separate app.

Powered by Ing.-Büro Sachit Shrestha · Team Nepal Solutions
