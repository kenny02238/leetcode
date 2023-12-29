/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;

  let sMap = {},
    tMap = {};

  for (let i = 0; i < s.length; i++) {
    if (!(s[i] in sMap)) {
      sMap[s[i]] = t[i];
    } else {
      if (sMap[s[i]] !== t[i]) {
        return false;
      }
    }

    if (!(t[i] in tMap)) {
      tMap[t[i]] = s[i];
    } else {
      if (tMap[t[i]] !== s[i]) {
        return false;
      }
    }
  }

  return true;
};

// link: https://leetcode.com/problems/isomorphic-strings/
// 解題思路：
// 1. 用兩個map來記錄s和t的對應關係
// 2. 也就是我在sMap中紀錄他綁定的t[i]，在tMap中紀錄他綁定的s[i]
// 3. 當遇到重複時去檢查他綁定的對象是否相同，如果不相同則回傳false
