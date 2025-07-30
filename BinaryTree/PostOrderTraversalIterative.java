package org.example.binaryTree;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Stack;

public class PostOrderTraversalIterative {

    private static List<Integer> postorderTraversal(TreeNode root) {
        List<Integer> result = new ArrayList<>();
        Stack<TreeNode> st = new Stack<>();
        TreeNode current = root;
        while(current != null || !st.empty()){

                if(current != null){
                    st.push(current);
                    current = current.left;
                }else{
                    TreeNode temp = st.peek().right;
                    if(temp == null){
                        temp = st.peek();
                        st.pop();
                        result.add(temp.val);
                        while (!st.empty() && st.peek().right == temp){
                            temp = st.peek();
                            result.add(temp.val);
                            st.pop();
                        };
                    }else{
                        current = temp;
                    }
                }
        }
        return result;
    }

    public static void main(String[] args) {
        List<Integer> input = Arrays.asList(4, 2, 5, 3, -1, 7, 6, -1, 9, -1, -1, 8, -1, 1);
        BuildTree bT = new BuildTree();
        TreeNode root =  bT.buildTree(input);
        List<Integer> postOrder = postorderTraversal(root);
        System.out.println("Postorder Traversal: " + postOrder);
    }


}
