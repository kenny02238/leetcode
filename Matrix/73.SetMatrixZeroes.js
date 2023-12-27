/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let rowsL = matrix[0].length;
  let colsL = matrix.length;
  let firstCol0 = false;
  for (let i = 0; i < colsL; i++) {
    if (matrix[i][0] === 0) {
      firstCol0 = true;
    }
    for (let j = 1; j < rowsL; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = matrix[0][j] = 0;
      }
    }
  }
  for (let i = colsL - 1; i >= 0; i--) {
    for (let j = 1; j < rowsL; j++) {
      if (matrix[0][j] === 0 || matrix[i][0] === 0) {
        matrix[i][j] = 0;
      }
    }
    if (firstCol0) {
      matrix[i][0] = 0;
    }
  }
};

// link: https://leetcode.com/problems/set-matrix-zeroes/
// 解題思路：
// 1. 這題比較tricky一點，因為如果你逐一處理0的話，你就無從判斷這個0是否是原本就存在的0
//    所以我們拿最左側的col來當一個參考點，等於每次判斷都是從第二個col開始
//    將第一個col獨立處理
// 2. 因此我們透過一個flag來記錄是否第一個col裡面有0，其餘的處理就是從上到下依序判斷是否為0
//    若有判斷到0就將同一row的第一個col和同一col的第一個row設為0
//    又因為我們把第一個col獨立處理，並且是從上到下處理所以不會有重複處理到我們後來才設定的0的問題
// 3. 最後我們從最後一個row開始往上檢查，如果同一行或是同一列有0，就將該元素設為0
//    要記得我們的第一個col是獨立處理的，所以要另外依照flag來判斷是否要將第一個col設為0
// 總結： 我們第一次先找出原本就存在的0，將他的同一行跟同一列的第一個元素設為0
//       我們再從後面開始依照我們第一輪的處理來判斷是否要將該元素設為0
//       然後將最左側的col獨立處理，依照flag的boolean值來判斷是否要將第一個col設為0
