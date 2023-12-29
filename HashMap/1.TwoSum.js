/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const numsMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    let targetNumber = target - nums[i];
    if (numsMap.has(targetNumber)) {
      return [numsMap.get(targetNumber), i];
    } else {
      numsMap.set(nums[i], i);
    }
  }
};

// link: https://leetcode.com/problems/two-sum/
// 解題思路：
// 1. 建立一個map，key為數字，value為索引
// 2. 用目標值減去當前值，得到的值作為map的key
// 3. 如果map已經有這個key，則回傳map的value和當前索引
// 4. 如果map沒有這個key，則建立一個新的key，並且將當前索引放入map的value中
