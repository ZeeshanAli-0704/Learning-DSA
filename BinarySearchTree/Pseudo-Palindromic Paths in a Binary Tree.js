class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

/**
 * Counts the number of pseudo-palindromic paths in a binary tree.
 * @param {TreeNode} root - The root of the binary tree.
 * @returns {number} - The count of pseudo-palindromic paths.
 */
const pseudoPalindromicPaths = function (root) {
  let count = 0;

  /**
   * Helper function to check if the given path is pseudo-palindromic.
   * @param {number} path - The binary representation of the current path.
   * @returns {boolean} - True if the path is pseudo-palindromic, false otherwise.
   */
  const isPseudoPalindromic = (path) => (path & (path - 1)) === 0;

  /**
   * DFS traversal to explore the binary tree and count pseudo-palindromic paths.
   * @param {TreeNode} node - The current node in the traversal.
   * @param {number} path - The binary representation of the current path.
   */
  const dfs = (node, path) => {
    if (node !== null) {
      path ^= 1 << node.val;

      if (node.left === null && node.right === null) {
        if (isPseudoPalindromic(path)) {
          count++;
        }
      } else {
        dfs(node.left, path);
        dfs(node.right, path);
      }
    }
  };

  // Start the DFS traversal from the root with an initial path of 0.
  dfs(root, 0);

  return count;
};

// Example usage:
const root = new TreeNode(2);
root.left = new TreeNode(3);
root.right = new TreeNode(1);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(1);
root.right.right = new TreeNode(1);

const result = pseudoPalindromicPaths(root);
console.log(result);
