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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root) return root;
  invertTree(root.left);
  invertTree(root.right);
  let temp = root.left;
  root.left = root.right;
  root.right = temp;
  return root;
};

// link: https://leetcode.com/problems/invert-binary-tree/
// 解題思路：
// 1. 遞迴
// 2. 如果root不存在，則回傳root
// 3. 如果root存在，則繼續遞迴下去，直到root不存在
// 4. 將左右子樹互換 這算是BFS嗎?
