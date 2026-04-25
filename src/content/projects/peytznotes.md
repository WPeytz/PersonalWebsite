---
title: "PeytzNotes.dk"
summary: "An AI study assistant that turns five years of university notes into a searchable, connected, personalized knowledge base, with semantic search, cited chat, exam summaries, and auto-generated flashcards."
year: 2026
role: "Solo build · full-stack & AI"
stack: ["Next.js", "FastAPI", "pgvector", "Supabase", "OpenAI", "Docker"]
order: 6
---

## Overview

PeytzNotes is the tool I wished existed during exam season. It ingests
five years of my Notion notes from the BSc, embeds them, and turns them
into a searchable knowledge base I can actually *talk to*, with every
answer grounded in the original notes via citations.

The design point is selfish: this is built for one user (me), so the
product can skip everything that makes general-purpose study tools
mediocre (auth, multi-tenancy, sharing, payment plans, mobile support)
and focus entirely on being useful for one person preparing for real
exams.

## What it does

- **Import.** Notion exports get parsed and cleaned into structured
  notes with course and year metadata.
- **Search.** Semantic and keyword search, filterable by course.
- **Chat with notes.** Ask a question, get an answer plus the specific
  notes the answer drew from. Citations are non-optional.
- **Exam summaries.** Pick a course, get a structured summary
  generated from your own notes for that course.
- **Flashcards.** Auto-generated Q/A pairs from any selection of
  notes.

## Architecture

Classic RAG pipeline, with the discipline of being honest about each
stage:

```
Notion export → Parser → Chunking → Embeddings → pgvector
                                                    ↓
              User query → Retrieval → LLM → Response + Sources
```

- **Ingestion (Python).** Parses Notion exports, cleans the text,
  chunks notes into retrieval-friendly pieces, generates embeddings,
  and writes everything to the database.
- **Backend (FastAPI).** Endpoints for search, chat, summary, and
  flashcards.
- **Frontend (Next.js).** Chat UI, search UI, filters, and a results
  display that always shows the source notes.
- **Database (Supabase Postgres + pgvector).** Notes, chunks (with
  embeddings), and chat history.
- **Orchestration (Docker Compose).** The whole stack (DB, ingestion,
  backend, frontend) comes up with one command.

## Design decisions

- **Single-user by design.** No auth flow, no row-level security
  gymnastics, no "share with classmates" feature. The product is
  better because it refuses to scale.
- **Citations required.** An answer with no source pointers is not an
  answer; it's a guess. The UI surfaces which notes were used for
  every response.
- **No fine-tuning.** Pure RAG. Adding new notes is a re-ingestion
  away, not a training run.
- **Notion-first import.** Five years of my actual notes already live
  in Notion. Designing for that reality matters more than supporting
  every possible source.
