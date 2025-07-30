package org.example.binaryTree;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class InOrderTraversal {

    public static void inorder(TreeNode node, List<Integer> result){
        if(node == null){
            return;
        }
        inorder(node.left, result);
        result.add(node.val);
        inorder(node.right, result);
    }

    public static List<Integer> inorderTraversal(TreeNode node){
        List<Integer> result = new ArrayList<>();
        inorder(node, result);
        return result;
    }

    public static void main(String[] args) {
        List<Integer> input = Arrays.asList(4, 2, 5, 3, -1, 7, 6, -1, 9, -1, -1, 8, -1, 1);
        BuildTree bT = new BuildTree();
        TreeNode root =  bT.buildTree(input);
        List<Integer> inOrder = inorderTraversal(root);
        System.out.println("In Order Traversal: " + inOrder);
    }
}
