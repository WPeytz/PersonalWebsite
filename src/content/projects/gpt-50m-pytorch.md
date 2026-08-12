---
title: "gpt-50m-pytorch"
summary: "A from-scratch 50.8M-parameter GPT language model built in PyTorch for learning and consumer-GPU experimentation."
year: 2026
role: "Machine learning engineer"
stack: ["Python", "PyTorch", "Transformers", "CUDA"]
link: "https://github.com/WPeytz/gpt-50m-pytorch"
linkLabel: "View source"
order: 0
draft: false
---

## Overview

gpt-50m-pytorch is a from-scratch implementation of a decoder-only GPT
language model designed for learning and experimentation on consumer hardware.
Its default architecture contains 50,784,720 trainable parameters across 12
Transformer layers.

The repository covers the complete language-model workflow: byte tokenization,
data loading, causal self-attention, mixed-precision training, validation,
checkpointing and resume support, metric logging, and seeded text generation.

## Reference experiment

The reference model was trained on a 250 MB subset of TinyStories using an
NVIDIA GeForce RTX 2070 with 8 GB of VRAM. Over 10,000 steps, it processed
20.48 million sampled tokens at roughly 5,300 tokens per second and reached a
final validation loss of 0.6886.

The repository also includes a complete experimental report covering the
architecture calculation, training curve, generated examples, limitations,
dataset provenance, and references.

[View gpt-50m-pytorch on GitHub](https://github.com/WPeytz/gpt-50m-pytorch)
