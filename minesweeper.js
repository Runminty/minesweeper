document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  
};
board.cells = [
    {
      1:'number',
      row:1,
      col:1,
      isMine: 'mine',
      hidden: 'hidden' 
    },
    { 
      2:'number',
      row:1,
      col:2,
      isMine: 'mine',
      hidden: 'hidden' 
    },  
    {
      3:'number',
      row:1,
      col:3,
      isMine: 'mine',
      hidden: 'hidden' 
    },
    {
      4:'number',
      row:2,
      col:1,
      isMine: 'mine',
      hidden: 'hidden' 
    },
    {
      5:'number',
      row:2,
      col:2,
      isMine: 'mine',
      hidden: 'hidden' 
    },
    {
      6:'number',
      row:2,
      col:3,
      isMine: 'mine',
      hidden: 'hidden' 
    },
    {
      7:'number',
      row:3,
      col:1,
      isMine: 'mine',
      hidden: 'hidden' 
      
    },
    {
      8:'number',
      row:3,
      col:2,
      isMine: 'mine',
      hidden: 'hidden' 
    
    },
    {
      9:'number',
      row:3,
      col:3,
      isMine: 'mine',
      hidden: 'hidden' 
    }
    
  ];





function startGame () {
  // Don't remove this function call: it makes the game work!
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
}

