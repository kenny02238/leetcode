/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
  let result = 0;
  while (head) {
    result = result * 2 ** 1 + head.val * 2 ** 0;
    //result = result*Math.pow(2,1) + head.val*Math.pow(2,0)
    head = head.next;
  }
  return result;
};

// link: https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/
// 解題思路：
// 1. 建立一個result來存放結果
// 2. 用while迴圈去判斷head是否存在，若存在則將result乘以2，並加上head.val
// 為什麼上面的算法可以得到正確的結果呢？
// 因為每當數字被往左推一個位數時，他的值會變成原本的兩倍，所以我們可以利用這個特性去計算，並且加上自己本身的2的0次方值
// 例如：1->0->1
// 第一次迴圈：result = 2的1次方*0 + 2的0次方*1 = 1
// 第二次迴圈：result = 2的1次方*1 + 2的0次方*0 = 2
// 第三次迴圈：result = 2的1次方*2 + 2的0次方*1 = 5
// 3. 回傳result
// 4. 這題也可以用遞迴的方式去解，但是效率會比較差

// 例如：
// var getDecimalValue = function(head) {
//     let result = 0;
//     const helper = (head) => {
//         if(!head) return;
//         result = result*2**1 + head.val*2**0;
//         helper(head.next);
//     }
//     helper(head);
//     return result;
// };
// 5. 這題也可以用stack的方式去解，但是效率會比較差
// 例如：
// var getDecimalValue = function(head) {
//     let result = 0;
//     let stack = [];
//     while(head){
//         stack.push(head.val);
//         head = head.next;
//     }
//     for(let i=0;i<stack.length;i++){
//         result += stack[i]*2**(stack.length-i-1);
//     }
//     return result;
// };
// 6. 這題也可以用string的方式去解，但是效率會比較差
// 例如：
// var getDecimalValue = function(head) {
//     let result = 0;
//     let str = '';
//     while(head){
//         str += head.val;
//         head = head.next;
//     }
//     for(let i=0;i<str.length;i++){
//         result += str[i]*2**(str.length-i-1);
//     }
//     return result;
// };
