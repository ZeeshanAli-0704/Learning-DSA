package org.example.stack;

import java.util.Stack;

public class RemoveOutermostParentheses {

    public static String removeOuterParentheses(String input){
        String result = "";
        String currentString = "";
        Stack stack = new Stack();

        for(int i=0; i<input.length(); i++){
            char ch = input.charAt(i);

            if(ch == '('){
                stack.push(ch);
                currentString = currentString+ch;
            }else{
                stack.pop();
                currentString = currentString+ch;

                if(stack.empty()){
                    int sLength =currentString.length();
                    String s = currentString.substring(1, sLength-1);
                    currentString = "";
                    result = result+s;
                }

            }

        }
    return result;
    };

    public static void main(String[] args) {
        String s = "(()())(())(()(()))";
        String result = RemoveOutermostParentheses.removeOuterParentheses(s);
        System.out.println(result);
    }
}
