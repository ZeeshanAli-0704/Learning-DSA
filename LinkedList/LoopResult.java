package org.example.linkedlist;

public class LoopResult {
    private boolean flag;
    private ListNode node;

    public LoopResult(boolean flag, ListNode node) {
        this.flag = flag;
        this.node = node;
    }

    public boolean isFlag() {
        return flag;
    }

    public ListNode getNode() {
        return node;
    }
}
