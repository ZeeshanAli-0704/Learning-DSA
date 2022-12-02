// https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function (nums) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      let oppositeIndex = nums.includes(-nums[i]) ? nums.indexOf(-nums[i]) : -1;
      if (oppositeIndex > -1) {
        map[nums[i]] = nums[oppositeIndex];
      }
    }
  }

  return Object.keys(map).length > 0 ? Math.max(...Object.keys(map)) : -1;
};

findMaxK([-1, 2, -3, 3]);
findMaxK([-1, 10, 6, 7, -7, 1]);
findMaxK([-10, 8, 6, 7, -2, -3]);
