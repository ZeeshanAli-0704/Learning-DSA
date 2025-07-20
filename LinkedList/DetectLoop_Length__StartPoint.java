package org.example.linkedlist;

public class DetectLoop_Length__StartPoint {

    public LoopResult loopPresent(ListNode  head){
        ListNode slow = head;
        ListNode fast = head;

        while(fast != null && fast.next != null){
            slow=slow.next;
            fast=fast.next.next;
            if(slow == fast){
                return new LoopResult(true, slow);
            }
        }
        return new LoopResult(false,null);
    }

    public int lengthOfLoop(ListNode currentNode){
        ListNode slow = currentNode;
        ListNode fast = currentNode;
        fast = fast.next;
        int cnt=1;

        while (fast != slow){
            fast = fast.next;
            cnt++;
        }
        return cnt;
    }

    public ListNode getStartNodeOfLoop(ListNode fast, ListNode head){
        ListNode slow = head;

        while(slow != fast){
            slow = slow.next;
            fast = fast.next;

            if(slow == fast){
                return slow;
            }
        }
        return  null;
    }


    public static void main (String [] args){
        ListNode node1 = new ListNode(1);
        ListNode node2 = new ListNode(2);
        node1.next=node2;
        ListNode node3 = new ListNode(3);
        node2.next=node3;
        ListNode node4 = new ListNode(4);
        node3.next=node4;
        ListNode node5 = new ListNode(5);
        node4.next=node5;

        // loop
        node5.next=node2;

        ListNode head = node1;
        DetectLoop_Length__StartPoint  detectLoopLength__startPoint = new  DetectLoop_Length__StartPoint();
        LoopResult result = detectLoopLength__startPoint.loopPresent(head);
        System.out.println("loopPresent --> " + result.isFlag());

        // if loop is present then get a length of a loop
        if(result.isFlag()){
            int loopLength = detectLoopLength__startPoint.lengthOfLoop(result.getNode());
            System.out.println(loopLength);
            ListNode startNode = detectLoopLength__startPoint.getStartNodeOfLoop(result.getNode(), head);
            System.out.println(startNode.val);
        }
    }
}
