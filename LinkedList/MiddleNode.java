package org.example.linkedlist;

public class MiddleNode {

    public static ListNode getMiddleNode(ListNode head){
        ListNode slow = head;
        ListNode fast = head;

        while(fast.next != null && fast.next != null){
            slow = slow.next;
            fast = fast.next.next;
        };

        return slow;
    };

    public static void main(String[] args){
        int[] input = {1,2,3,4,5};
        ListNode head = LinkedListUtil.createLinkedList(input);
        ListNode middleNode = MiddleNode.getMiddleNode(head);
        System.out.println(middleNode.val);

    }
}
