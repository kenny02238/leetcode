/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let endArr = new Array(nums.length).fill(1);
  let startArr = new Array(nums.length).fill(1);
  let ans = new Array(nums.length);

  for (let i = 0; i < nums.length; i++) {
    if (i > 0) {
      startArr[i] = nums[i] * startArr[i - 1];
    } else {
      startArr[i] = nums[i];
    }
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    if (i < nums.length - 1) {
      endArr[i] = nums[i] * endArr[i + 1];
    } else {
      endArr[i] = nums[i];
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && i < nums.length - 1) {
      ans[i] = startArr[i - 1] * endArr[i + 1];
    } else if (i === 0) {
      ans[i] = endArr[i + 1];
    } else {
      ans[i] = startArr[i - 1];
    }
  }

  return ans;
};

// link: https://leetcode.com/problems/product-of-array-except-self/
// 解題思路：
// 1. 剛開始先建立一個一路從開始乘下去的陣列startArr，以及一個一路從最後往前乘的陣列endArr
// 2. 例如給[1, 2, 3, 4]，startArr=[1, 2, 6, 24]，endArr=[24, 24, 12, 4]
// 3. 接著再建立一個ans陣列，用來存放答案
// 4. 接著開始建立如果i>0且i<nums.length-1的話，ans[i]=startArr[i-1]*endArr[i+1]
// 5. 如果i=0的話，ans[i]=endArr[i+1]
// 6. 如果i=nums.length-1的話，ans[i]=startArr[i-1]
