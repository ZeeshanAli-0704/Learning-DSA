package org.example.binaryTree;

import java.util.Arrays;
import java.util.List;

public class DiameterOfBinaryTree {

    private static int getHMaxDiameter(int[] maxHeight, TreeNode node) {
        if(node == null){
            return 0;
        }

        int leftHeight = getHMaxDiameter(maxHeight, node.left);
        int rightHeight = getHMaxDiameter(maxHeight, node.right);
        maxHeight[0] = Math.max(maxHeight[0], leftHeight +rightHeight);

        return 1 +  Math.max(leftHeight, rightHeight);
    }

    public static int Solution(TreeNode node){
        int[] maxHeight = new int[1];
        getHMaxDiameter(maxHeight, node);
        return maxHeight[0];
    }



    public static void main(String[] args) {
        List<Integer> input = Arrays.asList(1,2,3,4,5);
        BuildTree bT = new BuildTree();
        TreeNode root =  bT.buildTree(input);
        int result = Solution(root);
        System.out.println("result: " + result);
    }
}
