/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let pt1 = 0,
    pt2 = 0;
  let ans = new Set();
  let max = 0;
  if (!s) return 0;
  while (pt2 < s.length) {
    if (!ans.has(s[pt2])) {
      ans.add(s[pt2]);
      max = Math.max(max, ans.size);
      pt2++;
    } else {
      ans.delete(s[pt1]);
      pt1++;
    }
  }
  return max;
};

// link: https://leetcode.com/problems/longest-substring-without-repeating-characters/
// 解題思路：
// 1. 利用一個set來記錄目前不重複的字元
// 2. 再透過ans.size和max來記錄不重複字元的最大長度
// 3. 最後將條件設定成若不重複的話pt2往右移動，若重複的話pt1往pt2方向縮小subString
