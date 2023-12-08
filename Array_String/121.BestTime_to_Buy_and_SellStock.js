// ----------第一種解法是貪婪算法，只要遍歷一次就可以得到最大利潤，時間複雜度為O(n)----------------

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let lowerPrice = prices[0];
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    lowerPrice = Math.min(lowerPrice, prices[i]);
    profit = Math.max(profit, prices[i] - lowerPrice);
  }
  return profit;
};
// link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
// 解題思路：
// 1. 貪婪算法
// 2. 重點是維護這個最小值（貪心的思想）
// 3. 用一個變數來存最小值，用另一個變數來存最大利潤
// 4. 遍歷一次就可以得到最大利潤
