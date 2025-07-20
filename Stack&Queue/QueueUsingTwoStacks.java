package org.example.stack;

import java.util.Stack;

public class QueueUsingTwoStacks {

    private Stack<Integer> inStack = new Stack<>();
    private Stack<Integer> outStack = new Stack<>();

    public void enqueue(int element) {
        inStack.push(element);
    }

    public int dequeue() {
        shiftStacks();
        if (outStack.isEmpty()) {
            throw new RuntimeException("Queue is empty");
        }
        return outStack.pop();
    }

    public int front() {
        shiftStacks();
        if (outStack.isEmpty()) {
            throw new RuntimeException("Queue is empty");
        }
        return outStack.peek();
    }

    public int size() {
        return inStack.size() + outStack.size();
    }

    public boolean isEmpty() {
        return inStack.isEmpty() && outStack.isEmpty();
    }

    private void shiftStacks() {
        if (outStack.isEmpty()) {
            while (!inStack.isEmpty()) {
                outStack.push(inStack.pop());
            }
        }
    }

    public void printQueue() {
        shiftStacks();
        System.out.println("Queue (front to back): " + outStack);
    }

    public static void main(String[] args) {
        QueueUsingTwoStacks queue = new QueueUsingTwoStacks();

        queue.enqueue(10);
        queue.enqueue(20);
        queue.enqueue(30);
        queue.enqueue(40);
        queue.printQueue();              // [10, 20, 30, 40]

        System.out.println("Front: " + queue.front());    // 10
        System.out.println("Dequeue: " + queue.dequeue()); // 10
        System.out.println("Dequeue: " + queue.dequeue()); // 20

        queue.enqueue(50);
        queue.enqueue(60);
        queue.printQueue();     // [30, 40, 50, 60]
    }
}
