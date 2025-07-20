package org.example.stack;

import java.util.Stack;

public class RemoveKDigits {

    public static StringBuilder solution(String arr, int k){
        Stack<Character> s = new Stack<Character>();

        for(int a = 0; a < arr.length(); a++){

            char element = arr.charAt(a);

            if(!s.empty()){
                while(s.peek() > element && k>0){
                    s.pop();
                    k--;
                };
                s.push(element);
            }
            if(s.empty()){
                s.push(element);
            }
        }

        while (!s.isEmpty() && k>0){
            s.pop();
        };

        // Build the result from stack
        StringBuilder sb = new StringBuilder();
        for (char c : s) {
            sb.append(c);
        }

        while (!sb.isEmpty() && sb.charAt(0) == '0'){
            sb.deleteCharAt(0);
        };

        return sb;
    }


    public static void main(String[] args) {
        String str = "1432219";
        int k = 3;
        StringBuilder ans = RemoveKDigits.solution(str, k);
        System.out.println(ans);

        str = "0432219";
        k = 3;
        StringBuilder ans1 = RemoveKDigits.solution(str, k);
        System.out.println(ans1);

    }
}
