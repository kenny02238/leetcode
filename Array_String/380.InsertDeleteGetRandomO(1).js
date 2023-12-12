var RandomizedSet = function () {
  this.map = new Map();
  this.arr = [];
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.map.has(val)) return false;
  this.map.set(val, this.arr.length);
  this.arr.push(val);
  return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (!this.map.has(val)) return false;
  const temp = this.map.get(val);
  const tempLastIndex = this.arr.length - 1;
  const tempLastNum = this.arr[tempLastIndex];

  this.arr[tempLastIndex] = this.arr[temp];
  this.arr[temp] = tempLastNum;
  this.map.set(tempLastNum, temp);
  this.arr.pop();
  this.map.delete(val);
  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const random = Math.floor(Math.random() * this.arr.length);
  return this.arr[random];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

// link: https://leetcode.com/problems/insert-delete-getrandom-o1/
// 解題思路：
// 1. 使用map紀錄val對應的index
// 2. 使用arr紀錄val
// 3. insert時，如果map已經有val，代表已經存在，回傳false
// 4. 如果map沒有val，代表不存在，將val放入map，並且將val放入arr，回傳true
// 5. remove時，如果map沒有val，代表不存在，回傳false
// 6. 如果map有val，代表存在，將val對應的index取出，在arr中與最後一個數字交換，並且將最後一個數字pop出來
// 7. 最後將map中的index的val更新，因為要arr有交換過並且pop出去，所以要更新map中的index
// 8. 最後將val從map中刪除，回傳true
// 9. getRandom時，隨機取出arr中的一個數字
