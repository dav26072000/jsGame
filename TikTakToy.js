let board = [
  ["_", "_", "_"],
  ["_", "_", "_"],
  ["_", "_", "_"],
];

let x = 0;
let y = 0;
let turn = true;
let end = 9;
let start = 0;

function theGame() {
  x = Math.floor(Math.random() * 3);
  y = Math.floor(Math.random() * 3);
  if (start !== end) {
    if (board[x][y] === "_") {
      if (turn) {
        board[x][y] = "X";
        turn = false;
        start++;
        printBoard();
        if (checkIfWin(board)) {
          console.log(checkIfWin(board));
          return;
        }
        theGame();
      } else {
        board[x][y] = "O";
        turn = true;
        start++;
        printBoard();
        if (checkIfWin(board)) {
          console.log(checkIfWin(board));
          return;
        }
        theGame();
      }
    } else {
      theGame();
    }
  } else {
    printBoard();
    if (!checkIfWin(board)) {
      return "Draw";
    } else {
      console.log(checkIfWin(board));
    }
  }
}
theGame();

// Print board
function printBoard() {
  console.log(
    board[0].join("   ") +
      "\n" +
      board[1].join("   ") +
      "\n" +
      board[2].join("   ") +
      "\n"
  );
}

// CHECK IF SOMEONE WIN

function checkIfWin(gameBoard) {
  let arr = [];
  let winner;
  for (const item of gameBoard) {
    arr.push(
      item.every((element, i, arr) => element === arr[0] && element !== "_")
    );
  }
  if (arr.includes(true)) {
    winner = gameBoard[arr.indexOf(true)][0];
  }
  arr = [];
  let res = [];
  if (!winner) {
    for (let i = 0; i < gameBoard.length; i++) {
      let element = [];
      for (let j = 0; j < gameBoard.length; j++) {
        element.push(gameBoard[j][i]);
      }
      arr.push(element);
    }
    for (const group of arr) {
      if (group.every((item, i, arr) => item === arr[0] && arr[0] !== "_")) {
        res.push(true);
      } else {
        res.push(false);
      }
    }
    arr = res;
    if (arr.includes(true)) {
      winner = gameBoard[0][arr.indexOf(true)];
    }
  }
  arr = [];
  let diagonal1 = [];
  let diagonal2 = [];
  if (!winner) {
    for (let i = 0; i < gameBoard.length; i++) {
      diagonal1.push(gameBoard[i][i]);
      diagonal2.push(gameBoard[i][gameBoard.length - i - 1]);
    }
    if (diagonal1.every((item, i, arr) => item === arr[0] && item !== "_")) {
      winner = gameBoard[0][0];
    } else if (
      diagonal2.every((item, i, arr) => item === arr[0] && item !== "_")
    ) {
      winner = gameBoard[0][gameBoard.length - 1];
    }
  }
  return winner ? winner : false;
}
