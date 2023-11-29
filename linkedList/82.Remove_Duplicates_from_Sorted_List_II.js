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
var deleteDuplicates = function (head) {
  let nullNode = new ListNode(-1, head);
  let prev = nullNode;
  let current = nullNode.next;

  while (current && current.next) {
    if (prev.next.val === current.next.val) {
      while (current && prev.next.val === current.val) {
        current = current.next;
      }
      prev.next = current;
    } else {
      prev = prev.next;
      current = current.next;
    }
  }
  return nullNode.next;
};

// link: https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/
// 解題思路：
// 1. 用雙指針，prev 指向當前節點的前一個節點，current 指向當前節點
// 2. 如果 prev.next.val === current.next.val，表示有重複的節點
// 3. 這時候就要移動 current，直到 current 的值不等於 prev.next.val
// 4. 這時候 prev.next 就要指向 current，表示 prev.next 這個節點要被刪除
// 5. 如果 prev.next.val !== current.next.val，表示沒有重複的節點
// 6. 這時候 prev 跟 current 都要往前移動
