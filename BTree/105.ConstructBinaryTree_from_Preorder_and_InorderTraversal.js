/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (!preorder.length || !inorder.length) return null;
  let root = new TreeNode(preorder[0]);
  if (preorder.length === 1 || inorder.length === 1) {
    root.left = null;
    root.right = null;
  } else {
    let rootIndex = inorder.indexOf(preorder[0]);
    root.left = buildTree(
      preorder.slice(1, rootIndex + 1),
      inorder.slice(0, rootIndex)
    );
    root.right = buildTree(
      preorder.slice(rootIndex + 1),
      inorder.slice(rootIndex + 1)
    );
  }
  return root;
};
// link: https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
// 解題思路：
// 1. 遞迴，先找出root，再找出左子樹與右子樹，再遞迴找出左子樹的左子樹與右子樹
// 使用preorder[0]找出root，因為preorder的順序是root->左子樹->右子樹，所以preorder[0]就是root
// 再利用inorder找出左子樹與右子樹，因為inorder的順序是左子樹->root->右子樹，所以preorder[0]在inorder的位置就是左子樹的長度
// 同時假設root的index在inorder的index是i，那麼左子樹的長度就是i，也就是preorder需要擷取的長度並且要去除掉root，所以是preorder.slice(1, i+1)
// 可以這樣理解，preorder的順序是root->左子樹->右子樹，所以假設今天以root為中心他的陣列就會是[root, 左子樹, 右子樹]，所以要擷取左子樹的長度就是從1開始擷取到i+1
// 這裡的i可以利用inorder的順序是左子樹->root->右子樹，所以假設今天以root為中心他的陣列就會是[左子樹, root, 右子樹]，所以要擷取左子樹的長度就是從0開始擷取到i
// 也就是說透過inorder到root的距離我們可以得知preorder的左子樹的長度，也就是preorder.slice(1, i+1)
// 右子樹就相對簡單，因為preorder和inorder的順序上右子樹都是在最後，所以去除掉root和左子樹的長度剩下的就是右邊子樹

// 2. 如果找到inorder和preorder都剩下一個元素時就可以證明他是leaf，所以直接root.left = null; root.right = null;
