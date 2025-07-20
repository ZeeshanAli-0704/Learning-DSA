package org.example.stack;

import java.util.Arrays;
import java.util.Stack;

public class Area_largest_rectangle_Histogram {

    public static int RectangleArea(int[] arr){
        int maxArea = 0;
        int n = arr.length;
        Stack <Integer> s = new Stack();

        for(int i=0; i<n; i++){
            while(!s.empty() && arr[s.peek()] > arr[i]){
                int elementForArea = s.pop();
                int nse = i;
                int pse = s.empty() ? -1  : s.peek();
                maxArea = Math.max(arr[elementForArea] * (nse - pse - 1), maxArea);
            };
            s.push(i);
        }

        while (!s.empty()){
            int  nse =  n;
            int elementForArea = s.pop();
            int pse = s.empty() ? -1  : s.peek();
            maxArea = Math.max(arr[elementForArea] * (nse - pse - 1), maxArea);
        }
    return maxArea;
    }

    public static void main(String[] args) {
        int[] histo = {2,1,5,6,2,3};
        int result = Area_largest_rectangle_Histogram.RectangleArea(histo);
        System.out.println(result);
    }
}


