---
title: "PeytzGames.com"
summary: "A home for the games I make — a games hub at peytzgames.com where new games are released, with embedded browser play pages and a data-driven catalog."
year: 2026
role: "Solo build · games hub"
stack: ["Astro", "Tailwind", "TypeScript", "Vercel"]
link: "https://peytzgames.com"
linkLabel: "Visit PeytzGames.com"
order: 18
---

## Overview

PeytzGames is the umbrella for the games I make. My games had been
scattered across separate domains and side projects — a puzzle game
here, a Minecraft plugin there — so I gave them a single home:
[peytzgames.com](https://peytzgames.com), where existing games are
collected and new ones are released.

I wrote about the thinking behind it in
[Introducing PeytzGames](/blog/introducing-peytzgames).

## What it does

- **A games catalog.** The home page is a grid of every game, each with
  a status badge (live, beta, coming soon) so unreleased games can be
  teased before launch.
- **Embedded play pages.** Games that allow framing get their own
  `/play/<slug>` page that embeds the game in an iframe with a
  fullscreen escape hatch — [Blocks](https://peytzgames.com/play/blocks)
  and [LifeRunner](https://peytzgames.com/play/liferunner) work this
  way. External games link out directly.
- **Data-driven.** The whole catalog is one TypeScript array; adding a
  game is a few lines of data, and the grid, play pages, and sitemap
  follow automatically.

## How it's built

A static Astro site styled with Tailwind, deployed on Vercel with the
GitHub integration — every push to `main` goes straight to production.
The games themselves stay deployed wherever they live (each game is its
own project); the hub embeds or links to them, so shipping a game and
listing it are independent steps.

## Games in the collection

[Blocks](https://peytzgames.com/play/blocks),
[LifeRunner.io](/projects/liferunner),
[LastNameLegacy](/projects/lastnamelegacy), and
[PeytzPvP](/projects/peytzpvp) — with more in the queue.
