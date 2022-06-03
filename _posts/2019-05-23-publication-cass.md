---
title: "CASS: Cross Adversarial Source Separation via Autoencoder"
categories:
  - Publication
  - Preprint
tags:
  - Generative Adversarial Network
  - Autoencoder
  - Signal Processing
---

### <span style="color: grey;">Authors: <br>Yong Zheng Ong, Charles K. Chui, Haizhao Yang</span>

***********************************************************************

## Abstract

This paper introduces a cross adversarial source separation (CASS) framework via autoencoder, a new model that aims at separating an input signal consisting of a mixture of multiple components into individual components defined via adversarial learning and autoencoder fitting. CASS unifies popular generative networks like auto-encoders (AEs) and generative adversarial networks (GANs) in a single framework. The basic building block that filters the input signal and reconstructs the $i$-th target component is a pair of deep neural networks $\mathcal{EN}_i$ and $\mathcal{DE}_i$ as an encoder for dimension reduction and a decoder for component reconstruction, respectively. The decoder $\mathcal{DE}_i$ as a generator is enhanced by a discriminator network $\mathcal{D}_i$ that favors signal structures of the $i$-th component in the $i$-th given dataset as guidance through adversarial learning. In contrast with existing practices in AEs which trains each Auto-Encoder independently, or in GANs that share the same generator, we introduce cross adversarial training that emphasizes adversarial relation between any arbitrary network pairs $(\mathcal{DE}_i,\mathcal{D}_j)$, achieving state-of-the-art performance especially when target components share similar data structures.

## Links

- arXiv link: [https://arxiv.org/abs/1905.09877](https://arxiv.org/abs/1905.09877)
- Research Gate link:  [https://www.researchgate.net/publication/333324038_CASS_Cross_Adversarial_Source_Separation_via_Autoencoder](https://www.researchgate.net/publication/333324038_CASS_Cross_Adversarial_Source_Separation_via_Autoencoder)

## Code

- Github link: [https://github.com/ongyongzheng/cass](https://github.com/ongyongzheng/cass)

## Recommended Citation

```
@misc{ong2019cass,
  doi = {10.48550/ARXIV.1905.09877},
  url = {https://arxiv.org/abs/1905.09877},
  author = {Ong, Yong Zheng and Chui, Charles K. and Yang, Haizhao},
  title = {CASS: Cross Adversarial Source Separation via Autoencoder},
  publisher = {arXiv},
  year = {2019},
  copyright = {arXiv.org perpetual, non-exclusive license}
}
```
