package org.example.linkedlist;

public class DeleteKeyDLL {

    public static DListNode deleteKey(DListNode head, int key){
        DListNode current = head;

        while(current != null){

            if(current.val == key){
                DListNode nextNode = current.next;
                DListNode prevNode = current.prev;

                if(prevNode != null){
                    prevNode.next = nextNode;
                }else{
                    head=nextNode;
                };

                if(nextNode != null){
                    nextNode.prev = prevNode;
                }

                break;
            }
            current=current.next;
        };

        return head;
    }

    public static void main(String[] args) {
        DoublyLinkedList list = new DoublyLinkedList();
        list.insertAtEnd(1);
        list.insertAtEnd(2);
        list.insertAtEnd(3);
        list.insertAtEnd(4);
        list.insertAtEnd(5);
        list.insertAtEnd(6);

        DListNode head =  list.getDLLHead();
        int key = 4;
        DListNode updatedLL = DeleteKeyDLL.deleteKey(head, key);
        list.printForward();

    }
}
