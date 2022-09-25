var findMaxAverage = function (nums, k) {
  let start = 0;
  let max = 0;
  let sum = 0;
  let averageBy = k;

  for (let i = 0; i < k; i++) {
    sum = sum + nums[i];
  }
  max = sum / averageBy;

  for (let i = k; k < nums.length; k++) {
    sum = sum + nums[k] - nums[start];
    start++;
    max = Math.max(max, sum / averageBy);
  }

  return max;
};
