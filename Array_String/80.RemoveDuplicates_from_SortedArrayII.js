/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let counter = 1,
    leftPt = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[leftPt]) {
      if (counter < 2) {
        counter += 1;
        nums[++leftPt] = nums[i];
      }
    } else {
      counter = 1;
      nums[++leftPt] = nums[i];
    }
  }
  return leftPt + 1;
};
