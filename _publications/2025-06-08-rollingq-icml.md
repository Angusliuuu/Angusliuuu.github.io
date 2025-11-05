---
title: "RollingQ: Reviving the Cooperation Dynamics in Multimodal Transformer"
collection: publications
category: conferences
permalink: /publication/2025-rollingq-icml
excerpt: '<b>Authors:</b> Haotian Ni, Yake Wei, <strong>Hang Liu</strong>, Gong Chen, Chong Peng, Hao Lin, Di Hu<br><img src="/images/rollingq.png" width="500">'
date: 2025-06-08
venue: '<strong>International Conference on Machine Learning (ICML)</strong>, 2025'
header:
  teaser: "rollingq.png"
paperurl: 'https://arxiv.org/abs/2506.11465'
#code: 'https://github.com/your-repo'
citation: ''
---

## RollingQ: Reviving the Cooperation Dynamics in Multimodal Transformer

Haotian Ni, Yake Wei, **<font size=5>Hang Liu</font>**, Gong Chen, Chong Peng, Hao Lin, Di Hu

**International Conference on Machine Learning (ICML), 2025**

![RollingQ Framework](/images/rollingq.png)

### Abstract
Multimodal learning faces challenges in effectively fusing information from diverse modalities, especially when modality quality varies across samples. Dynamic fusion strategies, such as attention mechanism in Transformers, aim to address such challenge by adaptively emphasizing modalities based on the characteristics of input data. However, through amounts of carefully designed experiments, we surprisingly observed that the dynamic adaptability of widely-used self-attention models diminishes. Model tends to prefer one modality regardless of data characteristics. This bias triggers a self-reinforcing cycle that progressively overemphasizes the favored modality, widening the distribution gap in attention keys across modalities and deactivating attention mechanism's dynamic properties. To revive adaptability, we propose a simple yet effective method Rolling Query (RollingQ), which balances attention allocation by rotating the query to break the self-reinforcing cycle and mitigate the key distribution gap. Extensive experiments on various multimodal scenarios validate the effectiveness of RollingQ and the restoration of cooperation dynamics is pivotal for enhancing the broader capabilities of widely deployed multimodal Transformers.

### Links
- 📄 [arXiv Paper](https://arxiv.org/abs/2506.11465)
- 💻 [Code](https://github.com/Angusliuuu) (Coming soon)

---

*Accepted by ICML 2025*
