// Solution 1

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (str) {
  let pt1 = 0,
    pt2 = str.length - 1;
  let letterMap = new Map([
    ["a", true],
    ["b", true],
    ["c", true],
    ["d", true],
    ["e", true],
    ["f", true],
    ["g", true],
    ["h", true],
    ["i", true],
    ["j", true],
    ["k", true],
    ["l", true],
    ["m", true],
    ["n", true],
    ["o", true],
    ["p", true],
    ["q", true],
    ["r", true],
    ["s", true],
    ["t", true],
    ["u", true],
    ["v", true],
    ["w", true],
    ["x", true],
    ["y", true],
    ["z", true],
    ["0", true],
    ["1", true],
    ["2", true],
    ["3", true],
    ["4", true],
    ["5", true],
    ["6", true],
    ["7", true],
    ["8", true],
    ["9", true],
  ]);
  while (pt1 < pt2) {
    const char1 = str[pt1].toLowerCase();
    const char2 = str[pt2].toLowerCase();

    if (!letterMap.has(char1)) {
      pt1++;
    } else if (!letterMap.has(char2)) {
      pt2--;
    } else {
      if (char1 !== char2) {
        return false;
      }
      pt1++;
      pt2--;
    }
  }
  return true;
};

// link: https://leetcode.com/problems/valid-palindrome/
// 解題思路：
// 1. 建立一個map，裡面放入所有英文字母和數字
// 2. 用兩個指針，一個指向字串頭，一個指向字串尾依序比對

// Solution 2

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let pt1 = 0,
    pt2 = s.length - 1;
  let letterMap = new Map([
    ["a", true],
    ["b", true],
    ["c", true],
    ["d", true],
    ["e", true],
    ["f", true],
    ["g", true],
    ["h", true],
    ["i", true],
    ["j", true],
    ["k", true],
    ["l", true],
    ["m", true],
    ["n", true],
    ["o", true],
    ["p", true],
    ["q", true],
    ["r", true],
    ["s", true],
    ["t", true],
    ["u", true],
    ["v", true],
    ["w", true],
    ["x", true],
    ["y", true],
    ["z", true],
    ["0", true],
    ["1", true],
    ["2", true],
    ["3", true],
    ["4", true],
    ["5", true],
    ["6", true],
    ["7", true],
    ["8", true],
    ["9", true],
  ]);
  let str = s.toLowerCase();
  while (pt1 < pt2) {
    if (letterMap.has(str[pt1]) && letterMap.has(str[pt2])) {
      if (str[pt1] !== str[pt2]) {
        return false;
      }
      pt2--;
      pt1++;
    }
    if (!letterMap.has(str[pt1]) && letterMap.has(str[pt2])) {
      pt1++;
    }
    if (letterMap.has(str[pt1]) && !letterMap.has(str[pt2])) {
      pt2--;
    }
    if (!letterMap.has(str[pt1]) && !letterMap.has(str[pt2])) {
      pt2--;
      pt1++;
    }
  }
  return true;
};

// Solution 3
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const newStr = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  return newStr.split("").reverse().join("") === newStr ? true : false;
};
