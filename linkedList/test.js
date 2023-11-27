function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var isPalindrome = function (head) {
  let slow = head;
  let fast = head;
  let temp, prev;
  while (fast.next) {
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
  while (slow) {}
};
