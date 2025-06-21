let images = [
  "download.htm",
  "Network.JPG",
  "STLCards.JPG",
  "Lebron.JPG"
];

let i = 0;
let slide = document.getElementById("slide");

function next() {
  i = (i + 1) % images.length;
  slide.src = images[i];
}

function prev() {
  i = (i - 1 + images.length) % images.length;
  slide.src = images[i];
}
