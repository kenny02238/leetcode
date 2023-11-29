/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let nullHead = new ListNode(-1, head);
  let fast = nullHead,
    slow = nullHead;

  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }
  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return nullHead.next;
};

// link: https://leetcode.com/problems/remove-nth-node-from-end-of-list/
// 解題思路：
// 1. 用雙指針，fast 先走 n 步，slow 再開始走，當 fast 走到底時，slow 就會走到倒數第 n 個節點
// 2. 這時候只要將 slow.next 指向 slow.next.next 就可以了
