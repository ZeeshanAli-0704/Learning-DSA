package org.example.binaryTree;

import java.util.*;

public class NodesAtdistanceKBinaryTree {

    public static int[] BFS(HashMap<TreeNode, TreeNode> map, TreeNode node, int K, TreeNode targetNode){
        List<TreeNode> visited = new ArrayList<>();
        Queue<TreeNode> q = new LinkedList<>();
        q.add(targetNode);
        visited.add(targetNode);

        while(!q.isEmpty()){
            int size = q.size();
            while(size > 0){
                TreeNode nextNode = q.poll();
                // left
                assert nextNode != null;
                if(nextNode.left != null && !visited.contains(nextNode.left)){
                    visited.add(nextNode.left);
                    q.add(nextNode.left);
                }
                // right
                if(nextNode.right != null && !visited.contains(nextNode.right)){
                    visited.add(nextNode.right);
                    q.add(nextNode.right);
                }
                // top
                boolean b = !visited.contains(map.get(nextNode));
                if(map.get(nextNode) != null && b) {
                    visited.add(map.get(nextNode));
                    q.add((map.get(nextNode)));
                }
                size--;
            }
            K--;
            if(K == 0){
                break;
            }
        }

        int[] result = new int[q.size()];
        for(int i=0; i < result.length; i++){
            result[i]=q.poll().val;
        }

        return result;
    };

    public static void DFS(HashMap<TreeNode, TreeNode> map, TreeNode node){
        if(node == null){
            return;
        };
        if(node.left != null){
            map.put(node.left, node);
        };
        DFS(map, node.left);

        if(node.right != null){
            map.put(node.right, node);
        };
        DFS(map, node.right);
    };

    public static int[]  Solution(TreeNode rootNode, int K, TreeNode targetNode){;
        HashMap<TreeNode, TreeNode> map = new HashMap<>();
        // populateHashMap for Parent Node
        DFS(map, rootNode);
        System.out.println(map);
        int[] result = BFS(map, rootNode, K, targetNode);
        return result;

    }

    public static TreeNode findNode(TreeNode root, int targetValue) {
        if (root == null) return null;
        if (root.val == targetValue) return root;
        TreeNode left = findNode(root.left, targetValue);
        if (left != null) return left;
        return findNode(root.right, targetValue);
    }

    public static void main(String[] args) {
        List<Integer > arr = Arrays.asList(3,5,1,6,2,0,8,-1,-1,7,4);
        int distance =  2;
        BuildTree bt = new BuildTree();
        TreeNode root = bt.buildTree(arr);
        TreeNode targetNode = findNode(root, 5);
        int[] ans =Solution(root, distance, targetNode);
        System.out.println(Arrays.toString(ans));

    }
}
