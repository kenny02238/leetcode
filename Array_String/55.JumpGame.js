/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let maxCover = 0;
  for (let i = 0; i <= maxCover; i++) {
    maxCover = Math.max(maxCover, nums[i] + i);
    if (maxCover >= nums.length - 1) return true;
  }
  return false;
};

// link: https://leetcode.com/problems/jump-game/
// 解題思路：
// 1. 用一個變數maxCover來紀錄最大能跳到的位置
// 2. 此題的重點是只要判斷最大能跳到的位置是否大於等於終點(陣列長度-1)即可
// 3. 因此for迴圈的停止條件為i <= maxCover，依據每一個點可以走到得最遠範圍來更新maxCover
