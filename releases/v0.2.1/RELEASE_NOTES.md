# Lingua v0.2.1 — Apple App ID, TestFlight and a new Android key

Released 14 Oct 2026 (build 4). **Preview release:** Italian and French content still needs review by native speakers before the store release.

### What's new
- **Apple App ID:** the iPhone and iPad app uses the bundle ID `com.medtec24.lingua` with team `5F8UXTYXYJ`. On the App Store it is listed as "Lingua – Learn Languages"; on the home screen it is "Lingua".
- **TestFlight:** every build is signed with the Apple Distribution certificate and uploaded to TestFlight automatically. Install it on an iPhone with the TestFlight app once you are added as a tester.
- **New Android release key:** Android builds are now signed in GitHub Actions with a new Lingua release key. **If 0.2.0 is installed on a phone, uninstall it once before installing 0.2.1** (Android refuses an update signed with a different key). Later updates install normally.
- Version 0.2.1, build 4, on all platforms.

### Downloads
| File | Platform | Signing |
| --- | --- | --- |
| `lingua-0.2.1-android-signed.apk` | Android 7.0 and later; install directly (QR code: `qr-android-apk.png`) | Signed with the new Lingua release key |
| `lingua-0.2.1-android-signed.aab` | Google Play upload bundle | Signed with the new Lingua release (upload) key |
| iPhone and iPad | TestFlight (build 0.2.1 (4)) | Signed by Apple |
| `lingua-0.2.1-ios-simulator.zip` | iOS Simulator (Xcode) | Not needed |
| `lingua-0.2.1-windows-setup.exe` | Windows 10 and 11 desktop app | Unsigned: SmartScreen asks once |
| `lingua-0.2.1-mac-arm64.dmg`, `lingua-0.2.1-mac-x64.dmg` | macOS desktop app (Apple silicon, Intel) | Not notarised: right-click → Open the first time |
| `lingua-0.2.1-web.zip` | Web app (PWA) | Not needed |
| `lingua-0.2.1-install-package.zip` | Everything above in one file | — |

Android signing certificate: `CN=Sachit Shrestha, O=Ing.-Buero Sachit Shrestha, C=DE`, SHA-256 `fc:bf:39:c0:b6:b3:f0:d9:bc:ba:ba:2e:52:da:91:b9:7a:d1:03:f9:ca:29:7b:c5:49:b9:0a:af:2b:df:45:8b`.

### Installing on Android
1. On the phone, open https://github.com/sachitss/lingua/releases/download/v0.2.1/lingua-0.2.1-android-signed.apk, or scan `qr-android-apk.png`.
2. If Lingua 0.2.0 is installed, uninstall it first: long-press the Lingua icon → **App info** → **Uninstall**. Progress from 0.2.0 is not kept.
3. Open the downloaded file. If Android asks, allow your browser or file manager to **install unknown apps**.
4. Tap **Install**, then open Lingua.

### Tests
All passed in GitHub Actions: 34 unit tests, browser tests on desktop and mobile Chromium, launch tests on an Android 14 emulator and an iPhone simulator, and launch tests of the Windows and Mac apps.

### Known limitations
The same as [v0.2.0](../v0.2.0/RELEASE_NOTES.md#known-limitations).

Powered by Ing.-Büro Sachit Shrestha · Team Nepal Solutions
