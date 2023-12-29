// let a = [1, 2, 3, 4, 5];

// let b = a.splice(0, 1, 10);
// let c = a.slice(0, 1);

// console.log(a, b, c, a);
// const b = { a: 1, b: 2 };
// const a = new Map(Object.entries(b));
// const c = new Set([1, 2, 3, 4, 5]);
// for (let item of c) {
//   console.log(item);
// }
// c.forEach((item) => {
//   console.log(item);
// });

// let a = {};

// let d = Symbol("d");
// let ee = Symbol.for("e");
// let e = Symbol.for("e");
// let dd = Symbol.keyFor(e);
// a[d] = "Hello";

// const map = {
//   M: 1000,
//   CM: 900,
//   D: 500,
//   CD: 400,
//   C: 100,
//   XC: 90,
//   L: 50,
//   XL: 40,
//   X: 10,
//   IX: 9,
//   V: 5,
//   IV: 4,
//   I: 1,
// };
// let ans = "";
// Object.entries(map).forEach(([char, number]) => {
//   console.log(char, number);
// });

// let a = "x";
// let b = "ad";
// console.log((a += b));

// var reverseWords = function (s) {
//   let counter = 0,
//     recording = false;
//   ans = "";
//   let tempArr = [];
//   for (let i = s.length - 1; i >= 0; i--) {
//     if (s[i] !== " " && !recording) {
//       tempArr[counter] = [s[i]];
//       recording = true;
//       continue;
//     }
//     if (recording && s[i] === " ") {
//       recording = false;
//       counter += 1;
//       continue;
//     }
//     if (recording) {
//       tempArr[counter].push(s[i]);
//     }
//   }
//   tempArr.map((string) => {
//     while (string.length) {
//       ans += string.pop();
//     }
//     ans += " ";
//   });
//   return ans;
// };

// console.log(reverseWords("a good   example"));
// var convert = function (s, numRows) {
//   let tempArr = [];
//   let count1 = 0,
//     way = "up";
//   for (let i = 0; i < s.length; i++) {
//     if (!tempArr[count1]) tempArr[count1] = [];
//     tempArr[count1].push(s[i]);
//     if (way === "up") {
//       count1 += 1;
//       if (count1 === numRows - 1) {
//         way = "down";
//       }
//     } else {
//       count1 -= 1;
//       if (count1 === 0) {
//         way = "up";
//       }
//     }
//   }
//   console.log(tempArr);
// };

// convert("PAYPALISHIRING", 4);

// let tempCount = 0;
// let a = 1 + 1 + (tempCount > 1 ? tempCount - 1 : 0);
// console.log(a);

// let a = "123";
// let b = 123;
// console.log(typeof (a * 1), a);

// var fullJustify = function (words, maxWidth) {
//   let ans = [];
//   let temp = "";
//   let tempLng = 0;
//   let tempCount = 0;
//   let i = 0,
//     pt = 0;

//   while (i <= words.length) {
//     if (
//       i !== words.length &&
//       words[i].length + tempLng + (tempCount > 1 ? tempCount - 1 : 0) <=
//         maxWidth
//     ) {
//       if (tempCount == 0) pt = i;
//       tempLng += words[i].length;
//       tempCount += 1;
//       i++;
//     } else {
//       let space =
//         i === words.length
//           ? 1
//           : Math.floor(
//               (maxWidth - tempLng) / (tempCount > 1 ? tempCount - 1 : tempCount)
//             );
//       let extraSpace =
//         i === words.length
//           ? 0
//           : (maxWidth - tempLng) % (tempCount > 1 ? tempCount - 1 : tempCount);
//       for (let j = pt; j < pt + tempCount; j++) {
//         if (j < pt + (tempCount > 1 ? tempCount - 1 : tempCount)) {
//           if (i === words.length) {
//             if (j == pt + tempCount - 1) {
//               temp += words[j] + " ".repeat(maxWidth - tempLng - tempCount - 1);
//             } else {
//               temp += words[j] + " ";
//             }
//           } else {
//             temp += words[j] + " ".repeat(space + (extraSpace && 1));
//           }
//         } else {
//           if (i === words.length) {
//             temp += words[j] + " ".repeat(maxWidth - tempLng - tempCount - 1);
//           } else {
//             temp += words[j];
//           }
//         }
//         extraSpace = extraSpace > 0 ? extraSpace - 1 : 0;
//       }
//       ans.push(temp);
//       tempLng = 0;
//       tempCount = 0;
//       temp = "";
//       if (i === words.length) break;
//     }
//   }
//   return ans;
// };
// let a = fullJustify(
//   ["This", "is", "an", "example", "of", "text", "justification."],
//   16
// );
// console.log(a);

// let test = 1;
// let a = "gaga";
// a += "test" + "2".repeat(4 + (test && 1));
// console.log(a);

// let a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
// for (let i = 0; i < a.length; i++) {
//   console.log(a.charCodeAt(i));
// }

// let letterMap = new Map([
//   ["a", true],
//   ["b", true],
//   ["c", true],
//   ["d", true],
//   ["e", true],
//   ["f", true],
//   ["g", true],
//   ["h", true],
//   ["i", true],
//   ["j", true],
//   ["k", true],
//   ["l", true],
//   ["m", true],
//   ["n", true],
//   ["o", true],
//   ["p", true],
//   ["q", true],
//   ["r", true],
//   ["s", true],
//   ["t", true],
//   ["u", true],
//   ["v", true],
//   ["w", true],
//   ["x", true],
//   ["y", true],
//   ["z", true],
//   ["A", true],
//   ["B", true],
//   ["C", true],
//   ["D", true],
//   ["E", true],
//   ["F", true],
//   ["G", true],
//   ["H", true],
//   ["I", true],
//   ["J", true],
//   ["K", true],
//   ["L", true],
//   ["M", true],
//   ["N", true],
//   ["O", true],
//   ["P", true],
//   ["Q", true],
//   ["R", true],
//   ["S", true],
//   ["T", true],
//   ["U", true],
//   ["V", true],
//   ["W", true],
//   ["X", true],
//   ["Y", true],
//   ["Z", true],
//   ["0", true],
//   ["1", true],
//   ["2", true],
//   ["3", true],
//   ["4", true],
//   ["5", true],
//   ["6", true],
//   ["7", true],
//   ["8", true],
//   ["9", true],
// ]);

// console.log(letterMap.has("a"));
// var minWindow = function (s, t) {
//   let map = new Map();
//   let pt1 = 0,
//     pt2 = 0;
//   let tCount = t.length;
//   let ans = "";

//   for (let char of t) {
//     map.set(char, (map.get(char) || 0) + 1);
//   }
//   while (pt2 < s.length) {
//     if (map.has(s[pt2])) {
//       if (map.get(s[pt2]) > 0) {
//         tCount -= 1;
//       }
//       map.set(s[pt2], map.get(s[pt2]) - 1);
//     }

//     while (tCount === 0 && pt1 <= pt2) {
//       let tempString = s.slice(pt1, pt2 + 1);
//       if (!ans || tempString.length < ans.length) {
//         ans = tempString;
//       }
//       if (map.has(s[pt1])) {
//         map.set(s[pt1], map.get(s[pt1]) + 1);
//         if (map.get(s[pt1]) > 0) {
//           tCount += 1;
//         }
//       }
//       pt1++;
//     }

//     pt2++;
//   }

//   return ans;
// };

// minWindow("ADOBECODEBANC", "ABC");
// var isValidSudoku = function (board) {
//   let cols = new Array(9).fill(0).map(() => new Array(9).fill(0));
//   let rows = new Array(9).fill(0).map(() => new Array(9).fill(0));
//   let boxs = new Array(3)
//     .fill(0)
//     .map(() => new Array(3).fill(0).map(() => new Array(9).fill(0)));
//   for (let i = 0; i < 9; i++) {
//     for (let j = 0; j < 9; j++) {
//       let ceil = board[i][j];
//       if (ceil !== ".") {
//         let numsIndex = ceil.charCodeAt() - "0".charCodeAt() - 1;
//         rows[i][numsIndex]++;
//         cols[j][numsIndex]++;
//         boxs[Math.floor(i / 3)][Math.floor(j / 3)][numsIndex]++;
//         if (
//           rows[i][numsIndex] > 1 ||
//           cols[j][numsIndex] > 1 ||
//           boxs[Math.floor(i / 3)][Math.floor(j / 3)][numsIndex] > 1
//         )
//           return false;
//       }
//     }
//   }
//   return true;
// };

// var rotate = function (matrix) {
//   let n = matrix.length;

//   for (let i = 0; i < Math.floor(n / 2); i++) {
//     for (let j = i; j < n - i - 1; j++) {
//       let temp = matrix[i][j];
//       matrix[i][j] = matrix[n - j - 1][i];
//       matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1];
//       matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1];
//       matrix[j][n - i - 1] = temp;
//     }
//   }
//   console.log(matrix);
// };

// rotate([
//   [5, 1, 9, 11],
//   [2, 4, 8, 10],
//   [13, 3, 6, 7],
//   [15, 14, 12, 16],
// ]);

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

//  Rule 1: If the number of living cells among the eight adjacent positions of a living cell is less than two, the living cell dies. In this case, the cell value is changed to -1, indicating that the cell was alive but is now dead.

// Rule 2: If there are two or three living cells among the eight adjacent positions of a living cell, the living cell continues to survive. In this case, the cell value remains 1.

// Rule 3: If there are more than three living cells among the eight adjacent positions of a living cell, the living cell dies. In this case, the cell value is changed to -1, indicating that the cell was alive but is now dead. It can be observed that the initial and final states of the cell are consistent under Rules 1 and 3, so their composite states are also consistent.

// Rule 4: If there are exactly three living cells among the eight adjacent positions of a dead cell, the dead cell comes back to life. In this case, the cell value is changed to 2, indicating that the cell was dead but is now alive.
// const xdx = [0, 1, 0, -1, -1, -1, 1, 1];
// const ydx = [1, 0, -1, 0, 1, -1, 1, -1];

// var gameOfLife = function (board) {
//   let rowsL = board[0].length;
//   let colsL = board.length;
//   for (let i = 0; i < rowsL; i++) {
//     for (let j = 0; j < colsL; j++) {
//       let count = countLiveCeils(j, i, board);
//       if (board[j][i] == 1 && count < 2) board[j][i] = -1;
//       if (board[j][i] == 0 && count == 3) board[j][i] = 2;
//     }
//   }
// };

// let countLiveCeils = function (x, y, board) {
//   let liveCount = 0;
//   for (let i = 0; i < 8; i++) {
//     if (x + xdx[i] < 0 || y + ydx[i] < 0) {
//       continue;
//     } else if (
//       board[x + xdx[i]][y + ydx[i]] == 1 ||
//       board[x + xdx[i]][y + ydx[i]] == -1
//     ) {
//       liveCount++;
//     }
//   }
//   return liveCount;
// };

// gameOfLife([
//   [0, 1, 0],
//   [0, 0, 1],
//   [1, 1, 1],
//   [0, 0, 0],
// ]);

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

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
