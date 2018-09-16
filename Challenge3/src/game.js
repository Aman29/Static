/*jshint esversion: 6 */

'use-strict';

let placeNew = (board) => {
  let new_tile = Math.random() < 0.9 ? 2 : 4;
  let tiles = [];
  let availableTiles = function () {
    board.forEach(function(row, x_index) {
      board.forEach(function(column, y_index){
        if (! board[x_index][y_index]) {
          tiles.push({x_index : x_index, y_index: y_index});
        }
      });
    });
  };
  availableTiles();

  if (tiles.length === 0) {
    return -1;
  }
  else {
    let random_tile = [];
    let randomAvailableTile = function () {
      random_tile = tiles[Math.floor(Math.random() * tiles.length)];
      board[random_tile.x_index][random_tile.y_index] = new_tile;
      return board;
    };
    return randomAvailableTile();
  }
};

export default placeNew;
