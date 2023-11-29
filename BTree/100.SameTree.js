/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (!p && !q) return true;
  if (!p || !q || p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// link: https://leetcode.com/problems/same-tree/
// 解題思路：
// 1. 遞迴
// 2. 如果p和q都是null，則回傳true
// 3. 如果p或q其中一個是null，則回傳false
// 4. 如果p和q的值不相等，則回傳false
// 5. 如果p和q的值相等，則繼續遞迴下去，直到p和q都是null，則回傳true
