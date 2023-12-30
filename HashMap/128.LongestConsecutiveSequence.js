/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const numsSet = new Set(nums);
  let max = 0;
  for (let num of numsSet) {
    if (numsSet.has(num - 1)) continue;
    let temp = 1;
    let currNum = num;
    while (numsSet.has(currNum + 1)) {
      currNum++;
      temp++;
    }
    max = Math.max(max, temp);
  }
  return max;
};

// link: https://leetcode.com/problems/longest-consecutive-sequence/
// 解題思路：
// 1. 建立一個set，將nums放入set中
// 2. 遍歷set，如果set中有num-1，則跳過，因為這個num-1會被包含在另一個連續序列中
//    我們必須找到一個連續序列的最小值才去計算，因為如果是最小值，則不會有num-1
// 3. 當找到最小值我們則開始判斷是否有num+1，如果有則繼續往下找，直到找不到為止
//    利用temp去記錄連續序列的長度，並且判斷是否有比max大的，如果有則更新max
// 4. 因為for裡面的while判斷的num+1絕對是包含在題目的nums中
//    且我們有去跳過num-1存在的問題，所以我們的時間複雜度為O(n)
//    即便看起來有兩個迴圈
