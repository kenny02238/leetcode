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

let a = {};

let d = Symbol("d");
let ee = Symbol.for("e");
let e = Symbol.for("e");
let dd = Symbol.keyFor(e);
a[d] = "Hello";

console.log(dd);
