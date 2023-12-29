/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const squares = {
    0: 0,
    1: 1,
    2: 4,
    3: 9,
    4: 16,
    5: 25,
    6: 36,
    7: 49,
    8: 64,
    9: 81,
  };
  const memo = new Map();
  temp = n;
  while (!memo.get(temp)) {
    temp = temp
      .toString()
      .split("")
      .reduce((acc, value) => {
        acc = acc + squares[value];
        return acc;
      }, 0);
    if (temp === 1) return true;
    if (!memo.has(temp)) {
      memo.set(temp, false);
    } else {
      return false;
    }
  }
};

// link: https://leetcode.com/problems/happy-number/
// 解題思路：
// 1. 建立一個物件，key為0~9字串，value為平方
// 2. 建立一個map，key為數字，value為布林值
// 3. 將n轉成字串，並且用split()轉成陣列
// 4. 將陣列中的每個值，透過物件取得平方，並且相加
// 5. 如果相加後的值為1，則回傳true
// 6. 如果map中沒有這個key，則建立一個新的key，並且將false放入map的value中
//    讓整個while(!memo.get(temp))的迴圈繼續下去
//    因為如果map中有這個key，代表這個數字已經出現過了，所以會進入無窮迴圈表示不是happy number
//    所以我們要讓這個迴圈繼續下去，直到temp === 1，或是map中有這個key
