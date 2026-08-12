---
title: "EloQuiz.dk"
summary: "Adaptive math learning platform that uses an Elo-based difficulty system to match each student to the right next question."
year: 2025
role: "BSc thesis · full-stack · ML"
stack: ["Vue", "Flask", "Firebase", "OpenAI API"]
link: "https://eloquiz.dk"
linkLabel: "Visit EloQuiz.dk"
paper: "https://www.williampeytz.com/eloquiz-adaptive-learning-systems-paper.pdf"
paperLabel: "Read paper"
order: 3
---

## Overview

EloQuiz.dk is an adaptive math learning platform built around an Elo-rating
system: every student and every question has a rating, and the matchmaking
loop tries to keep students at the productive edge of their ability.

This started as my BSc thesis on adaptive learning systems and grew into a
real product validated through a student pilot.

## What I built

- A full-stack web app (Vue front-end, Flask back-end, Firebase for auth and
  data) deployed end-to-end.
- The Elo-based difficulty engine: students and items co-rate each other,
  letting the system surface problems in a student's zone of proximal
  development without manual curriculum tagging.
- LLM-assisted question generation and explanation flows powered by the
  OpenAI API.

## What I learned

How brittle a "smart" model gets the moment real students start using it.
Most of the engineering work was the loop around the model: onboarding,
explanations, error states, and trust. The Elo math was the easy part.
