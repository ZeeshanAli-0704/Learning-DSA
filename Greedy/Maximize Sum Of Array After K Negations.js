// Given an integer array nums and an integer k, modify the array in the following way:

// choose an index i and replace nums[i] with -nums[i].
// You should apply this process exactly k times. You may choose the same index i multiple times.

// Return the largest possible sum of the array after modifying it in this way.

// Example 1:

// Input: nums = [4,2,3], k = 1
// Output: 5
// Explanation: Choose index 1 and nums becomes [4,-2,3].

// Example 2:

// Input: nums = [3,-1,0,2], k = 3
// Output: 6
// Explanation: Choose indices (1, 2, 2) and nums becomes [3,1,0,2].

// Example 3:

// Input: nums = [2,-3,-1,5,-4], k = 2
// Output: 13
// Explanation: Choose indices (1, 4) and nums becomes [2,3,-1,5,4].
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
  let sortedNums = nums.sort((a, b) => a - b);

  let negative = sortedNums.filter((eachNum) => eachNum < 0);
  let positive = sortedNums.filter((eachNum) => eachNum >= 0);
  let index = 0;
  while (index < negative.length) {
    if (k > 0) {
      negative[index] = -1 * negative[index];
      k--;
    }
    if (k === 0) break;
    index++;
  }
  console.log(index, negative.length, k);
  if (index === negative.length && k > 0) {
    sortedNums = negative.concat(positive)?.sort((a, b) => a - b);
    if (k % 2 !== 0) {
      sortedNums[0] = -sortedNums[0];
    }
    return sortedNums?.reduce((acc, each) => acc + each, 0);
  } else {
    if (k % 2 !== 0) {
      positive[0] = -positive[0];
    }
    return negative.concat(positive)?.reduce((acc, each) => acc + each, 0);
  }
};

console.log(largestSumAfterKNegations([4, 2, 3], 1));

console.log(largestSumAfterKNegations([2, -3, -1, 5, -4], 2));

console.log(largestSumAfterKNegations([-8, 3, -5, -3, -5, -2], 6))
