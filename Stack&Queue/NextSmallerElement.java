package org.example.stack;

import java.util.Arrays;
import java.util.Stack;

public class NextSmallerElement {

    public static int[] findSmallerElement(int [] arr){
        int n = arr.length;
        Stack<Integer> s = new Stack<Integer>();
        int[] result = new int[n];

        for(int i = n-1; i>=0; i--){

            while (!s.empty() && s.peek() >= arr[i]){
                s.pop();
            };

            if(!s.empty()){
                result[i] = s.peek();
                s.push(arr[i]);
            }

            if(s.empty()){
                result[i] = -1;
                s.push(arr[i]);
            }
        }

        return result;
    }



    public static void main(String[] args) {
        int[] arr = {4, 8, 5, 2, 25};
        int[] result = findSmallerElement(arr);
        System.out.println(Arrays.toString(result));

        int[] arr1 = {6, 8, 0, 1, 3};
        int[] result1 = findSmallerElement(arr1);
        System.out.println(Arrays.toString(result1));

    }
}
