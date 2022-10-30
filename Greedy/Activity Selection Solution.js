// Problem:
// You are given n activities with their start and finish times. Select the maximum number of activities that can be performed by a single person, assuming that a person can only work on a single activity at a time. 

// Examples:  

// Input: start[]  =  {10, 12, 20}, finish[] =  {20, 25, 30}
// Output: 0 2
// Explanation: A person can perform at most two activities. The 
// maximum set of activities that can be executed 
// is {0, 2} [ These are indexes in start[] and finish[] ]

// Input: start[]  =  {1, 3, 0, 5, 8, 5}, finish[] =  {2, 4, 6, 7, 9, 9};
// Output: 0 1 3 4
// Explanation: A person can perform at most four activities. The 
// maximum set of activities that can be executed 
// is {0, 1, 3, 4} [ These are indexes in start[] and finish[]



// [[5, 9], [1, 2], [3, 4], [0, 6],[5, 7], [8, 9]];
const MaxActivities = (arr, n) => {
  let selected = [];

  // Sort jobs according to finish time
  arr = arr.sort(function (a, b) {
    return a[1] - b[1];
  });

  // The first activity always gets selected
  let i = 0;
  selected.push(arr[i]);

  for (let j = 1; j < n; j++) {
    /*If this activity has start time greater than or
         equal to the finish time of previously selected
         activity, then select it*/
    if (arr[j][0] >= arr[i][1]) {
      selected.push(arr[j]);
      i = j;
    }
  }
  return selected;
};

console.log(
  MaxActivities(
    [
      [5, 9],
      [1, 2],
      [3, 4],
      [0, 6],
      [5, 7],
      [8, 9],
    ],
    6
  )
);
