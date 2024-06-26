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
 * @return {boolean}
 */
var isEvenOddTree = function (root) {
  let stack = [root];
  let level = 1;

  while (stack.length > 0) {
    let prev = level % 2 === 0 ? Infinity : -Infinity;

    for (let i = stack.length - 1; i >= 0; i--) {
      let node = stack.shift();

      if (level % 2 === 0 && (node.val % 2 !== 0 || prev <= node.val))
        return false;
      else if (level % 2 !== 0 && (node.val % 2 === 0 || prev >= node.val))
        return false;

      if (node.left) stack.push(node.left);
      if (node.right) stack.push(node.right);

      prev = node.val;
    }

    level++;
  }

  return true;
};
