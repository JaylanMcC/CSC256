const board = document.getElementById("board"); 

let selectedPiece = null;
let currentTurn = "red"; // red goes first

// make 8x8 board
for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
        const square = document.createElement("div");
        square.classList.add("square");

        // give square position
        square.dataset.row = row;
        square.dataset.col = col;

        // color the squares
        if ((row + col) % 2 === 0) {
            square.classList.add("white");
        } else {
            square.classList.add("black");

            // add red pieces on top 3 rows
            if (row < 3) {
                const piece = makePiece("red");
                square.appendChild(piece);
            }

            // add black pieces on bottom 3 rows
            if (row > 4) {
                const piece = makePiece("dark");
                square.appendChild(piece);
            }
        }

        // let user click each square
        square.addEventListener("click", handleClick);
        board.appendChild(square);
    }
}

// make checker piece
function makePiece(color) {
    const piece = document.createElement("div");
    piece.classList.add("piece", color);
    piece.dataset.color = color;
    return piece;
}

// handle clicking squares or pieces
function handleClick(e) {
    const square = e.currentTarget;
    const piece = square.querySelector(".piece");

    // if user clicks a piece that matches the turn
    if (piece && piece.dataset.color === currentTurn) {
        clearSelection();
        piece.classList.add("selected");
        selectedPiece = piece;
        return;
    }

    // if user tries to move
    if (!piece && selectedPiece) {
        const from = selectedPiece.parentElement;

        const fromRow = parseInt(from.dataset.row);
        const fromCol = parseInt(from.dataset.col);
        const toRow = parseInt(square.dataset.row);
        const toCol = parseInt(square.dataset.col);

        const rowMove = toRow - fromRow;
        const colMove = Math.abs(toCol - fromCol);

        // red goes down (row +1), black goes up (row -1)
        const dir = selectedPiece.dataset.color === "red" ? 1 : -1;

        // allow 1 diagonal move
        if (rowMove === dir && colMove === 1) {
            square.appendChild(selectedPiece);
            selectedPiece.classList.remove("selected");
            selectedPiece = null;
            currentTurn = currentTurn === "red" ? "dark" : "red";
        } else {
            alert("Only move one square diagonally.");
        }
    }
}

// remove highlight from all pieces
function clearSelection() {
    const pieces = document.querySelectorAll(".piece");
    pieces.forEach(p => p.classList.remove("selected"));
}
