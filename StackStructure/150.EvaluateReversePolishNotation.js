/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let stack = [];
  let ops = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => (a / b >= 0 ? Math.floor(a / b) : Math.ceil(a / b)),
  };

  for (let i of tokens) {
    if (ops[i]) {
      let top = stack.pop();
      let second = stack.pop();
      stack.push(ops[i](second, top));
    } else {
      stack.push(Number(i));
    }
  }
  return stack.pop();
};

// link: https://leetcode.com/problems/evaluate-reverse-polish-notation/
// 解題思路：
// 1. 用stack來解，遇到運算子就pop兩個數字出來做運算，再push回去
// 2. 遇到數字就push進stack
