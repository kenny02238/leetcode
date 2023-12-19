/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let pt = 0,
    ans = "",
    temp;
  if (strs === undefined || strs.length === 0) {
    return "";
  }
  while (pt < strs[0].length) {
    for (let i = 0; i < strs.length; i++) {
      if (i === 0) {
        temp = strs[i][pt];
      }
      if (strs[i][pt] !== temp) {
        return ans;
      }
      if (i === strs.length - 1 && strs[i][pt] === temp) {
        ans += temp;
      }
    }
    pt++;
  }
  return ans;
};

// link: https://leetcode.com/problems/longest-common-prefix/
// 解題思路：
// 1. 用pt來記錄目前的位置，從0開始
// 2. 首先若pt已經超過strs[0]的長度則停止迴圈
// 3. 用temp來記錄strs[0][pt](第一個字串的第pt個字元)
// 4. 用for迴圈來判斷每個字串的第pt個字元是否與temp相同
// 5. 如果不相同則回傳ans，若是判斷到最後一個則將temp加入ans
