package org.example.stack;

import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.Stack;

public class NextGreaterElement {

    public static int[] findNextGreater(int[] arr){
        int n = arr.length;
      int[] result = new int[n];
       Stack <Integer> s = new Stack <Integer> ();

      for(int i = n-1; i >=0; i--){

            while(!s.empty() && s.peek() < arr[i]){
                    s.pop();
            }
            if(!s.empty()){
                result[i] = s.peek();
                s.push(arr[i]);
            }

            if(s.empty()){
                result[i] = -1;
                s.push(arr[i]);
            }
      }

      return  result;
    };

    public static void main(String[] args) {
        int[] arr = {1, 3, 2, 4};
        int[] result = findNextGreater(arr);
        System.out.println(Arrays.toString(result));

        int[] arr1 = {6, 8, 0, 1, 3};
        int[] result1 = findNextGreater(arr1);
        System.out.println(Arrays.toString(result1));


    }
}
