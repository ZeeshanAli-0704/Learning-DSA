package org.example.binaryTree;

import java.util.*;

public class ZigZagTraversalBinaryTree {

    private static List<List<Integer>> levelOrderTraversal(TreeNode root) {
        List<List<Integer>> result = new ArrayList<List<Integer>>();
        Queue<TreeNode> q = new LinkedList();
        q.add(root);
        int direction =  0;

        while(!q.isEmpty()){
            int currentLength = q.size();
            List<Integer> tempLst = new ArrayList<Integer>();
            while (currentLength > 0){
                 TreeNode node = q.poll();
                 tempLst.add(node.val);
                 if(node.left != null){
                     q.add(node.left);
                 };

                if(node.right != null){
                    q.add(node.right);
                }
                currentLength--;
            }
            if(direction == 0){
                direction  = -1;
                result.add(tempLst);
            }else{
                direction  = 0;
                Collections.reverse(tempLst);
                result.add(tempLst);
            }
        }

        return result;
    }


    public static void main(String[] args) {
        List<Integer> input = Arrays.asList( 1, 2, 3, 4, 5, -1, 6);
        BuildTree bT = new BuildTree();
        TreeNode root =  bT.buildTree(input);
        List<List<Integer>> ans = levelOrderTraversal(root);
        System.out.println("Level Order Traversal: " + ans);

        List<Integer> input2 = Arrays.asList(1,2, -1, 4, 5, -1, -1, 7, 8);
        TreeNode root2 =  bT.buildTree(input2);
        List<List<Integer>> ans2 = levelOrderTraversal(root2);
        System.out.println("Level Order Traversal: " + ans2);
    }
}
