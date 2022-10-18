// Given the root of a Binary Search Tree and a target number k, return true if there exist two elements in the BST such that their sum is equal to the given target.

// Example 1:
// Input: root = [5,3,6,2,4,null,7], k = 9
// Output: true

// Example 2:
// Input: root = [5,3,6,2,4,null,7], k = 28
// Output: false

// Approach 1 : Descriptive & easy to understand
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
 * @return {boolean}
 */
var findTarget = function (root, k) {
  // collecting all Element form BST
  let allElements = [];
  // inorder traversal becoz it will give sorted array for simplicity
  function inOrderTraversal(root) {
    if (root === null) {
      return null;
    }
    inOrderTraversal(root.left);
    allElements.push(root.val);
    inOrderTraversal(root.right);
  }
  inOrderTraversal(root);
  // creating map to keep track of all elements
  let map = new Map();
  allElements.forEach((element, index) => {
    map.set(element, index);
  });
  // main loop to check if two values from array can give up the required sum
  for (let i = 0; i < allElements.length; i++) {
    let num = allElements[i];
    let diff = k - num;
    // checking if diff exist in map & also we have to make sure
    // index of current element is not same as of matching element
    if (map.has(diff) && map.get(diff) !== i) {
      return true;
    }
  }
  return false;
};

Approach 2 : Modified the above solution to do it in O(N)
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
 * @return {boolean}
 */
var findTarget = function(root, k) {
     let map= new Map();
    let bool=false;

    const inorder =(root)=>{
        if(root===null) return;
        inorder(root.left);
        if(map.has(k-root.val)){
            bool=true;
        }else{
            map.set(root.val);
        }
        inorder(root.right);  
    }
   inorder(root);
   return bool;
};
