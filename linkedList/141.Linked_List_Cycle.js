/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (!head || !head.next) return false;
  let fast = head.next.next;
  let slow = head.next;
  while (fast) {
    if (fast === slow) {
      return true;
    }
    if (!fast.next || !slow.next) return false;
    fast = fast.next.next;
    slow = slow.next;
  }
  return false;
};

// 解題思路：

// 利用一個一次前進兩格的指標(fast),以及一個前進一格的指標(slow)去判斷
// 若他是一個cycle的話他們兩個遲早會指到同一個Node的特性去找他是否為Cycle
