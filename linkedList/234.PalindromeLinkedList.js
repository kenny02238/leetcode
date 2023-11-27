/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let slow = head;
  let fast = head;
  let temp, prev;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  (prev = slow), (slow = slow.next), (prev.next = null);
  while (slow) {
    temp = slow.next;
    slow.next = prev;
    prev = slow;
    slow = temp;
  }
  (fast = head), (slow = prev);
  while (slow) {
    if (fast.val !== slow.val) return false;
    else (fast = fast.next), (slow = slow.next);
  }
  return true;
};

// link: https://leetcode.com/problems/palindrome-linked-list/
// 解題思路：
// 1. 利用一個fast指針和一個slow指針，fast每次走兩步，slow每次走一步，當fast走到底時，slow就會走到中間(Floyd's Tortoise and Hare)
// 2. 利用prev搭配slow，將slow後面的node的next指向前面的node，這樣就可以反轉後半段的linkedlist
//    (在反轉前須將prev.next設為null，作為後續判斷的結束條件，也就是說由後往前的linkedlist的最後一個node的next為null)
// 3. 將fast指向head，slow指向prev(因為slow已經指向反轉後的linkedlist的最後一個node會是null，所以要指向prev)
// 4. 比較fast和slow的val，如果不相等就回傳false，否則就繼續比較
