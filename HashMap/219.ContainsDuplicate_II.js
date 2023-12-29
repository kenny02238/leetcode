/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let min = Infinity;
  let memo = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (memo.has(nums[i])) {
      if (i - memo.get(nums[i])[0] < memo.get(nums[i])[1]) {
        min = Math.min(min, i - memo.get(nums[i])[0]);
        memo.set(nums[i], [i, i - memo.get(nums[i])[0]]);
      } else {
        memo.set(nums[i], [i, memo.get(nums[i])[1]]);
      }
    } else {
      memo.set(nums[i], [i, Infinity]);
    }
  }
  return min <= k;
};

// link: https://leetcode.com/problems/contains-duplicate-ii/
// 解題思路：
// 1. 建立一個map，key為數字，value為陣列，陣列第一個值為索引，第二個值為距離
// 2. 如果map已經有這個key，則比較當前索引與map的value[0]的差值，如果小於map的value[1]，則更新map的value
// 3. 如果map沒有這個key，則建立一個新的key，並且將當前索引放入map的value中
// 4. 最後回傳min是否小於等於k

// Solution 2:
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const hashTable = new Map();

  for (let i = 0; i < nums.length; i++) {
    // if(!hashTable.has[nums[i]]){
    //     hashTable.set(nums[i],i)
    //     continue
    // }
    if (hashTable.has(nums[i])) {
      if (i - hashTable.get(nums[i]) <= k) return true;
    }
    hashTable.set(nums[i], i);
  }
  return false;
};

// link: https://leetcode.com/problems/contains-duplicate-ii/
// 解題思路：
// 1. 建立一個map，key為數字，value為索引
// 2. 如果map已經有這個key，則比較當前索引與map的value的差值，如果小於等於k，則回傳true
// 3. 如果map沒有這個key，則建立一個新的key，並且將當前索引放入map的value中
