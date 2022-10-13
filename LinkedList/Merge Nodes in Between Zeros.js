// You are given the head of a linked list, which contains a series of integers separated by 0's. The beginning and end of the linked list will have Node.val == 0.

// For every two consecutive 0's, merge all the nodes lying in between them into a single node whose value is the sum of all the merged nodes. The modified list should not contain any 0's.

// Return the head of the modified linked list.

// Example 1:
// Input: head = [0,3,1,0,4,5,2,0]
// Output: [4,11]
// Explanation:
// The above figure represents the given linked list. The modified list contains

// The sum of the nodes marked in green: 3 + 1 = 4.
// The sum of the nodes marked in red: 4 + 5 + 2 = 11.
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var mergeNodes = function (head) {
  let sum = 0;
  let current = head;

  while (current != null) {
    let nextNode = current.next;
    while (nextNode.val !== 0) {
      sum += nextNode.val;
      nextNode = nextNode.next;
    }

    current.val = sum;
    sum = 0;
    if (nextNode.next === null) {
      nextNode = null;
    }
    current.next = nextNode;
    current = nextNode;
  }

  return head;
};
