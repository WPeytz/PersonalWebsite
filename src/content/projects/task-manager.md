---
title: "Task Manager"
summary: "A production-ready task manager built end to end on the .NET stack, with auth, CRUD, PostgreSQL, and Docker on Railway with CI/CD from GitHub."
year: 2025
role: "Solo build · full-stack & DevOps"
stack: ["ASP.NET Core", "EF Core", "PostgreSQL", "Bootstrap 5", "Docker", "Railway"]
link: "https://taskmanager1.up.railway.app/"
order: 10
---

## Overview

A task management web application built top to bottom on the .NET
stack: ASP.NET Core MVC, Entity Framework Core, PostgreSQL, and a
Bootstrap-5 UI, deployed on Railway with Docker and automated CI/CD.
The point was to learn the .NET ecosystem properly and ship something
production-shaped, not a tutorial sandbox.

## What it does

- **Authentication.** Registration and login via ASP.NET Core
  Identity, with custom UI pages that fit the rest of the design.
- **Task CRUD.** Create, edit, delete, mark done.
- **Prioritization & due dates.** Priority levels, deadline tracking,
  and status states.
- **Real-time sorting and filtering.** Slice the list by priority,
  status, or due date without a roundtrip.
- **Feedback.** Success notifications on every state change.
- **Responsive UI.** Bootstrap 5, works on phone and desktop.

## Stack

- **App.** ASP.NET Core 9.0 MVC.
- **Data.** Entity Framework Core, with **SQLite in development** and
  **PostgreSQL in production**. Automatic migrations and schema
  management on startup.
- **UI.** Bootstrap 5, server-rendered Razor views.
- **Infra.** Railway for hosting, Docker for packaging, GitHub for
  CI/CD. A custom multi-stage Dockerfile keeps the production image
  small and reproducible.

## What I built

- **Auth on top of ASP.NET Identity.** Wired up registration and login
  and replaced the scaffolded views with custom pages that match the
  app's look and feel.
- **A data layer that works in two databases.** EF Core abstracts the
  provider; the same migrations work against SQLite locally and
  PostgreSQL in production. Resolved the inevitable cross-database
  quirks, most painfully **DateTime timezone handling** and **schema
  differences** between the two providers.
- **Docker, multi-stage.** Build stage compiles and publishes; runtime
  stage carries only what's needed. The production image is small and
  cold-starts fast.
- **CI/CD on Railway.** Every push to `main` triggers a rebuild and
  redeploy, with a persistent PostgreSQL database and environment-based
  configuration so dev and prod stay cleanly separated.

## Why this project

A deliberate stretch outside my Python / TypeScript comfort zone: I
wanted to learn ASP.NET Core, EF Core, and the .NET deployment story
by shipping a real, useful, end-to-end app rather than reading
tutorials.

Try it: <a href="https://taskmanager1.up.railway.app/" target="_blank" rel="noopener noreferrer">taskmanager1.up.railway.app</a>
