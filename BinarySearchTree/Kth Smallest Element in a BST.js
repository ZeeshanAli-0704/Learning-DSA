// Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

// Example 1:
// Input: root = [3,1,4,null,2], k = 1
// Output: 1

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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let count = 0;
    let kthNode = null;

  function inOrderTraversal(node) {
    if (node === null) {
      return;
    }
    inOrderTraversal(node.left);
    count++;
    if (count === k) {
        kthNode = node.val
      return;
    }
    inOrderTraversal(node.right);
  }

  inOrderTraversal(root);
    return kthNode;
   
};
