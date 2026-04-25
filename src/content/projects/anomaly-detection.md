---
title: "Industrial Anomaly Detection with DINOv3"
summary: "Zero- and few-shot defect detection on the MVTec dataset using frozen DINOv3 features, embedding similarity, and patch-level localization."
year: 2026
role: "Computer Vision coursework"
stack: ["PyTorch", "DINOv3", "MVTec AD"]
order: 11
---

## Overview

A computer-vision project exploring how far you can push **zero-** and
**few-shot** defect detection on industrial images using a frozen
self-supervised backbone (DINOv3), with no fine-tuning on the target
classes.

The benchmark is [MVTec AD](https://www.mvtec.com/company/research/datasets/mvtec-ad),
the standard for industrial anomaly detection.

## Approach

1. **Embedding similarity at the image level.** Compute DINOv3 features
   for "good" reference images, score test images by distance to that
   reference distribution.
2. **Patch-level localization.** Extract dense patch embeddings and
   compare each patch against its nearest neighbours in the reference set
   to produce a heatmap of where the anomaly likely is.
3. **Few-shot extension.** Use a handful of labeled defect examples to
   anchor the similarity scoring instead of relying purely on the "good"
   distribution.

## Takeaway

Strong frozen features carry you surprisingly far on industrial data,
without any class-specific training. But choosing the right similarity
metric and the right pooling level matters as much as the backbone itself.
