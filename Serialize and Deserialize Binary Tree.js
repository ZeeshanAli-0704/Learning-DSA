// Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

// Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

// Input: root = [1,2,3,null,null,4,5]
// Output: [1,2,3,null,null,4,5]
// Example 2:

// Input: root = []
// Output: []
/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  let result = [];
  const dfs = (r) => {
    if (!r) {
      result.push("N");
      return;
    }
    result.push(r.val);
    dfs(r.left);
    dfs(r.right);
  };
  dfs(root);
  return result.join(",");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  const vals = data.split(",");
  const dfs = (stream) => {
    const item = stream.shift();
    if (item == "N") {
      return null;
    }
    const node = new TreeNode(item);
    node.left = dfs(stream);
    node.right = dfs(stream);
    return node;
  };

  return dfs(vals);
};
