/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  if (!inorder.length || !postorder.length) return null;
  let root = new TreeNode(postorder.pop());
  let rootIndex = inorder.indexOf(root.val);
  root.left = buildTree(
    inorder.slice(0, rootIndex),
    postorder.slice(0, rootIndex)
  );
  root.right = buildTree(
    inorder.slice(rootIndex + 1),
    postorder.slice(rootIndex)
  );
  return root;
};

// link: https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/
// 解題思路：
// 1. 遞迴，先找出root，再找出左子樹與右子樹，再遞迴找出左子樹的左子樹與右子樹
// 使用postorder.pop()找出root，因為postorder的順序是左子樹->右子樹->root，所以postorder.pop()就是root
// 再利用inorder找出左子樹與右子樹，因為inorder的順序是左子樹->root->右子樹，所以postorder.pop()在inorder的位置就是左子樹的長度
// 同時假設root的index在inorder的index是i，那麼左子樹的長度就是i，也就是postorder需要擷取的長度並且要去除掉root，所以是postorder.slice(0, i)
// 可以這樣理解，postorder的順序是左子樹->右子樹->root，所以假設今天以root為中心他的陣列就會是[左子樹, 右子樹, root]，所以要擷取左子樹的長度就是從0開始擷取到i
// 這裡的i可以利用inorder的順序是左子樹->root->右子樹，所以假設今天以root為中心他的陣列就會是[左子樹, root, 右子樹]，所以要擷取左子樹的長度就是從0開始擷取到i
// 也就是說透過inorder到root的距離我們可以得知postorder的左子樹的長度，也就是postorder.slice(0, i)
// 右子樹就相對簡單，因為postorder和inorder的順序上右子樹都是在最後，所以去除掉root和左子樹的長度剩下的就是右邊子樹
// 最後找到左右子樹其中一個為null時就可以證明他是leaf，所以直接root.left = null; root.right = null;
