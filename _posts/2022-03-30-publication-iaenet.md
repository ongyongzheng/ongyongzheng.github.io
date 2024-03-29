---
title: "IAE-Net: Integral Autoencoders for Discretization-Invariant Learning"
categories:
  - Publication
  - Published
tags:
  - Discretization Invariant
  - Autoencoder
  - Forward and Inverse Problems
  - Signal Processing
  - Image Processing
---

### <span style="color: grey;">Authors: <br>Yong Zheng Ong, Zuowei Shen, Haizhao Yang</span>

***********************************************************************

## Abstract

Discretization invariant learning aims at learning in the infinite-dimensional function spaces with the capacity to process heterogeneous discrete representations of functions as inputs and/or outputs of a learning model. This paper proposes a novel deep learning framework based on integral autoencoders (IAE-Net) for discretization invariant learning. The basic building block of IAE-Net consists of an encoder and a decoder as integral transforms with data-driven kernels, and a fully connected neural network between the encoder and decoder. This basic building block is applied in parallel in a wide multi-channel structure, which are repeatedly composed to form a deep and densely connected neural network with skip connections as IAE-Net. IAE-Net is trained with randomized data augmentation that generates training data with heterogeneous structures to facilitate the performance of discretization invariant learning. The proposed IAE-Net is tested with various applications in predictive data science, solving forward and inverse problems in scientific computing, and signal/image processing. Compared with alternatives in the literature, IAE-Net achieves state-of-the-art performance in existing applications and creates a wide range of new applications.

## Links

- arXiv link: [https://arxiv.org/pdf/2203.05142](https://arxiv.org/pdf/2203.05142)
- Research Gate link:  [https://www.researchgate.net/publication/359035468_IAE-NET_INTEGRAL_AUTOENCODERS_FOR_DISCRETIZATION-INVARIANT_LEARNING](https://www.researchgate.net/publication/359035468_IAE-NET_INTEGRAL_AUTOENCODERS_FOR_DISCRETIZATION-INVARIANT_LEARNING)

## Code

- Github link: [https://github.com/ongyongzheng/iae_net](https://github.com/ongyongzheng/iae_net)

## Recommended Citation

```
@misc{ong2022iaenet,
      doi = {10.48550/ARXIV.2203.05142},
      url = {https://arxiv.org/abs/2203.05142},
      author = {Ong, Yong Zheng and Shen, Zuowei and Yang, Haizhao},
      keywords = {Machine Learning (cs.LG), Numerical Analysis (math.NA), FOS: Computer and information sciences, FOS: Computer and information sciences, FOS: Mathematics, FOS: Mathematics},
      title = {IAE-Net: Integral Autoencoders for Discretization-Invariant Learning},
      publisher = {arXiv},
      year = {2022},
      copyright = {arXiv.org perpetual, non-exclusive license}
}
```
