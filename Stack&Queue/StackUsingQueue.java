package org.example.stack;

import java.util.LinkedList;
import java.util.Queue;

public class StackUsingQueue {

    private Queue<Integer> queue = new LinkedList<>();

    public void push(int element) {
        queue.add(element);
        int size = queue.size();
        for (int i = 0; i < size - 1; i++) {
            queue.add(queue.remove());
        }
    }

    public int pop() {
        if (isEmpty()) throw new RuntimeException("Stack is empty");
        return queue.remove();
    }

    public int top() {
        if (isEmpty()) throw new RuntimeException("Stack is empty");
        return queue.peek();
    }

    public int size() {
        return queue.size();
    }

    public boolean isEmpty() {
        return queue.isEmpty();
    }

    public void printStack() {
        System.out.println("Stack (top to bottom): " + queue);
    }

    public static void main(String[] args) {
        StackUsingQueue stack = new StackUsingQueue();

        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.push(4);
        stack.push(5);
        stack.push(6);
        stack.push(10);

        stack.printStack(); // Optional

        System.out.println("Size: " + stack.size());
        System.out.println("Top: " + stack.top());
        System.out.println("Pop: " + stack.pop());
        System.out.println("Pop: " + stack.pop());
        stack.printStack();
    }
}
