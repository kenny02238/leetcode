/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let map = new Map();
  let pt1 = 0,
    pt2 = 0;
  let tCount = t.length;
  let ans = "";

  for (let char of t) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  while (pt2 < s.length) {
    if (map.has(s[pt2])) {
      if (map.get(s[pt2]) > 0) {
        tCount -= 1;
      }
      map.set(s[pt2], map.get(s[pt2]) - 1);
    }

    while (tCount === 0 && pt1 <= pt2) {
      let tempString = s.slice(pt1, pt2 + 1);
      if (!ans || tempString.length < ans.length) {
        ans = tempString;
      }
      if (map.has(s[pt1])) {
        map.set(s[pt1], map.get(s[pt1]) + 1);
        if (map.get(s[pt1]) > 0) {
          tCount += 1;
        }
      }
      pt1++;
    }

    pt2++;
  }

  return ans;
};

// link: https://leetcode.com/problems/minimum-window-substring/

// 解題思路：
// 1. 我們先將t的字元和出現的次數記錄在map裡面
// 2. 我們透過sliding window的方式來找到最小的subString
// 3. 我們先將pt2往右邊移動直到它包含了t的所有字元，並且過程中用tCount去測試是否已經包含所有t的字元
//    而不是去每一次都檢查Map內所有的key, value是否為零<<從而降低時間複雜度>>
// 4. 當找到一個subString後將其跟ans比較，若比ans短則更新ans
// 5. 接著開始將pt1往右邊移動，直到找到第一個含有t的字元的位置，並且將tCount加回來
//    ex: 假設今天找到一串字元 t="ABC" tempString="ADOBEC"，那麼我們就要將pt1往右邊移動直到找到第一個含有t的字元的位置
//        也就是pt1 = 1，"DOBEC"，並且將tCount加回來，且Map中要把數字加回去，
//        然後pt2就繼續往右邊移動直到找到剛剛才被pt1移除的含在t裡面的字元"DOBECODEBA"，
// 6. 大致上來說想法就是pt2往右邊去尋找包含所有t字元的字串，pt1去負責縮小到最小可以包含到所有t字元的字串
