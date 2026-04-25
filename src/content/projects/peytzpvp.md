---
title: "PeytzPvP"
summary: "A modern Hardcore Games-style PvP plugin for Minecraft Paper servers, with Java 21, modular architecture, config-driven balancing, and a marketing site at peytzpvp.com."
year: 2026
role: "Solo build · plugin dev"
stack: ["Java 21", "Paper", "Gradle", "SQLite", "Astro"]
link: "https://peytzpvp.com"
order: 7
---

## Overview

PeytzPvP is a standalone PvP plugin for Minecraft **Paper** servers in
the spirit of the original Hardcore Games / Survival Games servers
from the early-2010s Minecraft scene: round-based arenas, chest
loot, kits, grace periods, and a winner. The point is to recapture
that snappy, focused format with current Java and current tooling, not
to reinvent the genre.

## What it does

A match runs through a clean state machine: **lobby → countdown →
chest loot → grace period → fight → elimination → win condition →
reset**. Players pick from a small set of starter kits, fight on
configurable arenas, and persistent stats follow them across matches.

The MVP roadmap was deliberate: phase state machine first, then arena
loading, lobby, loot, grace period, elimination, win condition, match
reset, kits, stats. Every step keeps the server playable.

## Stack

- **Java 21.** Modern language features used where they actually
  improve readability.
- **Paper plugin API** for the Minecraft side.
- **Gradle Kotlin DSL.** Build configuration as typed Kotlin.
- **SQLite for the MVP stats layer**, with PostgreSQL on the roadmap
  for a hosted production deployment.
- **Adventure components** for all chat / scoreboard / title output.
- **Astro** for the marketing site at [peytzpvp.com](https://peytzpvp.com).

## Architecture

The codebase is organized around services with single responsibilities,
not god classes:

- **game.** Match state machine.
- **arena.** Arena loading and configuration.
- **loot.** Chest tiers and loot tables.
- **kits.** Kit definitions.
- **player.** Per-player state.
- **combat.** Combat rules and timing.
- **stats.** Persistent player stats.
- **storage.** The SQLite / Postgres abstraction.
- **command** / **listener.** Thin plumbing into Paper's APIs.

## Design rules I hold the project to

- Listeners stay thin; logic lives in services.
- Composition over inheritance.
- Config-driven balancing. Arenas, loot, and kits live in config
  files, not in Java.
- No reflection, no NMS, no surprise dependencies.
- "Done" means: it compiles, the plugin loads cleanly, the happy path
  is testable on a local Paper server, and config / messages aren't
  unnecessarily hard-coded.

## Why this project

A specific nostalgia. The original Survival Games / Hardcore Games
servers shaped what a round-based PvP format should feel like, and
most modern reimplementations either lose the snappiness or pile on
features until the format suffocates. PeytzPvP is my attempt to rebuild
the genre at its essentials, with a stack I actually want to maintain.
