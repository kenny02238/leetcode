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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (!root) return false;
  if (!root.left && !root.right) return root.val === targetSum;
  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  );
};

// link: https://leetcode.com/problems/path-sum/
// 解題思路：
// 1. 如果沒有root，就回傳false
// 2. 每一次recursion都減去root.val，直到沒有左右子樹，且targetSum === root.val
// 3. 如果其中一邊也就是root.left or root.right有一邊沒有子樹，就會回傳null進去，就會進到下一次recursion並且被!root判斷為false
