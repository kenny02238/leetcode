/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let pt = 0;
  if (!s) return true;
  for (let i = 0; i < t.length; i++) {
    if (t[i] == s[pt]) {
      pt++;
      if (pt == s.length) return true;
    }
  }
  return false;
};

// link: https://leetcode.com/problems/is-subsequence/
// 解題思路：
// 1. 用雙指針，一個指向s，一個指向t
// 2. 如果s的指針指向的字元和t的指針指向的字元相同，則s的指針往後移一格
// 3. 如果s的指針已經指向s的尾端，則回傳true
