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
 * @return {number[]}
 */
var rightSideView = function (root) {
  let ans = [];
  const helper = function (node, level = 0) {
    if (!node) return;
    ans[level] = node.val;
    helper(node.left, level + 1);
    helper(node.right, level + 1);
  };
  helper(root);
  return ans;
};

// link: https://leetcode.com/problems/binary-tree-right-side-view/
// 解題思路：
// 1. 先建立一個ans array 用來存放答案
// 2. 建立一個遞迴函式，並且帶入node和level
// 3. 如果node不存在，則回傳，利用level來定位ans index，因為level是從0開始，剛好可以透過這樣去儲存每一層數的答案
// 4. helper function需要先跑左子樹，再跑右子樹，因為若同一層有存在右子樹，則需要覆蓋掉左子樹的值
// 5. 等於透過先儲存左側子樹的值，再儲存右側子樹的值，就可以達到只覆蓋右子樹到他的深度的值，若左側子樹有更深的值，則不會被覆蓋
