/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  let cols = new Array(9).fill(0).map(() => new Array(9).fill(0));
  let rows = new Array(9).fill(0).map(() => new Array(9).fill(0));
  let boxs = new Array(3)
    .fill(0)
    .map(() => new Array(3).fill(0).map(() => new Array(9).fill(0)));
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let ceil = board[i][j];
      if (ceil !== ".") {
        let numsIndex = ceil.charCodeAt() - "0".charCodeAt() - 1;
        rows[i][numsIndex]++;
        cols[j][numsIndex]++;
        boxs[Math.floor(i / 3)][Math.floor(j / 3)][numsIndex]++;
        if (
          rows[i][numsIndex] > 1 ||
          cols[j][numsIndex] > 1 ||
          boxs[Math.floor(i / 3)][Math.floor(j / 3)][numsIndex] > 1
        )
          return false;
      }
    }
  }
  return true;
};

// link: https://leetcode.com/problems/valid-sudoku/
// 解題思路：
// 1. 建立三個二維陣列，分別代表列、行、九宮格，每格都寫入0
// 2. 九宮格的二維陣列儲存方式為，
//    左上的九宮格為[0][0]，中上的九宮格為[0][1]，右上的九宮格為[0][2]，
//    左中的九宮格為[1][0]，中中的九宮格為[1][1]，右中的九宮格為[1][2]，
//    左下的九宮格為[2][0]，中下的九宮格為[2][1]，右下的九宮格為[2][2]，
//    每個九宮格內部又是儲存一個長度為9的陣列，用來儲存該九宮格內的數字
// 3. rows陣列就是儲存九列的數字，cols陣列就是儲存九行的數字
// 4. 從左到右、從上到下，一格一格的檢查，如果該格不是"."，則將該格的數字轉換成數字，並且將該數字的索引值+1
//    我們透過每個陣列中的索引來紀錄該數字出現的次數，如果該數字出現第二次，則會大於1
// 5. 檢查該數字的索引值在rows、cols、boxs中是否有重複，如果有重複(也就是大於1表示出現第二次)，則回傳false
