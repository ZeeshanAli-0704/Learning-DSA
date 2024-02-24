/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  let visitedMatrix = Array(m).fill(Array(n).fill(false));

  let map = new Map();

  const DFSUtil = (row, col) => {
    if (row < 0 || col < 0 || row >= m || col >= n || visitedMatrix[row][col]) {
      return 0;
    }
    if (map.has(row + "_" + col)) {
      return map.get(row + "_" + col);
    }
    if (row === m - 1 && col === n - 1) {
      return 1;
    }

    map.set(row + "_" + col, DFSUtil(row + 1, col) + DFSUtil(row, col + 1));

    return map.get(row + "_" + col);
  };

  return DFSUtil(0, 0);
};

console.log(uniquePaths(3, 7));
console.log(uniquePaths(3, 2));
