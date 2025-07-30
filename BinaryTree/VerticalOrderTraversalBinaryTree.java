package org.example.binaryTree;

import java.util.*;

public class VerticalOrderTraversalBinaryTree {

        static class Tuple {
            TreeNode node;
            int row;
            int col;

            Tuple(TreeNode n, int r, int c) {
                node = n;
                row = r;
                col = c;
            }
        }

        public static List<List<Integer>> Solution(TreeNode root) {
            TreeMap<Integer, TreeMap<Integer, PriorityQueue<Integer>>> map = new TreeMap<>();
            Queue<Tuple> queue = new LinkedList<>();

            queue.offer(new Tuple(root, 0, 0));

            while (!queue.isEmpty()) {
                Tuple t = queue.poll();
                TreeNode node = t.node;
                int row = t.row;
                int col = t.col;

                map
                        .computeIfAbsent(col, x -> new TreeMap<>())
                        .computeIfAbsent(row, y -> new PriorityQueue<>())
                        .offer(node.val);

                if (node.left != null) {
                    queue.offer(new Tuple(node.left, row + 1, col - 1));
                }

                if (node.right != null) {
                    queue.offer(new Tuple(node.right, row + 1, col + 1));
                }
            }

            List<List<Integer>> result = new ArrayList<>();
            for (TreeMap<Integer, PriorityQueue<Integer>> ys : map.values()) {
                List<Integer> vertical = new ArrayList<>();
                for (PriorityQueue<Integer> nodes : ys.values()) {
                    while (!nodes.isEmpty()) {
                        vertical.add(nodes.poll());
                    }
                }
                result.add(vertical);
            }

            return result;
        }

        public static void main(String[] args) {
            List<Integer> input = Arrays.asList(1, 2, 3, 4, 10, 9, 11, -1, 5, -1, -1, -1, -1, -1, -1, -1, 6);
            BuildTree bT = new BuildTree();
            TreeNode root =  bT.buildTree(input);
            List<List<Integer>> ans = Solution(root);
            System.out.println("Vertical Traversal: " + ans);
        }

}
