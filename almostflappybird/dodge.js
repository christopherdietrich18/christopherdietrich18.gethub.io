let canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d");

let squareSize = 25;
let squareX = canvas.width / 5;
let squareY = canvas.height - squareSize;
let jumpHeight = 100;
let speed = 5;

let leftPressed = false;
let rightPressed = false;
let upPressed = false;

let obstacles = [
  { x: canvas.width, y: canvas.height - 10, width: 35, height: 45 },
  { x: canvas.width + 150, y: canvas.height - 50, width: 35, height: 60 },
  { x: canvas.width + 300, y: canvas.height - 40, width: 35, height: 75 }
];

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

function drawBackground() {
  // Sky
  ctx.fillStyle = "#87CEEB";
  ctx.fillRect(0, 0, canvas.width, canvas.height / 2);
  // Ground
  ctx.fillStyle = "#32CD32";
  ctx.fillRect(0, canvas.height / 2, canvas.width, canvas.height / 2);
}

function drawSquare() {
  ctx.fillStyle = "#BF40BF";
  ctx.fillRect(squareX, squareY, squareSize, squareSize);
}

function drawObstacles() {
  ctx.fillStyle = "#0000FF";
  for (let obstacle of obstacles) {
    ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
  }
}

function updateObstacles() {
  for (let i = 0; i < obstacles.length; i++) {
    obstacles[i].x -= speed;
    if (obstacles[i].x + obstacles[i].width < 0) {
      // If obstacle goes outside from the left, re-enter from the right
      obstacles[i].x = canvas.width + Math.random() * 100;
      obstacles[i].y = canvas.height - Math.random() * 75;
      // Bonus: Make the distance and height random for the re-entered obstacle
      if (i > 0) {
        obstacles[i].x += Math.random() * 100;
      }
      obstacles[i].height = 75 + Math.random() * 50;
    }
  }
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
  drawBackground();
  updateObstacles();
  drawObstacles();
  updateSquare();
  drawSquare();
}

setInterval(gameLoop, 20); // 20 milliseconds interval for smoother animation