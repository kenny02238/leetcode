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
