/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function (nums, target) {
  let sortedNums = nums.sort((a, b) => a - b);
  let firstOccurance = -1;
  let lastOccurance = -1;

  firstOccurance = searchFirstOccurance(sortedNums, target);
  if (firstOccurance === -1) {
    return [];
  } else {
    lastOccurance = searchLastOccurance(sortedNums, target);
  }

  if (firstOccurance !== lastOccurance) {
    let tempArray = [];
    for (let i = firstOccurance; i <= lastOccurance; i++) {
      tempArray.push(i);
    }
    return tempArray;
  } else if (firstOccurance !== -1) {
    return [firstOccurance];
  }
};
var searchFirstOccurance = function (nums, target) {
  let high = nums.length - 1;
  let low = 0;

  while (low <= high) {
    let mid = parseInt((low + high) / 2);

    if (nums[mid] > target) {
      high = mid - 1;
    } else if (nums[mid] < target) {
      low = mid + 1;
    } else {
      if (mid === 0 || nums[mid - 1] !== nums[mid]) {
        return mid;
      } else {
        high = mid - 1;
      }
    }
  }

  return -1;
};
var searchLastOccurance = function (nums, target) {
  let high = nums.length - 1;
  let low = 0;

  while (low <= high) {
    let mid = parseInt((low + high) / 2);

    if (nums[mid] > target) {
      high = mid - 1;
    } else if (nums[mid] < target) {
      low = mid + 1;
    } else {
      if (mid === nums.length - 1 || nums[mid] !== nums[mid + 1]) {
        return mid;
      } else {
        low = mid + 1;
      }
    }
  }

  return -1;
};

console.log(targetIndices([1, 2, 5, 2, 3], 4));
