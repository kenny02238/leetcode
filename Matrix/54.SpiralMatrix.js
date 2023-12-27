/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let ans = [];
  let colsL = 0,
    colsR = matrix[0].length - 1;
  let rowsT = 0,
    rowsB = matrix.length - 1;

  while (rowsT <= rowsB && colsL <= colsR) {
    // Traverse from left to right
    for (let pt = colsL; pt <= colsR; pt++) {
      ans.push(matrix[rowsT][pt]);
    }
    rowsT++;

    // Traverse from top to bottom
    for (let pt = rowsT; pt <= rowsB; pt++) {
      ans.push(matrix[pt][colsR]);
    }
    colsR--;

    // Traverse from right to left
    if (rowsT <= rowsB) {
      for (let pt = colsR; pt >= colsL; pt--) {
        ans.push(matrix[rowsB][pt]);
      }
      rowsB--;
    }

    // Traverse from bottom to top
    if (colsL <= colsR) {
      for (let pt = rowsB; pt >= rowsT; pt--) {
        ans.push(matrix[pt][colsL]);
      }
      colsL++;
    }
  }

  return ans;
};

// link: https://leetcode.com/problems/spiral-matrix/
// 解題思路：
// 1. 用四個變數來記錄上下左右的邊界
// 2. 用while迴圈來判斷是否超過邊界
// 3. 從右到左以及從下到上為什麼需要多一次if判斷呢?
//    因為我們在從左到右以及從上到下的時候，已經把邊界往內縮了一格
//    所以在從右到左以及從下到上的時候，需要判斷是否超過邊界
//    至於為什麼從右邊到左邊是要判斷rowsT <= rowsB
//    而從下到上是要判斷colsL <= colsR
//    是因為我們要確定從右到左以及從下到上的時候，還有足夠的空間可以走
//    架設你今天要走一個從右邊到左邊但卻發現rowsT > rowsB
//    那表示你已經走到最上面了，就不用繼續走了
