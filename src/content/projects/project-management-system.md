---
title: "Project Management System"
summary: "A time and task management tool (\"TimeManager\") for software teams, designed around SOLID and design patterns, with full coverage and formal white-box and contract-based testing."
year: 2022
role: "Software engineering coursework"
stack: ["Java", "JUnit", "SOLID", "Design patterns", "Contract testing"]
order: 15
---

## Overview

A software-engineering coursework project: build **TimeManager**, a
time and task management tool for software teams. The brief was less
about features and more about engineering rigor: design the system
properly, then prove it works.

## What it does

A small but real tool that lets a team track time against tasks, group
tasks into projects and activities, and report on where the time
actually went.

## Engineering approach

- **SOLID principles.** Used as the structural discipline of the
  codebase: single responsibility, dependency inversion, and so on
  applied consistently across modules rather than as a checkbox.
- **Design patterns.** Introduced where they earned their place
  (e.g. command objects for reversible state changes) and avoided
  where simpler code did the job.
- **Full code coverage.** Every line and branch reached by tests.
- **White-box testing.** Tests written against the *implementation*:
  branch and path coverage, edge cases derived from the control flow
  graph, not just from the spec.
- **Contract-based testing.** Preconditions, postconditions, and
  invariants formalized and tested at the boundaries of each
  component.

## What I learned

Writing code that's *intentionally* testable before testing it changes
how you decompose the problem. SOLID isn't an aesthetic preference.
It's the difference between a system you can verify component by
component and one you can only observe end to end. White-box and
contract-based testing then make sure your verification matches what
the code actually does, not just what you hoped it would.

## Read the report

[Download the full report (PDF)](/project-management-system.pdf)
