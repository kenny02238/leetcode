/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  let tempArr = [],
    ans = "";
  let count1 = 0,
    way = "up";
  for (let i = 0; i < s.length; i++) {
    if (!tempArr[count1]) tempArr[count1] = [];
    tempArr[count1].push(s[i]);
    if (way === "up") {
      count1 += 1;
      if (count1 === numRows - 1) {
        way = "down";
      }
    } else {
      count1 -= 1;
      if (count1 === 0) {
        way = "up";
      }
    }
  }
  tempArr.map((zigzag) => {
    for (let i = 0; i < zigzag.length; i++) {
      ans += zigzag[i];
    }
  });
  return ans;
};

// link: https://leetcode.com/problems/zigzag-conversion/
// 解題思路：
// 1. 用一個二維陣列存zigzag的結果
// 2. 方法是用垂直的方式去存在二維陣列中
// 3. 最後在依照row的順序將二維陣列中的字元加入ans中
