// Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.

// You must solve it in O(n) time complexity.

 

// Example 1:

// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5
// Example 2:

// Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
// Output: 4


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  // using in built function of Max heap via Max Priority queue
  const elements = new MaxPriorityQueue();
  for (let i = 0; i < nums.length; i++) {
    elements.enqueue(nums[i]);
  }
  let kthLargest = -Infinity;

  // as heap se sorted Descending order we can just remove top k elements
  while (k) {
    kthLargest = elementss.dequeue().element;
    k--;
  }

  return kthLargest;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  // using in built function of Max heap via Min Priority queue
  const heap = new MinPriorityQueue();

  // as heap se sorted asceding order we can just keep track that we have max k element in queue
  // reason is at last of traversal when we take top most element it will be the kth largest as we have only k elements in heap
  // as soon as size goes beyond k we use dequeue to remove element
  for (let i = 0; i < nums.length; i++) {
    if (heap.size() == k && nums[i] <= heap.front()?.element) continue;
    heap.enqueue(nums[i]);
    if (heap.size() > k) heap.dequeue();
  }

  // return top most
  return heap.front().element;
};
