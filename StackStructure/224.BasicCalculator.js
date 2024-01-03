/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  let stack = [1];
  let sign = 1;
  let ans = 0;
  const length = s.length;
  let i = 0;
  while (i < length) {
    if (s[i] === " ") {
      i++;
    } else if (s[i] === "+") {
      sign = stack[stack.length - 1];
      i++;
    } else if (s[i] === "-") {
      sign = -stack[stack.length - 1];
      i++;
    } else if (s[i] === "(") {
      stack.push(sign);
      i++;
    } else if (s[i] === ")") {
      stack.pop();
      i++;
    } else {
      let num = 0;
      while (s[i] !== " " && !isNaN(Number(s[i])) && i < length) {
        num = num * 10 + s[i].charCodeAt() - "0".charCodeAt();
        i++;
      }
      ans += sign * num;
    }
  }
  return ans;
};

// link: https://leetcode.com/problems/basic-calculator/
// 解題思路：
// 1. 用stack來儲存目前整體的括號狀態，用sign來儲存目前的正負號
// 2. 以"(1+(4+5+2)-3)+(6+8)" 為例子
//    一開始為正，所以sign = 1，stack = [1]
//    遇到"("，所以push sign進stack，stack = [1, 1]，意思就是說此括號最後算出來的數字要再乘上正1
//    遇到1我們直接算出來ans+=sign*num，ans = 1（由於此括號的stack目前是正1，所以sign在算的時候會乘上正1)
//    遇到"+"，所以sign = stack[stack.length-1]，也就是說sign = 1，代表下一個數字要加上正1
//    遇到"("，所以push sign進stack，stack = [1, 1, 1]，意思就是說此括號最後算出來的數字要再乘上正1
//    遇到4我們直接算出來ans+=sign*num，ans = 5（由於此括號的stack目前是正1，所以sign在算的時候會乘上正1)
//    遇到"+"，所以sign = stack[stack.length-1]，也就是說sign = 1，代表下一個數字要加上正1
//    遇到5我們直接算出來ans+=sign*num，ans = 10（由於此括號的stack目前是正1，所以sign在算的時候會乘上正1)
//    遇到"+"，所以sign = stack[stack.length-1]，也就是說sign = 1，代表下一個數字要加上正1
//    遇到2我們直接算出來ans+=sign*num，ans = 12（由於此括號的stack目前是正1，所以sign在算的時候會乘上正1)
//    遇到")"，所以stack.pop()，stack = [1, 1]，代表此括號已經算完了，所以要把stack最後一個數字拿掉
//    遇到"-"，所以sign = -stack[stack.length-1]，也就是說sign = -1，代表下一個數字要加上負1
//    遇到3我們直接算出來ans+=sign*num，ans = 9（由於此括號的stack目前是負1，所以sign在算的時候會乘上負1)
//    遇到")"，所以stack.pop()，stack = [1]，代表此括號已經算完了，所以要把stack最後一個數字拿掉
//    就這樣依序下去，若範例是給-(1+2+3)那麼我們可以依照stack目前的狀態來判斷正負號
//    也就是說，若stack目前是[1, 1, -1]，那麼代表我們正在算的數字即便是+法最終也是會扣掉，那如果是-法我們也會透過sign*num來轉換他的算法
