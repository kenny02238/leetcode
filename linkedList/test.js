let a = [1, 2, 3, 4, 5];

let b = a.splice(0, 1);

console.log(b);

function Node(val, left, right, next) {
  this.val = val === undefined ? null : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
  this.next = next === undefined ? null : next;
}
