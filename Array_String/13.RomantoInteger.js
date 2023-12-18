/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const symbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  if (!s.length) return 0;
  let ans = 0;
  for (let i = 0; i < s.length; i += 1) {
    symbols[s[i]] < symbols[s[i + 1]]
      ? (ans -= symbols[s[i]])
      : (ans += symbols[s[i]]);
  }
  return ans;
};

// link: https://leetcode.com/problems/roman-to-integer/
// 解題思路：
// 1. 建立一個物件，裡面放入羅馬數字與對應的數字（利用hashMap邏輯去做）
// 2. 如果s不存在則回傳0
// 3. 若symbols[s[i]] < symbols[s[i + 1]]依照羅馬數字的邏輯去做減法，反之則加法
