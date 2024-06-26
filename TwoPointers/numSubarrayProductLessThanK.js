// Problem Statement #
// Given an array with positive numbers and a target number, find all of its contiguous subarrays whose product is less than the target number.

// Example 1:
 
// Input: [2, 5, 3, 10], target=30 
// Output: [2], [5], [2, 5], [3], [5, 3], [10]
// Explanation: There are six contiguous subarrays whose product is less than the target.
// Example 2:

// Input: [8, 2, 6, 5], target=50 
// Output: [8], [2], [8, 2], [6], [2, 6], [5], [6, 5] 
// Explanation: There are seven contiguous subarrays whose product is less than the target.


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  let left = 0;
  let right = 0;
  let product = 1;
  let output = 0;
  while (left < nums.length) {
    if (!product) {
      product = product * nums[left];
    } else {
      product = product * nums[right];
    }
    if (product < k) {
      right++;
      output++;
    } else {
      left++;
      right = left;
      product = 1;
    }
  }
  return output;
};
