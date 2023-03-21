const main = () => {
  slideShow();
};
const images = [
  "../images/AL_MAWSAM.png.png",
  "../images/byroots.jpg",
  "../images/convivio.png",
  "../images/IrAP.png",
  "../images/made_by_nature.png",
  "../images/souk_el_balad.png",
];
let i = 0;
const slideShow = () => {
  document.getElementById("image").src = images[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout("slideShow()", 3000);
};

window.addEventListener("load", main);
