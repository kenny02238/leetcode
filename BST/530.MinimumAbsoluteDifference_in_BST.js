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
var getMinimumDifference = function (root) {
  let min = Infinity,
    prev = -Infinity;
  const dfs = function (node) {
    if (!node) return;
    dfs(node.left);
    if (prev < 0) {
      prev = node.val;
    } else {
      min = Math.min(node.val - prev, min);
      prev = node.val;
    }
    dfs(node.right);
  };
  dfs(root);
  return min;
};

// link: https://leetcode.com/problems/minimum-absolute-difference-in-bst/

// 解題思路：
// 由於是 BST，比root小的數字都在左邊，比root大的數字都在右邊
// 因此我們可以知道用 中序遍歷(inOrder，left->root->right) 可以得到一個由小到大的排序
// 我們寫一個dfs的中序遍歷，並且用一個變數 prev 來記錄前一個數字
// 這樣我們就可以在遍歷的過程中，比較當前數字與前一個數字的差值，就會是彼此之間最小的絕對差值
