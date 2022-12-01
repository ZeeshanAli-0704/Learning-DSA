// https://leetcode.com/problems/minimum-index-sum-of-two-lists/

/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  let map = {};
  let minSum = Infinity;

  for (let i = 0; i < list1.length; i++) {
    if (list2.includes(list1[i])) {
      let indexInL1 = i;
      let indexInL2 = list2.indexOf(list1[i]);
      let sum = indexInL1 + indexInL2;
      minSum = Math.min(sum, minSum);
      map[list1[i]] = sum;
    }
  }

  let array = [];

  for (const [key, value] of Object.entries(map)) {
    if (value === minSum) {
      array.push(key);
    }
  }

  return array;
};

findRestaurant(
  ["Shogun", "Tapioca Express ", "Burger King", "KFC"],
  [
    "Piatti KFC",
    "The Grill at Torrey Pines",
    "Hungry Hunter Steakhouse",
    "Shogun",
  ]
);

findRestaurant(
  ["Shogun", "Tapioca Express", "Burger King", "KFC"],
  ["KFC", "Shogun", "Burger King"]
);

findRestaurant(["happy", "sad", "good"], ["sad", "happy", "good"]);
