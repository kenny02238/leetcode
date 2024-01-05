/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head || !k || !head.next) return head;
  let currPt = head;
  let linkListLength = 1;
  while (currPt.next) {
    currPt = currPt.next;
    linkListLength++;
  }
  if (k % linkListLength == 0) {
    return head;
  }
  currPt.next = head;
  let count = linkListLength - (k % linkListLength);
  while (count) {
    currPt = currPt.next;
    count--;
  }
  let ans = currPt.next;
  currPt.next = null;

  return ans;
};

// link: https://leetcode.com/problems/rotate-list/
// 解題思路：
// 1. 先把linkList接成一個環狀，做法是先遍歷一遍linkList到最後一個元素，並且把最後一個元素的next指向head
//    同時間計算整體linkList的長度
// 2. 如果linkList的長度可以整除k，那麼代表我們不需要rotate，直接return head
// 3. 假設我們需要rotate，看似題目給的k假設是2是要rotate兩個元素
//    但是因為我們現在的pointer指在最後一個元素，我們要利用環狀的特性直接靠pointer去切出我們需要的linkList
//    而不是想像中的去切到頭部再串接上去
// 4. 假設我們今天有一個[1, 2, 3, 4, 5]的linkList，我們要rotate 2個元素
//    我們現在已經建立了環狀，我們可以知道我們pointer要指在4這個元素，一路走一個環狀
//    也就會是[4,5,1,2,3]，此時再將我們最後尾巴地方的next指向null，就可以切出我們需要的linkList
// 5. 我們現在知道要這樣做了，那我們就知道目前pointer是在最後一個元素，我們需要走的次數就會是
//    整體linklist的長度 - (k % linkListLength)
//    以上面的例子來說就是5 - (2 % 5) = 3，代表我們要走3次，也就是走到3這個元素
//    但剛剛明明說要從四開始切呀，為啥走到3就可以了呢？
//    因為我們要留一個指標在這邊去做最後的.next = null，所以我們要走到3
//    最後我們建立一個ans指向currPt.next，也就是4，然後currPt.next = null，就可以切出我們需要的linkList
