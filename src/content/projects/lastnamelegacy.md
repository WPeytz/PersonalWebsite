---
title: "LastNameLegacy.com"
summary: "A guess-the-first-name game built around famous surnames, with two modes (historical and living people) and an LLM-assisted scorer that grades each answer against the canonical match."
year: 2026
role: "Solo build · full-stack & AI"
stack: ["Next.js 16", "React 19", "Supabase", "OpenAI", "TypeScript", "Tailwind"]
link: "https://lastnamelegacy.com"
order: 9
---

## Overview

LastNameLegacy is a small game with a deliberately narrow rule: I show
you a famous surname, you give me the first name. You're scored on how
close you got, with a per-game breakdown that makes the score
transparent instead of magic.

The game ships in two modes, **historical** (deceased people) and
**living**, each backed by its own curated database of unambiguous
names with country, profession, and era metadata.

## What it does

- **Two game modes.** Historical and living people, switchable per
  round. Each mode draws from its own curated surnames table.
- **LLM-graded answers.** Strict string matching is the wrong UX for a
  trivia game ("Einstein" should match "Albert Einstein"). The scorer
  runs each answer through an LLM to grade for intent and proximity to
  the canonical name, not exact spelling.
- **Score breakdown.** Every result shows *why* you got the score you
  did, so a low score never feels arbitrary.
- **Profiles.** Display name, total games played, total score.
- **Leaderboards and rankings** so the score actually means something
  socially.

## Stack

- **Next.js 16 + React 19** for the front-end and server actions.
  TypeScript end to end. Tailwind for styling.
- **Supabase** for Postgres, auth, and row-level security. Schema
  includes surnames, living people, profiles, and a `games` table that
  stores every play with full score JSON for the breakdown view.
- **OpenAI API** for the answer-grading layer.
- **Zod** for runtime validation at every API boundary.
- **Deployed on Vercel.**

## Design decisions

- **Curate the data, don't scrape it.** Both surname tables are
  hand-picked for unambiguity. There's exactly one famous "Einstein,"
  but plenty of ambiguous surnames that would make the game frustrating
  if drawn at random.
- **Fuzzy scoring is the point, not a workaround.** The LLM in the
  scoring path is what turns this from "type the exact string" into a
  game that rewards knowing the *person*.
- **RLS instead of trust.** Postgres row-level-security policies are
  the actual permission model: profiles and games are public reads,
  users can only insert their own. The Next.js server is just a
  client.
