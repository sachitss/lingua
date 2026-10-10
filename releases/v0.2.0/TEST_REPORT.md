# Lingua v0.2.0 — test report

Date: 10 Oct 2026 · Commit `b37dd49` · GitHub Actions run 38085331124 (all jobs passed)

| Test | Where | Result |
| --- | --- | --- |
| Unit tests (`npm test`): 34 tests | Node 22, CI and local | Passed 34 of 34 |
| Browser tests (`npm run e2e`): 17 scenarios on 2 devices | Playwright 1.56, Desktop Chrome and Pixel 7 emulation | Passed 34 of 34 |
| Android launch test | Android 14 emulator (API 34, x86_64) | Passed: installs, starts, no crash, no JavaScript errors |
| iOS launch test | iPhone simulator, Xcode 26.3 | Passed: installs, starts, process alive |
| Windows desktop launch test | Windows (GitHub runner), Electron 44 | Passed: opens Lingua, brand, 6 tabs, powered-by footer, no errors |
| macOS desktop launch test | macOS 15 (GitHub runner), Electron 44 | Passed: same checks |
| Windows installer | NSIS `setup.exe` | Built; contains Lingua.exe and the full app (checked) |
| macOS installers | dmg for Apple silicon and Intel | Built |
| Android build | Gradle `assembleRelease`, `bundleRelease` | Passed |
| iOS build | `xcodebuild archive` (device) and simulator build | Passed |
| APK signature | `apksigner verify` and the independent `apksigtool verify` | v2 and v3 verified; certificate SHA-256 `8d95a5d4…d3d1af` |
| AAB signature | `jarsigner -verify` | Verified |
| Code review | Independent review agent; 5 bugs found and fixed, each with a regression test | Fixed |

### What the tests cover
- **Content:**
  - every item exists in all six languages;
  - examples exist wherever there are examples;
  - at least 70 % of Italian and French words can be blanked in their example sentence;
  - reading texts are aligned sentence by sentence;
  - dialogue lines are complete;
  - grammar topics are explained in all six interface languages, and every topic generates questions.
- **Numbers:**
  - known spellings in all six languages (e.g. ventitré, centotto, quatre-vingts, deux cent mille);
  - every number in the curriculum, up to one million;
  - digit grouping.
- **Learning engine:**
  - FSRS intervals;
  - lapses;
  - "a single correct answer never moves an item past learning";
  - recognition alone never reaches mastered;
  - the mastery rule;
  - migration of old SM-2 records;
  - session building for every language pair.
- **Interface:**
  - every string in all six interface languages;
  - placeholders kept;
  - no Bhasha branding;
  - no raw interface keys on screen.
- **Browser:**
  - branding, onboarding and the powered-by footer;
  - all six tabs for 10 language combinations, with no console errors and no "undefined", "NaN" or Bhasha text on screen;
  - full daily sessions in Italian, French and Nepali that store FSRS progress;
  - switching languages keeps progress;
  - numbers, grammar and conversations in Italian and French.

### Fixed during testing (independent review)
1. The Numbers page showed a raw key for Italian and French.
2. Words were pulled into sessions before they were due.
3. The preview on the grade buttons differed from the stored interval.
4. A Spanish female voice was classed as male.
5. Articles were stripped from English and Spanish phrases.

### Not covered yet
- Native-speaker review of Italian and French.
- Physical devices.
- Code signing for Windows and macOS (installers are unsigned).
- Screen-reader pass.
- Store review.
