package org.example.linkedlist;

import java.sql.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class FindPairInDLL {

    public static List<int[]> getPairWithTarget(DListNode head, int target){
        DListNode slow = head;
        DListNode fast = head;
        List<int[]> pairs = new ArrayList<>();

        while (fast.next != null){
            fast = fast.next;
        };
        System.out.println(slow + " " +fast);

        while (slow.next != null && fast.prev != null && slow != fast && fast.next != slow){
            int currentSum = slow.val + fast.val;
            if(currentSum == target){
                int[] pair = {slow.val, fast.val};
                pairs.add(pair);
                slow = slow.next;
                fast = fast.prev;
            } else if (currentSum > target) {
                fast=fast.prev;
            }else{
                slow = slow.next;
            }
        };
        return pairs;
    };


    public static void main(String[] args) {
        DoublyLinkedList list = new DoublyLinkedList();

        list.insertAtEnd(1);
        list.insertAtEnd(2);
        list.insertAtEnd(4);
        list.insertAtEnd(5);
        list.insertAtEnd(6);
        list.insertAtEnd(8);
        list.insertAtEnd(9);

        DListNode head =  list.getDLLHead();
        int target = 7;
        List<int[]> pairs = FindPairInDLL.getPairWithTarget(head, target);

        int[][] result = new int[pairs.size()][2];
        for (int i = 0; i < pairs.size(); i++) {
            result[i] = pairs.get(i);
        }
        for (int[] pair : result) {
            System.out.println(Arrays.toString(pair));
        }

    }
}
