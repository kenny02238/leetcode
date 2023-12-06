/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (!root || root === p || root === q) return root;
  let checkLeft = lowestCommonAncestor(root.left, p, q);
  let checkRight = lowestCommonAncestor(root.right, p, q);
  return checkLeft && checkRight ? root : checkLeft || checkRight;
};

// link: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
// 解題思路：
// 1. 先將整顆樹分成左右，使用checkLeft和checkRight來遞迴去找左右子樹是否有p或q
// 2. 假設今天左子樹找到一個節點p，那就直接停止去檢查是否右邊子樹有找到q
// 3. 如果右子樹也有找到q，那就回傳共有的ancestor，因為假設最先找到節點的左子樹他的遞迴就會停在離他最近的root那一次
//    並且等待右邊子樹的遞迴去找q，無論在多深的地方找到q，還是會需要回傳依照左子樹的root去找到的共同ancestor
// 4. 如果右子樹沒有找到q，那就可以確定除了目前這一輪遞迴找到的root.left為p之外，右子樹也沒有找到q，那q就肯定在ｐ的更下方
//    因此可以直接判斷她的共同ancestor就會是p
