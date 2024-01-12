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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let temp = [];
  const dfs = function (node) {
    if (!node) return;
    dfs(node.left);
    temp.push(node.val);
    dfs(node.right);
  };
  dfs(root);
  return temp[k - 1];
};
// Solution 1：
// link: https://leetcode.com/problems/kth-smallest-element-in-a-bst/
// 解題思路：
// 由於是 BST，比root小的數字都在左邊，比root大的數字都在右邊
// 我們透過中序遍歷(inOrder，left->root->right) 可以得到一個由小到大的排序
// 直接返回第 k - 1 個數字即可

var kthSmallest = function (root, k) {
  let temp = [];
  const dfs = function (node) {
    if (!node || temp.length === k) return;
    dfs(node.left);
    if (temp.length === k) return;
    temp.push(node.val);
    if (temp.length === k) return;
    dfs(node.right);
  };
  dfs(root);
  return temp[temp.length - 1];
};

// Solution 2：
// link: https://leetcode.com/problems/kth-smallest-element-in-a-bst/
// 解題思路：
// 我們這個解法，透過檢查目前的節點，是否為第 k 個節點
// 如果是，就直接停止遞迴，並且返回目前節點的值
