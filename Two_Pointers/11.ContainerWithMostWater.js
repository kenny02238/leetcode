/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let pt1 = 0,
    pt2 = height.length - 1,
    maximum = 0;
  while (pt1 < pt2) {
    let temp = Math.min(height[pt1], height[pt2]) * (pt2 - pt1);
    if (temp > maximum) {
      maximum = temp;
    }
    if (height[pt1] < height[pt2]) {
      pt1++;
    } else {
      pt2--;
    }
  }
  return maximum;
};

// link: https://leetcode.com/problems/container-with-most-water/
// 解題思路：
// 1. 雙指針，一個指向頭，一個指向尾
// 2. 每一次都計算兩個指針指向的數字的最小值，並且乘上兩個指針的距離，得到面積
//    因為題目要裝水所以必須取得兩個指針位置的最小值，才能確保裝水的量
// 3. 兩個指針中，較小的那個往內移一格，因為如果較大的那個往內移一格，面積只會變小
