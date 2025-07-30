package org.example.binaryTree;

import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

public class BuildTree {

    public TreeNode buildTree(List<Integer> nodes){
        if (nodes == null || nodes.size() == 0 || nodes.get(0) == -1) return null;

        TreeNode root = new TreeNode(nodes.get(0));
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);

        int i = 1;
        while (!queue.isEmpty() && i < nodes.size()) {
            TreeNode current = queue.poll();

            // Left child
            if (i < nodes.size() && nodes.get(i) != -1) {
                current.left = new TreeNode(nodes.get(i));
                queue.offer(current.left);
            }
            i++;

            // Right child
            if (i < nodes.size() && nodes.get(i) != -1) {
                current.right = new TreeNode(nodes.get(i));
                queue.offer(current.right);
            }
            i++;
        }
        return root;
    }
}
