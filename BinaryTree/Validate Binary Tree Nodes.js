// https://leetcode.com/problems/validate-binary-tree-nodes/

/**
 * @param {number} n
 * @param {number[]} leftChild
 * @param {number[]} rightChild
 * @return {boolean}
 */
var validateBinaryTreeNodes = function (n, leftChild, rightChild) {
  const findRootNode = (LC, RC) => {
    const root = 0;
    const children = new Set([...LC, ...RC]);

    for (let i = 0; i < n; i++) {
      if (!children.has(i)) root = i;
    }

    return root;
  };
  //  this function is needed becoz it is not mentioned that zero is root always.
  // hence we have to check out of left & right array which is missing number that will be root
  const root = findRootNode(leftChild, rightChild);
  const visited = new Set();
  const queue = [root];

  while (queue.length) {
    const len = queue.length;

    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      // this is to keep track of where we have visited that node in past... if visited before that means
      // it is part of tree already & cannot be added

      if (visited.has(node)) return false;

      visited.add(node);

      // add nodes to queue to visit later
      if (leftChild[node] !== -1) queue.push(leftChild[node]);
      if (rightChild[node] !== -1) queue.push(rightChild[node]);
    }
  }

  // if valid tree: visited = number of node
  // all nodes are visited exactly once from 0 to n - 1 nodes
  return visited.size === n;
};
