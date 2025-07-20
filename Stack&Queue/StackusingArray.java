package org.example.stack;

public class StackusingArray {
    int size;
    int[] arr;
    int top;

    public StackusingArray(int size) {
        this.size = size;
        this.arr = new int[size];
        this.top = -1;
    }

    public void push(int value){
        if(!isFull()){
            top++;
            arr[top] = value;
        }else{
            throw  new RuntimeException("Stack underflow: Cannot push to a full stack");
        }

    }

    public int pop(){
        if(!isEmpty()){
            int value  = arr[top];
            top--;
            return value;
        }else{
            throw  new RuntimeException("Stack underflow: Cannot pop from a empty stack");
        }

    }

    public int top(){
        if(!isEmpty()){
            return arr[top];
        }else{
            throw new RuntimeException("Stack is empty: Cannot peek");
        }
    }
    public int size(){
        return top+1;
    }

    public boolean isFull() {
        return top == size - 1;
    }

    public boolean isEmpty() {
        return top == -1;
    }

    // Display stack contents (for debugging)
    public void display() {
        if (isEmpty()) {
            System.out.println("Stack is empty");
            return;
        }
        System.out.print("Stack: ");
        for (int i = 0; i <= top; i++) {
            System.out.print(arr[i] + " ");
        }
        System.out.println("(top: " + arr[top] + ")");
    }
    public static void main(String[] args){
        StackusingArray stack = new StackusingArray(10);
        // Test push operations
        System.out.println("Testing push operations:");
        stack.push(10);
        stack.push(20);
        stack.push(30);
        stack.display();

        // Test peek
        System.out.println("Top element: " + stack.top());
        System.out.println("Stack size: " + stack.size());

        // Test pop operations
        System.out.println("\nTesting pop operations:");
        System.out.println("Popped: " + stack.pop());
        System.out.println("Popped: " + stack.pop());
        stack.display();

        // Test edge cases
        System.out.println("\nTesting edge cases:");
        System.out.println("Is empty: " + stack.isEmpty());
        System.out.println("Is full: " + stack.isFull());

        // Test with custom capacity
        StackusingArray smallStack = new StackusingArray(3);
        smallStack.push(1);
        smallStack.push(2);
        smallStack.push(3);
        System.out.println("\nSmall stack is full: " + smallStack.isFull());

        try {
            smallStack.push(4); // This should throw an exception
        } catch (RuntimeException e) {
            System.out.println("Exception caught: " + e.getMessage());
        }

    }
}
