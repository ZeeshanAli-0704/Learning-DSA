package org.example.binaryTree;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Stack;

public class PreorderTraversalIterative {

    public static List<Integer> preorderTraversal(TreeNode root){
    List<Integer> result = new ArrayList<>();

        Stack<TreeNode> st = new Stack();
        st.push(root);

        while (!st.empty()){
            TreeNode currentNode = st.pop();
            result.add(currentNode.val);

            if(currentNode.right != null){
                st.push(currentNode.right);
            }
            if(currentNode.left != null){
                st.push(currentNode.left);
            }
        }
    return result;
    };

    public static void main(String[] args) {
        List<Integer> input = Arrays.asList(4, 2, 5, 3, -1, 7, 6, -1, 9, -1, -1, 8, -1, 1);
        BuildTree bT = new BuildTree();
        TreeNode root =  bT.buildTree(input);
        List<Integer> preorder = preorderTraversal(root);
        System.out.println("Preorder Traversal: " + preorder);
    }
}
