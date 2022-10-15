/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    // BFS Level Order
  // Learning this method will help with all level order problems, graphs and trees

  if (!root) return []; // Edge case if root is null

  // First we have a queue intialized with the root
  let q = [root];
  let res = []; // our result array

  while (q.length) {
    // BFS continues till the queue is empty
    const len = q.length; // We need a helper variable for our inner level for loop, this helps us only process for this level

    // This loop is for processing all queue items on each LEVEL of the tree
    const levelArray = []; // Used to hold all values from this level
    for (let i = 0; i < len; i++) {
      const n = q.shift(); // We get first item in queue
      levelArray.push(n.val); // Push node value to the levelArray

      // We need to queue up all the children of the current node, if they exist
      n.left && q.push(n.left);
      n.right && q.push(n.right);
      // The above is the same as:
      // if(n.left) q.push(n.left)
    }

    // Once we process all nodes for this level, push levelArray to result array
    res.push(levelArray);
  }

  return res.reverse();
};
