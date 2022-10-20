

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
var isBalanced = function(root) {
    let flag = true;
    
    var height = function(r){
        if(!r) return 0;
    
        let num1 = height(r.left);
        let num2 = height(r.right);
        let res = num1 - num2;
    
        if(res < -1 || res > 1) flag = false;
    
    return Math.max(num1,num2) + 1;
    }
    
    height(root);
    return flag;
};
