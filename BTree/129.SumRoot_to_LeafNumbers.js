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

// Solution 1:
var sumNumbers = function (root) {
  if (!root) return 0;
  if (!root.left && !root.right) return root.val;
  if (root.left) root.left.val = helper(root.val, root.left.val);
  if (root.right) root.right.val = helper(root.val, root.right.val);
  return sumNumbers(root.left) + sumNumbers(root.right);
};
let helper = function (prev, curr) {
  return prev * 10 + curr;
};

// Solution 2:
var sumNumbers = function (root, currentSum = 0) {
  if (!root) return 0;

  currentSum = currentSum * 10 + root.val;

  if (!root.left && !root.right) {
    return currentSum;
  }

  return sumNumbers(root.left, currentSum) + sumNumbers(root.right, currentSum);
};

// link: https://leetcode.com/problems/sum-root-to-leaf-numbers/
// 解題思路：
// 1. 如果沒有root，就回傳0
// 2. 如果沒有左右子樹，表示已經到了葉子，就回傳root.val
// 3. 如果有左子樹，就把root.val * 10 + root.left.val
// 4. 如果有右子樹，就把root.val * 10 + root.right.val
// 5. 重複 1 ~ 4
