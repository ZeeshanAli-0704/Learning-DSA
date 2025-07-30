package org.example.binaryTree;

import java.util.*;

public class LevelOrderTraversalofBinaryTreeBFS {
    private static List<List<Integer>> levelOrderTraversal(TreeNode root) {
        List<List<Integer>> result = new ArrayList<List<Integer>>();

        Queue<TreeNode> pq = new LinkedList<>();
        pq.add(root);

        while(!pq.isEmpty()){
            List<Integer> list = new ArrayList<>();
            int currentLength = pq.size();
            while(currentLength > 0){
                TreeNode currentNode = pq.poll();
                if(currentNode.left != null){
                    pq.add(currentNode.left);
                };
                if(currentNode.right != null){
                    pq.add(currentNode.right);
                };
                list.add(currentNode.val);
                currentLength--;
            }
            result.add(list);
        }


        return result;
    }


    public static void main(String[] args) {
        List<Integer> input = Arrays.asList(4, 2, 5, 3, -1, 7, 6, -1, 9, -1, -1, 8, -1, 1);
        BuildTree bT = new BuildTree();
        TreeNode root =  bT.buildTree(input);
        List<List<Integer>> ans = levelOrderTraversal(root);
        System.out.println("Level Order Traversal: " + ans);

        List<Integer> input2 = Arrays.asList(1, 2, 3, 4, 10, 9, 11, -1, 5, -1, -1, -1, -1, -1, -1, -1, 6 );
        TreeNode root2 =  bT.buildTree(input2);
        List<List<Integer>> ans2 = levelOrderTraversal(root2);
        System.out.println("Level Order Traversal: " + ans2);
    }


}
