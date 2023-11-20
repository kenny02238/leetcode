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
var middleNode = function (head) {
  let fastPt = head;
  let slowPt = head;
  while (fastPt && fastPt.next) {
    fastPt = fastPt.next.next;
    slowPt = slowPt.next;
  }
  return slowPt;
};

// link: https://leetcode.com/problems/middle-of-the-linked-list/
// 解題思路：
// 1. 建立一個fastPt和一個slowPt，fastPt每次走兩步，slowPt每次走一步
// 2. 當fastPt走到底時，slowPt剛好走到中間
// 3. 回傳slowPt
// 要注意判斷fast是否到底的條件，因為fast每次走兩步，所以要判斷fast.next是否存在
// 為什麼要同時判斷fast和fast.next是否存在呢？
// 當fast.next不存在時，fast.next.next會出錯
// 又如果fast不存在的話，fast.next出錯則fast.next.next也會出錯

// 這題也可以用array的方式去解，但是效率會比較差
// 例如：
// var middleNode = function(head) {
//     let arr = []
//     while(head){
//         arr.push(head)
//         head=head.next
//     }
//     return arr[Math.floor(arr.length/2)]
// };

// 這題也可以用hash的方式去解，但是效率會比較差
// 例如：
// var middleNode = function(head) {
//     let hash = {}
//     let count = 0
//     while(head){
//         hash[count]=head
//         head=head.next
//         count++
//     }
//     return hash[Math.floor(count/2)]
// };
