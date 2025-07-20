package org.example.linkedlist;

public class IsLLPalindrome {

    public static ListNode findMiddleNode(ListNode head){
        ListNode slow = head;
        ListNode fast = head;

        while(fast != null && fast.next != null){
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }

    public static ListNode reverseLinkedList(ListNode middleNode){

        ListNode currentNode = middleNode;
        ListNode prev = null;
        while(currentNode != null){
            ListNode nextNode = currentNode.next;
            currentNode.next = prev;
            prev = currentNode;
            currentNode=nextNode;
        }

        return prev;
    }

    public static boolean isPalindrome(ListNode head){

        ListNode middleNode = findMiddleNode(head);
        ListNode reversedListHead  = reverseLinkedList(middleNode);

        ListNode first = head;
        ListNode second = reversedListHead;

        while(second != null){
            if(second.val != first.val){
                return false;
            }
            first = first.next;
            second= second.next;
        }

        return true;
    }

    public static void main (String[] args){
        ListNode node1 = new ListNode(1);
        ListNode node2 = new ListNode(2);
        node1.next=node2;
        ListNode node3 = new ListNode(3);
        node2.next=node3;
        ListNode node4 = new ListNode(3);
        node3.next=node4;
        ListNode node5 = new ListNode(2);
        node4.next=node5;
        ListNode node6 = new ListNode(1);
        node5.next = node6;

        ListNode head = node1;

        boolean isPalindrome =IsLLPalindrome.isPalindrome(head);

        if(isPalindrome){
            System.out.println("Yes, LL is Palindrome");
        }else{
            System.out.println("Not a Palindrome");
        }
    }
}
