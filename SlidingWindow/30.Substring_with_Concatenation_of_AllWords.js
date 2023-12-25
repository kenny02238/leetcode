/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  let map = new Map();

  let wordLength = words[0].length;
  let wordCount = words.length;

  let slideWindow = wordLength * wordCount;

  for (let word of words) {
    map.has(word) ? map.set(word, map.get(word) + 1) : map.set(word, 1);
  }

  let leftIndex = 0;
  let rightIndex = slideWindow - 1;
  let result = [];

  const helper = (tempStr) => {
    let visited = new Map();

    for (let i = 0; i < tempStr.length; i += wordLength) {
      let word = tempStr.substr(i, wordLength);
      visited.has(word)
        ? visited.set(word, visited.get(word) + 1)
        : visited.set(word, 1);
    }

    for (let [key, val] of visited) {
      if (map.get(key) != val) return false;
    }

    return true;
  };
  while (rightIndex < s.length) {
    if (rightIndex - leftIndex + 1 == slideWindow) {
      let tempStr = s.substring(leftIndex, rightIndex + 1);

      if (helper(tempStr)) {
        result.push(leftIndex);
      }
      leftIndex++;
    }
    rightIndex++;
  }

  return result;
};

// link: https://leetcode.com/problems/substring-with-concatenation-of-all-words/
// 解題思路：
// 1. 我們先將words的字元和出現的次數記錄在map裡面
// 2. helper function 用來檢查目前切出來的subString是否存在在words的Map裡面
// 3. 判斷的方法是先將subString切成wordLength的長度，然後再透過建立一個新的visited map來記錄subString裡面的字元和出現的次數
//    最後再將visited map和words的map做比較，若有不同的話則回傳false
// 4. 外層的while loop則是透過sliding window的方式來切出subString，並且將subString傳入helper function中檢查
