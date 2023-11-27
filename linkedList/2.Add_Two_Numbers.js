/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let newList = new ListNode(0, null);
  let ans = newList;
  let temp = 0;
  while (l1 || l2 || temp) {
    let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + temp;
    temp = sum >= 10 ? 1 : 0;

    newList.next = new ListNode(sum % 10, null);
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
    newList = newList.next;
  }
  return ans.next;
};

// link: https://leetcode.com/problems/add-two-numbers/
// 解題思路: 這題是要把兩個linked list的數字相加，並且回傳一個新的linked list
// 1. 先建立一個新的linked list，並且把他的next指向null
// 2. 建立一個變數temp，用來記錄是否進位
// 3. 用while迴圈，當l1或l2或temp有值時，就繼續迴圈
// 4. 計算l1.val + l2.val + temp，並且把值存到sum中
// 5. 如果sum >= 10，temp = 1，否則temp = 0
// 6. 把sum % 10的值存到newList.next中
// 7. 如果l1有值，l1 = l1.next
// 8. 如果l2有值，l2 = l2.next
// 9. newList = newList.next
// 10. 回傳ans.next，因為ans的第一個節點是0，所以要回傳ans.next
