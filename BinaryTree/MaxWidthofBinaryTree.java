package org.example.binaryTree;

import com.sun.source.tree.Tree;

import java.util.*;

public class MaxWidthofBinaryTree {

    public static class Pair{
        TreeNode node;
        int index;

        public Pair(TreeNode node, int index) {
            this.node = node;
            this.index = index;
        }
    }

    private static int Solution(TreeNode root) {
        int maxWidth =  0;
        Queue<Pair> q = new LinkedList<>();
        q.add(new Pair(root, 0));

        while(!q.isEmpty()){
            List<Pair> list = new ArrayList<>();
            int size = q.size();
            while (size > 0){
                Pair current = q.poll();
                int i = current.index;
                if(current.node.left != null){
                    q.add(new Pair(current.node.left, 2*i+1));
                }
                if(current.node.right != null){
                    q.add(new Pair(current.node.right, 2*i+2));
                }
                list.add(current);
                size--;
            }
                Pair first = list.getFirst();
                Pair last = list.getLast();
                maxWidth = Math.max(maxWidth, last.index - first.index +1);
        }


        return maxWidth;
    };

    public static void main(String[] args) {
        List<Integer> arr = Arrays.asList(1, 2, 3, 5, 6, -1, 9);
        BuildTree bT = new BuildTree();
        TreeNode root = bT.buildTree(arr);
        int width = Solution(root);
        System.out.println(width);

        List<Integer> arr2 = Arrays.asList(1, 2, 3, 5);
        TreeNode root2 = bT.buildTree(arr2);
        int width2 = Solution(root2);
        System.out.println(width2);

    }

}
