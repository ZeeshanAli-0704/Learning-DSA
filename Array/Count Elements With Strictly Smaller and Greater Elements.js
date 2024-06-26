/**
 * @param {number[]} nums
 * @return {number}
 */

// Given an integer array nums, return the number of elements that have both a strictly smaller and a strictly greater element appear in nums.

// https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements/

// Example 1:

// Input: nums = [11,7,2,15]
// Output: 2
// Explanation: The element 7 has the element 2 strictly smaller than it and the element 11 strictly greater than it.
// Element 11 has element 7 strictly smaller than it and element 15 strictly greater than it.
// In total there are 2 elements having both a strictly smaller and a strictly greater element appear in nums.
// Example 2:

// Input: nums = [-3,3,3,90]
// Output: 2
// Explanation: The element 3 has the element -3 strictly smaller than it and the element 90 strictly greater than it.
// Since there are two elements with the value 3, in total there are 2 elements having both a strictly smaller and a strictly greater element appear in nums.


var countElements = function(arr) {
  let nums = [...arr].sort((a, b) => a - b);
  if (nums.length <= 2) {
    return 0;
  }
  let count = 0;
  for (let i = 1; i < nums.length - 1; i++) {
    let firstHalf = nums.slice(0, i);
    let secondHalf = nums.slice(i + 1, nums.length);
    let current = nums[i];
    if (Math.min(...firstHalf) < current && current < Math.max(...secondHalf)) {
      count++;
    }
  }
    return count
};
