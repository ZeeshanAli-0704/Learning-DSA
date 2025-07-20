package org.example.stack;

import java.util.HashMap;

public class LRUCache {

    class DoubleLLNode {
        int key;
        int val;
        DoubleLLNode prev;
        DoubleLLNode next;

        DoubleLLNode(int key, int val) {
            this.key = key;
            this.val = val;
        }
    }

    private final int capacity;
    private final HashMap<Integer, DoubleLLNode> map;
    private final DoubleLLNode head;
    private final DoubleLLNode tail;

    public LRUCache(int capacity) {
        this.capacity = capacity;
        this.map = new HashMap<>();
        this.head = new DoubleLLNode(-1, -1); // dummy head
        this.tail = new DoubleLLNode(-1, -1); // dummy tail
        head.next = tail;
        tail.prev = head;
    }

    public int get(int key) {
        if (!map.containsKey(key)) return -1;
        DoubleLLNode node = map.get(key);
        moveToHead(node);
        return node.val;
    }

    public void put(int key, int value) {
        if (map.containsKey(key)) {
            DoubleLLNode node = map.get(key);
            node.val = value;
            moveToHead(node);
        } else {
            if (map.size() == capacity) {
                removeLRUNode();
            }
            DoubleLLNode newNode = new DoubleLLNode(key, value);
            addToHead(newNode);
            map.put(key, newNode);
        }
    }

    private void moveToHead(DoubleLLNode node) {
        removeNode(node);
        addToHead(node);
    }

    private void addToHead(DoubleLLNode node) {
        node.next = head.next;
        node.prev = head;

        head.next.prev = node;
        head.next = node;
    }

    private void removeNode(DoubleLLNode node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    private void removeLRUNode() {
        DoubleLLNode lru = tail.prev;
        removeNode(lru);
        map.remove(lru.key);
    }

    public void printCacheState() {
        DoubleLLNode curr = head.next;
        System.out.print("Cache State: ");
        while (curr != tail) {
            System.out.print("(" + curr.key + ":" + curr.val + ") ");
            curr = curr.next;
        };

        System.out.println();
    }

    public static void main(String[] args) {
        LRUCache cache = new LRUCache(3);

        cache.put(1, 100);
        cache.put(2, 200);
        cache.put(3, 300);
        cache.printCacheState(); // (3:300) (2:200) (1:100)

        System.out.println("get(2): " + cache.get(2)); // 200
        cache.printCacheState(); // (2:200) (3:300) (1:100)

        cache.put(4, 400); // Evict 1
        cache.printCacheState(); // (4:400) (2:200) (3:300)

        System.out.println("get(1): " + cache.get(1)); // -1
        System.out.println("get(3): " + cache.get(3)); // 300
        cache.printCacheState(); // (3:300) (4:400) (2:200)
    }
}
