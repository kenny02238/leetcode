/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  if (points.length === 0) {
    return 0;
  }

  points.sort((a, b) => a[1] - b[1]);

  let temp = points[0][1];
  let ans = 1;

  for (let i = 1; i < points.length; i++) {
    if (points[i][0] > temp) {
      ans += 1;
      temp = points[i][1];
    }
  }

  return ans;
};

// link: https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/
// 解題思路：
// 1. 將points依照右邊界排序，因為只要知道右邊的邊界，我就可以判斷假設curr氣球的左邊界是否大於temp的右邊界
//    如果大於，代表curr氣球和temp氣球沒有重疊，所以temp要更新為curr的右邊界，並且答案加一
//    為什麼不用理會左邊界呢?
//    ex. temp=[4,5] curr=[x,6]，此時我們只要判斷x是否大於5
//        若x<=5, curr=[1,6]，那肯定找得到一個點可以刺破兩個氣球
//        我們再次舉一個例子curr=[5,6]，此時還是找得到一個點可以刺破兩個氣球因為curr[0]<=5
//        那我們舉例一個curr=[6,7]，此時就找不到一個點可以刺破兩個氣球，因為curr[0]>5
