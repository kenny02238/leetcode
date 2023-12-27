/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  let string = x.toString();
  let pt1 = 0,
    pt2 = string.length - 1;
  while (pt1 < pt2) {
    if (string[pt1] !== string[pt2]) return false;
    pt1++;
    pt2--;
  }
  return true;
};

// link: https://leetcode.com/problems/palindrome-number/
