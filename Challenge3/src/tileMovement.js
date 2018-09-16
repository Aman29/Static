/*jshint esversion: 6 */

'use-strict';

let swipe = (board, direction) => {

  // For UP and DOWN movement of tile.
  let moveTileVertical = function() {
    for (let increment = 0; increment < board.length; increment++) {
      for (let row = 0; row < board.length; row++) {
        for (let column = increment; column == increment; column++) {
          let next_index = (row + 1) >= board.length ? row : (row+1);
          if (0 !== board[row][column]) {
            if (0 == board[row][next_index]) {
              next_index = (row + 2) >= board.length ? row : (row+2);
              if (0 == board[row][next_index]) {
                next_index = (row + 3) >= board.length ? row : (row+3);
                mergingVertical(row, column, next_index);
              } else {
                mergingVertical(row, column, next_index);
              }
            } else {
              mergingVertical(row, column, next_index);
            }
          }
        }
      }
      arrangeTilesVertical();
    }
    return board;
  };

  let arrangeTilesVertical =  function () {
    for (let increment = 0; increment < board.length; increment++) {
      for (let row = 0; row < board.length; row++) {
        for (let column = increment; column == increment; column++) {
          let next_index = (row + 1) >= board.length ? row : (row+1);
          if (0 === board[row][column]) {
            if (0 !== board[next_index][column]) {
              board[row][column] = board[next_index][column];
              board[next_index][column] = 0;
            }
          }
        }
      }
    }
  };

  let mergingVertical = (row, column, next_index) => {
    if (row !== next_index) {
      if (board[row][column] === board[next_index][column]) {
        board[row][column] = board[row][column] * 2;
        board[next_index][column] = 0;

      }
    }
  };

  // For LEFT and RIGHT movement of the tile.
  let moveTileHorizontal = function() {
    for (let increment = 0; increment < board.length; increment++) {
      for (let row = increment; row == increment; row++) {
        for (let column = 0; column < board.length; column++) {
          let next_index = (column + 1) >= board.length ? column : (column+1);
          if (0 !== board[row][column]) {
            if (0 == board[row][next_index]) {
              next_index = (column + 2) >= board.length ? column : (column+2);
              if (0 == board[row][next_index]) {
                next_index = (column + 3) >= board.length ? column : (column+3);
                mergingHorizontal(row, column, next_index);
              } else {
                mergingHorizontal(row, column, next_index);
              }
            } else {
              mergingHorizontal(row, column, next_index);
            }
          }
        }
      }
      arrangeTilesHorizontal();
    }
    return board;
  };

  let mergingHorizontal = (row, column, next_index) => {
    if (column !== next_index) {
      if (board[row][column] === board[row][next_index]) {
        board[row][column] = board[row][column] * 2;
        board[row][next_index] = 0;

      }
    }
  };

  let arrangeTilesHorizontal =  function () {
    for (let increment = 0; increment < board.length; increment++) {
      for (let row = increment; row == increment; row++) {
        for (let column = 0; column < board.length; column++) {
          let next_index = (column + 1) >= board.length ? column : (column+1);
          if (0 === board[row][column]) {
            if (0 !== board[row][next_index]) {
              board[row][column] = board[row][next_index];
              board[row][next_index] = 0;
            }
          }
        }
      }
    }
  };

  if ("UP" === direction) {
    let afterUpMove = moveTileVertical();
    return afterUpMove;
  } else if ("DOWN" === direction) {
    board.reverse();
    let afterDownMove = moveTileVertical();
    return afterDownMove.reverse();
  } else if ("LEFT" === direction) {
    let afterLeftMove = moveTileHorizontal();
    return afterLeftMove;
  } else if ("RIGHT" === direction) {
    board.forEach(function (row) {
      row.reverse();
    });
    let afterRightMove = moveTileHorizontal();
    afterRightMove.forEach(function (row) {
      row.reverse();
    })
    return afterRightMove;
  }

};

export default swipe;
