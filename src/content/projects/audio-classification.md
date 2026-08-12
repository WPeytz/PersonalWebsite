---
title: "Instrument Audio Classification"
summary: "CNN and LSTM models for classifying 15 musical instruments from short audio clips, reaching 96–98% accuracy after tuning."
year: 2021
role: "Introduction to Intelligent Systems"
stack: ["PyTorch", "CNN", "LSTM", "Librosa"]
paper: "https://www.williampeytz.com/instrument-audio-classification-paper.pdf"
paperLabel: "Read paper"
order: 13
---

## Overview

A supervised audio-classification project: given a short clip, identify
which of 15 instruments is being played. I compared a CNN operating on
spectrograms with an LSTM operating on temporal feature sequences.

## What I did

- **Pre-processing.** Standardized clip lengths, computed mel-spectrograms,
  and applied basic augmentation (time / frequency masking, gain jitter).
- **Two architectures.** A 2D-CNN on log-mel spectrograms, and an LSTM
  consuming framewise MFCC sequences.
- **Tuning and validation.** Held-out validation to tune learning rate,
  augmentation strength, and model depth; used confusion matrices to
  diagnose which instruments the models confused most often.

## Result

Both models landed in the **96–98% accuracy** range on the held-out test
split. The CNN was the stronger baseline; the LSTM caught up after I
gave it a richer feature representation.
