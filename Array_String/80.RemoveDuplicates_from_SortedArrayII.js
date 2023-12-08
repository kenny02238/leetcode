/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let counter = 1,
    leftPt = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[leftPt]) {
      if (counter < 2) {
        counter += 1;
        nums[++leftPt] = nums[i];
      }
    } else {
      counter = 1;
      nums[++leftPt] = nums[i];
    }
  }
  return leftPt + 1;
};

// link: https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/
// 解題思路：
// 1. 宣告一個counter，用來計算相同的值出現次數
// 2. 宣告一個leftPt，用來指向nums陣列的頭
// 3. 用for迴圈去跑nums陣列，從1開始
// 4. 如果nums[i]等於nums[leftPt]，則counter+1，並判斷counter是否小於2
// 5. 如果counter小於2，則將nums[i]的值放到nums[++leftPt]的位置上
// 6. 如果nums[i]不等於nums[leftPt]，則將counter設為1，並將nums[i]的值放到nums[++leftPt]的位置上
// 7. 重複3~6直到迴圈結束
// 8. 回傳leftPt+1
