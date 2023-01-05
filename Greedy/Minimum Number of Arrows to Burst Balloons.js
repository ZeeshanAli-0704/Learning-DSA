/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  // sorting of array based on end time
  points = points.sort(function (a, b) {
    return a[1] - b[1];
  });
  // keeping intial arrow count as 1 becoz we are assuming we need min 1 arrow to burst balloon
  // also as we will start from 1 index to check for remaining means already used 1 arrow before for 0th index
  let noOfArrow = 1;
  let lastEndsAt = points[0][1];
  for (let j = 1; j < points.length; j++) {
    let nextBeginsAt = points[j][0];
    if (nextBeginsAt > lastEndsAt) {
      noOfArrow++;
      lastEndsAt = points[j][1];
    }
  }

  return noOfArrow;
};

console.log(
  findMinArrowShots([
    [10, 16],
    [2, 8],
    [1, 6],
    [7, 12],
  ])
);

console.log(
  findMinArrowShots([
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
  ])
);
