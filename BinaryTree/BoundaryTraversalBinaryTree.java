package org.example.binaryTree;

import java.util.*;

public class BoundaryTraversalBinaryTree {
    public static boolean isLeaf(TreeNode root) {
        return root.left == null && root.right == null;
    }

    public static void traverseLeft(TreeNode node, List<Integer>result){
        while (node != null){
            if(!isLeaf(node))
            result.add(node.val);
            if(node.left != null){
                node=node.left;
            }else{
                node = node.right;
            }

        }
    }

    public static List<Integer> traverseRight(TreeNode node, List<Integer>temp){
        while (node != null){
            if(!isLeaf(node)){
                temp.add(node.val);
            }
            if(node.right != null){
                node=node.right;
            }else{
                node = node.left;
            }

        }
        return  temp;
    };
    public static void bottomTraversal(TreeNode node, List<Integer>result){
        if(node == null){
            return;
        }
        if(isLeaf(node)){
            result.add(node.val);
        };
        bottomTraversal(node.left, result);
        bottomTraversal(node.right, result);
    };

    public static void boundaryTraversal(TreeNode node, List<Integer>result){
        if(node == null){
            return;
        }

        if (!isLeaf(node)) {
            result.add(node.val); // skip if root is a leaf
        }

        // traverseLeft
        traverseLeft(node.left, result);
        // TraverseBottomNode
        bottomTraversal(node, result);
        // TraverseRight
        List<Integer> right = traverseRight(node.right, new ArrayList<>());
        Collections.reverse(right);
        for (int nodeVal : right) {
            result.add(nodeVal);
        };
        ;

    }

    public static void main(String[] args) {
        List<Integer> input = Arrays.asList( 1, 2, 7, 3, -1, -1, 8,-1, 4, 9, -1, 5, 6, 10, 11);
        BuildTree bT = new BuildTree();
        TreeNode root =  bT.buildTree(input);
        List<Integer> result = new ArrayList<>();
        boundaryTraversal(root, result);
        System.out.println("In Tree Balance: " + result);
    }
}
