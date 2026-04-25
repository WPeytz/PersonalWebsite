---
title: "Trading with ETFs"
summary: "Nine years of ETF data analyzed in R to build optimized portfolios, using variance minimization, bootstrapping, CVaR, and regression-based performance metrics."
year: 2021
role: "Quantitative finance coursework"
stack: ["R", "Portfolio optimization", "CVaR", "Bootstrapping"]
order: 12
---

## Overview

A quantitative finance project analyzing nine years of real ETF data
to construct and evaluate optimized investment portfolios. The whole
pipeline (ingestion, optimization, risk analysis, and performance
attribution) was built in R.

## Methods

- **Variance minimization.** The classic mean-variance frontier and
  the minimum-variance portfolio as a baseline.
- **Bootstrapping.** Resampling historical returns to put confidence
  intervals on optimal weights and measure how stable "optimal"
  actually is once you stop pretending the past is a single sample.
- **CVaR analysis.** Conditional Value-at-Risk to size and constrain
  tail risk, not just average volatility.
- **Regression-based performance metrics.** Decomposing portfolio
  returns into factor exposures and residual alpha.

## What I built

- A data layer pulling and cleaning nine years of ETF price and return
  histories.
- Optimization routines for variance-minimized portfolios and
  CVaR-constrained variants, with explicit constraints on weights and
  exposures.
- A bootstrap pipeline that resamples returns and re-runs the
  optimizer, producing distributions of optimal weights instead of
  single point estimates.
- Regression analyses for performance attribution and factor
  decomposition.

## What I learned

The headline lesson: "optimal" portfolios are far less robust than
they look. Bootstrapping the same data tells you how much of any
single optimization is signal vs. sample noise, and the honest answer
is usually "less than the optimizer suggests." The interesting work is
designing portfolios that survive that uncertainty, not portfolios
that win the in-sample backtest.

## Read the report

[Download the full report (PDF)](/trading-with-etfs.pdf)
