# MASTER PROMPT: LINGUA — MULTILINGUAL LANGUAGE-LEARNING PLATFORM

## GOAL

Analyse, enhance, rebuild, test, and release a modern multilingual language-learning application named **Lingua**, using the existing **Bhasha App architecture, framework, and reusable components** as the foundation.

The objective is to transform the existing application into a genuine, adaptive language-learning platform that develops vocabulary retention, listening comprehension, speaking confidence, pronunciation, grammar, reading, writing, and practical communication.

Use **Mondly by Pearson — Spanish Learning and Speaking** as a reference for researching established language-learning methodologies and user experiences. Study relevant features and best practices without copying proprietary code, protected content, branding, or copyrighted learning materials.

**Branding requirement:** Replace all Bhasha branding in the new application with Lingua, including the application name, logo, favicon, navigation, splash screen, metadata, page titles, and release assets. Preserve the existing Bhasha architecture where appropriate, but do not retain obsolete branding in the user-facing product.

## 1. INITIAL AUDIT AND EXISTING APPLICATION ANALYSIS

Before modifying any code, inspect the existing Bhasha application and establish its current state.

Analyse:

- Source code, framework, application architecture, and dependencies.
- Existing UI components, navigation, layouts, and design system.
- Current language-learning functionality and available content.
- Database schema, APIs, authentication, and user-profile management.
- Existing audio, speech, recording, and pronunciation capabilities.
- Responsive design, PWA configuration, and mobile compatibility.
- Existing tests, build configuration, deployment pipeline, and release version.
- Current performance, loading latency, accessibility, and security.
- Reusable modules, incomplete features, known defects, and technical debt.

Produce an audit report identifying what can be reused, what needs improvement, what is missing, and what must be replaced.

**Important:** Do not start an unnecessary rewrite. Preserve working functionality and user data wherever feasible. Create backups and use version control before making significant changes.

## 2. PRODUCT SCOPE AND SUPPORTED LANGUAGES

The initial release must support learning between these five European languages:

- German
- English
- Spanish
- Italian
- French

Design the language architecture to support additional languages, including Portuguese, in future releases.

Allow users to choose their known or source language and target language independently. Users must be able to change their target language without losing existing learning progress.

The application interface should support German, English, and Nepali where feasible within the existing Bhasha architecture. The interface language must remain independent of the language being learned.

For Nepali content, wherever supported, provide Devanagari script and optional Romanized transliteration.

Every learning item should support:

- Original word or phrase and translation.
- Meaning, context, and example sentences.
- Native/reference audio and pronunciation guidance.
- Relevant grammar information.
- Difficulty level and topic/category.
- Learning status and review history.
- Favourite/saved status and personal notes where appropriate.

## 3. LEARNING LEVELS AND COURSE STRUCTURE

Implement three principal levels, with the option to align course progression with CEFR levels A1–C2 where appropriate.

**Beginner:** Alphabet and pronunciation, numbers, greetings, family, food, shopping, dates, time, directions, everyday vocabulary, basic verbs, sentence construction, essential grammar, and simple conversations.

**Intermediate:** Expanded vocabulary, grammar, practical conversations, listening and reading comprehension, travel, workplace communication, social situations, emails, common idioms, and independent speaking.

**Advanced:** Complex grammar, nuanced vocabulary, synonyms, idiomatic expressions, formal and informal communication, professional and academic language, natural conversations, advanced listening, and structured writing.

Provide a clear course progression, placement assessment where appropriate, lesson prerequisites, review activities, and personalised recommendations.

## 4. NUMBERS AND PRACTICAL VOCABULARY

Create a comprehensive interactive number-learning module covering:

- Numbers 1–1000.
- Number patterns, increments, and larger numbers up to one million.
- Cardinal and ordinal numbers where appropriate.
- Spoken and written number recognition.
- Listening, pronunciation, spelling, and translation exercises.
- Practical applications involving prices, dates, telephone numbers, addresses, time, quantities, and travel.

Explain language-specific number formation and spelling rules. Generate number exercises dynamically rather than storing every possible number as a separate lesson.

## 5. VOCABULARY, FLASHCARDS, AND LEARNING GAMES

Implement an adaptive vocabulary-learning system using spaced repetition, active recall, contextual learning, and difficulty-based review.

Support learning states such as New, Learning, Familiar, Mastered, and Needs Review.

Provide these exercise types:

- Standard and reverse flashcards.
- Word-to-translation matching.
- Word-to-picture matching.
- Audio identification.
- Sentence completion.
- Multiple-choice questions.
- Typed answers and reverse translation.
- Word association and sentence ordering.
- Dictation and spelling.
- Grammar correction.
- Vocabulary games and short quizzes.
- Listening, speaking, and pronunciation challenges.

Automatically schedule reviews according to previous performance, response accuracy, recall difficulty, and elapsed time. Avoid unnecessary repetition of well-known words while retaining appropriate reinforcement.

Allow users to save difficult words, create personal vocabulary lists, repeat challenging cards, and review mistakes.

## 6. AUDIO, SPEAKING, AND PRONUNCIATION COACH

Treat pronunciation training as a core feature.

Implement the following learning workflow:

**Listen → Repeat → Record → Play Back → Compare → Receive Feedback → Try Again**

For supported exercises, users must be able to:

1. Hear native/reference pronunciation.
2. Play audio repeatedly at normal and slower speeds.
3. Record their own voice using the device microphone.
4. Play back, delete, or replace their recording.
5. Compare their recording with the reference.
6. Receive understandable, actionable pronunciation feedback.
7. Repeat the exercise and track improvement.

Where technically supported, evaluate speech recognition, phoneme accuracy, stress, rhythm, intonation, speaking speed, pauses, and potentially incorrect or missing sounds.

Clearly distinguish estimated educational feedback from definitive linguistic assessment. Do not invent accuracy scores or imply scientific precision that the underlying technology cannot support.

Evaluate suitable browser and mobile audio APIs, speech-recognition services, and pronunciation-analysis technologies. Document any external service costs, language limitations, privacy implications, and processing requirements.

Provide accessible audio controls, appropriate microphone-permission handling, recording status, error recovery, and support for headphones and device speakers.

## 7. INTERACTIVE CONVERSATION AND GRAMMAR

Develop interactive, scenario-based conversations with selectable responses and, where technically feasible, free-form spoken or typed answers.

Include practical scenarios such as introductions, restaurants, shopping, hotels, transport, workplace communication, appointments, and everyday social situations.

Provide grammar exercises covering verb conjugation, sentence structure, articles, genders, cases, tenses, prepositions, agreement, and language-specific rules.

Give explanations for incorrect answers rather than displaying only the correct solution.

Adapt the difficulty of conversations and grammar exercises to the user's level and previous performance. Keep AI-based conversation features optional and clearly identify any associated service costs.

## 8. TRAVEL AND TOURIST LANGUAGE PACK

Create a dedicated **Travel & Tourist Language** section covering:

- Airport, immigration, and security.
- Hotels and accommodation.
- Restaurants and cafés.
- Shopping and payments.
- Public transport, taxis, trains, and buses.
- Asking for directions and sightseeing.
- Reservations and bookings.
- Telephone and internet access.
- Medical assistance and emergencies.
- Police and essential services.
- Social introductions and everyday conversation.

Every phrase should include the translation, pronunciation, audio, context, alternative expressions where useful, and a practice/favourite function.

Provide a **Learn Before My Trip** feature. Users can enter their destination, travel date, target language, and available study time. Generate a short adaptive course prioritising the most relevant phrases.

Allow travel packs and previously downloaded audio to be available offline wherever technically feasible.

## 9. PERSONAL DAILY LEARNING PLANS

Allow users to choose a daily learning duration of 10, 20, 30, 45, or 60 minutes.

Generate an adaptive daily plan combining vocabulary, spaced repetition, pronunciation, listening, speaking, reading, writing, grammar, and assessment.

For example:

- **10 minutes:** Word of the Day, five vocabulary cards, two pronunciation exercises, and a quick review.
- **30 minutes:** Vocabulary review, new words, flashcards, listening, pronunciation, grammar, and a short quiz.
- **60 minutes:** A balanced learning session covering vocabulary, review, listening, speaking, reading, writing, grammar, pronunciation, and assessment.

Adjust lesson workload and difficulty based on progress, available time, learning priorities, and overdue reviews.

Allow users to pause and resume lessons without losing completed work.

## 10. WORD AND PHRASE OF THE DAY

Create a Word of the Day feature containing the word, translation, meaning, pronunciation, audio, example sentence, related vocabulary, difficulty, and practice activity.

For intermediate and advanced learners, include a Phrase of the Day with natural expressions, usage notes, translations, context, audio, and example conversations.

Allow users to save words and phrases for later revision.

## 11. ADAPTIVE LEARNING ENGINE

Develop an adaptive engine that considers:

- Correct and incorrect answers.
- Response time and recall difficulty.
- Vocabulary retention and review history.
- Pronunciation attempts and listening performance.
- Learning frequency and missed sessions.
- User-selected priorities and daily time limits.

Use these factors to adjust lesson difficulty, new vocabulary volume, review frequency, exercise type, repetition, and session length.

Make recommendations transparent and explain why a word, phrase, or exercise has been scheduled for review.

Do not treat a single correct answer as proof of mastery.

## 12. LEARNING PRIORITIES, REMINDERS, AND GAMIFICATION

Allow users to assign priorities to vocabulary, speaking, pronunciation, listening, reading, writing, grammar, travel, and conversation. Support configurable percentage weights or an equivalent intuitive priority system.

Implement configurable daily and weekly reminders, preferred times, selected days, multiple reminders where supported, and snooze options of 10 minutes, 30 minutes, one hour, later today, or tomorrow.

Users must be able to disable reminders at any time.

Add meaningful gamification features, including learning streaks, XP, achievement badges, daily goals, weekly goals, and milestones. Reward genuine learning progress rather than meaningless clicks or excessive repetition.

## 13. USER PROFILE AND PROGRESS DASHBOARD

Provide an editable user profile with interface language, known and target languages, learning level, goals, available daily time, learning priorities, reminder preferences, travel plans, and learning history.

Create a clear progress dashboard displaying:

- Current level and completed lessons.
- Daily goal, streak, and weekly progress.
- Daily, weekly, and monthly learning time.
- Vocabulary learned, mastered, and awaiting review.
- Listening, speaking, grammar, and pronunciation progress.
- Exercise accuracy, retention trends, and weak areas.
- Travel-pack progress and achievements.

Use understandable charts and actionable recommendations. Ensure progress metrics are based on actual recorded activity.

## 14. USER INTERFACE AND RESPONSIVE DESIGN

Create a clean, modern, accessible, mobile-first interface with consistent typography, spacing, icons, and navigation.

Suggested learner navigation:

**Home | Learn | Vocabulary | Practice | Pronunciation | Travel | Progress | Profile**

Provide a separate administrative interface for managing courses, lessons, vocabulary, audio, exercises, users, analytics, and settings.

Ensure all Lingua branding replaces Bhasha branding in user-facing components.

Support responsive layouts across desktop, tablet, and mobile devices, including portrait and landscape orientations. Evaluate PWA, Android, iOS, and desktop support according to the existing architecture and implementation feasibility.

Test touch targets, keyboard navigation, scalable fonts, audio controls, dialogs, navigation, contrast, focus indicators, and screen-reader compatibility. Target WCAG 2.2 AA where applicable.

The learner should always understand what to study next, how to complete an exercise, and why a review is recommended.

## 15. TECHNICAL ARCHITECTURE AND DATABASE

Assess the existing Bhasha technology stack before selecting or changing frameworks.

Evaluate appropriate alternatives such as React/Next.js, Flutter, React Native, PWA technologies, Node.js, Python, PostgreSQL, and other suitable components.

Choose the architecture based on measurable requirements for performance, maintainability, compatibility, offline support, audio functionality, accessibility, security, scalability, and cost.

Prefer a shared codebase and backend where practical. Do not introduce a new framework or rewrite the application without a documented technical justification.

Design or extend the data model to support users, languages, courses, levels, lessons, vocabulary, translations, examples, audio assets, recordings, exercises, flashcards, review schedules, learning sessions, progress, reminders, achievements, and travel packs.

Document data relationships, indexes, migration procedures, API contracts, authentication, and data-retention rules.

## 16. OFFLINE LEARNING AND SYNCHRONISATION

Where feasible, support offline access to saved lessons, vocabulary, flashcards, downloaded audio, travel packs, and locally recorded learning progress.

Synchronise changes when connectivity returns. Handle duplicate submissions, conflicting updates, interrupted synchronisation, and data recovery reliably.

Do not promise full offline speech analysis or other services that require a network connection.

## 17. CONTENT MANAGEMENT AND DATA IMPORT/EXPORT

Provide an authorised administration system for managing languages, courses, lessons, translations, vocabulary, example sentences, grammar explanations, audio, exercises, flashcards, travel packs, and learning content.

Support CSV, Excel, and JSON import/export where useful, with validation, error reporting, and duplicate detection.

Provide personal learning-data exports in suitable formats, including CSV, Excel, JSON, and PDF learning reports where practical.

## 18. PRIVACY, SECURITY, AND DATA PROTECTION

Implement security and privacy appropriate to the application, including secure authentication, access control, protected user data, validated inputs, secure APIs, and appropriate backup and recovery processes.

Voice recordings must not be publicly accessible.

Provide controls to delete recordings, delete accounts, export personal data, and manage privacy settings. Clearly disclose where recordings are stored, how long they are retained, and whether external speech or AI services receive them.

Assess applicable GDPR and other relevant data-protection requirements before release. Obtain appropriate consent where required, minimise collected data, and implement suitable retention and deletion policies.

## 19. PERFORMANCE AND RELIABILITY

Measure and optimise:

- Initial application loading and navigation latency.
- Lesson and vocabulary loading times.
- Audio playback and recording start times.
- API response times and database queries.
- Image loading, memory usage, and battery consumption.
- Offline caching and synchronisation.
- Performance with large vocabularies and extensive learning histories.

Use code splitting, lazy loading, efficient caching, optimised assets, and appropriate database indexing where beneficial.

Avoid unnecessary dependencies, duplicate API requests, oversized assets, and expensive background processing. Establish performance baselines and measurable acceptance thresholds before optimisation.

## 20. TESTING AND BUG MANAGEMENT

Create automated and manual tests covering:

- Registration, login, and profile management.
- Language selection and switching.
- Course progression and lesson completion.
- Vocabulary, flashcards, games, and grammar.
- Audio playback, recording, comparison, and pronunciation feedback.
- Progress tracking, adaptive reviews, and reminders.
- Offline mode, synchronisation, and data integrity.
- Content administration and import/export.
- Privacy, security, accessibility, and responsive layouts.

Test supported environments across modern Chrome, Edge, Firefox, and Safari, plus Android, iOS, Windows, and macOS where applicable.

Test different screen sizes, orientations, network conditions, microphone permissions, interrupted recordings, background noise, headphones, and denied permissions.

Maintain a bug register with the issue, reproduction steps, severity, root cause, fix, and retest result.

Resolve all reproducible critical and high-priority defects before release, or document and explicitly approve any remaining exceptions. Do not describe the application as bug-free simply because basic tests pass.

## 21. DEVELOPMENT AND RELEASE PROCESS

Follow these phases in sequence.

**Phase 1 — Audit and research:** Assess the Bhasha application, review relevant learning methodologies, and establish technical and performance baselines.

**Phase 2 — Specification:** Prepare functional requirements, architecture decisions, data model, user journeys, wireframes, feature priorities, risks, and acceptance criteria.

**Phase 3 — Prototype:** Build and validate the core learning experience, including language selection, lessons, vocabulary, flashcards, audio recording, pronunciation practice, daily learning plans, and progress tracking.

**Phase 4 — Implementation:** Integrate the approved features into the existing architecture, preserve existing user data where applicable, and apply Lingua branding consistently.

**Phase 5 — Testing:** Execute automated, integration, UI, cross-browser, responsive, audio, security, and accessibility tests.

**Phase 6 — Optimisation:** Fix defects, improve performance, validate data integrity, and confirm release criteria.

**Phase 7 — Release:** Build, version, document, and deploy the production-ready release for supported platforms.

Maintain version control, environment configuration, release notes, rollback procedures, and a documented migration strategy. Never overwrite a working production release without a recoverable backup.

## 22. PRIORITISATION AND RELEASE SCOPE

Prioritise delivery to avoid an oversized, unreliable first release.

**Release 1 — Core learning experience**

- Lingua branding and responsive application interface.
- Five target languages and independent source/target selection.
- Beginner-to-advanced course structure.
- Numbers and essential vocabulary.
- Flashcards, games, and spaced repetition.
- Audio playback, voice recording, and feasible pronunciation feedback.
- Basic interactive conversation and grammar.
- Daily learning plans and progress dashboard.
- Secure profile and learning-data persistence.

**Release 2 — Enhanced learning**

- Advanced adaptive learning.
- Travel packs and trip-specific learning plans.
- Offline lessons and audio.
- Expanded pronunciation analysis.
- Reminders, achievements, and enhanced analytics.
- Improved administration and import/export tools.

**Future releases**

- Additional languages, including Portuguese.
- Advanced AI conversation partner.
- Teacher accounts, classroom management, group learning, and certification.
- More sophisticated speech recognition and grammar analysis.

Adjust this roadmap after the initial audit. Reuse existing working features rather than unnecessarily rebuilding them.

## 23. FINAL ACCEPTANCE CRITERIA

The release must be demonstrably functional, responsive, secure, accessible, maintainable, multilingual, and performant across its declared supported platforms.

Verify that:

- Lingua branding consistently replaces Bhasha branding in the new user-facing experience.
- The core five European target languages are selectable.
- Language switching preserves learning progress.
- Vocabulary, exercises, audio, and progress work end to end.
- Pronunciation feedback reflects the actual capabilities of the implemented technology.
- Adaptive review and daily plans use real learning data.
- User recordings and personal information are appropriately protected.
- Import/export, offline features, and synchronisation work where declared supported.
- Critical and high-priority defects have been resolved or formally documented.
- Production builds, deployment instructions, backups, and rollback procedures are available.

## 24. REQUIRED DELIVERABLES

Deliver the following:

1. **Application audit report:** Existing architecture, reusable components, gaps, defects, and recommendations.
2. **Technical specification:** Architecture, dependencies, database model, APIs, and implementation decisions.
3. **Functional application:** The implemented Lingua features integrated with the existing Bhasha foundation.
4. **Branding package:** Lingua logo, favicon, application metadata, and consistent UI branding.
5. **Test report:** Test cases, pass/fail results, defects, fixes, and retesting evidence.
6. **Performance report:** Before-and-after measurements and remaining bottlenecks.
7. **Security and accessibility report:** Findings, remediation, and remaining limitations.
8. **Release package:** Versioned production builds for supported platforms, deployment instructions, and release notes.
9. **Release Readiness Report:** Implemented features, verified features, known limitations, outstanding defects, platform compatibility, audio test results, and future recommendations.

For every feature, distinguish between **implemented, tested, partially implemented, planned, and unsupported**. Do not claim completion without evidence.

## FINAL INSTRUCTION

Start by auditing the existing Bhasha application and its architecture. Then present the recommended implementation plan, prioritised backlog, and release strategy.

Proceed with implementation using the smallest reliable set of changes that achieves the required functionality. Build, test, fix, and validate the application iteratively. Produce a new versioned Lingua release only when the agreed acceptance criteria have been met.

**Product vision:** Lingua — learn languages through vocabulary, memory, listening, speaking, pronunciation, repetition, and practical communication.

The result must be a genuine, extensible language-learning platform, not merely a renamed Bhasha interface or a collection of static vocabulary pages and quizzes.
