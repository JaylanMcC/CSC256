// Array of image file names
const images = ['Cheeta.jpg', 'mrbeast.jpg', 'Waterpark.jpg'];
// Array of image descriptions
const titles = ['This is Image 1', 'This is Image 2', 'This is Image 3'];

// For loop to create thumbnails dynamically
for (let i = 0; i < images.length; i++) {
    let img = document.createElement('img');  // Create image tag
    img.src = images[i];                      // Set image source
    img.alt = titles[i];                      // Set alt text
    img.className = 'thumbnail';              // Add CSS class

    // Event 1: Handle mouse click on thumbnail
    img.addEventListener('click', function() {
        showImage(images[i]);
    });

    // Event 2: Handle mouse hover over thumbnail
    img.addEventListener('mouseover', function() {
        showImageDetails(titles[i]);
    });

    // Add thumbnail to the gallery div
    document.getElementById('gallery').appendChild(img);
}

// Function 1: Display clicked image in large view
function showImage(imageFile) {
    document.getElementById('mainImage').src = imageFile;
}

// Function 2: Display image description on hover
function showImageDetails(title) {
    document.getElementById('imageDetails').innerText = title;
}

// Function 3: Toggle fullscreen when "Enter" key is pressed
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}

// Event 3: Handle Enter key press to toggle fullscreen
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        toggleFullscreen();
    }
});
