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

const map = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};
let ans = "";
Object.entries(map).forEach(([char, number]) => {
  console.log(char, number);
});
