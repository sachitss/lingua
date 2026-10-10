# DEVELOPMENT PROMPT: ENHANCE BHASHA LANGUAGE-LEARNING APP

## 1. GOAL

Research, analyse, and evaluate **Mondly by Pearson – Learn Spanish & Speak** as a reference for modern language-learning methods, interactive exercises, vocabulary retention, gamification, conversation practice, and grammar learning.

Analyse the existing **Bhasha App architecture, source code, framework, UI/UX, and learning functionality**. Identify opportunities to improve the application by introducing effective, engaging, and adaptive learning features.

Implement the following core enhancements:

1. Number learning from 1 to 1,000, including number patterns and increments up to 1,000,000.
2. Interactive vocabulary-learning games.
3. Interactive conversations and practical speaking exercises.
4. Structured grammar exercises with explanations and feedback.

Integrate these features into the existing Bhasha application wherever technically feasible, preserving functional components, existing user data, and the established architecture.

## 2. CONTEXT AND RESEARCH

Conduct a structured review of Mondly by Pearson, focusing on its Spanish-learning and speaking experience.

Research and analyse the following aspects:

- Learning methodology and lesson structure.
- Vocabulary presentation and retention techniques.
- Interactive exercises and gamification.
- Number recognition, spelling, and pronunciation.
- Conversation simulations and practical dialogues.
- Grammar exercises and corrective feedback.
- Audio playback and pronunciation practice.
- User progression, difficulty adaptation, and revision.
- Navigation, usability, responsive design, and accessibility.

Create a feature comparison between the relevant Mondly learning approaches and the existing Bhasha functionality.

For each proposed feature, document:

- Existing Bhasha implementation.
- Relevant reference-app approach.
- Identified gap or improvement opportunity.
- Proposed functionality.
- Technical requirements and dependencies.
- Implementation priority.
- Testing and acceptance criteria.

Use the research to identify suitable learning principles and interaction patterns. Do not copy proprietary source code, copyrighted content, or protected branding from Mondly.

## 3. ACTION A — AUDIT THE EXISTING BHASHA APP

Before implementation, inspect the existing application.

Review:

- Source code and technology stack.
- Existing language courses and vocabulary database.
- UI components and navigation.
- Learning activities, quizzes, and scoring.
- Audio and pronunciation functionality.
- User profiles and progress tracking.
- Database structures and APIs.
- Mobile responsiveness and PWA capabilities.
- Existing automated and manual tests.
- Current application version and release process.

Classify existing features as reusable, improvable, incomplete, or missing.

Create a backup or version-control checkpoint before changing the application. Avoid unnecessary rewrites and preserve existing functionality.

## 4. ACTION B — IMPLEMENT NUMBER LEARNING

Develop a dedicated interactive module named **Numbers & Counting**.

### A. Number coverage

Support numbers from 1 to 1,000 and extend learning to 1,000,000.

Include:

- Numbers 1–20.
- Numbers 21–100.
- Tens, hundreds, and thousands.
- Numbers 101–999.
- Numbers 1,000–10,000.
- Numbers 10,000–100,000.
- Numbers 100,000–1,000,000.
- Number patterns and configurable increments.
- Cardinal and ordinal numbers where relevant.
- Written and spoken number recognition.

### B. Number increment exercises

Allow learners to select an increment and practise counting sequences.

Examples:

- 1, 2, 3, 4 … 100.
- 5, 10, 15, 20 … 1,000.
- 10, 20, 30, 40 … 1,000.
- 100, 200, 300 … 10,000.
- 1,000, 2,000, 3,000 … 100,000.
- 10,000, 20,000, 30,000 … 1,000,000.

Support configurable starting numbers, ending numbers, increments, random-number challenges, and missing-number exercises.

### C. Interactive number exercises

Implement:

- Display a number and ask the learner to type it in words.
- Display a number in words and ask the learner to enter digits.
- Play spoken audio and ask the learner to identify the number.
- Listen to the learner pronounce a number.
- Complete missing numbers in a sequence.
- Identify the next number in an increment pattern.
- Translate numbers between the source and target languages.
- Practise prices, dates, quantities, telephone numbers, and money amounts.

Provide immediate feedback, correct answers, spelling guidance, pronunciation audio, and explanations of language-specific number formation.

Generate number content dynamically using language-specific rules rather than creating a separate database entry for every possible number.

## 5. ACTION C — CREATE VOCABULARY-LEARNING GAMES

Develop an engaging vocabulary practice section with different exercise formats.

### Required games

**1. Flashcards**

Show the target-language word on one side and the translation, meaning, example sentence, and audio on the other.

**2. Matching pairs**

Match words with translations, pictures, definitions, or audio.

**3. Listen and identify**

Play a word or phrase and let the learner select or type the correct answer.

**4. Picture vocabulary**

Display an appropriate image and ask the learner to identify the object, action, or concept.

**5. Missing-word challenge**

Present a sentence with a missing word and ask the learner to complete it.

**6. Word-order challenge**

Arrange shuffled words into a grammatically correct sentence.

**7. Spelling challenge**

Listen to or view a word and type the correct spelling.

**8. Translation challenge**

Translate words and short sentences in both directions.

**9. Memory game**

Match hidden word-and-translation pairs.

**10. Timed vocabulary challenge**

Answer a series of questions within a configurable time limit, without allowing speed to replace accuracy as the main learning objective.

### Vocabulary management

Each vocabulary item should support:

- Word or phrase.
- Translation and meaning.
- Example sentence.
- Audio and pronunciation guidance.
- Language and difficulty level.
- Topic or category.
- Correct and incorrect response history.
- Review status.
- Favourite status.

Introduce spaced repetition and active recall to reinforce difficult words. Increase or decrease difficulty according to performance.

Allow learners to repeat mistakes, save difficult vocabulary, and practise selected topics.

## 6. ACTION D — IMPLEMENT INTERACTIVE CONVERSATIONS

Create a dedicated **Conversation Practice** module.

### Conversation categories

Include realistic situations such as:

- Greetings and introductions.
- Family and everyday life.
- Shopping and payments.
- Restaurants and cafés.
- Hotels and accommodation.
- Airports and immigration.
- Travel, directions, trains, and buses.
- Appointments and social situations.
- Workplace conversations.
- Telephone calls.
- Everyday problem-solving.

### Conversation interaction

Each conversation should contain:

1. A short description of the scenario.
2. A dialogue with two or more participants.
3. Target-language text and translation support.
4. Audio playback where available.
5. Selectable response options.
6. Opportunities to type an answer.
7. Optional spoken responses where supported.
8. Feedback explaining whether the answer is appropriate.
9. Useful vocabulary and grammar notes.
10. A score or progress indicator based on meaningful learning criteria.

Create branching dialogues in which the learner's response determines the next conversational step.

Support beginner, intermediate, and advanced difficulty. Beginners may use translations and suggested responses, while advanced learners should have more open-ended conversation tasks.

Where feasible, introduce a configurable AI conversation partner. Clearly identify AI-generated responses, handle errors gracefully, and document service costs and privacy implications.

## 7. ACTION E — IMPLEMENT GRAMMAR EXERCISES

Create a dedicated **Grammar Practice** module with structured lessons and interactive exercises.

### Grammar topics

Support language-specific grammar, including:

- Articles and grammatical gender.
- Nouns and plural formation.
- Pronouns.
- Adjectives and agreement.
- Verb conjugation.
- Present, past, and future tenses.
- Sentence structure and word order.
- Questions and negation.
- Prepositions.
- Cases where applicable.
- Modal verbs.
- Comparatives and superlatives.
- Common irregular forms.
- Conditional structures.
- Subordinate clauses.
- Common grammatical mistakes.

Adapt topic coverage to the selected language and learning level. Do not apply German-specific grammar rules indiscriminately to Spanish, Italian, French, or English.

### Exercise types

Implement:

- Multiple-choice questions.
- Fill-in-the-blank exercises.
- Sentence construction.
- Verb conjugation tables.
- Error identification and correction.
- Word ordering.
- Translation exercises.
- Context-based grammar selection.
- Short writing exercises.
- Grammar challenges using previously learned vocabulary.

### Feedback and explanations

For every exercise, provide:

- The learner's answer.
- Correct or incorrect status.
- The correct answer.
- A clear explanation of the relevant rule.
- An example demonstrating correct usage.
- Additional practice when a weakness is detected.

Where possible, distinguish between an actual grammatical error and an acceptable alternative expression.

## 8. ACTION F — INTEGRATE FEATURES INTO THE EXISTING LEARNING SYSTEM

Integrate the new modules into the existing Bhasha navigation and learning workflow.

Suggested navigation:

**Home | Learn | Numbers | Vocabulary Games | Conversations | Grammar | Progress | Profile**

Reuse the existing design system and shared components where practical.

Connect the new activities to:

- User profiles.
- Course and difficulty selection.
- Daily learning plans.
- Vocabulary review schedules.
- Learning history.
- Progress dashboards.
- Achievements and meaningful rewards.

Track completed exercises, accuracy, recurring errors, learning time, and review needs.

Ensure that users can switch languages without losing their progress and can pause and resume activities.

## 9. ACTION G — USER EXPERIENCE AND PERFORMANCE

Ensure the new features work across supported desktop, tablet, and mobile screen sizes.

Verify:

- Responsive layouts and navigation.
- Accessible controls and readable text.
- Audio playback and microphone permissions.
- Keyboard and touch interactions.
- Loading performance and API efficiency.
- Error messages and recovery.
- Progress persistence.
- Browser compatibility.

Avoid unnecessary dependencies, duplicate requests, large initial downloads, and performance regressions.

## 10. ACTION H — TESTING AND VALIDATION

Test all newly implemented features before release.

### Functional tests

Verify number conversion, number sequences, increments, vocabulary games, answer validation, conversation branching, grammar feedback, scoring, and progress tracking.

### Language-content tests

Validate spelling, translations, number formation, example sentences, grammar rules, and accepted alternative answers for each supported language.

### Integration tests

Verify that the new modules work with existing authentication, database structures, learning history, user profiles, and progress dashboards.

### Responsive and compatibility tests

Test the supported browsers, devices, and screen sizes.

### Regression tests

Confirm that existing Bhasha functionality continues to work after the changes.

### Performance tests

Compare loading time, interaction responsiveness, API response time, and resource consumption before and after implementation.

Maintain a test report containing:

| Test | Result | Issue | Severity | Fix | Retest |
| ---- | ------ | ----- | -------- | --- | ------ |

Resolve critical and high-priority defects before release, or document and formally approve any remaining exceptions.

## 11. ACTION I — UPDATE, REBUILD, AND RELEASE

After implementation and testing:

1. Review and finalise the source-code changes.
2. Update dependencies only when necessary and compatible.
3. Apply database migrations safely where required.
4. Update application version and release metadata.
5. Run automated tests and regression checks.
6. Build the application for supported platforms.
7. Verify production configuration and environment variables.
8. Confirm that existing user data and progress are preserved.
9. Create a backup and document rollback procedures.
10. Generate the new release package.
11. Deploy only to the authorised target environment.
12. Perform post-build and post-deployment smoke tests.

Do not overwrite the production application or publish a release without the required access and authorisation.

## 12. REQUIRED OUTPUT AND DELIVERABLES

Provide the following deliverables:

**A. Research and analysis report**

- Mondly reference-feature analysis.
- Bhasha current-state audit.
- Feature comparison and identified gaps.
- Recommended implementation approach.

**B. Implementation report**

- Features added or improved.
- Source-code and database changes.
- Reused and modified components.
- Known limitations and technical decisions.

**C. Testing report**

- Functional and integration test results.
- Language-content validation.
- Regression and performance results.
- Outstanding defects and retesting evidence.

**D. New release package**

- Updated application source code.
- Production build for supported platforms.
- Updated version information and release notes.
- Deployment instructions and rollback plan.

**E. Release readiness summary**

- Implemented features.
- Verified features.
- Partially implemented or unsupported features.
- Known issues.
- Performance comparison.
- Final release recommendation.

## FINAL EXECUTION INSTRUCTION

Start by analysing Mondly's relevant learning methods and auditing the existing Bhasha application.

Then implement and integrate the number-learning module, vocabulary games, interactive conversations, and grammar exercises using the existing architecture wherever appropriate.

Test the changes, correct defects, rebuild the application, and prepare a new versioned release.

**Do not stop at research, recommendations, mock-ups, or a feature plan. Carry out the actual implementation wherever the source code, tools, permissions, and development environment permit. Clearly report anything that cannot be completed.**

The final objective is to deliver a tested and improved Bhasha application with more effective, interactive, practical, and engaging language-learning capabilities.
