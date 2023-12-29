/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

//  Rule 1: If the number of living cells among the eight adjacent positions of a living cell is less than two, the living cell dies. In this case, the cell value is changed to -1, indicating that the cell was alive but is now dead.

// Rule 2: If there are two or three living cells among the eight adjacent positions of a living cell, the living cell continues to survive. In this case, the cell value remains 1.

// Rule 3: If there are more than three living cells among the eight adjacent positions of a living cell, the living cell dies. In this case, the cell value is changed to -1, indicating that the cell was alive but is now dead. It can be observed that the initial and final states of the cell are consistent under Rules 1 and 3, so their composite states are also consistent.

// Rule 4: If there are exactly three living cells among the eight adjacent positions of a dead cell, the dead cell comes back to life. In this case, the cell value is changed to 2, indicating that the cell was dead but is now alive.
const xdx = [0, 1, 0, -1, -1, -1, 1, 1];
const ydx = [1, 0, -1, 0, 1, -1, 1, -1];

var gameOfLife = function (board) {
  let rowsL = board[0].length;
  let colsL = board.length;
  for (let i = 0; i < rowsL; i++) {
    for (let j = 0; j < colsL; j++) {
      let count = countLiveCeils(j, i, board);
      if ((board[j][i] == 1 && count < 2) || (board[j][i] == 1 && count > 3))
        board[j][i] = -1;
      if (board[j][i] == 0 && count == 3) board[j][i] = 2;
    }
  }
  for (let i = 0; i < rowsL; i++) {
    for (let j = 0; j < colsL; j++) {
      if (board[j][i] > 0) board[j][i] = 1;
      if (board[j][i] <= 0) board[j][i] = 0;
    }
  }
};

let countLiveCeils = function (x, y, board) {
  let liveCount = 0;
  for (let i = 0; i < 8; i++) {
    if (
      x + xdx[i] < 0 ||
      y + ydx[i] < 0 ||
      x + xdx[i] > board.length - 1 ||
      y + ydx[i] > board[0].length - 1
    ) {
      continue;
    } else if (
      board[x + xdx[i]][y + ydx[i]] == 1 ||
      board[x + xdx[i]][y + ydx[i]] == -1
    ) {
      liveCount++;
    }
  }
  return liveCount;
};

// link: https://leetcode.com/problems/game-of-life/
// 解題思路：
// 1. 題目規定為若是活著的細胞，其周圍活著的細胞數量小於2或大於3，則該細胞死亡
// 2. 題目規定為若是死亡的細胞，其周圍活著的細胞數量等於3，則該細胞復活
// 3. 解題有個重點是不能因為更改後的值影響到其他細胞的判斷，所以我們可以將更改後的值先記錄起來，最後再一次性更改
// 4. 我們使用的方法是若測試完後需要更動，依照以下原則更動
//    4.1. 若是活著的細胞，其周圍活著的細胞數量小於2或大於3，則該細胞死亡，我們將其更動為-1
//    4.2. 若是死亡的細胞，其周圍活著的細胞數量等於3，則該細胞復活，我們將其更動為2
// 5. 這樣我們每次判斷細胞的時候就會知道假設他為-1，代表他原本是活著的，但是因為周圍活著的細胞數量小於2或大於3，所以死亡
//    所以我們要視他為活著的細胞，因為他是經過判斷後死亡的。
//    反之則亦然，若是2，代表他原本是死亡的，我們在判斷時要視他為死亡的細胞，因為他是經過判斷後復活的。
// 6. 最後再歷遍一次，將-1改為0，將2改為1，就完成了。
