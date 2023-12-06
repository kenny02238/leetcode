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
var averageOfLevels = function (root) {
  let sum = [];
  let counts = [];
  const helper = function (node, level = 0) {
    if (!node) return;
    sum[level] = sum[level] ? sum[level] + node.val : node.val;
    counts[level] = counts[level] ? counts[level] + 1 : 1;
    helper(node.left, level + 1);
    helper(node.right, level + 1);
  };
  helper(root);
  let average = sum.map((value, index) => {
    return value / counts[index];
  });
  return average;
};

// link: https://leetcode.com/problems/average-of-levels-in-binary-tree/
// 解題思路：
// 1. 先建立sum和counts array 用來存放每一層的總和 和 node數量
// 2. 利用遞迴去儲存每一層的總和 和 node數量
// 3. 最後再利用map去計算每一層的平均值
//    這樣目前看起來的缺點是空間複雜度較高，因為需要多建立兩個array
//    但是時間複雜度較低，因為只需要一次遞迴就可以完成
//    這樣的寫法是以空間換取時間
//    如果要以時間換取空間，則可以參考下面的寫法
// Compare this snippet from leetcode/BTreeBFS/637.Average_of_Levels_in_BinaryTree.js:
// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {number[]}
//  */
// var averageOfLevels = function (root) {
//   let ans = [];
//   let queue = [];
//   queue.push(root);
//   while (queue.length) {
//     let len = queue.length;
//     let sum = 0;
//     for (let i = 0; i < len; i++) {
//       let node = queue.shift();
//       sum += node.val;
//       if (node.left) queue.push(node.left);
//       if (node.right) queue.push(node.right);
//     }
//     ans.push(sum / len);
//   }
//   return ans;
// };
//
// link: https://leetcode.com/problems/average-of-levels-in-binary-tree/
// 解題思路：
// 1. BFS
// 2. 利用queue來儲存每一層的node
// 3. 每一層的node數量是queue的長度
// 4. 每一層的總和是queue的node.val相加
// 5. 每一層的平均值是總和除以node數量
// 6. 最後將平均值push到ans array中
