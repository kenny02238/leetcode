/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let pt1 = 0,
    pt2 = numbers.length - 1;
  while (numbers[pt1] + numbers[pt2] !== target) {
    if (numbers[pt1] + numbers[pt2] > target) {
      pt2--;
    } else {
      pt1++;
    }
    if (pt2 < 0 || pt1 >= numbers.length) break;
  }
  return [pt1 + 1, pt2 + 1];
};

// link: https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
// 解題思路：
// 1. 雙指針
// 2. 一個指向頭，一個指向尾
// 3. 如果兩個指針指向的數字相加大於目標值，則尾指針往前移一格（因為題目已經給定是排序過的數組，所以尾指針往前移一格，相加的數字會變小）
// 4. 如果兩個指針指向的數字相加小於目標值，則頭指針往後移一格
// 5. 如果兩個指針指向的數字相加等於目標值，則回傳兩個指針的位置
// 6. 如果尾指針小於0或頭指針大於等於數組長度，則跳出迴圈
