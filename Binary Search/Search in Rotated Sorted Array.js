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

    if (arr[low] <= arr[mid]) {
      if (arr[low] <= target && target <= arr[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1
      }
    } else {
      if (arr[mid] <= target && target <= arr[high]) {
        low = mid + 1;
      } else {
        high = mid - 1
      }
    }
  }

  return -1;
};

let arr = [4,5,6,7,8,0,1,2];
let target = 3;

console.log(search(arr, target))
