/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
      let capacity = -Infinity;

  let start = 0;
  let end = height.length - 1;

  while (start <= end) {
    let W = end - start;
    let H = Math.min(height[start], height[end]);
    capacity = Math.max(capacity, W * H);

    if (height[start] > height[end]) {
      end--;
    } else {
      start++;
    }
  }

  return capacity;
};
