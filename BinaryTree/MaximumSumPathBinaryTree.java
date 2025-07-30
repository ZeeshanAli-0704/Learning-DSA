package org.example.binaryTree;

import java.util.Arrays;
import java.util.List;

public class MaximumSumPathBinaryTree {

    private static int getMaxPathSum(int[] maxSum, TreeNode node) {
        if(node == null){
            return 0;
        };

        int leftSum = Math.max(0, getMaxPathSum(maxSum, node.left));
        int rightSum = Math.max(0, getMaxPathSum(maxSum, node.right));
        maxSum[0] = Math.max(maxSum[0], node.val + leftSum + rightSum);
        return  node.val + Math.max(leftSum, rightSum);
    }

    public static int Solution(TreeNode node){
        int[] maxSum = new int[1];
        getMaxPathSum(maxSum, node);
        return maxSum[0];
    }


    public static void main(String[] args) {
        List<Integer> input = Arrays.asList(-10, 9, 20, -1, -1, 15, 7);
        BuildTree bT = new BuildTree();
        TreeNode root =  bT.buildTree(input);
        int result = Solution(root);
        System.out.println("Max Sum -->" + result);
    }
}
