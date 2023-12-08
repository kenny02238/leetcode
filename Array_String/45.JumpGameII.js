/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  if (nums.length === 1) return 0;
  let count = 0,
    maxCover = 0,
    tempCover = 0;
  for (let i = 0; i <= maxCover; i++) {
    if (i + nums[i] > maxCover) {
      maxCover = i + nums[i];
      if (maxCover >= nums.length - 1) {
        return count + 1;
      }
    }
    if (tempCover === i) {
      tempCover = maxCover;
      count += 1;
    }
  }
};

// link: https://leetcode.com/problems/jump-game-ii/
// 解題思路：
// 1. 這題我們要找到達終點最短的跳躍次數
// 2. 我們利用每一次跳躍可以到達的最大距離來計算
//    例如[2,3,1,1,4]，第一次跳躍可以到達的最大距離為2
//    我們就將tempCover設為2，並且count加1
//    然後我們再繼續利用tempCover以前的元素來計算第二次跳躍可以到達的最大距離
//    假設我們今天正在計算第二次跳躍可以到達的最大距離時突然發現某一種方法可以到達終點那就是直接返回count+1
//    因為我們此時此刻的count會是1，而是正在計算第二次跳躍可以到達的最大距離時發現可以到達終點
//    因為我們還沒有計算到tempCover的位置所以count此時是1，那當我們在過程中突然發現可以到達終點
//    那我們就直接停止計算並且返回count+1
