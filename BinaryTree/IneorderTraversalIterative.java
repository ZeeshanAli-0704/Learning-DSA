package org.example.binaryTree;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Stack;

public class IneorderTraversalIterative {
    public static List<Integer> inorderTraversal(TreeNode root){
        List<Integer> result = new ArrayList<>();

        Stack<TreeNode> st = new Stack();

        TreeNode node = root;
        while (true){
            if(node!=null){
                st.push(node);
                node = node.left;
            }else{
                if(st.empty()){
                    break;
                }
                node = st.pop();
                result.add(node.val);
                node=node.right;
            }
        }
        return result;
    };

    public static void main(String[] args) {
        List<Integer> input = Arrays.asList(4, 2, 5, 3, -1, 7, 6, -1, 9, -1, -1, 8, -1, 1);
        BuildTree bT = new BuildTree();
        TreeNode root =  bT.buildTree(input);
        List<Integer> preorder = inorderTraversal(root);
        System.out.println("Inorder Traversal: " + preorder);
    }
}
