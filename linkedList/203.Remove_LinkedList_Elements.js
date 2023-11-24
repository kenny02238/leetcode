/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let result = new ListNode(-1, null);
  let ans = result;
  if (!head) return null;
  while (head) {
    if (head.val !== val) {
      ans.next = new ListNode(head.val, null);
      ans = ans.next;
    }
    head = head.next;
  }
  return result.next;
};

//link: https://leetcode.com/problems/remove-linked-list-elements/
//解題思路：
//用一個新的linkedlist去存沒有val的node
//Time complexity: O(n)
//Space complexity: O(n)

// 其他解法：
// 1. Recursive
// var removeElements = function (head, val) {
//   if (!head) return null;
//   head.next = removeElements(head.next, val);
//   return head.val === val ? head.next : head;
// };
//解題思路：
//遞迴，如果head.val === val，就回傳head.next，否則就回傳head
//Time complexity: O(n)
//Space complexity: O(n)
