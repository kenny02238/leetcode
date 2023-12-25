/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let ans = [];
  let left, right;
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (i - 1 >= 0 && nums[i] == nums[i - 1]) continue;
    if (nums[i] > 0 || i + 2 > nums.length - 1) break;
    left = i + 1;
    right = nums.length - 1;
    while (left < right) {
      let temp = nums[i] + nums[left] + nums[right];
      if (temp === 0) {
        ans.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left + 1] == nums[left]) {
          left++;
        }
        while (left < right && nums[right - 1] == nums[right]) {
          right--;
        }
        left++;
        right--;
      } else if (temp > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
  return ans;
};

// link: https://leetcode.com/problems/3sum/
// 解題思路：
// 1. 先排序
// 2. 用三個指針，i, left, right
// 3. i從0開始，left從i+1開始，right從nums.length-1開始
// 4. 每次都先找到i然後再利用i 去針對left和right做2 sum的事情
// 5. 由於題目要求結果不能有重複的答案所以每一次移動pointer的時候都需要去除掉重複的
//    ex[0,0,0,0] 這種情況，我們先將i指定在第一個0，然後left指定在第二個0，right指定在最後一個0
//    找到第一個答案為位置0,1,3，這時候我們需要移動left和right，但是我們需要避免重複的答案
//    所以我們需要將left和right都移動相同數字的最後一位也就是18和21行的while迴圈，最後在進行一次left++和right--取得不一樣的left和right
//    依照此題範例他最終會走到left跟right並在一起，此時會跳出while迴圈，並且i++，進入下一次for迴圈
//    又會發現 i - 1 >= 0 && nums[i] == nums[i - 1] 為true，持續跳過重複的i直到for結束
