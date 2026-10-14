# Google Play listing for Lingua

Everything Google Play needs for Lingua, in the folder layout that `fastlane supply` reads (`<locale>/title.txt`, `short_description.txt`, `full_description.txt`, `images/…`).

| Item | Value |
| --- | --- |
| Package name | `com.medtec24.lingua` (permanent; same as the Apple App ID) |
| App name | Lingua – Learn Languages · Lingua – Sprachen lernen |
| Default language | English (United States) – `en-US`; translation: German – `de-DE` |
| App or game | App |
| Free or paid | Free |
| Category | Education |
| Contact email | support@medtec24.com |
| Contact phone | +49 176 76786910 |
| Website | https://github.com/sachitss/lingua |
| Privacy policy | https://sachitss.github.io/lingua/privacy.html (source: `app/www/privacy.html`) |
| Upload file | `lingua-<version>-android-signed.aab` from the GitHub release (signed with the Lingua upload key) |
| App signing | Play App Signing (Google holds the app signing key; our key is the upload key) |

## Graphics

| File | Size | Use |
| --- | --- | --- |
| `*/images/icon.png` | 512 × 512 | App icon |
| `*/images/featureGraphic.png` | 1024 × 500 | Feature graphic |
| `*/images/phoneScreenshots/1–5.png` | 1080 × 1920 | Home, Learn, Words, Speak, Travel (from the real app) |

## App content answers

| Section | Answer |
| --- | --- |
| Privacy policy | URL above |
| Ads | No, the app contains no ads |
| App access | All functionality is available without special access (no login) |
| Content rating (IARC) | Category: Reference, News or Educational. No violence, sexual content, profanity, drugs, gambling or user-generated content; users cannot interact or share content; no location sharing; no purchases. Expected rating: PEGI 3 / USK 0 / Everyone |
| Target audience | 13 and over (the app is not designed for children, but contains nothing unsuitable). Choosing an age group under 13 brings in the Families policy, so only select it deliberately |
| News app | No |
| COVID-19 contact tracing / status | No |
| Data safety | **No data collected, no data shared.** Progress stays in local storage; recordings stay in memory and are deleted when the app closes; no accounts, analytics or ads. Data that never leaves the device does not count as "collected" |
| Government app | No |
| Financial features | None |
| Health | None |

## Permissions in the app

| Permission | Why |
| --- | --- |
| `RECORD_AUDIO`, `MODIFY_AUDIO_SETTINGS` | Pronunciation practice (asked when first used) |
| `POST_NOTIFICATIONS` | Daily practice reminders, if switched on |
| `INTERNET` | Loading built-in audio and opening dictionary links |

## Personal developer accounts: testing before production

Personal Play Console accounts created after November 2023 must run a **closed test with at least 12 testers for at least 14 days in a row** before Google allows a production release. Upload the AAB to a closed testing track first, add the testers' Google accounts (email list), and apply for production access afterwards.
