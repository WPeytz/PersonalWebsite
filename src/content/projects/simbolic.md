---
title: "Simbolic"
summary: "Infrastructure for orchestrating engineering simulations across different tools, with standardized interfaces for reproducible simulation workflows."
year: 2026
role: "Cofounder · engineer"
stack: ["Python", "Simulation tooling", "Workflow orchestration"]
order: 2
---

## Overview

Simbolic was a venture exploring the workflow side of engineering
simulation: the practical reality that serious simulation work is rarely
"one tool, one model." It's a chain of tools, manual handoffs, and
fragile glue scripts. We were building the infrastructure layer to
orchestrate those chains and make them reproducible.

## What I worked on

- **Cross-tool orchestration.** A runtime that could drive different
  simulation tools through a shared interface, so a workflow author could
  describe *what* needed to happen without hard-coding the *how* against
  any one tool's quirks.
- **Standardized interfaces.** Designing the contract between the
  orchestration layer and the underlying simulators: inputs, outputs,
  versioning, and the metadata you need to actually re-run something
  six months later and get the same result.
- **Reproducibility.** Treating simulation runs as artifacts: pinned
  inputs, captured environments, machine-readable outputs.

## What I took away

A clean abstraction over a messy, heterogeneous toolchain is mostly a
*social* problem disguised as a technical one. Every tool's idea of
"the right way" is load-bearing for some user. The work that pays off is
the work that meets each tool where it actually lives.
