/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  if (!nums.length) return [];
  const reverse = function (left, right) {
    while (left < right) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
      right--;
    }
  };
  k %= nums.length;
  reverse(0, nums.length - 1);
  reverse(0, k - 1);
  reverse(k, nums.length - 1);
};

// link: https://leetcode.com/problems/rotate-array/
// 解題思路：
// 1. 這題的關鍵在於要用in-place的方式去解
// 2. 用reverse的方式去解
// 3. 先把整個array reverse
// 4. 再把前k個reverse，因為k有可能傳進來一個大於nums.length的數字，所以要先取餘數才會知道要交換幾次
// 5. 最後把後面的reverse
