// Given the root of a binary tree, calculate the vertical order traversal of the binary tree.

// For each node at position (row, col), its left and right children will be at positions (row + 1, col - 1) and (row + 1, col + 1) respectively. The root of the tree is at (0, 0).

// The vertical order traversal of a binary tree is a list of top-to-bottom orderings for each column index starting from the leftmost column and ending on the rightmost column. There may be multiple nodes in the same row and same column. In such a case, sort these nodes by their values.

// Return the vertical order traversal of the binary tree.

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: [[9],[3,15],[20],[7]]
// Explanation:
// Column -1: Only node 9 is in this column.
// Column 0: Nodes 3 and 15 are in this column in that order from top to bottom.
// Column 1: Only node 20 is in this column.
// Column 2: Only node 7 is in this column.


const verticalTraversal = function (root) {
  const columnToValue = {};
  let que = [[root, 0]];

  while (que.length) {
    let len = que.length;
    let newQue = [];
    for (let i = 0; i < len; i++) {
      let [node, idx] = que[i];
      // Populate hash-table
      if (!columnToValue[idx]) {
        columnToValue[idx] = [];
      }
      columnToValue[idx].push(node.val);
      // create next-level
      if (node.left) newQue.push([node.left, idx - 1]);
      if (node.right) newQue.push([node.right, idx + 1]);
    }
    que = newQue.sort((a, b) => a[0].val - b[0].val); // sort by node-value
  }
  return Object.keys(columnToValue)
    .sort((a, b) => a - b)
    .map((el) => columnToValue[el]); //sort by column
};
