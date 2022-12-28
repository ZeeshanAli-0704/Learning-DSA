

/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
var maximumBags = function (capacity, rocks, additionalRocks) {
  let arr = [];
  let ans = 0;

  for (let i = 0; i < capacity.length; i++) {
    arr.push([capacity[i], rocks[i], capacity[i] - rocks[i]]);
  }
  // sorting in ascending order on the based of remaining capacity (capacity[i] - rocks[i])
  // sorting so thart maximum full bags can be filled one with less reamining capacity wil be filled firsrt
  arr.sort((a, b) => a[2] - b[2]);

  for (let i = 0; i < arr.length; i++) {
    let [cap, rock, rem] = arr[i];
    if (cap - rock == 0) {
      // full capacity
      ans++;
    } else {
      // remaining capacity
      let temp = cap - rock;

      if (additionalRocks > 0 && temp <= additionalRocks) {
        additionalRocks -= temp;
        ans++;
      }
    }
  }

  return ans;
};

console.log(
  maximumBags(
    [
      54, 18, 91, 49, 51, 45, 58, 54, 47, 91, 90, 20, 85, 20, 90, 49, 10, 84,
      59, 29, 40, 9, 100, 1, 64, 71, 30, 46, 91,
    ],
    [
      14, 13, 16, 44, 8, 20, 51, 15, 46, 76, 51, 20, 77, 13, 14, 35, 6, 34, 34,
      13, 3, 8, 1, 1, 61, 5, 2, 15, 18,
    ],
    77
  )
);
