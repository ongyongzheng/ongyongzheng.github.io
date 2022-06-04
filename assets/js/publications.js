AOS.init();

/*Preprint Details Table*/

const preprintTable = document.querySelector(".preprints");
const preprint = [
  {
    title: "IAE-Net: Integral Autoencoders for Discretization-Invariant Learning",
    authors:
      "Yong Zheng Ong, Zuowei Shen, Haizhao Yang",
    link: "https://arxiv.org/abs/2203.05142",
    conferences:
      "",
    researchYr: "March 30, 2022",
    citebox: "popup1",
    image: "assets/images/publications-page/publication_default.png",
    citation: {
      vancouver:
        "Ong YZ, Shen Z, Yang H. IAE-Net: Integral Autoencoders for Discretization-Invariant Learning. arXiv preprint arXiv:2203.05142. 2022 Mar 30.",
    },
    abstract:
      "Discretization invariant learning aims at learning in the infinite-dimensional function spaces with the capacity to process heterogeneous discrete representations of functions as inputs and/or outputs of a learning model. This paper proposes a novel deep learning framework based on integral autoencoders (IAE-Net) for discretization invariant learning. The basic building block of IAE-Net consists of an encoder and a decoder as integral transforms with data-driven kernels, and a fully connected neural network between the encoder and decoder. This basic building block is applied in parallel in a wide multi-channel structure, which are repeatedly composed to form a deep and densely connected neural network with skip connections as IAE-Net. IAE-Net is trained with randomized data augmentation that generates training data with heterogeneous structures to facilitate the performance of discretization invariant learning. The proposed IAE-Net is tested with various applications in predictive data science, solving forward and inverse problems in scientific computing, and signal/image processing. Compared with alternatives in the literature, IAE-Net achieves state-of-the-art performance in existing applications and creates a wide range of new applications.",
    absbox: "absPopup1",
  },

  {
    title: "CASS: Cross Adversarial Source Separation via Autoencoder",
    authors:
      "Yong Zheng Ong, Charles K. Chui, Haizhao Yang",
    link: "https://arxiv.org/abs/1905.09877",
    conferences:
      "",
    researchYr: "May 23, 2019",
    citebox: "popup2",
    image: "assets/images/publications-page/publication_default.png",
    citation: {
      vancouver:
        "Ong YZ, Chui CK, Yang H. CASS: Cross adversarial source separation via autoencoder. arXiv preprint arXiv:1905.09877. 2019 May 23.",
    },
    abstract:
      "This paper introduces a cross adversarial source separation (CASS) framework via autoencoder, a new model that aims at separating an input signal consisting of a mixture of multiple components into individual components defined via adversarial learning and autoencoder fitting. CASS unifies popular generative networks like auto-encoders (AEs) and generative adversarial networks (GANs) in a single framework. The basic building block that filters the input signal and reconstructs the \(i\)-th target component is a pair of deep neural networks \(\mathcal{EN}_i\) and \(\mathcal{DE}_i\) as an encoder for dimension reduction and a decoder for component reconstruction, respectively. The decoder \(\mathcal{DE}_i\) as a generator is enhanced by a discriminator network \(\mathcal{D}_i\) that favors signal structures of the \(i\)-th component in the \(i\)-th given dataset as guidance through adversarial learning. In contrast with existing practices in AEs which trains each Auto-Encoder independently, or in GANs that share the same generator, we introduce cross adversarial training that emphasizes adversarial relation between any arbitrary network pairs \((\mathcal{DE}_i,\mathcal{D}_j)\), achieving state-of-the-art performance especially when target components share similar data structures.",
    absbox: "absPopup2",
  },
];

const fillData = () => {
  let output = "";
  preprint.forEach(
    ({
      image,
      title,
      authors,
      link,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="${link}" class="paperTitle" target="_blank"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-center button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                        <button class="button button-accent button-small text-center button-abstract " type="button" onclick="window.open('${link}', '_blank');">
                            READ PAPER
                        </button>
                        <button class="button button-accent button-small text-center button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  preprintTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);

/*Publication Details Table*/

const publicationTable = document.querySelector(".publications");
const publication = [
  {
    title: "Generative Imaging and Image Processing via Generative Encoder",
    authors:
      "Yong Zheng Ong, and Haizhao Yang",
    link: "https://www.researchgate.net/publication/355674483_Generative_imaging_and_image_processing_via_generative_encoder",
    conferences:
      "Inverse Problems and Imaging, 2022",
    researchYr: "October 30, 2021",
    citebox: "popup3",
    image: "assets/images/publications-page/publication_default.png",
    citation: {
      vancouver:
        "Yong Zheng Ong, Haizhao Yang. Generative imaging and image processing via generative encoder. Inverse Problems and Imaging, 2022, 16 (3) : 525-545. doi: 10.3934/ipi.2021060",
    },
    abstract:
      "This paper introduces a novel generative encoder (GE) framework for generative imaging and image processing tasks like image reconstruction, compression, denoising, inpainting, deblurring, and super-resolution. GE unifies the generative capacity of GANs and the stability of AEs in an optimization framework instead of stacking GANs and AEs into a single network or combining their loss functions as in existing literature. GE provides a novel approach to visualizing relationships between latent spaces and the data space. The GE framework is made up of a pre-training phase and a solving phase. In the former, a GAN with generator \(G\) capturing the data distribution of a given image set, and an AE network with encoder \(E\) that compresses images following the estimated distribution by \(G\) are trained separately, resulting in two latent representations of the data, denoted as the generative and encoding latent space respectively. In the solving phase, given noisy image \(x=\mathcal{P}(x^)\), where \(x^\) is the target unknown image, \(\mathcal{P}\) is an operator adding an addictive, or multiplicative, or convolutional noise, or equivalently given such an image \(x\) in the compressed domain, i.e., given \(m=E(x)\), the two latent spaces are unified via solving the optimization problem \[z^=\mathrm{argmin}_z |E(G(z))-m|_2^2+\lambda|z|_2^2 \] and the image \(x^\) is recovered in a generative way via \(\hat{x}:=G(z^)\approx x^\), where \(\lambda>0\) is a hyperparameter. The unification of the two spaces allows improved performance against corresponding GAN and AE networks while visualizing interesting properties in each latent space.",
    absbox: "absPopup3",
  },

  {
    title: "Digital Rock Image Inpainting using GANs",
    authors:
      "Yong Zheng Ong, Nan You, Yunyue Elita Li, and Haizhao Yang",
    link: "https://www.researchgate.net/publication/342464064_Digital_Rock_Image_Inpainting_using_GANs",
    conferences:
      "SEG Technical Program Expanded Abstracts, 2020",
    researchYr: "September 30, 2020",
    citebox: "popup4",
    image: "assets/images/publications-page/publication_default.png",
    citation: {
      vancouver:
        "Yong Zheng Ong, Nan You, Yunyue Elita Li, and Haizhao Yang, (2020), 'Digital rock image inpanting using GANs,' SEG Technical Program Expanded Abstracts : 2525-2529.",
    },
    abstract:
      "This extended abstract explores the problem of reconstructing 3D µCT samples by filling in “gaps” between parallel 2D µCT of isotropic rock samples, which reduce the technical cost of performing full 3D scans of 3D rock samples. We propose a novel inpainting technique that exploits the isotropic property of such 3D rocks by considering 2D µCT from a different perspective from the given 2D scans. We then employ state of the art invert GAN and AE techniques to produce good inpainting results to reconstruct the 3D sample from the concatenation of inpainted 2D samples. Empirical evidence is presented to show how our proposed method can produce accurate 2D in-painting samples.",
    absbox: "absPopup4",
  },
];

const fillData2 = () => {
  let output = "";
  publication.forEach(
    ({
      image,
      title,
      authors,
      link,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes" style="padding: 10px 10px 10px 10px;">
                        </span>
                    </div>
                    <a href="${link}" class="paperTitle" target="_blank"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-center button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                        <button class="button button-accent button-small text-center button-abstract " type="button" onclick="window.open('${link}', '_blank');">
                            READ PAPER
                        </button>
                        <button class="button button-accent button-small text-center button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  publicationTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData2);
