/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let counter = 0,
    recording = false;
  ans = "";
  let tempArr = [];
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== " " && !recording) {
      tempArr[counter] = [s[i]];
      recording = true;
      continue;
    }
    if (recording && s[i] === " ") {
      recording = false;
      counter += 1;
      continue;
    }
    if (recording) {
      tempArr[counter].push(s[i]);
    }
  }
  tempArr.map((string, index) => {
    while (string.length) {
      ans += string.pop();
    }
    if (index !== tempArr.length - 1) {
      ans += " ";
    }
  });
  return ans;
};

// link: https://leetcode.com/problems/reverse-words-in-a-string/
// 解題思路：
// 1. 用tempArr來記錄每個字串(並且是利用Stack的方式，從後面開始記錄)
// 2. 用counter來記錄目前是第幾個字串
// 3. 用recording來記錄是否正在記錄字串
// 4. 由後面往前走完一次後就可以得到每一個字串並且是用Stack的方式記錄
// 5. 最後再將每個字串pop出來並且加入ans中
