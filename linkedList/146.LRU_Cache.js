class Node {
  constructor(key = 0, value = 0) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.dummy = new Node();
  this.dummy.prev = this.dummy;
  this.dummy.next = this.dummy;
  this.hashTable = new Map();
};

LRUCache.prototype.pushFront = function (node) {
  node.prev = this.dummy;
  node.next = this.dummy.next;
  node.prev.next = node;
  node.next.prev = node;
};
LRUCache.prototype.remove = function (node) {
  node.prev.next = node.next;
  node.next.prev = node.prev;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (!this.hashTable.has(key)) {
    return -1;
  } else {
    const temp = this.hashTable.get(key);
    this.remove(temp);
    this.pushFront(temp);
    return temp.value;
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.hashTable.has(key)) {
    const temp = this.hashTable.get(key);
    this.remove(temp);
    this.pushFront(temp);
    temp.value = value;
    return;
  } else {
    let newNode = new Node(key, value);
    this.hashTable.set(key, newNode);
    this.pushFront(newNode);
    if (this.hashTable.size > this.capacity) {
      const backNode = this.dummy.prev;
      this.hashTable.delete(backNode.key);
      this.remove(backNode);
    }
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

// link: https://leetcode.com/problems/lru-cache/
// 解題思路：
// 1. 所謂LRU(Least Recently Used)就是最近最少使用，也就是說我們要把最近最少使用的元素刪掉
// 2. 這題我是使用雙向鏈結串接，並且用hashTable來儲存每個key對應的node(hashedDoubleLinkedList)
// 3. 我們透過在最後面建立一個哨兵(dummy node)，然整個linkedList變成一個環狀
//    也就是dummy.next會指向整個linkedList的頭，dummy.prev會指向整個linkedList的尾
//    透過這樣我們可以很方便地在頭尾進行操作
// 4. 因為他的put以及get都需要O(1))的時間複雜度，所以做法是透過hashTable來儲存每個key對應的node
//    這樣在get的時候可以直接查找hashTable。至於需要判斷是否超過capacity，我們可以透過hashTable的size來判斷。
//    linkedList的移除元素也可以透過dummy直接把最後一個元素刪掉，也就是dummy.prev
//    hashedTable則直接使用delete，進行O(1)的刪除
// 5. 針對LRU Cache的特性，我們需要把最近使用的node放在linkedList的最前面，也就是dummy.next
//    所以當她今天被get的時候，我們先去判斷是否有存在在hashTable中，如果有的話，我們就把他從linkedList中取出來
//    取出來後透過dummy節點把他放在最前面，也就是dummy.next，並且更新此node的value
// 6. 如果今天是put，我們也是先去判斷是否有存在在hashTable中，如果有的話，我們就把他從linkedList中取出來
//    取出來後透過dummy節點把他放在最前面，也就是dummy.next，並且更新此node的value
//    如果沒有的話，我們就建立一個新的node，並且把他放在linkedList的最前面，也就是dummy.next
//    並且把此node放進hashTable中，如果此時hashTable的size已經超過capacity，我們就把最後一個元素刪掉(因為他會是最少使用的)

//解題重點： Least Recently Used，就是把最近使用的放在最前面，最少使用的放在最後面，如果今天linkedList已經滿了，就把最少用的元素
//         也就是最後一個元素刪掉，然後把新的元素放在最前面。
//         至於做set or put的過程中因為題目要求時間要是O(1)，所以我們需要用hashTable來儲存每個key對應的node，這樣才能在O(1)的時間複雜度
//         (hashedDoubleLinkedList)
