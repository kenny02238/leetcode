/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  let current = head;
  let prev = null;
  let counter = 1;
  let start;

  // 移動到 left 的前一個節點
  while (counter < left) {
    start = current;
    current = current.next;
    counter++;
  }

  let originalStart = start; // 保留 left 的前一個節點

  // 開始反轉部分
  let tail = current; // 反轉後的尾部節點
  while (counter >= left && counter <= right) {
    let temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
    counter++;
  }

  // 將反轉部分連接回原始鏈表
  if (originalStart) {
    originalStart.next = prev;
  } else {
    head = prev; // 如果 left 是 1，則更新鏈表的頭節點
  }

  tail.next = current; // 將反轉後的尾部節點連接上右邊部分

  return head;
};

// link: https://leetcode.com/problems/reverse-linked-list-ii/
// 解題思路：
// 1. 先找到 left 的前一個節點，接下來將 left 到 right 的節點往回指
// 2. 也就是說假如今天題目是1->2->3->4->5，left=2, right=4
// 3. 我們要做的就是將 2->3->4 反指，變成 4->3->2
// 4. 但是我們要記得，反指後的 2 是反轉後的尾部節點，也就是說 2 的 next 要指向 5
// 5. 而 4 是反轉後的頭部節點，也就是說 1 的 next 要指向 4

// let current = head
// let prev = null
// let counter=1
// let start
// while (current) {
//     let temp = current.next;
//     if(counter>=left&&counter<=right){
//         current.next = prev;
//     }
//     if(counter === left-1){
//         start=current
//     }
//     if(counter === right+1){
//         start.next = current
//     }
//     prev = current;
//     current = temp;
//     counter++
// }
// return head
