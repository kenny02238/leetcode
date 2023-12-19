/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const map = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let ans = "";
  Object.entries(map).forEach(([char, number]) => {
    ans += char.repeat(Math.floor(num / number));
    num %= number;
  });

  return ans;
};

// link: https://leetcode.com/problems/integer-to-roman/
// 解題思路：
// 1. 建立一個物件，裡面放入羅馬數字與對應的數字（利用hashMap邏輯去做）
// 2. 利用entries依照順序去取出物件的key與value
// 3. Math.floor(num / number) 取得商數，並且利用repeat去重複字串
//    ex.1994 / 1000 = 1.994 -> Math.floor(1.994) = 1 -> "M".repeat(1) = "M"
//    ex. 998 / 1000 = 0.998 -> Math.floor(0.998) = 0 -> "M".repeat(0) = ""
//        998 / 900 = 1.109 -> Math.floor(1.109) = 1 -> "CM".repeat(1) = "CM"
// 4. 最後num %= number; 取得餘數，並且繼續做迴圈
//    ex. 998/1000 = 0.998 -> Math.floor(0.998) = 0 -> "M".repeat(0) = ""
//        998/900 = 1.109 -> Math.floor(1.109) = 1 -> "CM".repeat(1) = "CM", num = 998 % 900 = 98
//        98/500 = 0.196 -> Math.floor(0.196) = 0 -> "D".repeat(0) = "", num = 98 % 500 = 98
//        98/400 = 0.245 -> Math.floor(0.245) = 0 -> "CD".repeat(0) = "", num = 98 % 400 = 98
//        98/100 = 0.98 -> Math.floor(0.98) = 0 -> "C".repeat(0) = "", num = 98 % 100 = 98
//        98/90 = 1.088 -> Math.floor(1.088) = 1 -> "XC".repeat(1) = "XC", num = 98 % 90 = 8
//        8/50 = 0.16 -> Math.floor(0.16) = 0 -> "L".repeat(0) = "", num = 8 % 50 = 8
//        8/40 = 0.2 -> Math.floor(0.2) = 0 -> "XL".repeat(0) = "", num = 8 % 40 = 8
//        8/10 = 0.8 -> Math.floor(0.8) = 0 -> "X".repeat(0) = "", num = 8 % 10 = 8
//        8/9 = 0.888 -> Math.floor(0.888) = 0 -> "IX".repeat(0) = "", num = 8 % 9 = 8
//        8/5 = 1.6 -> Math.floor(1.6) = 1 -> "V".repeat(1) = "V", num = 8 % 5 = 3
//        3/4 = 0.75 -> Math.floor(0.75) = 0 -> "IV".repeat(0) = "", num = 3 % 4 = 3
//        3/1 = 3 -> Math.floor(3) = 3 -> "I".repeat(3) = "III", num = 3 % 1 = 0
// 5. 最後回傳 998轉成羅馬數字為 "CMXCVIII"
