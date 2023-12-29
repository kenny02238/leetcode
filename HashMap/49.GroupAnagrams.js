var groupAnagrams = function (strs) {
  let ans = new Map();
  for (let s of strs) {
    let temp = new Array(26).fill(0);
    for (let c of s) {
      temp[c.charCodeAt() - "a".charCodeAt()]++;
    }
    let tempString = JSON.stringify(temp);
    ans.has(tempString)
      ? ans.get(tempString).push(s)
      : ans.set(tempString, [s]);
  }

  return Array.from(ans.values());
};

// link: https://leetcode.com/problems/group-anagrams/
// 解題思路：
// 1. 建立一個map，key為字串，value為陣列
// 2. 用一個長度為26的陣列，來記錄每個字母出現的次數
// 3. 將字母出現的次數轉成字串，並且作為map的key
// 4. 如果map已經有這個key，則將字串放入map的value中
// 5. 如果map沒有這個key，則建立一個新的key，並且將字串放入map的value中

// 這邊有個重點是map.has()是全等比較，所以我們不能直接把陣列當作key
// 因為全等比較會比較到記憶體位置，所以即使內容一樣，但是記憶體位置不一樣，還是會回傳false
// 所以我們要把陣列轉成字串，再放入map中
