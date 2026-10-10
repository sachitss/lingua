# Installing Lingua 0.2.0

| Device | What to use | Ready now? |
| --- | --- | --- |
| Android phone or tablet (Android 7.0+) | `lingua-0.2.0-android.apk` | Yes: signed, installs directly |
| Google Play | `lingua-0.2.0-android.aab` | Yes: signed upload bundle for the Play Console |
| iPhone / iPad | Web app, added to the Home Screen | Yes, once GitHub Pages is on (one click, see below) |
| iPhone / iPad, native app | `lingua-0.2.0-ios-unsigned.ipa` | Needs signing with your Apple ID |
| Windows, Mac, Chromebook | Web app in Chrome or Edge | Yes, once GitHub Pages is on |

## Android
1. On the phone, open https://github.com/sachitss/lingua/releases/download/v0.2.0/lingua-0.2.0-android.apk (or scan `qr-android-apk.png`).
2. Open the downloaded file. If Android asks, allow your browser or file manager to **install unknown apps**.
3. Tap **Install**, then open Lingua.

## Web app (iPhone, iPad, computers)
Address: https://sachitss.github.io/lingua/ (QR code: `qr-web-app.png`)

**One-time setup:** on GitHub, open the repository, then **Settings → Pages**. Set **Source** to "Deploy from a branch", choose the **gh-pages** branch and the **/(root)** folder, and click **Save**. After about a minute the address works. Every change to the app is published there automatically.

- **iPhone or iPad:** open the address in Safari, tap **Share**, then **Add to Home Screen**.
- **Android:** open the address in Chrome, then use the menu and **Install app**.
- **Computer:** open the address in Chrome or Edge, then click the install icon in the address bar.

Built-in audio is cached the first time each word plays, so the app then works offline. To cache everything at once, use **Profile → download audio**.

To host the app on your own server instead, unzip `lingua-0.2.0-web.zip` into any folder served over HTTPS.

## iPhone / iPad native app (optional)
Apple only allows signed apps on iPhones, so `lingua-0.2.0-ios-unsigned.ipa` needs one of these:
- **Free, for your own devices:** sign and install the IPA with your Apple ID using Sideloadly or AltStore on a Windows PC or Mac. Apps signed with a free Apple ID must be re-signed every 7 days.
- **For testers and the App Store:** join the Apple Developer Program, which costs 99 USD a year. Then either:
  - add your signing certificate and provisioning profile to the build, and send the app through TestFlight; or
  - open `app/ios` in Xcode and use **Product → Archive → Distribute**.

## Check the files
`SHA256SUMS.txt` lists the SHA-256 checksum of every file. The Android signing certificate has SHA-256 `8d:95:a5:d4:6d:92:5f:2c:b0:5e:af:37:bb:94:91:a6:64:fa:ed:48:28:78:94:00:6c:f2:7b:6d:9d:d3:d1:af`.

Powered by Ing.-Büro Sachit Shrestha · Team Nepal Solutions
