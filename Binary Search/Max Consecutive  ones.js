
// https://leetcode.com/problems/max-consecutive-ones-iii/description/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
     let start = 0;
  let next = 0;
  let end = nums.length;
  let index = 0;
  let maxOnes = -Infinity;

  while (next < end) {
    let element = nums[index];

    if (k > 0) {
      if (element === 0) {
        k--;
      }
      maxOnes = Math.max(maxOnes, next - start + 1);
      next++;
      index++;
    }else 
    if (k === 0) {
      if (element === 1) {
        maxOnes = Math.max(maxOnes, next - start + 1);
        next++;
        index++;
      } else if (nums[start] === 1) {
        start++;
      } else if (nums[start] === 0) {
        start++;
        k++;
      }
    }
  }

  return maxOnes 
};
