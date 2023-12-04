/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  if (!root) return;
  if (root.left) {
    let last = root.left;
    while (last.right) last = last.right;
    let temp = root.right;
    root.right = root.left;
    root.left = null;
    last.right = temp;
  }

  flatten(root.right);
};

// link: https://leetcode.com/problems/flatten-binary-tree-to-linked-list/
// 解題思路：
// 1. 先找到左子樹的最右邊且最深的節點，因為是preOrder，所以左子樹的最右邊且最深的節點就是左子樹的最後一個節點
// 2. 把右子樹接到左子樹的最右邊且最深的節點
// 3. 把左子樹翻轉到右子樹
// 4. 重複 1 ~ 3
