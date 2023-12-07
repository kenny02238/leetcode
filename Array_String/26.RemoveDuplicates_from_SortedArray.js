/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let pointer = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[pointer] !== nums[i]) {
      nums[pointer + 1] = nums[i];
      pointer += 1;
    }
  }
  return pointer + 1;
};

// link: https://leetcode.com/problems/remove-duplicates-from-sorted-array/
// 解題思路：
// 1. 宣告一個pointer，用來記錄不重複的值的位置
// 2. 用for迴圈跑nums陣列
// 3. 如果nums[pointer]不等於nums[i]，則將nums[i]的值放到nums[pointer+1]的位置上，並將pointer+1
// 4. 重複2~3直到迴圈結束
// 5. 回傳pointer+1
