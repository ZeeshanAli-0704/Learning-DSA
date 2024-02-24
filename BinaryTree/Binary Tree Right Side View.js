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
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (root.length) {
    let queue = [root];
    let result = [];

    while (queue.length) {
      result.push(queue[queue.length - 1]?.val);
      let Qlen = queue.length;
      let levelQ = [];

      for (let i = 0; i < Qlen; i++) {
        let nextNode = queue[i];
        if (nextNode && nextNode.left) {
          levelQ.push(nextNode.left);
        }
        if (nextNode && nextNode.right) {
          levelQ.push(nextNode.right);
        }
      }
      queue = levelQ;
    }
    return result;
  }
  return [];
};
