/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxProfit = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i + 1] - prices[i] > 0) maxProfit += prices[i + 1] - prices[i];
  }
  return maxProfit;
};
// link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
// 解題思路：
// 1. 貪婪算法
// 2. 此題重點為，若第一天買第五天賣，事實上等於第一天買第二天賣、第二天買第三天賣、第三天買第四天賣、第四天買第五天賣
//    所以我們只要取得每一天的利潤不論是正或負，只要是正的就加起來就是最大利潤
