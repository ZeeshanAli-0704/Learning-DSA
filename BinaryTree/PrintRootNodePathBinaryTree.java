package org.example.binaryTree;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class PrintRootNodePathBinaryTree {

    private static List<Integer> Solution(TreeNode root, TreeNode node) {
        List<Integer> result = new ArrayList<>();
        traverseTree(result, root, node);
        return result;
    };


    private static List<Integer> Solution2(TreeNode root, TreeNode node) {
        List<Integer> result = new ArrayList<>();
        traverseTree2(result, root, node, new ArrayList<>());
        return result;
    }

    private static boolean traverseTree(List<Integer> result, TreeNode current, TreeNode node) {
        if(current == null){
            return false;
        };
        result.add(current.val);

        if(current.val == node.val){
            return true;
        }
        if(traverseTree(result, current.left, node) ||  traverseTree(result, current.right, node)){
            return true;
        }
        result.remove(result.size() -1);
        return false;
    };

    private static void traverseTree2(List<Integer> result, TreeNode current, TreeNode node, List<Integer> currentPath) {
        if (current == null) {
            return;
        }
        // Add current node to the path
        currentPath.add(current.val);

        // If found, copy the path to result and return
        if (current.val == node.val) {
            result.addAll(new ArrayList<>(currentPath));
            return;
        }

        // Recurse left and right (pass a copy of currentPath to each branch)
        traverseTree2(result, current.left, node, new ArrayList<>(currentPath));
        traverseTree2(result, current.right, node, new ArrayList<>(currentPath));
    }

    public static void main(String[] args) {
        List<Integer> input = Arrays.asList(1, 2, 3, 4, 5, -1, -1, -1, -1, 6, 7);
        BuildTree bT = new BuildTree();
        TreeNode root =  bT.buildTree(input);
        TreeNode node = new TreeNode(7);
        List<Integer> ans = Solution(root, node);
        List<Integer> ans2 = Solution2(root, node);
        System.out.println("Path: " + ans);
        System.out.println("Path: " + ans2);
    }




}
