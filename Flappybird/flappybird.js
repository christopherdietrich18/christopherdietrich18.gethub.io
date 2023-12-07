document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("flappyBirdCanvas");
    const ctx = canvas.getContext("2d");
  
    // Bird properties
    let bird = {
      x: 50,
      y: canvas.height / 2 - 15,
      width: 30,
      height: 30,
      color: "#000",  // Black bird
      velocity: 0,
      gravity: 0.5,
      jumpStrength: 8  // Bigger jumps
    };
  
    // Pipe properties
    let pipes = [];
    let pipeWidth = 50;
    let pipeGap = 150;  // Wider gap
    let pipeSpeed = 2;
    let score = 0;
    let gameSpeed = pipeSpeed;
  
    function drawBird() {
      ctx.fillStyle = bird.color;
      ctx.fillRect(bird.x, bird.y, bird.width, bird.height);
    }
  
    function drawPipes() {
      ctx.fillStyle = "#800080";  // Purple pipes
      for (let pipe of pipes) {
        ctx.fillRect(pipe.x, 0, pipe.width, pipe.topHeight);
        ctx.fillRect(pipe.x, pipe.bottomY, pipe.width, pipe.bottomHeight);
      }
    }
  
    function drawScore() {
      ctx.fillStyle = "#000";
      ctx.font = "20px Arial";
      ctx.fillText("Score: " + score, 10, 30);
    }
  
    function update() {
      bird.velocity += bird.gravity;
      bird.y += bird.velocity;
  
      if (bird.y < 0) {
        bird.y = 0;
        bird.velocity = 0;
      }
  
      if (bird.y + bird.height > canvas.height) {
        gameOver();
      }
  
      if (pipes.length === 0 || pipes[pipes.length - 1].x <= canvas.width - 200) {
        createPipe();
      }
  
      for (let pipe of pipes) {
        pipe.x -= gameSpeed;
  
        if (
          bird.x < pipe.x + pipe.width &&
          bird.x + bird.width > pipe.x &&
          (bird.y < pipe.topHeight || bird.y + bird.height > pipe.bottomY)
        ) {
          gameOver();
        }
  
        if (pipe.x + pipe.width < 0) {
          pipes.shift();
          score++;
  
          // Speed up the game every 10 scored
          if (score % 10 === 0) {
            gameSpeed += 0.5;
          }
        }
      }
    }
  
    function createPipe() {
      let topHeight = Math.random() * (canvas.height - pipeGap * 2) + pipeGap;
      let bottomY = topHeight + pipeGap;
      let bottomHeight = canvas.height - bottomY;
      pipes.push({ x: canvas.width, width: pipeWidth, topHeight, bottomY, bottomHeight });
    }
  
    function gameOver() {
      alert("Game Over! Your score is: " + score);
      resetGame();
    }
  
    function resetGame() {
      bird.y = canvas.height / 2 - 15;
      bird.velocity = 0;
      pipes.length = 0;
      score = 0;
      gameSpeed = pipeSpeed;
    }
  
    function gameLoop() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawBird();
      drawPipes();
      drawScore();
      update();
      requestAnimationFrame(gameLoop);
    }
  
    document.addEventListener("keydown", function (event) {
      if (event.code === "Space") {
        if (pipes.length === 0) {
          gameLoop();
        }
        bird.velocity = -bird.jumpStrength;
      }
    });
  });
  