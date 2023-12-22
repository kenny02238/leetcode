/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  let ans = [];
  let temp = "";
  let tempLng = 0;
  let tempCount = 0;
  let i = 0,
    pt = 0;

  while (i <= words.length) {
    if (
      i !== words.length &&
      words[i].length + tempLng + (tempCount + 1 > 1 ? tempCount : 0) <=
        maxWidth
    ) {
      if (tempCount == 0) pt = i;
      tempLng += words[i].length;
      tempCount += 1;
      i++;
    } else {
      let space =
        i === words.length
          ? 1
          : Math.floor(
              (maxWidth - tempLng) / (tempCount > 1 ? tempCount - 1 : tempCount)
            );
      let extraSpace =
        i === words.length
          ? 0
          : (maxWidth - tempLng) % (tempCount > 1 ? tempCount - 1 : tempCount);
      for (let j = pt; j < pt + tempCount; j++) {
        if (j < pt + (tempCount > 1 ? tempCount - 1 : tempCount)) {
          if (i === words.length) {
            if (j == pt + tempCount - 1) {
              temp += words[j] + " ".repeat(maxWidth - tempLng - tempCount + 1);
            } else {
              temp += words[j] + " ";
            }
          } else {
            temp += words[j] + " ".repeat(space + (extraSpace && 1));
          }
        } else {
          if (i === words.length) {
            temp +=
              words[j] +
              " ".repeat(Math.max(maxWidth - tempLng - tempCount + 1, 0));
          } else {
            temp += words[j];
          }
        }
        extraSpace = extraSpace > 0 ? extraSpace - 1 : 0;
      }
      ans.push(temp);
      tempLng = 0;
      tempCount = 0;
      temp = "";
      if (i === words.length) break;
    }
  }
  return ans;
};

// link: https://leetcode.com/problems/text-justification/
// 解題思路：
// 1. 依序找出每一個字串長度是否放得進去 maxWidth長度的陣列中
// 2. 若可以放得進去，則擷取可放進去的字串出來，並且計算出每個字串之間的空格數
// 3. 透過除法以及取餘數來計算每個空格平均的空格數量，若有餘數則從左邊開始依序補上一格
// 4. 最後需要處理最後一行，若有超過一個字串則需要計算空格數，並且最後一行的空格數會是一個空格
// 5. 若處理到剩下最後一個字串則計算maxWidth減去前面所有字串長度將剩下的長度都補上空格
