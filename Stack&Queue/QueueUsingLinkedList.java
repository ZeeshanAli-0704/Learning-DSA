package org.example.stack;

import java.awt.*;

public class QueueUsingLinkedList {

    public class QueueNode{
        int val;
        QueueNode next = null;

        public QueueNode(int val) {
            this.val = val;
            this.next = null;
        }
    }
    QueueNode rear = null;
    QueueNode front = null;
    int size;

    public void EnQueue(int val){
        QueueNode nextNode = new QueueNode(val);
        if(front == null){
            front = nextNode;
            rear = nextNode;
        }else{
            rear.next = nextNode;
            rear = nextNode;
        }
        size++;
    }

    public int DeQueue(){

        if(front == null){
           throw new RuntimeException("Queue is empty");
        }
        int value =  front.val;
        front=front.next;
        size--;
        return value;
    }

    public int peek() {
        if (front == null) {
            throw new RuntimeException("Queue is empty");
        }
        return front.val;
    };
    public static void main(String args[]){
        QueueUsingLinkedList Q=new QueueUsingLinkedList();
        Q.EnQueue(10);
        Q.EnQueue(20);
        Q.EnQueue(30);
        Q.EnQueue(40);
        Q.EnQueue(50);
        System.out.println(Q.DeQueue());
        System.out.println("The size of the Queue is "+Q.size);
        System.out.println("The Peek element of the Queue is "+Q.peek());
    }
}
