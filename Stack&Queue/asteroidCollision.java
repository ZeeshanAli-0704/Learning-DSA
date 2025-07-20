package org.example.stack;

import java.util.Stack;

public class asteroidCollision {

    public static void checkCollision(int [] arr){
        Stack<Integer> stack = new Stack();

        for(int i=0; i < arr.length; i++){
            int a = arr[i];
            if (a < 0) {

                while (stack.peek() > 0 && stack.peek() < -a) {
                    stack.pop();
                };

                if (stack.peek() + a == 0){
                    stack.pop();
                    continue;
                };

                if (stack.peek() > 0 && stack.peek() > -a) continue;
            }
            stack.push(a);
        }
    }

    public static void main(String[] args) {
        int[] arr = {5,10,-5};
        asteroidCollision.checkCollision(arr);
    }
}
