/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertGreatestCommonDivisors = function (head) {
  if (!head) return head;
  let current = head;
  while (current && current.next) {
    let val = findGreatestCommonDivisor(current.val, current.next.val);
    let node = new ListNode(val, current.next);
    current.next = node;
    current = current.next.next;
  }
  return head;
};

function findGreatestCommonDivisor(a, b) {
  if (!b) return a;
  else {
    return findGreatestCommonDivisor(b, a % b);
  }
}

// link: https://leetcode.com/problems/insert-greatest-common-divisors-in-linked-list/description/
// 解題思路：
// 用一個current去存head，當current和current.next存在時，就把current和current.next的最大公因數插入中間
// Time complexity: O(n)
// 這題主要要注意的是，找最大公因數的寫法，這邊用的是輾轉相除法
// 可以看一下輾轉相除法如果用recusion寫的話，會是什麼樣子
