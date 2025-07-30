package org.example.binaryTree;

import java.util.*;

public class BottomViewBinaryTree {

    public static class Pair {
        TreeNode node;
        int line;

        public Pair(TreeNode node, int line) {
            this.node = node;
            this.line = line;
        }
    }

    private static List<Integer> Solution(TreeNode root) {
        List<Integer> ans = new ArrayList<>();

        if (root == null) return ans;

        // Use TreeMap to maintain sorted order of vertical lines
        Map<Integer, Integer> mpp = new TreeMap<>();
        Queue<BottomViewBinaryTree.Pair> q = new LinkedList<>();
        q.add(new BottomViewBinaryTree.Pair(root, 0));

        while (!q.isEmpty()) {
            BottomViewBinaryTree.Pair pair = q.poll();
            TreeNode node = pair.node;
            int line = pair.line;

            mpp.put(line, node.val);

            if (node.left != null) {
                q.add(new BottomViewBinaryTree.Pair(node.left, line - 1));
            }

            if (node.right != null) {
                q.add(new BottomViewBinaryTree.Pair(node.right, line + 1));
            }
        }

        for (int value : mpp.values()) {
            ans.add(value);
        }

        return ans;
    }

    public static void main(String[] args) {
        List<Integer> input = Arrays.asList(1, 2, 3, 4, 10, 9, 11, -1, 5, -1, -1, -1, -1, -1, -1, -1, 6);
        BuildTree bT = new BuildTree();
        TreeNode root = bT.buildTree(input);
        List<Integer> ans = Solution(root);
        System.out.println("Bottom View: " + ans);
    }
}
