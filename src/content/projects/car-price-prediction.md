---
title: "Car Price Prediction"
summary: "PCA-driven feature engineering plus a head-to-head comparison of regularized regressors, neural networks, and classifiers, evaluated with cross-validation and statistical tests."
year: 2021
role: "Machine Learning coursework"
stack: ["Python", "scikit-learn", "PyTorch", "PCA"]
order: 14
---

## Overview

A machine learning coursework project on predicting car prices from a
real tabular dataset. The point wasn't to find a single best model. It
was to walk the full methodological pipeline: feature engineering,
several model families in parallel, and statistically grounded
evaluation.

## Approach

- **Feature engineering with PCA.** Reduced and decorrelated the input
  space before model fitting, both as a preprocessing step and as a
  way to see which directions in feature space actually carried signal.
- **Regularized regression.** Built and tuned regressors with L1 / L2
  regularization to control overfitting on the high-dimensional input.
- **Neural networks.** Trained feedforward networks for the regression
  target and compared them against the linear baselines.
- **Classification framing.** Reframed the problem as a discrete one
  (price band) and trained logistic regression and KNN classifiers.
- **Evaluation.** k-fold cross-validation across all model families,
  with paired statistical tests to compare performance.

## What I learned

The interesting result of projects like this is rarely "model X won."
It's how much the variance across folds dwarfs the average gap between
methods. Statistical testing makes it explicit: most of the time the
"best" model is only marginally better than the second-best, and you
need paired tests or resampling to know whether a difference is real
or just sample noise. That perspective stuck with me far more than any
particular set of weights.

## Read the report

[Download the full report (PDF)](/car-price-prediction.pdf)
