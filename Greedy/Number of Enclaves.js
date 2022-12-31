
/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function (grid) {
  if (!grid.length) return;

  let n = grid.length;
  let m = grid[0].length;

  const isValid = (i, j, n, m, grid) => {
    if (i >= 0 && i < n && j >= 0 && j < m && grid[i][j] == "1") {
      return true;
    }
    return false;
  };

  const callDFS = (grid, i, j, n, m) => {
    grid[i][j] = "0";

    if (isValid(i + 1, j, n, m, grid)) {
      callDFS(grid, i + 1, j, n, m);
    }
    if (isValid(i - 1, j, n, m, grid)) {
      callDFS(grid, i - 1, j, n, m);
    }
    if (isValid(i, j + 1, n, m, grid)) {
      callDFS(grid, i, j + 1, n, m);
    }
    if (isValid(i, j - 1, n, m, grid)) {
      callDFS(grid, i, j - 1, n, m);
    }
  };

  for (let i = 0; i < n; i++) {
    // left -> top bottom
    let j = 0;
    if (grid[i][j] == 1) {
      callDFS(grid, i, j, n, m);
    }

    j = m - 1;
    // right -> top bootm
    if (grid[i][j] == 1) {
      callDFS(grid, i, j, n, m);
    }
  }

  for (let j = 0; j < m; j++) {
    // top -> left right
    let i = 0;
    if (grid[i][j] == 1) {
      callDFS(grid, i, j, n, m);
    }

    i = n - 1;
    // bottom -> left right
    if (grid[i][j] == 1) {
      callDFS(grid, i, j, n, m);
    }
  }

  let count = 0;
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < m; c++) {
      if (grid[r][c] === 1) {
        count++;
      }
    }
  }
  return count;
};


console.log(numEnclaves([[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]]));
