---
title: "AgentArena"
summary: "A transparent benchmark for watching and comparing AI coding agents as they solve the same software-engineering task."
year: 2026
role: "Designer · engineer"
stack: ["Next.js", "TypeScript", "FastAPI", "Python", "SSE"]
link: "https://www.williampeytz.com/agentarena/"
order: 0
---

## Overview

AgentArena is an interactive software-engineering benchmark. It replays two
coding agents side by side as they inspect a repository, edit code, run tests,
and respond to failures under the same task and constraints.

The first benchmark match focuses on a concurrency bug in a small asynchronous
Python job queue. One agent reaches a plausible but incomplete fix; the other
adds a regression test, passes hidden concurrency checks, and wins the
evaluation.

## What it demonstrates

- **Transparent replay.** Every displayed action is a concise, auditable event:
  plans, files opened, commands, patches, test output, and review notes.
- **Comparable outcomes.** The results combine visible and hidden tests with
  patch quality, cost, duration, token use, and a weighted evaluation.
- **Reproducible evaluation.** The benchmark repository has a deterministic
  reset, separated hidden tests, and a known-good reference solution.

[Watch the benchmark match](https://www.williampeytz.com/agentarena/)
