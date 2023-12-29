/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */

var wordPattern = function (pattern, s) {
  let pt = 0;
  let patternMap = new Map();
  let sMap = new Map();
  const sArray = s.split(" ");
  if (pattern.length !== sArray.length) return false;
  for (let i = 0; i < pattern.length; i++) {
    if (!patternMap.has(pattern[i])) {
      patternMap.set(pattern[i], sArray[i]);
    } else {
      if (patternMap.get(pattern[i]) !== sArray[i]) {
        return false;
      }
    }

    if (!sMap.has(sArray[i])) {
      sMap.set(sArray[i], pattern[i]);
    } else {
      if (sMap.get(sArray[i]) !== pattern[i]) {
        return false;
      }
    }
  }
  return true;
};

// link: https://leetcode.com/problems/word-pattern/
// 解題思路：
// 1. 使用Map來記錄pattern和s的對應關係
// 2. 也就是我在sMap中紀錄他綁定的pattern[i]，在patternMap中紀錄他綁定的sArray[i]
// 3. 當遇到重複時去檢查他綁定的對象是否相同，如果不相同則回傳false
