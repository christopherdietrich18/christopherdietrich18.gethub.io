// Pattern 1
let canvas1 = document.getElementById("pattern1");
let squareSize = 20;
let spacing = 10;
let x1 = spacing;
let y1 = spacing;
let stars1 = 0;

while (y1 + squareSize + spacing <= canvas1.height) {
    while (x1 + squareSize + spacing <= canvas1.width) {
        canvas1.getContext("2d").fillStyle = "purple";
        canvas1.getContext("2d").fillRect(x1, y1, squareSize, squareSize);
        x1 += squareSize + spacing;
        stars1++;
    }
    x1 = spacing;
    y1 += squareSize + spacing;
}

// Pattern 2 Checkerboard Pattern 
let canvas2 = document.getElementById("pattern2");
let squareSize2 = 20;
let spacing2 = 10;
let stars2 = 0;

for (let y2 = 0; y2 < canvas2.height; y2 += squareSize2 + spacing2) {
    for (let x2 = 0; x2 < canvas2.width; x2 += squareSize2 + spacing2) {
        canvas2.getContext("2d").fillStyle = (x2 / (squareSize2 + spacing2) + y2 / (squareSize2 + spacing2)) % 2 === 0 ? "purple" : "black";
        canvas2.getContext("2d").fillRect(x2, y2, squareSize2, squareSize2);
        stars2++;
    }
}

// Display
console.log("Total stars in Pattern 1: " + stars1);
console.log("Total stars in Pattern 2: " + stars2);
