const images = [
  "images/SF90.jpg",
  "images/Network.jpg",
  "images/STLCards.jpg",
  "images/Lebron.jpg"
];
let currentIndex = 0;
const slide = document.getElementById("slide");

function showSlide(index) {
  slide.src = images[index];
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showSlide(currentIndex);
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  showSlide(currentIndex);
}

// Initialize slideshow
showSlide(currentIndex);
