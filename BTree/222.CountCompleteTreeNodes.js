// -----------此解法時間複雜度為O(n)----------------
// 不符合題目要求

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
 * @return {number}
 */
var countNodes = function (root) {
  if (!root) return 0;
  if (!root.left && !root.right) return 1;
  if (root.left && !root.right) return 2;
  return countNodes(root.left) + countNodes(root.right) + 1;
};

//
