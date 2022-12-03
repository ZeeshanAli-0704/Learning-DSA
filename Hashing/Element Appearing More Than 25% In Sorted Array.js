// https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/ 

/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function (arr) {
 let numMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (numMap.get(arr[i])) {
      numMap.set(arr[i], numMap.get(arr[i]) + 1);
    } else {
      numMap.set(arr[i], 1);
    }
  }

  for (let [num, count] of numMap) {
    if (count / arr.length > 0.25) {
      return num;
    }
  }
};
