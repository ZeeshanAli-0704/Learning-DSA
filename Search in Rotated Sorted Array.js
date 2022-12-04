// https://leetcode.com/problems/search-in-rotated-sorted-array/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = parseInt((low + high) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    // check search in first Half & as low  < mid mean it is sorted
    if (arr[low] <= arr[mid]) {
      if (target <= arr[mid] && target >= arr[low]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    // search in upperHalf
    else {
      if (target <= arr[high] && target >= arr[mid]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }

  return -1;
};
