/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let pt = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (pt === 0 && s[i] !== " ") pt = i;
    if (pt !== 0 && s[i] === " ") {
      return pt - i;
    }
  }
  return pt + 1;
};

// link: https://leetcode.com/problems/length-of-last-word/
// 解題思路：
// 1. 雙指針，從後面往前找，並且記錄第一個不是空白的字元的位置
// 2. 如果第一個不是空白的字元的位置存在，且遇到空白的字元，則回傳第一個不是空白的字元的位置減去空白的字元的位置
// 3. 如果第一個不是空白的字元的位置存在，且一直往前都沒有遇到空白的字元，則回傳第一個不是空白的字元的位置-0+1(因為index是從0開始算的會少1)

// solution 2
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  return s.trim().split(" ").pop().length;
};

// 這就單純套用API了，trim()是去除前後空白，split(" ")是以空白為分隔，pop()是取出最後一個元素，最後再取得長度就好了。
