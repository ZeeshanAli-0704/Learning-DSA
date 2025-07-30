package org.example.binaryTree;

import java.util.Arrays;
import java.util.List;

public class MaximumDepthBinaryTree {

    private static int getHeight(TreeNode node) {
            if(node == null){
                return 0;
            }
            return 1 + Math.max(getHeight(node.left), getHeight(node.right));
    }



    public static void main(String[] args) {
        List<Integer> input = Arrays.asList(1, 2, 5, -1, -1, 4, 6, 5);
        BuildTree bT = new BuildTree();
        TreeNode root =  bT.buildTree(input);
        int result = getHeight(root);
        System.out.println("Height of a Tree: " + result);
    }

}
