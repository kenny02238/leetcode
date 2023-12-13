/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let curTank = 0,
    totalTank = 0,
    startPos = 0;
  for (let i = 0; i < gas.length; i++) {
    curTank += gas[i] - cost[i];
    totalTank += gas[i] - cost[i];
    if (curTank < 0) {
      curTank = 0;
      startPos = i + 1;
    }
  }
  return totalTank >= 0 ? startPos : -1;
};

// link: https://leetcode.com/problems/gas-station/
// 解題思路：
// 1. 首先我們需要了解，如果可以走完全程，那麼gas的總和一定要大於等於cost的總和
// 2. 我們的currTank用來儲存目前的油量，totalTank用來儲存總油量，startPos用來儲存起始位置
// 3. 我們先從第一個站開始(index=0)，若目前的油量扣掉需要消耗的油量可以抵達下一站的話則繼續前進，並且更新currTank(目前的油量)
// 4. 若目前的油量不足以抵達下一站的話，則將currTank歸零，並且將startPos設為下一站的index
//    (因為假設今天我們已經成功抵達第3站，但是發現第三站加的油量無法到達第四站則表示，即便我們把第三站當成startPos，也無法到達第四站，因此我們將startPos設為第四站)
// 5. 那我們要怎麼判斷說跑完一個O(n)的迴圈後，我們是否可以跑完全程呢?
//    我們可以透過totalTank來判斷，如果totalTank大於等於0的話，則表示我們可以跑完全程，並且回傳startPos，否則回傳-1
