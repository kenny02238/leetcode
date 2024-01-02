/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") stack.push(")");
    else if (s[i] == "[") stack.push("]");
    else if (s[i] == "{") stack.push("}");
    else {
      let check = stack.pop();
      if (check !== s[i]) return false;
    }
  }
  return stack.length == 0;
};

// link: https://leetcode.com/problems/valid-parentheses/
// 解題思路：
// 1. 用stack來解決，如果遇到左括號就push對應的右括號
// 2. 如果遇到右括號，就pop出來，並且判斷是否相等
// 3. 如果不相等，代表不是有效的括號，回傳false
// 4. 最後判斷stack是否為空，如果為空代表是有效的括號，回傳true
