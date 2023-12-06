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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) return true;
  return checkSymmetric(root.left, root.right);
};

let checkSymmetric = function (left, right) {
  if (!left && !right) return true;
  if (!left || !right || left.val !== right.val) return false;

  return (
    checkSymmetric(left.left, right.right) &&
    checkSymmetric(left.right, right.left)
  );
};

// link: https://leetcode.com/problems/symmetric-tree/
// 解題思路：遞迴，左子樹的左子樹與右子樹的右子樹比較，左子樹的右子樹與右子樹的左子樹比較，都相同則為對稱樹
