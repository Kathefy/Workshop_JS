export class Image {
  constructor(path) {
    this.path = path;
  }
  show() {
    const gallery = document.querySelector("#images");
    let newImg = document.createElement("img");
    newImg.setAttribute("src", this.path);
    gallery.appendChild(newImg);
    newImg.addEventListener("click", () => {
      this.markOrUnmark();
    });
    this.image = newImg;
  }
  markOrUnmark() {
    this.image.classList.toggle("image--favourite");
  }
  isFavourite() {
    return this.image.classList.contains("image--favourite");
  }
  hide() {
    this.image.style.display = "none";
  }
}
