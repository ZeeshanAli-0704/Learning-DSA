package org.example.binaryTree;

import java.util.Arrays;
import java.util.List;

public class CheckTwoTreesIdentical {


    public static boolean Solution(TreeNode root1, TreeNode root2){

        if(root1 == null && root2 == null){
            return true;
        };

        if (root1 == null || root2 == null) {
            return false;
        }

        if(root1.val == root2.val){
            return Solution(root1.left, root2.left) && Solution(root1.right, root2.right);
        }else{
            return false;
        }
    };


    public static void main(String[] args) {
        List<Integer> input = Arrays.asList(1,2,3,4,5);
        BuildTree bT = new BuildTree();
        TreeNode root1 =  bT.buildTree(input);
        List<Integer> input2 = Arrays.asList(1,2,3,4,6);
        TreeNode root2 =  bT.buildTree(input2);
        boolean result = Solution(root1, root2);
        System.out.println("result: " + result);
    }
}
