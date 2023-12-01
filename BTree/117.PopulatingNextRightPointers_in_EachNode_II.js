/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (!root) return root;

  let handlingQueue = [root];
  let tempQueue = [];
  while (handlingQueue.length) {
    let curr = handlingQueue.splice(0, 1)[0];
    if (curr.left) tempQueue.push(curr.left);
    if (curr.right) tempQueue.push(curr.right);

    if (!handlingQueue.length) {
      curr.next = null;
      handlingQueue = tempQueue;
      tempQueue = [];
    } else {
      curr.next = handlingQueue[0];
    }
  }
  return root;
};

// link: https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/
// 解題思路：
// 1. 用兩個queue，一個是handlingQueue，一個是tempQueue
// 2. handlingQueue用來處理當前層的node
// 3. tempQueue用來存放下一層的node
// 4. 每次從handlingQueue取出一個node，如果有left或right，則放入tempQueue
// 5. 如果handlingQueue為空，則將curr.next指向null，並將handlingQueue指向tempQueue，tempQueue指向空陣列
// 6. 如果handlingQueue不為空，則將curr.next指向handlingQueue[0]，因為在取出curr時已經將原來的handlingQueue[0]取出並且splice是更改原陣列
//    所以才會說如果handlingQueue不為空，則將curr.next指向handlingQueue[0]，因為handlingQueue[0]已經是下一個要處理的node了
