---
title: "Stemma"
summary: "A Danish-speaking AI phone assistant that handles inbound calls (scheduling, bookings, and sales) for businesses that miss calls when no one can pick up."
year: 2026
role: "Cofounder · AI engineer"
stack: ["Python", "ASR", "LLMs", "TTS", "Telephony APIs"]
order: 1
---

## Overview

Stemma is a Danish-speaking AI phone assistant for inbound calls. The
problem we keep seeing in small and mid-sized Danish businesses is the
same: calls come in outside opening hours, during busy periods, or when
the person who *can* answer is already on another line, and those calls
turn into lost bookings. Stemma picks up, speaks Danish, and handles the
conversation end to end: scheduling appointments, taking bookings, and
closing simple sales.

## What I built

- **Real-time voice pipeline.** ASR → LLM → TTS, tuned for Danish and for
  the latency budget of a live phone conversation. Most of the engineering
  work is the seams between those stages, not the stages themselves.
- **Telephony integration.** Wired the pipeline up to telephony APIs and
  the backend systems that actually take a booking on the other side, so
  the assistant doesn't just *promise* an outcome. It makes it happen.
- **Pilot deployments.** We're running with real customers, measuring
  missed-call conversion against their previous baseline. That feedback
  loop, what the assistant does well and where it fumbles, is what we
  ship against every week.

## What I'm learning

The interesting problem is rarely the model itself; it's the failure
modes around the edges. A voice agent that's "right" 95% of the time
still loses customer trust on the 5% if those failures aren't graceful.
Most of my time goes into making the system *fail visibly* rather than
*fail confidently*.
