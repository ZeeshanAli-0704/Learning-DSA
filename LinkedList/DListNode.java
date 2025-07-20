package org.example.linkedlist;

public class DListNode {
    public int val;
    public DListNode next;
    public DListNode prev;

    public DListNode() {}

    public DListNode(int val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }

    public DListNode(int val, DListNode next, DListNode prev) {
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}

