AOS.init();

/*Preprint Details Table*/

const upcomingTable = document.querySelector(".upcoming");
const upcoming = [
  {
    title: "VG-GAN: Conditional GAN Framework for Graphical Design Generation",
    link: "",
    speaker:
      "Yong Zheng Ong",
    venue:
      "29th IEEE International Conference on Image Processing, IEEE ICIP, 2022, Bordeaux, France.",
    date: "October 16-19, 2022",
    abstract:
      "This paper introduces VG-GAN, a novel conditional GAN for graphical design generation tasks with applications in background design, layout and scene generation. VG-GAN utilizes vector-based methods to achieve scale invariance of the generated layouts. Concretely, the GAN model outputs only relevant vector layout information, and the final layout image is rendered in a post-processing step to allow layouts to be scaled arbitrarily. In contrast to existing vector-based generation models that require a choice of initial class relationships, VG-GAN proposes a selection module to automatically learn the class relationships in target applications, presenting a novel application of vector-based generation not addressed by existing literature. VG-GAN is applied on three generation tasks given optional design conditions, namely, banner background generation, document layout generation and clipart scene generation. The results demonstrate the model's effectiveness in learning and generating conditional graphical design.",
    absbox: "absPopup1",
  },

];

const fillData = () => {
  let output = "";
  upcoming.forEach(
    ({
      title,
      link,
      speaker,
      venue,
      date,
      absbox,
      abstract,
    }) =>
      (output += `
        <tr data-aos="zoom-in-left"> 
            <td class = "researchTitleName">
              <a href="${link}" class="paperTitle" target="_blank"> ${title} </a> 
              <div class = "authors"> ${speaker} </div> 
              
              <div class="rConferences"> ${venue} 
                  <div class="researchY">${date}</div>
              </div>
              
              <!--ABSTRACT BUTTON-->
              <div class="d-flex" style="margin-right:5%;">
                  <button class="button button-accent button-small text-center button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                      ABSTRACT
                  </button>
                  <button class="button button-accent button-small text-center button-abstract " type="button" onclick="window.open('${link}', '_blank');">
                      VIEW DETAILS
                  </button>
              </div>
              <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                  <div class="card-body">
                      ${abstract}    
                  </div>
              </div>
            </td>
        </tr>`)
  );
  upcomingTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);

/*Publication Details Table*/

const completedTable = document.querySelector(".completed");
const completed = [
  {
    title: "Discretization-Invariant Operator Learning",
    link: "https://meetings.siam.org/sess/dsp_programsess.cfm?SESSIONCODE=74393",
    speaker:
      "Yong Zheng Ong",
    venue:
      "MS71 Mathematical Theories of Deep Learning for PDEs in Scientific Computing, SIAM MDS2022, San Diego, CA.",
    date: "September 28, 2022",
    citebox: "popup2",
    image: "assets/images/talks-page/talk_default.png",
    citetext: "SLIDES",
    citation: '<a href="https://ongyongzheng.github.io/assets/talks/IAE_Net_Presentation.pdf" class="paperTitle" target="_blank"> Link to Slides </a>',
    abstract:
      "Discretization invariant learning aims at learning in the infinite-dimensional function spaces with the capacity to process heterogeneous discrete representations of functions as inputs and/or outputs of a learning model. This paper proposes a novel deep learning framework based on integral autoencoders (IAE-Net) for discretization invariant learning. The basic building block of IAE-Net consists of an encoder and a decoder as integral transforms with data-driven kernels, and a fully connected neural network between the encoder and decoder. This basic building block is applied in parallel in a wide multi-channel structure, which are repeatedly composed to form a deep and densely connected neural network with skip connections as IAE-Net. IAE-Net is trained with randomized data augmentation that generates training data with heterogeneous structures to facilitate the performance of discretization invariant learning. The proposed IAE-Net is tested with various applications in predictive data science, solving forward and inverse problems in scientific computing, and signal/image processing. Compared with alternatives in the literature, IAE-Net achieves state-of-the-art performance in existing applications and creates a wide range of new applications.",
    absbox: "absPopup2",
  },

  {
    title: "Digital rock image inpanting using GANs",
    link: "https://library.seg.org/doi/10.1190/segam2020-3427515.1",
    speaker:
      "Yong Zheng Ong",
    venue:
      "SEG Technical Program Expanded Abstracts, 2020",
    date: "October 13, 2020",
    citebox: "popup3",
    image: "assets/images/talks-page/digital_rock_imaging.svg",
    citetext: "WATCH",
    citation: '<iframe width="560" height="315" src="https://www.youtube.com/embed/_NUxmi4xTyk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    abstract:
      "This extended abstract explores the problem of reconstructing 3D μCT samples by filling in ”gaps” between parallel 2D μCT of isotropic rock samples, which reduce technical cost of performing full 3D scans of 3D rock samples. We propose a novel inpainting technique which exploits the isotropic property of such 3D rocks by considering 2D μCT from a different perspective from the given 2D scans. We then employ state of the art invert GAN and AE techniques to produce good inpainting results to reconstruct the 3D sample from the concatenation of inpainted 2D samples. Empirical evidence is presented to show how our proposed method can produce accurate 2D inpainting samples.",
    absbox: "absPopup3",
  },
];

const fillData2 = () => {
  let output = "";
  completed.forEach(
    ({
      image,
      link,
      title,
      speaker,
      venue,
      date,
      citebox,
      citation,
      citetext,
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
              <div class = "authors"> ${speaker} </div> 
              
              <div class="rConferences"> ${venue} 
                  <div class="researchY">${date}</div>
              </div>
              
              <!--WATCH BUTTON-->
              <div class="d-flex" style="margin-right:5%;">
                  <button class="button button-accent button-small text-center button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                      ABSTRACT
                  </button>
                  <button class="button button-accent button-small text-center button-abstract " type="button" onclick="window.open('${link}', '_blank');">
                      VIEW DETAILS
                  </button>
                  <button class="button button-accent button-small text-center button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                      ${citetext}
                  </button>
              </div>
              <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                  <div class="card-body">
                      ${abstract}    
                  </div>
              </div>
              <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                  <div class="card-body">
                      ${citation}    
                  </div>
              </div>
          </td>
      </tr>`)
  );
  completedTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData2);
