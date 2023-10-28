let canvas = document.getElementById("c1");
let painter = canvas.getContext("2d");
let big = 10;
let small = 4;
let w = 400;
let h = 400;

// Create a checkerboard pattern with large squares
for (let r = 0; r < 400 / big; ++r) {
  for (let c = 0; c < 400 / big; ++c) {
    if ((r + c) % 2 === 0) {
      painter.fillStyle = "#888888";
    } else {
      painter.fillStyle = "#555555";
    }
    painter.fillRect(c * big, r * big, big, big);
  }
}

// Overlay a pattern of smaller squares in the center of each large square
for (let r = 0; r < 400 / big - 1; ++r) {
  for (let c = 0; c < 400 / big; ++c) {
    if ((r + c) % 2 === 0) {
      painter.fillStyle = "#000000";
    } else {
      painter.fillStyle = "#FFFFFF";
    }
    
    // Check if the current position is within the center of the large square
    if (r >= (1 / 4) * (400 / big) && r < (3 / 4) * (400 / big) && c >= (1 / 4) * (400 / big) && c < (3 / 4) * (400 / big)) {
      if (painter.fillStyle === "#000000") {
        painter.fillStyle = "#FFFFFF";
      } else {
        painter.fillStyle = "#000000";
      }
    }
    
    painter.fillRect(c * big + big - small / 2, r * big + big - small / 2, small, small);
  }
}
