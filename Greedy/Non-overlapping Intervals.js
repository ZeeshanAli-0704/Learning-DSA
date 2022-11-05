// Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

// Example 1:

// Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
// Output: 1
// Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.

// Example 2:
// Input: intervals = [[1,2],[1,2],[1,2]]
// Output: 2
// Explanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.

// Example 3:
// Input: intervals = [[1,2],[2,3]]
// Output: 0
// Explanation: You don't need to remove any of the intervals since they're already non-overlapping.

const eraseOverlapIntervals = (arr) => {
  let selected = [];

  // Sort jobs according to finish time
  arr = arr.sort(function (a, b) {
    return a[1] - b[1];
  });

  // The first activity always gets selected
  let i = 0;
  selected.push(arr[i]);

  for (let j = 1; j < arr.length; j++) {
    /*If this activity has start time greater than or
         equal to the finish time of previously selected
         activity, then select it*/
    if (arr[j][0] >= arr[i][1]) {
      selected.push(arr[j]);
      i = j;
    }
  }
  return arr.length - selected.length;
};

console.log(
  eraseOverlapIntervals([
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 3],
  ])
);

console.log(
  eraseOverlapIntervals([
    [1, 2],
    [1, 2],
    [1, 2],
  ])
);

console.log(
  eraseOverlapIntervals([
    [1, 2],
    [2, 3],
  ])
);
