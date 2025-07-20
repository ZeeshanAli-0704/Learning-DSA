package org.example.stack;

import java.util.Stack;

public class MaximumRectangleInMatrix {

    public static int RectangleArea(String[] arr){
        int maxArea = 0;
        int n = arr.length;
        Stack<Integer> s = new Stack();

        for(int i=0; i<n; i++){
            while(!s.empty() && Integer.parseInt(arr[s.peek()]) > Integer.parseInt(arr[i])){
                int elementForArea = s.pop();
                int nse = i;
                int pse = s.empty() ? -1  : s.peek();
                maxArea = Math.max((Integer.parseInt(arr[elementForArea]) * (nse - pse - 1)), maxArea);
            };
            s.push(i);
        }

        while (!s.empty()){
            int  nse =  n;
            int elementForArea = s.pop();
            int pse = s.empty() ? -1  : s.peek();
            maxArea = Math.max(Integer.parseInt(arr[elementForArea]) * (nse - pse - 1), maxArea);
        }
        return maxArea;
    }

    public static String[][] getPrefixSumMatrix(String [][] input){
        int rows = input.length;
        int columns = input[0].length;
        String [][] prefixMatrix =  new String [rows][columns];

        for(int i =0 ; i < columns; i++){
            int sum = 0;
            for( int j = 0; j < rows; j++){
                int property = Integer.parseInt(input[j][i]);

                if(property == 0){
                    sum = 0;
                } else {
                    sum=sum+property;
                }
                prefixMatrix[j][i] = String.valueOf(sum);
            }
        }

        return prefixMatrix;
    };

    public static void main(String[] args) {
        String [][] input = {{"1","0","1","0","0"}, {"1","0","1","1","1"}, {"1","1","1","1","1"}, {"1","0","0","1","0"} };
        int rows = input.length;
        int columns = input[0].length;
        String [][] prefixMatrix =  getPrefixSumMatrix(input);
        int maxArea = 0;
        for(int i = 0; i<rows; i++){
            int result = RectangleArea(prefixMatrix[i]);
            maxArea = Math.max(maxArea, result);
        }
        System.out.println(maxArea);
    }
}

