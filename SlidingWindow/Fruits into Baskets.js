// Problem Statement #
// Given an array of characters where each character represents a fruit tree, you are given two baskets and your goal is to put maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit.

// You can start with any tree, but once you have started you can’t skip a tree. You will pick one fruit from each tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.

// Write a function to return the maximum number of fruits in both the baskets.

// Example 1:

// Input: Fruit=['A', 'B', 'C', 'A', 'C']
// Output: 3
// Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C']
// Example 2:

// Input: Fruit=['A', 'B', 'C', 'B', 'B', 'C']
// Output: 5
// Explanation: We can put 3 'B' in one basket and two 'C' in the other basket. 
// This can be done if we start with the second letter: ['B', 'C', 'B', 'B', 'C']

var totalFruit = function (fruits) {
  let map = new Map();
  let max = 0;
  let tempArray = [];
  let end = 0;
  let array = fruits;
  let k = 2; // as total fruits is two you can have at a time

  while (array.length > end) {
    const nextChar = array[end];

    if (map.size < k && !map.has(nextChar)) {
      map.set(nextChar, 1);

      end++;
      tempArray.push(nextChar);
    } else if (map.size <= k && map.has(nextChar)) {
      map.set(nextChar, map.get(nextChar) + 1);

      end++;
      tempArray.push(nextChar);
    } else if (map.size === k && !map.has(nextChar)) {
      while (map.size === k) {
        // save the current
        if (tempArray.length > max) {
          max = tempArray.length;
        }

        let startValue = tempArray.shift();
        map.set(startValue, map.get(startValue) - 1);
        if (map.get(startValue) === 0) {
          map.delete(startValue);
        }
      }
    }
  }
  return max > tempArray.length ? max : tempArray.length;
};

console.log(totalFruit([1, 1, 1, 1, 1, 1, 1, 3, 2, 1]));
console.log(totalFruit([1, 2, 1], 2));
console.log(totalFruit([1, 2, 3, 2, 2]));
console.log(totalFruit([0, 1, 2, 2]));
