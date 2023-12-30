/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  let ans = [];
  intervals.sort((a, b) => a[0] - b[0]);
  let temp = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    let curr = intervals[i];
    if (temp[1] >= curr[0]) {
      temp[1] = Math.max(temp[1], curr[1]);
    } else {
      ans.push(temp);
      temp = curr;
    }
  }
  ans.push(temp);
  return ans;
};

// link: https://leetcode.com/problems/merge-intervals/
// 解題思路：
// 1. 我們先將intervals排序，依照第一個數字的大小
//    這樣可以確保每一個interval的最小值會是依照大小排列
// 2. 我們透過一個temp去紀錄目前有重疊的interval的最大值以及最小值
//    因為我們已經排序過，所以可以把每一次的第一個interval[0]作為當次temp的最小值
// 3. 判斷兩個interval是否重疊的方法是，將temp的最大值與當前interval的最小值比較
//    如果temp最大值大於等於當前interval的最小值，則表示有重疊
//    我們就可以再將temp的最大值與當前的interval最大值比較，取最大值
//    ex: temp = [1,3], curr = [2,4]
//        直接將 1設定為最小值，又因為3大於等於2，所以有重疊
//        此時我們比較3與4，取最大值4，並且將temp更新為[1,4]
//        若下一個interval為[5,6]，則temp[1] < curr[0]，則表示沒有重疊
//        倘若下一個interval為[4,7]，則temp[1] >= curr[0]，則表示有重疊
//        此時我們比較temp[1]與curr[1]，取最大值7，並且將temp更新為[1,7]
// 4. 最後結束的時候將處理到一半的temp放入ans中，並且回傳ans
//    因為已經處理到最後一個了就直接將temp放入ans中
