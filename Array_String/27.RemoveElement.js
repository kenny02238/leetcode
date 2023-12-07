// -------第一種想法-------

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let startP = 0,
    lastP = nums.length - 1;
  if (!nums.length) return 0;
  while (startP <= lastP) {
    if (nums[lastP] === val) {
      lastP -= 1;
      continue;
    }
    if (nums[startP] === val) {
      let temp = nums[startP];
      nums[startP] = nums[lastP];
      nums[lastP] = temp;
    }
    startP += 1;
  }
  return startP;
};
// 解題思路：
// 1. 先判斷nums是否為空，如果是則回傳0
// 2. 宣告兩個指標，分別指向陣列的頭跟尾
// 3. 如果尾指標的值等於val，則尾指標往前移一位
// 4. 如果頭指標的值等於val，則將頭指標的值與尾指標的值互換
// 5. 頭指標往後移一位
// 6. 重複3~5直到頭指標大於尾指標
// 7. 回傳頭指標

// -------第二種想法-------

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let counter = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[counter] = nums[i];
      counter++;
    }
  }
  return counter;
};
// link: https://leetcode.com/problems/remove-element/
// 解題思路：
// 1. 宣告一個counter，用來計算不等於val的值
// 2. 用for迴圈去跑nums陣列
// 3. 如果nums[i]不等於val，則將nums[i]的值放到nums[counter]的位置上，並將counter+1
// 4. 重複2~3直到迴圈結束
// 5. 回傳counter
