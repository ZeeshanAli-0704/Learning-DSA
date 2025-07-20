package org.example.stack;

public class QueueUsingArray {
    private int capacity;
    private int size;
    private int[] arr;
    private int start;
    private int end;

    public QueueUsingArray(int capacity) {
        this.capacity = capacity;
        this.arr = new int[capacity];
        this.size = 0;
        this.start = -1;
        this.end = -1;
    }

    public void enqueue(int element) {
        if (isFull()) {
            throw new RuntimeException("Queue is full");
        }

        if (isEmpty()) {
            start = 0;
            end = 0;
        } else {
            end = (end + 1) % capacity;
        }

        arr[end] = element;
        size++;
    }

    public int dequeue() {
        if (isEmpty()) {
            throw new RuntimeException("Queue is empty");
        }

        int element = arr[start];
        size--;

        if (isEmpty()) {
            start = -1;
            end = -1;
        } else {
            start = (start + 1) % capacity;
        }

        return element;
    }

    public int top() {
        if (isEmpty()) {
            throw new RuntimeException("Queue is empty");
        }
        return arr[start];
    }

    public int size() {
        return size;
    }

    public boolean isEmpty() {
        return size == 0;
    }

    public boolean isFull() {
        return size == capacity;
    }

    public void printQueue() {
        if (isEmpty()) {
            System.out.println("Queue is empty");
            return;
        }

        System.out.print("Queue: ");
        for (int i = 0; i < size; i++) {
            int index = (start + i) % capacity;
            System.out.print(arr[index] + " ");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        QueueUsingArray q = new QueueUsingArray(5);
        q.enqueue(10);
        q.enqueue(20);
        q.enqueue(30);
        q.dequeue();
        q.enqueue(40);
        q.enqueue(50);
        q.enqueue(60);
        q.printQueue();
        System.out.println( q.start);
    }
}
