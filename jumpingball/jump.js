let canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d");

let squareSize = 50;
let squareX = canvas.width / 2 - squareSize / 2;
let squareY = canvas.height - squareSize;
let jumpHeight = 100;
let speed = 5;

let leftPressed = false;
let rightPressed = false;
let upPressed = false;

document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

function keyDownHandler(e) {
  if (e.key === "Left" || e.key === "ArrowLeft") {
    leftPressed = true;
  } else if (e.key === "Right" || e.key === "ArrowRight") {
    rightPressed = true;
  } else if (e.key === "Up" || e.key === "ArrowUp") {
    upPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.key === "Left" || e.key === "ArrowLeft") {
    leftPressed = false;
  } else if (e.key === "Right" || e.key === "ArrowRight") {
    rightPressed = false;
  } else if (e.key === "Up" || e.key === "ArrowUp") {
    upPressed = false;
  }
}

function drawSquare() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(squareX, squareY, squareSize, squareSize);
}

function updateSquare() {
  if (leftPressed && squareX > 0) {
    squareX -= speed;
  }

  if (rightPressed && squareX < canvas.width - squareSize) {
    squareX += speed;
  }

  if (upPressed && squareY > canvas.height - squareSize - jumpHeight) {
    squareY -= speed;
  } else if (squareY < canvas.height - squareSize) {
    squareY += speed;
  }
}

function gameLoop() {
  updateSquare();
  drawSquare();
  requestAnimationFrame(gameLoop);
}

gameLoop();
