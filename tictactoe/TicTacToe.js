let currentPlayer = 'X';
let gameBoard = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

function checkWinner() {
  for (let i = 0; i < 3; i++) {
    if (gameBoard[i][0] === currentPlayer && gameBoard[i][1] === currentPlayer && gameBoard[i][2] === currentPlayer) {
      return true;
    }
  }

  for (let i = 0; i < 3; i++) {
    if (gameBoard[0][i] === currentPlayer && gameBoard[1][i] === currentPlayer && gameBoard[2][i] === currentPlayer) {
      return true;
    }
  }

  if (gameBoard[0][0] === currentPlayer && gameBoard[1][1] === currentPlayer && gameBoard[2][2] === currentPlayer) {
    return true;
  }
  if (gameBoard[0][2] === currentPlayer && gameBoard[1][1] === currentPlayer && gameBoard[2][0] === currentPlayer) {
    return true;
  }

  return false;
}

function checkTie() {
  for (let row of gameBoard) {
    if (row.includes('') || !row.includes('X') || !row.includes('O')) {
      return false;
    }
  }
  return true;
}

function handleClick(row, col) {
  if (gameBoard[row][col] === '' && !checkWinner() && !checkTie()) {
    gameBoard[row][col] = currentPlayer;
    updateBoard();
    if (checkWinner()) {
      document.getElementById('message').innerHTML = `Player ${currentPlayer} wins!`;
    } else if (checkTie()) {
      document.getElementById('message').innerHTML = "It's a tie!";
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

function updateBoard() {
  const board = document.getElementById('board');
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      const cell = board.children[row * 3 + col];
      cell.innerHTML = gameBoard[row][col];
    }
  }
}
