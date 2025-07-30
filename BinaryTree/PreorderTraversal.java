package org.example.binaryTree;

import java.util.*;

public class PreorderTraversal {

    public static List<Integer> preorderTraversal(TreeNode root) {
        List<Integer> result = new ArrayList<>();
        preorder(root, result);
        return result;
    }

    private static void preorder(TreeNode node, List<Integer> result) {
        if (node == null) return;
        result.add(node.val);          // Visit root
        preorder(node.left, result);   // Traverse left
        preorder(node.right, result);  // Traverse right
    }

    public static void main(String[] args) {
        List<Integer> input = Arrays.asList(4, 2, 5, 3, -1, 7, 6, -1, 9, -1, -1, 8, -1, 1);
        BuildTree bT = new BuildTree();
        TreeNode root =  bT.buildTree(input);
        List<Integer> preorder = preorderTraversal(root);
        System.out.println("Preorder Traversal: " + preorder);
    }
}
