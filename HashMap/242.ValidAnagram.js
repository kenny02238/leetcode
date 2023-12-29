/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let ref = new Map();
  for (let i = 0; i < s.length; i++) {
    ref.set(s[i], (ref.get(s[i]) || 0) + 1);
  }
  for (let i = 0; i < t.length; i++) {
    if (ref.has(t[i]) && ref.get(t[i]) !== 0) {
      ref.set(t[i], ref.get(t[i]) - 1);
    } else {
      return false;
    }
  }
  return true;
};

// link: https://leetcode.com/problems/valid-anagram/
// 解題思路：
// 1. 使用Map來記錄s中每個字母出現的次數
// 2. 當t中的字母出現時，就將Map中的次數減一
// 3. 如果Map中的次數為0，則表示t中的字母出現次數比s多，回傳false
