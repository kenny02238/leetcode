/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (!needle) return -1;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      if (haystack.slice(i, i + needle.length) == needle) return i;
    }
  }
  return -1;
};

// link: https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/?envType=study-plan-v2&envId=top-interview-150
// 解題思路：
// 1. 每一次都找字串是否符合needle中的第一個字元，如果符合直接slice一樣的長度字串出來比較，如果相同則回傳i
