package org.example.stack;

import java.util.Stack;

public class NextGreaterElements {

    public static int[] nextGreaterElements(int[] nums) {
        int n = nums.length;
        int[] nge = new int[n];
        Stack<Integer> st = new Stack<>();

        for (int i = 2 * n - 1; i >= 0; i--) {
            int index = i % n;

            while (!st.isEmpty() && st.peek() <= nums[index]) {
                st.pop();
            }

            if (i < n) {
                nge[index] = st.isEmpty() ? -1 : st.peek();
            }

            st.push(nums[index]);
        }

        return nge;
    }


    public static void main(String[] args) {
        int[] arr = {5, 7, 1, 2, 6, 0};

        int[] result = nextGreaterElements(arr);

        System.out.println("The next greater elements are:");
        for (int num : result) {
            System.out.print(num + " ");
        }
    }
}
