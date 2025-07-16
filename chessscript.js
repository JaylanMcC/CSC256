const board = document.getElementById("chessboard");
 
for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
        const square = document.createElement("div");
        square.classList.add("square");
 
        // Alternate colors: if row+col is even, it's white; otherwise black
        if ((row + col) % 2 === 0) {
            square.classList.add("white");
        } else {
            square.classList.add("black");
        }
 
        board.appendChild(square);
    }
}
 
