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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  let ans = [];
  const helper = function (node, level = 0) {
    if (!node) return;
    if (!ans[level]) ans[level] = [];
    if (level % 2 === 0) {
      ans[level].push(node.val);
    } else {
      ans[level].unshift(node.val);
    }
    helper(node.left, level + 1);
    helper(node.right, level + 1);
  };
  helper(root);
  return ans;
};

// link: https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
// 解題思路：
// 1. 利用helper function來遞迴
// 2. 如果node不存在，則return
// 3. 如果node存在，則將node.val放入ans[level]中，因為它需要zigzag，所以需要判斷level是否為偶數
//    如果是偶數，則直接push，如果是奇數，則unshift
// 4. 並且繼續遞迴下去，level+1
