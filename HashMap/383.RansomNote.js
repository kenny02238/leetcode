/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let temp = new Map();
  for (let i = 0; i < magazine.length; i++) {
    if (temp.has(magazine[i])) {
      temp.set(magazine[i], temp.get(magazine[i]) + 1);
    } else {
      temp.set(magazine[i], 1);
    }
  }
  for (let i = 0; i < ransomNote.length; i++) {
    if (temp.has(ransomNote[i])) {
      if (temp.get(ransomNote[i]) > 0) {
        temp.set(ransomNote[i], temp.get(ransomNote[i]) - 1);
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
};

// link: https://leetcode.com/problems/ransom-note/
// 解題思路：
// 1. 用map紀錄magazine中每個字母出現的次數
// 2. 用ransomNote中的字母去map中查詢，如果有出現過，則將次數減一
// 3. 如果map中沒有出現過，則回傳false
// 4. 如果map中有出現過，但是次數為0，則回傳false

// solution 2
var canConstruct = function (ransomNote, magazine) {
  const charCount = new Map();

  // 遍歷 magazine 字符，計算每個字符的出現次數
  for (const char of magazine) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  // 檢查 ransomNote 是否能夠由 magazine 字符構建而成
  for (const char of ransomNote) {
    if (charCount.has(char) && charCount.get(char) > 0) {
      charCount.set(char, charCount.get(char) - 1);
    } else {
      return false;
    }
  }

  return true;
};
