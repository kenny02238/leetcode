/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let ansLength = m + n - 1;
  let mLength = m - 1;
  let nLength = n - 1;
  while (nLength >= 0) {
    if (mLength >= 0 && nums1[mLength] > nums2[nLength]) {
      nums1[ansLength--] = nums1[mLength--];
    } else {
      nums1[ansLength--] = nums2[nLength--];
    }
  }
  return nums1;
};

// link: https://leetcode.com/problems/merge-sorted-array/
// 解題思路：
// 1. 由於從前面開始比較後去更動nums1原陣列會有很多位移的問題，所以從後方大的開始放會比較方便
// 2. 基於題目給的m和n，可以知道nums1的長度為m+n，所以從m+n-1開始放（index是從0開始）
// 3. 接下來就是各自比較值，去擺放在相對的位置，若nums2需要的值已經放完了，則不用再比較也不用做其他動作，因為nums1剩下的值已經在正確的位置上了
// 4. 還有一種情況會是nums2的值一個都還沒放進去nums1的值就已經放完了，後面就只要依序再把nums2的值放進去就好
