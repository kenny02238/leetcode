/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let l = 0;
  let r = height.length - 1;
  let lmax = 0;
  let rmax = 0;
  let res = 0;
  while (l < r) {
    lmax = Math.max(lmax, height[l]);
    rmax = Math.max(rmax, height[r]);
    res += lmax - height[l];
    res += rmax - height[r];
    height[l] < height[r] ? l++ : r--;
  }
  return res;
};

// link: https://leetcode.com/problems/trapping-rain-water/
// 解題思路：
// 1. 雙指針，左右各一個，並且記錄左側最大值與右側最大值
// 2. 這題應用了一個特別的方法，假設左側每一次都是往上走的那他的lmax-height[l]相減就會是0，因為一路往上走的話表示左側沒有比lmax還要高的，所以就不會有水可以儲存
// 3. 相同的右側也是這樣的想法，但透過height[l]<height[r] 來判斷右側是否有相對應高度的柱子，有的話才可以裝水。
// 4. 也就是說若左側的柱子都比較高那就從右側往左走，反之亦然。然後再透過如果一路都是往上走則lmax-height[l]就會是0，若突然有往下走(可以裝水的空間)並且左右兩側都有柱子
//    就透過 res += lmax - height[l] 和 res += rmax - height[r] 來計算可以裝水的空間。
