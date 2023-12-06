// -----------------------這是第一次寫的版本，但是不符合題目要求的空間複雜度-----------------------
//------------------------因為題目要求空間複雜度為O(h)，h為樹的高度，這個寫法會是O(n)，n為樹的Node數量-----------------------
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
 */
var BSTIterator = function (root) {
  this.stack = [];
  let inOrderMapNode = (node) => {
    if (node) {
      inOrderMapNode(node.left);
      this.stack.push(node.val);
      inOrderMapNode(node.right);
    }
  };
  inOrderMapNode(root);
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  return this.stack.shift();
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  return this.stack.length !== 0;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
// 解題思路：
// 1. 當root傳進來之後，先用inOrderMapNode這個function透過inOrder的方式把所有的node的值都放進stack裡面
// 2. next()的時候，把stack的第一個值shift出來
// 3. hasNext()的時候，檢查stack的長度是否為0，如果是0的話就代表沒有下一個了，反之則有
// 4. 這個寫法的空間複雜度為O(n)，n為樹的Node數量，不符合題目要求的空間複雜度為O(h)，h為樹的高度

// -----------------------這是第二次寫的版本，符合題目要求的空間複雜度-----------------------
//------------------------題目要求空間複雜度為O(h)，h為樹的高度-----------------------

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
 */
var BSTIterator = function (root) {
  this.stack = [];

  this.pushAllLeft = (node) => {
    while (node) {
      this.stack.push(node);
      node = node.left;
    }
  };
  this.pushAllLeft(root);
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  let currentNode = this.stack.pop();
  this.pushAllLeft(currentNode.right);
  return currentNode.val;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  return this.stack.length !== 0;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

// link: https://leetcode.com/problems/binary-search-tree-iterator/
// 解題思路：
// 1. 這個解法是先將所有的左邊的node都放進stack，是從root開始放進去的，這樣方便之後next()的時候，直接pop出來就是inOrder要的值
//    pop()會比shift()快，因為pop()是從最後面拿，shift()是從最前面拿，而且pop()的時間複雜度是O(1)，shift()的時間複雜度是O(n)
// 2. next()的時候，先把stack最上面的node pop出來，然後再把這個node的右邊node和他所有左邊node都push進stack裡面
//    會要這樣拆開來做的目的是為了保持這個stack的順序是inOrder的順序且空間複雜度為O(h)，h為樹的高度
// 3. hasNext()的時候，檢查stack的長度是否為0，如果是0的話就代表沒有下一個了，反之則有
