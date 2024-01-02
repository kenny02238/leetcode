/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  let arr = path.split("/");
  let stack = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "" || arr[i] == ".") continue;
    else if (arr[i] == "..") stack.pop();
    else {
      stack.push(arr[i]);
    }
  }
  return "/" + stack.join("/");
};

// link: https://leetcode.com/problems/simplify-path/
// 解題思路：
// 1. 用stack來解決，用以模擬我們在進入資料夾時的行為
// 2. 如果遇到".."就pop出來(代表回到上一層資料夾)
// 3. 如果遇到"."或是""就跳過
// 4. 如果遇到其他的字串，就push進stack
