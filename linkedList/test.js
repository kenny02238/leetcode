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
var convert = function (s, numRows) {
  let tempArr = [];
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
  console.log(tempArr);
};

convert("PAYPALISHIRING", 4);
