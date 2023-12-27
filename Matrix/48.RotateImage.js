/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let n = matrix.length;

  for (let i = 0; i < Math.floor(n / 2); i++) {
    for (let j = i; j < n - i - 1; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[n - j - 1][i];
      matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1];
      matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1];
      matrix[j][n - i - 1] = temp;
    }
  }
};

// link: https://leetcode.com/problems/rotate-image/
// 解題思路：
// 1. 我們先找出從外到內每次需要轉換的層數
//    假設是5*5的矩陣，那我們需要轉換的層數是2(5*5轉換一次，3*3轉換一次)，最裡面那層是一個點，不用轉換
//    假設是6*6的矩陣，那我們需要轉換的層數是2(6*6轉換一次，4*4轉換一次)
//    我們可以得知外側for迴圈的次數是Math.floor(n / 2)
// 2. 接著我們找出每一層需要轉換的點有多少個
//    假設是5*5的矩陣，那我們需要轉換的次數是4
//    轉換完畢後內側的3*3矩陣需要轉換的次數是2
//    我們可以得知內側for迴圈的次數是n - i - 1

// 3. 轉換方式可參考 https://leetcode.cn/problems/rotate-image/solutions/526980/xuan-zhuan-tu-xiang-by-leetcode-solution-vu3m/
