---
title: "MICON-Bench: Multi-Image Context Benchmark"
excerpt: "Submitted to CVPR 2026 (Co-first author)<br/><img src='/images/MICON-BENCH.PNG' width='500'>"
collection: portfolio
date: 2025-11-15
---

## MICON-Bench: Benchmarking Multi-Image Context Generation

**Status**: Submitted to CVPR 2026  
**Role**: Co-first author

### Overview
MICON-Bench is the first comprehensive benchmark dedicated to evaluating **multi-image context generation** in unified multimodal models (UMMs). While modern models show impressive single-image capabilities, they struggle to reason consistently across multiple reference images. MICON-Bench introduces six tasks—object composition, spatial composition, attribute disentanglement, component transfer, foreground/background composition, and story generation—to systematically probe these abilities.

![MICON-Bench Tasks](/images/MICON-BENCH.PNG)

### Key Contributions
- **Benchmark Design** – Six challenging tasks targeting cross-image composition, contextual reasoning, and identity preservation.
- **Evaluation-by-Checkpoint** – An MLLM-driven automatic verifier that checks instruction following, identity, structure, and usability.
- **Dynamic Attention Rebalancing (DAR)** – A training-free, plug-and-play mechanism that dynamically adjusts attention maps during inference to enhance coherence and suppress hallucinations.
- **Extensive Evaluation** – Benchmarking across multiple state-of-the-art open-source UMMs, highlighting limitations and showing that DAR boosts generation quality.

### Tech Stack
- Unified multimodal diffusion/transformer models
- MLLM-based evaluators
- Training-free attention manipulation (DAR)

### Links
- 📄 Publication: [Coming soon]
- 💻 Code: [Coming soon]
- 📘 Benchmark Docs: [Coming soon]

---
*Designed to push the next generation of multimodal models toward consistent multi-image reasoning and generation.*
