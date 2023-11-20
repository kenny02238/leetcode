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
var reverseList = function (head) {
  let current = head;
  let prev = null;
  while (current) {
    let temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }
  return prev;
};

// link: https://leetcode.com/problems/reverse-linked-list/
// 解題思路：
// 1. 用一個變數current來記錄目前的節點
// 2. 用一個變數prev來記錄目前節點的前一個節點
// 3. 用一個變數temp來記錄目前節點的下一個節點
// 4. 用while迴圈來走訪整個linked list
// 5. 在迴圈中，先把current的下一個節點記錄在temp中
// 6. 把current的下一個節點指向prev
// 7. 把prev指向current
// 8. 把current指向temp
// 9. 回到第4步，直到current為null
// 10. 回傳prev
