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
var isValidBST = function (root) {
  let temp = [],
    ans = true;
  let dfs = function (node) {
    if (!node) return;
    dfs(node.left);
    if (node.val <= temp[temp.length - 1]) return (ans = false);
    temp.push(node.val);
    dfs(node.right);
  };
  dfs(root);
  return ans;
};
// Solution 1：
// link: https://leetcode.com/problems/validate-binary-search-tree/
// 解題思路：
// 這題我們透過中序遍歷(inOrder，left->root->right) 可以得到一個由小到大的排序
// 我們只要檢查是否為由小到大的排序即可
// 這邊我們使用一個 temp 來存放中序遍歷的結果
// 並且每次檢查當前的節點是否大於 temp 的最後一個數字
// 如果不是，就代表不是由小到大的排序，返回 false
// 如果是，就把當前的數字放入 temp
