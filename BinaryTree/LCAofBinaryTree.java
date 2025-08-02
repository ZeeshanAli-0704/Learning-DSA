package org.example.binaryTree;

import com.sun.source.tree.Tree;

import java.util.Arrays;
import java.util.List;

public class LCAofBinaryTree {

    public static TreeNode traverse(TreeNode current, int x, int y){
        if(current == null){
            return null;
        };

        if(current.val == x || current.val == y){
            return current;
        };

        TreeNode left = traverse(current.left, x, y);
        TreeNode right = traverse(current.right, x, y);

        if(left != null && right != null){
            return current;
        } else if(left != null){
            return left;
        }else if(right != null){
            return right;
        }
        return null;
    }
    private static TreeNode Solution(TreeNode root, int x, int y) {
        return traverse(root, x, y);
    }

    public static void main(String[] args) {
        List<Integer> arr = Arrays.asList(1, 2, 3, 4, 5, 6, 7);
        BuildTree bT = new BuildTree();
        TreeNode root = bT.buildTree(arr);
        int x = 4;
        int y = 5;
        TreeNode LCANode = Solution(root, x, y);
        System.out.println(LCANode.val);
        TreeNode LCANode2 = Solution(root, 6, 7);
        System.out.println(LCANode2.val);
    }
}
