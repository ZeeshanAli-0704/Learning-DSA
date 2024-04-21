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
 * @return {number}
 */
var deepestLeavesSum = function (root) {
  let q = [root];

  let finalSum = 0;

  while (q.length) {
    let Qlen = q.length;
    let nextQ = [];
    for (let i = 0; i < Qlen; i++) {
      let element = q[i];
      if (element.left) {
        nextQ.push(element.left);
      }
      if (element.right) {
        nextQ.push(element.right);
      }
    }
    if (nextQ.length === 0) {
      for (let i = 0; i < q.length; q++) {
        finalSum = finalSum + q.value;
      }
    }

    return finalSum;
  }
};
