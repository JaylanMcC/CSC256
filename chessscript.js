// Get the element with the ID 'chessboard' from the HTML
const board = document.getElementById("chessboard"); 
 
// Loop through each row (0 to 7 for 8 rows)
for (let row = 0; row < 8; row++) {
    // Loop through each column (0 to 7 for 8 columns)
    for (let col = 0; col < 8; col++) {
        // Create a new <div> element for each square
        const square = document.createElement("div");

        // Add the 'square' class to the div
        square.classList.add("square");
 
        // Alternate colors based on the sum of the row and column indexes
        // If the sum is even, add the 'white' class; otherwise, add 'black'
        if ((row + col) % 2 === 0) {
            square.classList.add("white");
        } else {
            square.classList.add("black");
        }
 
        // Append the square to the board
        board.appendChild(square);
    }
}
