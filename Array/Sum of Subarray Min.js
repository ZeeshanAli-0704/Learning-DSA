/**
 * @param {number[]} arr
 * @return {number}
 */

var sumSubarrayMins = function (arr) {
  let result = 0,
    mod = 1000000007;
  for (let i = 0; i < arr.length; i++) {
    let min = arr[i];
    result += min;
    for (let j = i + 1; j < arr.length; j++) {
      let min_result = arr[j] < min ? arr[j] : min;
      result += min_result;
      min = min_result;
    }
  }
  return result % mod;
};

/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function (arr) {
  const length = arr.length;
  const left = new Array(length).fill(-1);
  const right = new Array(length).fill(length);
  const stack = [];

  for (let i = 0; i < length; ++i) {
    while (stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i]) {
      stack.pop();
    }
    if (stack.length > 0) {
      left[i] = stack[stack.length - 1];
    }
    stack.push(i);
  }

  stack.length = 0;

  for (let i = length - 1; i >= 0; --i) {
    while (stack.length > 0 && arr[stack[stack.length - 1]] > arr[i]) {
      stack.pop();
    }
    if (stack.length > 0) {
      right[i] = stack[stack.length - 1];
    }
    stack.push(i);
  }

  let sum = 0;

  for (let i = 0; i < length; ++i) {
    sum += ((i - left[i]) * (right[i] - i) * arr[i]) % (1e9 + 7);
    sum %= 1e9 + 7;
  }

  return sum;
};
