package org.example.linkedlist;

public class DoublyLinkedList {
    private DListNode head;
    private DListNode tail;

    public void insertAtEnd(int val) {
        DListNode newNode = new DListNode(val);
        if (head == null) {
            head = tail = newNode;
        } else {
            tail.next = newNode;
            newNode.prev = tail;
            tail = newNode;
        }
    }

    public DListNode getDLLHead() {
        return head;
    }

    public void printForward() {
        DListNode current = head;
        while (current != null) {
            System.out.print(current.val + " ");
            current = current.next;
        }
        System.out.println();
    }

    public void printBackward() {
        DListNode current = tail;
        while (current != null) {
            System.out.print(current.val + " ");
            current = current.prev;
        }
        System.out.println();
    }
}

