package org.example.stack;

public class StackWithLinkedList {

    // Node class representing each element in the stack
    private class StackNode {
        int data;
        StackNode next;

        public StackNode(int data) {
            this.data = data;
            this.next = null;
        }
    }

    private StackNode top;
    private int size;

    public StackWithLinkedList() {
        this.top = null;
        this.size = 0;
    }

    public void pushNode(int element) {
        StackNode newNode = new StackNode(element);
        newNode.next = top;
        top = newNode;
        size++;
        System.out.println("Pushed: " + element);
    }

    public int popNode() {
        if (isEmpty()) {
            System.out.println("Stack is empty");
            return -1;
        }

        int data = top.data;
        top = top.next;
        size--;
        System.out.println("Popped: " + data);
        return data;
    }

    public int peek() {
        if (isEmpty()) {
            throw new RuntimeException("Stack is empty");
        }
        return top.data;
    }

    public boolean isEmpty() {
        return top == null;
    }

    public int getSize() {
        return size;
    }

    public void printStack() {
        if (isEmpty()) {
            System.out.println("Stack is empty");
            return;
        }

        System.out.print("Stack (top to bottom): ");
        StackNode current = top;
        while (current != null) {
            System.out.print(current.data + " ");
            current = current.next;
        }
        System.out.println();
    }

    // Main method for testing
    public static void main(String[] args) {
        StackWithLinkedList stack = new StackWithLinkedList();

        stack.pushNode(10);
        stack.pushNode(20);
        stack.pushNode(30);
        stack.printStack(); // Should print: 30 20 10

        stack.popNode();    // Should remove 30
        stack.printStack(); // Should print: 20 10

        System.out.println("Top Element: " + stack.peek());  // Should print 20
        System.out.println("Stack Size: " + stack.getSize()); // Should print 2
        System.out.println("Is Empty: " + stack.isEmpty());   // Should print false
    }
}
