package org.example.linkedlist;

public class IntersectionLL {

    static ListNode insertNode(ListNode head,int val) {
        ListNode newNode = new ListNode(val);

        if(head == null) {
            head = newNode;
            return head;
        }

        ListNode temp = head;
        while(temp.next != null) temp = temp.next;

        temp.next = newNode;
        return head;
    }

    public static int LengthLL(ListNode head){
        int length = 0;
        ListNode current = head;

        while(current !=null){
            length++;
            current=current.next;
        }
        return length;
    }

    static int DifferenceInLL(ListNode head1, ListNode head2){
        int L1 = LengthLL(head1);
        int L2 = LengthLL(head2);

        return L1 - L2;
    };

    public static ListNode intersectionNode(ListNode head1, ListNode head2){
        int diff = DifferenceInLL(head1, head2);

        while(diff > 0){
            head1 = head1.next;
            diff--;
        }

        if(diff<0){
            head2 = head2.next;
            diff++;
        }

        while(head1!= null && head2 !=null){
            if(head1 == head2){
                return head1;
            };
            head1= head1.next;
            head2= head2.next;
        }
        return null;
    }


    public static void main(String [] args){
        ListNode head = null;
        head=insertNode(head,1);
        head=insertNode(head,3);
        head=insertNode(head,1);
        head=insertNode(head,2);
        head=insertNode(head,4);
        ListNode head1 = head;
        head = head.next.next;
        ListNode headSec = null;
        headSec=insertNode(headSec,3);
        ListNode head2 = headSec;
        headSec.next = head;

        ListNode intersection=intersectionNode(head1, head2);
        System.out.println(intersection.val);

    }
}
