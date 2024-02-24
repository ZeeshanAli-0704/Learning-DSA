/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
  let firstRow = matrix[0];
  let r = matrix.length;
  let c = matrix[0].length;

  let minsum = Infinity;
  let map = {};

  const callDFSUtil = (row, col, sum = 0) => {
    if (map[row + "_" + col]) {
      return map[row + "_" + col];
    }
    if (row >= r || col >= c || row < 0 || col < 0) {
      return Infinity;
    }
    if (row === r - 1) {
      return matrix[row][col];
    }
    map[row + "_" + col] = Math.min(
      matrix[row][col] + callDFSUtil(row + 1, col - 1),
      matrix[row][col] + callDFSUtil(row + 1, col),
      matrix[row][col] + callDFSUtil(row + 1, col + 1)
    );
    return map[row + "_" + col];
  };

  for (let i = 0; i < firstRow.length; i++) {
    let value = callDFSUtil(0, i);
    minsum = Math.min(value, minsum);
  }
  return minsum;
};

console.log(
  minFallingPathSum([
    [2, 1, 3],
    [6, 5, 4],
    [7, 8, 9],
  ])
);

console.log(
  minFallingPathSum([
    [-19, 57],
    [-40, -5],
  ])
);
