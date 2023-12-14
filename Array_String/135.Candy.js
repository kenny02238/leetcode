/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  let n = ratings.length;
  let up = 0,
    down = 0,
    total = 1,
    peak;
  for (let i = 1; i < n; i++) {
    if (ratings[i] > ratings[i - 1]) {
      up++;
      down = 0;
      total += 1 + up;
      peak = up;
    } else if (ratings[i] == ratings[i - 1]) {
      up = down = peak = 0;
      total += 1;
    } else {
      down = up > 0 ? 0 : down + 1;
      total += up > 0 ? 1 : 1 + down;
      total += peak && down >= peak ? 1 : 0;
      up = 0;
    }
  }
  return total;
};

// link: https://leetcode.com/problems/candy/
// 解題思路：
// 1. 這題需要用圖解來理解，如果下降的時候我們在建立下降的三角形，同時間要判斷這個下降三角形的高度是否大於上一個上升三角形的高度，如果是的話，則需要在上升三角形的頂點加一顆糖果
// 2. 若上升時就很簡單只要建立上升三角形並記錄每次上升時三角形的最高點，以便下降時判斷是否需要在頂點加一顆糖果
// 3. 這題還需要考慮一點，若array一開始就是下降的在之前並沒有上升的三角形，那麼peak(上升三角形的頂點)就會是undefined，所以在計算總和時需要判斷peak是否存在，若不存在則不需要在頂點加一顆糖果
