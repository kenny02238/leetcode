/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let pt1 = 0,
    pt2 = 0;
  let ans = 0,
    sum = 0;
  while (pt2 < nums.length) {
    sum += nums[pt2];
    while (sum >= target) {
      ans = ans === 0 ? pt2 - pt1 + 1 : Math.min(ans, pt2 - pt1 + 1);
      sum -= nums[pt1];
      pt1++;
    }
    pt2++;
  }
  return ans;
};

// link: https://leetcode.com/problems/minimum-size-subarray-sum/
// 解題思路：
// 1. 我們使用兩個指針，兩個都指向陣列的第一個位置
// 2. 透過sliding window的方式去找到最小的subarray
// 3. 我們將pt2往右邊移動直到滿足題目的條件，也就是sum >= target
// 4. 此時我們將長度記錄下賴，然後開始利用pt1往pt2的方向內縮整個subarray直到 sum < target
// 5. 這時候再繼續移動pt2，將整個subarray擴張，透果此種sliding window的方式，我們可以找到最小的subarray
