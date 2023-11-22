/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let ATemp = headA;
  let BTemp = headB;

  if (!headA || !headB) return null;
  while (headA !== headB) {
    headA = headA ? headA.next : BTemp;
    headB = headB ? headB.next : ATemp;
  }
  return headA;
};

// link: https://leetcode.com/problems/intersection-of-two-linked-lists/
// 解題思路：
// 兩個指針，一個指向A，一個指向B，當A走到底時，指向B，當B走到底時，指向A，當兩個指針相等時，就是交集點
// 這樣的好處是，兩個指針走的路徑長度是一樣的，所以一定會在交集點相遇
// Time complexity: O(m+n)
// Space complexity: O(1)
