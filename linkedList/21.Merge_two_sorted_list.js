/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let merged = new ListNode(0, null);
  let result = merged;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      merged.next = l1;
      merged = merged.next;
      l1 = l1.next;
    } else {
      merged.next = l2;
      merged = merged.next;
      l2 = l2.next;
    }
  }
  merged.next = l1 || l2;
  return result.next;
};

// 解題思路：
// 1. 建立一個新的ListNode(merged)來存放結果
// 2. 建立一個指標(result)來指向merged的頭部
// 3. 用while迴圈去判斷l1和l2的值，若l1的值小於l2的值，則將l1的值放入merged中，並將l1往下一個node，反之則將l2的值放入merged中，並將l2往下一個node
// 4. 最後將merged的next指向l1或l2（因為停止迴圈後，將剩餘的node全部接到尾端），並回傳result.next
