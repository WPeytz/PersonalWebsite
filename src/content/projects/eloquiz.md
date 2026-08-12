---
title: "EloQuiz.dk"
summary: "Adaptive math learning platform that uses an Elo-based difficulty system to match each student to the right next question."
year: 2025
role: "BSc thesis · full-stack · ML"
stack: ["Vue", "Flask", "Firebase", "OpenAI API"]
link: "https://eloquiz.dk/signup"
linkLabel: "Visit EloQuiz.dk"
paper: "https://www.williampeytz.com/eloquiz-adaptive-learning-systems-paper.pdf"
paperLabel: "Read paper"
repo: "https://github.com/WPeytz/EloQuiz"
repoLabel: "View source"
order: 3
---

## Overview

EloQuiz.dk is an adaptive learning platform that explores whether the Elo
rating system, originally designed for competitive games, can match middle
school students with math questions at an appropriate level of difficulty.
Each student has a separate Elo score across five mathematical topics, and
each question has its own difficulty rating. After every answer, the system
updates both ratings and selects the next question around the student's
current level.

I developed EloQuiz as my BSc thesis and tested it in two fifth-grade classes
at Krebs' Skole in Copenhagen. Technical constraints reduced the final pilot
to nine students, who answered 230 questions during short classroom sessions.
The results were promising but intentionally limited: 77.8% noticed the
difficulty adapting to their performance, 77.8% found the platform easy or
very easy to use, and 66.7% reported being very satisfied.

## What I built

- A full-stack platform with a Vue student interface, Flask API, Firebase
  Authentication and Firestore, deployed with Docker on Google Cloud Run.
- A topic-specific Elo engine that updates student and question ratings after
  every response, then selects questions within a suitable difficulty band.
- A pool of 178 reviewed questions across five math categories, combining
  GPT-assisted authoring with manual checks for duplicates, ambiguity, and
  incorrect answers.
- Separate student and teacher experiences: adaptive quizzes, live feedback,
  streaks and progress views for students, plus class analytics and question
  moderation tools for teachers.
- A fallback question-generation pipeline using the OpenAI API when the
  database does not contain a suitable question for a student's current
  rating and topic.

## What I learned

- **Simple models can still produce useful personalization.** Topic-specific
  Elo scores provided an interpretable, computationally lightweight way to
  adjust difficulty, but a short pilot cannot prove that they accurately
  measure proficiency. That requires longer-term data and comparison with an
  independent benchmark such as grades or standardized assessments.
- **The deployment environment is part of the product.** A school firewall,
  limited hotspot capacity, and an exhausted Firestore read quota reduced a
  planned test of roughly 40 students to nine. Classroom software needs
  target-environment testing, capacity monitoring, and failure planning before
  the lesson begins.
- **Design assumptions change when children use the interface.** Students
  skipped teacher-linking steps, confused sign-up and login flows, and missed
  navigation after scrolling. Clearer onboarding and visual hierarchy mattered
  more than adding intelligence to the adaptive model.
- **Age-appropriate language and human oversight are essential.** Terms such
  as "hypotenuse" and symbols such as `*` were not universally understood, and
  AI-generated questions still required review for clarity and correctness.
  Students' requests for hints, topic selection, retrying incorrect answers,
  leaderboards, and quiz battles also showed where personalization and
  motivation could go next.
