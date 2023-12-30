/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  let [newL, newR] = newInterval;
  let lArr = [],
    rArr = [];
  for (let i of intervals) {
    const [L, R] = i;
    if (R < newL) lArr.push(i);
    else if (L > newR) rArr.push(i);
    else {
      newL = Math.min(newL, L);
      newR = Math.max(newR, R);
    }
  }
  return [...lArr, [newL, newR], ...rArr];
};

// link: https://leetcode.com/problems/insert-interval/
// 解題思路：
// 1. 用兩個陣列分別存放左邊和右邊的區間
// 2. 如果右邊的區間小於新區間的左邊，則將該區間放入左邊的陣列
// 3. 如果左邊的區間大於新區間的右邊，則將該區間放入右邊的陣列
// 4. 如果左右條件都不符合，則將新區間的左邊取最小值，右邊取最大值
//    代表區間有重疊，所以要取最小值和最大值
// 5. 最後將左邊的區間、新區間、右邊的區間合併回傳
