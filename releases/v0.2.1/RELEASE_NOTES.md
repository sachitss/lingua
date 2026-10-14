# Lingua v0.2.1 — Apple App ID

Released 14 Oct 2026. **Preview release:** Italian and French content still needs review by native speakers before the store release.

### What's new
- **Apple App ID:** the iPhone and iPad app now uses the bundle ID `com.medtec24.lingua` with team `5F8UXTYXYJ`, matching the App ID registered in the Apple Developer account.
- **Signed iPhone builds:** once the Apple distribution certificate and provisioning profile are added as GitHub secrets, every build also produces a signed `lingua-0.2.1-ios.ipa`. With an App Store profile and an App Store Connect API key, the build goes to TestFlight automatically. How to set this up: [`app/README.md`](../../app/README.md#apple-ios).
- Version 0.2.1 (build 3) on all platforms. The Android app ID stays `com.sachitss.lingua`.

### Downloads
| File | Platform | Signing |
| --- | --- | --- |
| `lingua-0.2.1-ios-unsigned.ipa` | iPhone and iPad, iOS 15 and later, bundle ID `com.medtec24.lingua` | Unsigned: the signed `lingua-0.2.1-ios.ipa` is built once the Apple secrets are added |
| `lingua-0.2.1-ios-simulator.zip` | iOS Simulator (Xcode) | Not needed |
| `lingua-0.2.1-windows-setup.exe` | Windows 10 and 11 desktop app | Unsigned: SmartScreen asks once |
| `lingua-0.2.1-mac-arm64.dmg`, `lingua-0.2.1-mac-x64.dmg` | macOS desktop app (Apple silicon, Intel) | Not notarised: right-click → Open the first time |
| `lingua-0.2.1-web.zip` | Web app (PWA) | Not needed |

**Android:** keep using [v0.2.0](https://github.com/sachitss/lingua/releases/tag/v0.2.0) (signed APK and AAB). The 0.2.1 Android build is only on the CI pre-release `build-0.2.1`, unsigned, because the Lingua release key is not stored in GitHub. Android has no changes in 0.2.1 apart from the version number.

### Tests
All passed in GitHub Actions: 34 unit tests, browser tests on desktop and mobile Chromium, launch tests on an Android 14 emulator and an iPhone simulator, and launch tests of the Windows and Mac apps. The Android launch test now ignores crashes of other emulator processes and a caught timing message from Capacitor, which had made it fail at random.

### Known limitations
The same as [v0.2.0](../v0.2.0/RELEASE_NOTES.md#known-limitations). Because the iOS bundle ID changed, an iPhone that had the 0.2.0 IPA sideloaded will install 0.2.1 as a separate app.

Powered by Ing.-Büro Sachit Shrestha · Team Nepal Solutions
