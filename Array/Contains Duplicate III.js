/**
 * @param {number[]} nums
 * @param {number} indexDiff
 * @param {number} valueDiff
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, indexDiff, valueDiff) {
  let start = 0;
  let end = 1;

  while (start < nums.length) {
    if (Math.abs(start - end) <= indexDiff) {
      if (Math.abs(nums[start] - nums[end]) <= valueDiff) {
        return true;
      }
      end++;
    } else {
      start = start + 1;
      end = start + 1;
    }
  }
  return false;
};
