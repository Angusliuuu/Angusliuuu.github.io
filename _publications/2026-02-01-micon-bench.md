---
title: "MICON-Bench: Benchmarking and Enhancing Multi-Image Context Image Generation in Unified Multimodal Models"
collection: publications
category: conferences
permalink: /publication/2026-micon-bench
excerpt: '<b>Authors:</b> Mingrui Wu*, Hang Liu*, Jiayi Ji, Xiaoshuai Sun, Rongrong Ji<br><img src="/images/MICON-BENCH.PNG" width="500">'
date: 2026-02-01
venue: '<strong>Computer Vision and Pattern Recognition Conference (CVPR)</strong>, 2026'
header:
  teaser: "MICON-BENCH.PNG"
paperurl: 'https://arxiv.org/abs/2602.19497'
code: 'https://github.com/Angusliuuu/MICON-Bench'
citation: ''
---

## MICON-Bench: Benchmarking and Enhancing Multi-Image Context Image Generation in Unified Multimodal Models

Mingrui Wu*, Hang Liu*, Jiayi Ji, Xiaoshuai Sun, Rongrong Ji

**Published in Computer Vision and Pattern Recognition Conference (CVPR) 2026**

![MICON-Bench Overview](/images/MICON-BENCH.PNG)

### Abstract
Recent advancements in Unified Multimodal Models (UMMs) have enabled remarkable image understanding and generation capabilities. However, while models like Gemini-2.5-Flash-Image show emerging abilities to reason over multiple related images, existing benchmarks rarely address the challenges of multi-image context generation, focusing mainly on text-to-image or single-image editing tasks. In this work, we introduce MICON-Bench, a comprehensive benchmark covering six tasks that evaluate cross-image composition, contextual reasoning, and identity preservation. We further propose an MLLM-driven Evaluation-by-Checkpoint framework for automatic verification of semantic and visual consistency, where multimodal large language model (MLLM) serves as a verifier. Additionally, we present Dynamic Attention Rebalancing (DAR), a training-free, plug-and-play mechanism that dynamically adjusts attention during inference to enhance coherence and reduce hallucinations. Extensive experiments on various state-of-the-art open-source models demonstrate both the rigor of MICON-Bench in exposing multi-image reasoning challenges and the efficacy of DAR in improving generation quality and cross-image coherence.

### Links
[![GitHub](https://img.shields.io/badge/GitHub-MICON--Bench-24292e?style=flat-square&logo=github&logoColor=white&labelColor=4b4b4b)](https://github.com/Angusliuuu/MICON-Bench)
[![arXiv](https://img.shields.io/badge/arXiv-2602.19497-b31b1b?style=flat-square&logo=arxiv&logoColor=white&labelColor=4b4b4b)](https://arxiv.org/abs/2602.19497)
