var MinStack = function () {
  this.stack = [];
  this.minStack = [Infinity];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val);
  this.minStack.push(Math.min(this.minStack[this.minStack.length - 1], val));
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.pop();
  this.minStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minStack[this.minStack.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

// link: https://leetcode.com/problems/min-stack/
// 解題思路：
// 1. 用兩個stack，一個是正常的stack，另一個是紀錄最小值的stack
// 2. push時，正常stack直接push，最小值stack則是判斷目前最小值與新值的大小，取較小者push進去
//    ex: [2,3,4,5,6,7,8,1] => [2,2,2,2,2,2,2,1]
//    也就是每一次都比較目前最小值與新值的大小，取較小者push進去，這樣會有一個情況就是，如果最小值被pop掉了，那麼最小值stack的最後一個值就會是第二小的值
// 3. pop時，兩個stack都pop
// 4. top時，回傳正常stack的第一個值
// 5. getMin時，回傳最小值stack的最後一個值

// 補充：如果不用兩個Stack去儲存的話可以用一個Stack同時儲存value和minValue，這樣就不用額外的Stack去儲存minValue了
