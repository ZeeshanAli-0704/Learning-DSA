// https://leetcode.com/problems/unique-number-of-occurrences/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  const hashmap = {};

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (hashmap[item]) {
      hashmap[item] = hashmap[item] + 1;
    } else {
      hashmap[item] = 1;
    }
  }

  const values = Object.values(hashmap);
  const set = new Set(values);
  return set.size === values.length;
};
