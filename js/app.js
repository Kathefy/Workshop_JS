import image1 from "/images/img1.jpg";
import image2 from "/images/img2.jpg";
import image3 from "/images/img3.jpg";
import image4 from "/images/img4.jpg";
import image5 from "/images/img5.jpg";
import { Image } from "./image.js";

// Get parent element for images
//const gallery = document.querySelector("#images");
// Create a table with paths to the images
const imgPaths = [image1, image2, image3, image4, image5];

// Add images to HTML
// imgPaths.forEach(imgPath => {
//   let newImg = document.createElement("img");
//   newImg.setAttribute("src", imgPath);
//   gallery.appendChild(newImg);

//   //add image to favourites
//   // newImg.addEventListener("click", () => {
//   //   newImg.classList.toggle("image--favourite");
//   // });
// });

// add event listener to the gallery instead of adding it to every single image
// const event = {
//   target: {}
// }
// gallery.addEventListener("click", e => {
//   if (e.target.tagName === "IMG") {
//     e.target.classList.toggle("image--favourite");
//   }
// });

// imgPaths.forEach(imgPath => {
//   const image = new Image(imgPath);
//   image.show();
// });
const gallery = document.querySelector("#images");
gallery.innerHTML = "";
const images = imgPaths.map(path => new Image(path));
images.forEach(image => {
  image.show();
});

const btnFav = document.querySelector("#show-favourites");
btnFav.addEventListener("click", () => {
  images.filter(image => !image.isFavourite()).forEach(image => image.hide());
});

const fileInput = document.querySelector("#file-input");

fileInput.onchange = () => {
  if (fileInput.files && fileInput.files[0]) {
    const reader = new FileReader();

    reader.onload = function(e) {
      const newImage = new Image(e.target.result);
      newImage.show();
      images.push(newImage);
    };

    reader.readAsDataURL(fileInput.files[0]);
  }
};
