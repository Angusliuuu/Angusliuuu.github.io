---
title: "MICON-Bench: Benchmarking and Enhancing Multi-Image Context Image Generation in Unified Multimodal Models"
collection: publications
category: conferences
permalink: /publication/2025-micon-bench
excerpt: '<b>Status:</b> Submitted to CVPR 2026 (Co-first author)<br><img src="/images/MICON-BENCH.PNG" width="500">'
date: 2025-11-15
venue: 'Submitted to CVPR 2026'
header:
  teaser: "MICON-BENCH.PNG"
paperurl:
code:
citation: '**Hang Liu** (co-first author), et al. "MICON-Bench: Benchmarking and Enhancing Multi-Image Context Image Generation in Unified Multimodal Models." Submitted to CVPR 2026.'
---

![MICON-Bench Overview](/images/MICON-BENCH.PNG)

## Abstract
Recent advancements in Unified Multimodal Models (UMMs) have enabled remarkable image understanding and generation capabilities. However, while models like Gemini-2.5-Flash-Image show emerging abilities to reason over multiple related images, existing benchmarks rarely address the challenges of multi-image context generation, focusing mainly on text-to-image or single-image editing tasks. In this work, we introduce MICON-Bench, a comprehensive benchmark covering six tasks that evaluate cross-image composition, contextual reasoning, and identity preservation. We further propose an MLLM-driven Evaluation-by-Checkpoint framework for automatic verification of semantic and visual consistency, where multimodal large language model (MLLM) serves as a verifier. Additionally, we present Dynamic Attention Rebalancing (DAR), a training-free, plug-and-play mechanism that dynamically adjusts attention during inference to enhance coherence and reduce hallucinations. Extensive experiments on various state-of-the-art open-source models demonstrate both the rigor of MICON-Bench in exposing multi-image reasoning challenges and the efficacy of DAR in improving generation quality and cross-image coherence.

## Highlights
- 🔍 **Six multi-image tasks** covering object composition, spatial reasoning, attribute disentanglement, fg/bg swapping, component transfer, and story generation.
- 🤖 **Evaluation-by-Checkpoint** uses MLLMs as verifiers to automatically score instruction following, identity preservation, and structural coherence.
- 🔁 **Dynamic Attention Rebalancing (DAR)** offers a training-free plug-in that dynamically modulates attention weights during inference to reduce hallucination and improve cross-image consistency.
- 📊 Rigorous benchmarking across state-of-the-art UMMs reveals key limitations in multi-image context reasoning and demonstrates the effectiveness of DAR.

## Status
- **Submitted to CVPR 2026**
- **Role**: Co-first author
---
