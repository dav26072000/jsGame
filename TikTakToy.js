let board = makeBoard(5);

let x = 0;
let y = 0;
let turn = true;
let end = board.length * board.length;
let start = 0;
// Make board And Start game ===================================================
function makeBoard(size) {
  let board = new Array(size);
  let row = new Array(size);

  for (let i = 0; i < board.length; i++) {
    board[i] = [];
    for (let j = 0; j < row.length; j++) {
      board[i].push("_");
    }
  }
  return board;
}
theGame();
// =============================================================================

// Print board
function printBoard(gameBoard) {
  let str = "";
  for (let i = 0; i < gameBoard.length; i++) {
    str += gameBoard[i].join("    ") + "\n";
  }
  console.log(str);
}

// console.log(
//   gameBoard[0].join("   ") +
//     "\n" +
//     gameBoard[1].join("   ") +
//     "\n" +
//     gameBoard[2].join("   ") +
//     "\n"
// );

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

// START GAME

function theGame() {
  x = Math.floor(Math.random() * board.length);
  y = Math.floor(Math.random() * board.length);
  if (start !== end) {
    if (board[x][y] === "_") {
      if (turn) {
        board[x][y] = "X";
        turn = false;
        start++;
        printBoard(board);
        if (checkIfWin(board)) {
          console.log(checkIfWin(board));
          return;
        }
        theGame();
      } else {
        board[x][y] = "O";
        turn = true;
        start++;
        printBoard(board);
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
    printBoard(board);
    if (!checkIfWin(board)) {
      console.log("Draw");
      return "Draw";
    } else {
      console.log(checkIfWin(board));
    }
  }
}

// let isGameFinished = false;

// while (!isGameFinished) {
//   let x = Math.random() * 2;
//   let y = Math.random() * 2;

//   while (board[x][y] !== "_") {
//     x = Math.random() * 2;
//     y = Math.random() * 2;
//   }

//   board[x][y] = "x";
//   checkGameStatus(board);
// }
