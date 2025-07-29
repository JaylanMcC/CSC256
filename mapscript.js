// mapscript.js

// Get all page boxes
const pageBoxes = document.querySelectorAll('.page-box');

// Add click effects to all boxes
pageBoxes.forEach(box => {
    box.addEventListener('click', function() {
        // Flash effect when clicked
        this.style.background = '#2ecc71';
        this.style.transform = 'scale(0.95)';
        
        // Reset after a short delay
        setTimeout(() => {
            this.style.transform = 'scale(1)';
            // Restore original color based on class
            if (this.classList.contains('home')) {
                this.style.background = 'linear-gradient(135deg, #e74c3c, #c0392b)';
            } else if (this.classList.contains('main')) {
                this.style.background = 'linear-gradient(135deg, #3498db, #2980b9)';
            } else if (this.classList.contains('feature')) {
                this.style.background = 'linear-gradient(135deg, #27ae60, #229954)';
            } else if (this.classList.contains('support')) {
                this.style.background = 'linear-gradient(135deg, #9b59b6, #8e44ad)';
            }
        }, 200);
        
        // Show which page was clicked
        console.log('Clicked:', this.querySelector('h3').textContent);
    });
});

// Add some hover effects
pageBoxes.forEach(box => {
    box.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    box.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Simple animation when page loads
window.addEventListener('load', function() {
    pageBoxes.forEach((box, index) => {
        box.style.opacity = '0';
        box.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            box.style.transition = 'all 0.5s ease';
            box.style.opacity = '1';
            box.style.transform = 'translateY(0)';
        }, index * 100);
    });
});
