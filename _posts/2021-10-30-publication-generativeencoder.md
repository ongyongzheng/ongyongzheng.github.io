---
title: "Generative imaging and image processing via generative encoder"
categories:
  - Publication
  - Published
tags:
  - Generative Adversarial Network
  - Autoencoder
  - Inverse GAN Problem
  - Image Processing
---

### <span style="color: grey;">Authors: <br>Yong Zheng Ong, and Haizhao Yang</span>

***********************************************************************

## Abstract

This paper introduces a novel generative encoder (GE) framework for generative imaging and image processing tasks like image reconstruction, compression, denoising, inpainting, deblurring, and super-resolution. GE unifies the generative capacity of GANs and the stability of AEs in an optimization framework instead of stacking GANs and AEs into a single network or combining their loss functions as in existing literature. GE provides a novel approach to visualizing relationships between latent spaces and the data space. The GE framework is made up of a pre-training phase and a solving phase. In the former, a GAN with generator $G$ capturing the data distribution of a given image set, and an AE network with encoder $E$ that compresses images following the estimated distribution by $G$ are trained separately, resulting in two latent representations of the data, denoted as the generative and encoding latent space respectively. In the solving phase, given noisy image $x=\mathcal{P}(x^*)$, where $x^*$ is the target unknown image, $\mathcal{P}$ is an operator adding an addictive, or multiplicative, or convolutional noise, or equivalently given such an image $x$ in the compressed domain, i.e., given $m=E(x)$, the two latent spaces are unified via solving the optimization problem
 \[
 z^*=\underset{z}{\mathrm{argmin}} \|E(G(z))-m\|_2^2+\lambda\|z\|_2^2
 \]
and the image $x^*$ is recovered in a generative way via $\hat{x}:=G(z^*)\approx x^*$, where $\lambda>0$ is a hyperparameter. The unification of the two spaces allows improved performance against corresponding GAN and AE networks while visualizing interesting properties in each latent space.

## Links

- AIMS link: [https://www.aimsciences.org/article/doi/10.3934/ipi.2021060](https://www.aimsciences.org/article/doi/10.3934/ipi.2021060)

## Code

- Github link: [https://github.com/ongyongzheng/generative_encoder](https://github.com/ongyongzheng/generative_encoder)

## Recommended Citation

```
@article{ong2021ge,
  title = {Generative imaging and image processing via generative encoder},
  journal = {Inverse Problems and Imaging},
  volume = {16},
  number = {3},
  pages = {525-545},
  year = {2022},
  author = {Yong Zheng Ong and Haizhao Yang},
}
```
