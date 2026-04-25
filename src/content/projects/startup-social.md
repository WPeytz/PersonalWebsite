---
title: "StartupSocial.net"
summary: "An invite-only social network built specifically for startup founders, with profiles, feed, connections, direct messaging, and a real auth and admin layer underneath."
year: 2025
role: "Solo build · full-stack"
stack: ["React", "Express", "PostgreSQL", "Prisma", "JWT", "Docker"]
link: "https://www.startupsocial.net/"
order: 8
---

## Overview

StartupSocial is an invite-only social network for startup founders.
The shape is intentionally familiar (profile, feed, connections,
direct messages), but the entire thing is gated behind invite codes,
because the design point of the product is a *small, curated* network,
not a growth-optimized one.

## What it does

- **Invite-only registration.** Admin-managed invite codes; codes are
  validated server-side and burned on use.
- **Profiles** with structured startup information: what you're
  building, what stage, what stack.
- **Activity feed** with posts, likes, and comments.
- **Connection requests** in the LinkedIn shape: send → pending →
  accepted / rejected.
- **Direct messages** between connected users.
- **Admin panel** for generating, listing, and revoking invite codes.

## Stack

- **Frontend.** React 18, React Router, Axios, Tailwind, Vite.
- **Backend.** Node.js with Express. JWT-based auth on protected
  routes; invite codes validated on registration.
- **Database.** PostgreSQL via Prisma. The schema covers users,
  startups, posts (with likes and comments), connections, messages,
  and invite codes.
- **Deploy.** Dockerized, deployed on Railway.

## What I built

- The complete invite-code flow: generation, validation, single-use
  enforcement, and admin management.
- Auth middleware, protected routes, and a clean USER / ADMIN role
  split.
- The feed: posts, likes (toggleable), and comments, with the SQL
  joins kept honest by Prisma.
- The connection state machine (request, accept, reject, remove)
  and a status endpoint so the UI always knows where two users stand.
- Direct messaging with conversation listing and per-conversation
  history.
- A REST API surface that's small enough to keep in your head:
  ~30 endpoints across auth, users, startups, posts, connections,
  messages, and admin.

## Why this project

The "small and curated" version of a social network is a fundamentally
different product from the public growth-driven kind: different
incentives, different invariants, completely different design
constraints. Building one end to end was the best way to feel that
difference. Every default the big networks ship with had to be
rethought, starting with "anyone can sign up."
