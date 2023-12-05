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
var maxPathSum = function (root) {
  let max = -Infinity;
  const findMaxSum = function (node) {
    if (!node) return 0;
    let left = findMaxSum(node.left),
      right = findMaxSum(node.right),
      allSum = node.val + left + right,
      leftSum = left + node.val,
      rightSum = right + node.val;

    max = Math.max(max, allSum, leftSum, rightSum, node.val);
    return Math.max(node.val, leftSum, rightSum);
  };
  findMaxSum(root);
  return max;
};

// link: https://leetcode.com/problems/binary-tree-maximum-path-sum/
// 解題思路：
// 1. 先建立一個max變數，用來存放最大值
// 2. 建立一個findMaxSum function，用來找到最大值
// 3. findMaxSum內，若node不存在，就回傳0(若node不存在就表示找到底了，所以回傳0)
// 4. findMaxSum內，會回傳左側sum、右側sum、以及node本身的val，三個裡面的最大值
//    因為他要找的最大值是只能走過同個node一次，所以只能選左側sum、右側sum、以及node本身的val
//    也就是說要馬他的最大值會是從左側走到右側類似inOrder的走法也就是left + node.val + right
//    不然就會是從左側走到node再繼續往上走類似preOrder的走法也就是left + node.val
//    或是從右側走到node再繼續往上走類似postOrder的走法也就是right + node.val
// 5. 所以我們在findMaxSum內會建立5個變數，分別是left、right、allSum、leftSum、rightSum
//    left、right分別是左側sum、右側sum(這個是用來記錄往左邊子樹走的最大值、往右邊子樹走的最大值)
//    allSum是left + node.val + right(這個是用來記錄往左邊子樹走的最大值、往右邊子樹走的最大值、以及node本身的val的總和)
//    leftSum是left + node.val(這個是用來記錄往左邊子樹走的最大值、以及node本身的val的總和)
//    rightSum是right + node.val(這個是用來記錄往右邊子樹走的最大值、以及node本身的val的總和)
// 6. max要找出allSum、leftSum、rightSum、node.val這四個裡面的最大值記錄起來
