/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  let start = nums[0];
  const ans = [];
  for (let i = 1; i <= nums.length; i++) {
    if (nums[i - 1] + 1 === nums[i]) continue;
    if (start === nums[i - 1]) {
      ans.push(`${start}`);
    } else {
      ans.push(`${start}->${nums[i - 1]}`);
    }
    start = nums[i];
  }
  return ans;
};

// link: https://leetcode.com/problems/summary-ranges/
// 解題思路：
// 1. 建立一個start，紀錄起始值
// 2. 遍歷nums，如果nums[i-1]+1===nums[i]，則跳過
// 3. 如果start === nums[i-1]，則將start放入ans中
// 4. 如果start !== nums[i-1]，則將start和nums[i-1]放入ans中
// 5. 最後將start更新為nums[i]
// 6. 最後回傳ans

// Solution 2:
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  let pt1 = 0,
    pt2 = 0,
    ans = [];
  while (pt2 < nums.length) {
    if (nums[pt2 + 1] == nums[pt2] + 1) {
      pt2++;
      if (pt2 >= nums.length) {
        if (pt2 == pt1) {
          ans.push(`${nums[pt1]}`);
        } else {
          ans.push(`${nums[pt1]}->${nums[pt2 - 1]}`);
        }
      }
    } else {
      if (pt2 == pt1) {
        ans.push(`${nums[pt1]}`);
      } else {
        ans.push(`${nums[pt1]}->${nums[pt2]}`);
      }
      pt1 = pt2 + 1;
      pt2 += 1;
    }
  }
  return ans;
};

// link: https://leetcode.com/problems/summary-ranges/
// 解題思路：
// 1. 建立兩個指針pt1,pt2，都指向nums的第一個元素
// 2. 當nums[pt2+1]==nums[pt2]+1時，pt2++
// 3. 如果pt2>=nums.length，則代表已經到最後一個元素，且最後一個元素是連續的
//    所以我們判斷pt2==pt1，如果相等，則將nums[pt1]放入ans中
//    如果不相等，則將nums[pt1]和nums[pt2-1]放入ans中
// 4. 如果nums[pt2+1]!=nums[pt2]+1時，則代表不連續
//    所以我們判斷pt2==pt1，如果相等，則將nums[pt1]放入ans中
//    如果不相等，則將nums[pt1]和nums[pt2]放入ans中
// 5. 將pt1更新為pt2+1，pt2更新為pt2+1
