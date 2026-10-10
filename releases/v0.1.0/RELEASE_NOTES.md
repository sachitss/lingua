# Lingua v0.1.0 — specification and brand

Released 10 Oct 2026 from `main`. To publish it as a GitHub release, draft a release with tag `v0.1.0` on `main` and attach the two files in this folder.

First Lingua release: the specification and the brand package. **No app build is included yet.**

### What's in it
- **Developer architecture** (`lingua-architecture-v0.1.0.pdf`, also in `docs/architecture.md`): Bhasha 1.3.0 audit, system architecture, content model, learning engine with the four vocabulary principles, pronunciation pipeline, data model, APIs and sync, privacy, testing and the Release 1 plan.
- **Brand package** (`lingua-brand-v0.1.0.zip`): outlined lockups for light and dark, mark, wordmark, app icons (1024 to 48 px, iOS full bleed, Android adaptive, PWA maskable), favicon (SVG, ICO, 48/32/16 px), splash screens and `tokens.json` / `tokens.css`.

### Release 1 decisions
- Languages taught: EN, DE, ES, IT, FR; interface in German, English and Nepali
- Android, iOS and web app from one Capacitor codebase
- Backend in Release 1 (accounts, sync, cloud speech scoring), offline-first client
- FSRS spaced repetition; Azure neural TTS for reference audio
- Recordings stay on the device for 30 days

### Still open
- Confirm Azure AI Speech pronunciation assessment, its EU region and cost per attempt
- Light and SVG versions of the Team Nepal Solutions logo

Powered by Ing.-Büro Sachit Shrestha · Team Nepal Solutions
