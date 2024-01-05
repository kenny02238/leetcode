/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  let small = new ListNode(0);
  let large = new ListNode(0);
  let pt1 = small,
    pt2 = large;
  while (head) {
    if (head.val < x) {
      small.next = head;
      small = small.next;
    } else {
      large.next = head;
      large = large.next;
    }
    head = head.next;
  }
  large.next = null;
  small.next = pt2.next;
  return pt1.next;
};

// link: https://leetcode.com/problems/partition-list/
// 解題思路：
// 1. 我們建立兩個新的linkList，一個是small，一個是large
// 2. 然後我們用pt1去指向small的頭，pt2去指向large的頭，用於最後組裝時
// 3. 接下來我們遍歷原本的head（也就是原本的linkList）
// 4. 如果head.val < x，代表我們要把他接到small的後面，然後small往後移動一格
// 5. 如果head.val > x，代表我們要把他接到large的後面，然後large往後移動一格
// 6. 最後我們把large.next = null，因為我們不需要接到small的後面
// 7. 最後我們把small.next = pt2.next，也就是把small接到large的前面
// 8. 最後回傳pt1.next，也就是small的頭
