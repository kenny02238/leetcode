/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  citations.sort((a, b) => b - a);
  let ans = 0;
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] >= i + 1) ans = i + 1;
    else break;
  }
  return ans;
};

// link: https://leetcode.com/problems/h-index/
// 解題思路：
// 1. 先將citations排序
// 2. 題目是要找出h-index，意思是有h篇文章的引用次數大於等於h次
//    舉例來說如果給[100]，代表有一篇文章被引用了100次，依照上方h-index的定義，h-index=1(有1篇文章的引用次數大於等於1次)
//    也就是說我們透過排序之後依照index+1去判斷目前判斷到的文章數量
//    假設index=0，那就是目前判斷到了一篇文章他要至少大於等於1次，如果大於等於1次，那就是h-index=1
//    因此我用降序排序，這樣就可以從大到小去判斷，如果citations[i]>=i+1，那就是h-index=i+1
//    舉例來說：[100, 99, 0, 0, 0]，排序之後[100, 99, 0, 0, 0]
//    for迴圈判斷每層依序如下：
//    i=0，citations[0]=100，100>=0+1，ans=1
//    i=1，citations[1]=99，99>=1+1，ans=2
//    i=2，citations[2]=0，0<2+1，break
//    因此答案為2(總共有2篇文章的引用次數大於等於2次)
