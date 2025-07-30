package org.example.binaryTree;

import java.util.Arrays;
import java.util.List;

public class CheckBTreeBalancedBinaryTree {

    private static int getHeight(TreeNode node) {
        if(node == null){
            return 0;
        }
        int left = getHeight(node.left);
        if(left == -1){
            return -1;
        }

        int right =  getHeight(node.right);
        if(right == -1){
            return -1;
        };

        if(Math.abs(left - right) > 1){
            return -1;
        }

        return 1 + Math.max(getHeight(node.left), getHeight(node.right));
    }

    private static boolean checkIfBalance(TreeNode root) {
        return getHeight(root) != -1;
    };

    public static void main(String[] args) {
        List<Integer> input = Arrays.asList(4, 2, 5, 3, -1, 7, 6, -1, 9, -1, -1, 8, -1, 1);
        BuildTree bT = new BuildTree();
        TreeNode root =  bT.buildTree(input);
        boolean result = checkIfBalance(root);
        System.out.println("In Tree Balance: " + result);
    }


}
