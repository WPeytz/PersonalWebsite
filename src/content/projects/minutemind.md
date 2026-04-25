---
title: "MinuteMind"
summary: "A webapp that turns a single prompt into a short, narrated learning video, with script, voiceover, and rendered footage from one topic."
year: 2025
role: "Solo build · full-stack & ML"
stack: ["Vue 3", "TypeScript", "FastAPI", "OpenAI API", "GCP", "FFmpeg"]
link: "https://minutemindapp.vercel.app/"
order: 5
---

## Overview

MinuteMind is a webapp where you type a topic and get back a short
learning video about it. The system writes the script, narrates it,
and assembles the final video end to end, turning "I want to know
about X" into something watchable in a single round trip.

## How it works

A prompt becomes a video in five stages:

1. **Script generation.** The OpenAI API turns the user's topic into a
   structured short-form script.
2. **Narration.** Text-to-speech renders the script as audio.
3. **Visual sequencing.** The backend plans the visual track to match
   the narration.
4. **Video assembly.** MoviePy and FFmpeg compose the audio and
   visuals into a finished mp4.
5. **Delivery.** The rendered file is stored in Cloud Storage and
   streamed back to the browser.

## Stack

- **Frontend.** Vue 3, TypeScript, Tailwind. Single-page app, deployed on Vercel.
- **Backend.** FastAPI with typed Python. Handles prompts, talks to the
  OpenAI API, runs the TTS step, and orchestrates the rendering job.
- **Media pipeline.** MoviePy + FFmpeg for the actual video assembly.
- **Infra.** Google Cloud Run for the service, Cloud Build for CI/CD,
  Cloud Storage for media artifacts. Cloud-native and stateless by design.

## What I built

- **AI / LLM pipeline.** Prompting strategy and structured-output
  parsing to keep generated scripts on-format every time.
- **Full-stack architecture.** Vue front-end ↔ FastAPI back-end with
  typed contracts at every boundary.
- **Cloud-native design.** Stateless service on Cloud Run, build
  pipeline on Cloud Build, all media kept in Cloud Storage rather than
  on the instance.
- **Video processing pipeline.** Reliable composition of audio +
  visuals using MoviePy + FFmpeg, including the failure modes that
  show up only at scale.
- **DevOps & UX engineering.** Build, deploy, and monitoring on GCP;
  prompt-to-video flow tightened for the single-user experience that
  matters most: waiting.

Try it: <a href="https://minutemindapp.vercel.app/" target="_blank" rel="noopener noreferrer">minutemindapp.vercel.app</a>
