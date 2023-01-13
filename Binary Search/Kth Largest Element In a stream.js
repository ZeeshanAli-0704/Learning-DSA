class BH {
  constructor() {
    this.values = [];
  }
  add(element) {
    this.values.push(element);
    let index = this.values.length - 1;
    const current = this.values[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];

      if (parent >= current) {
        this.values[parentIndex] = current;
        this.values[index] = parent;
        index = parentIndex;
      } else break;
    }
  }
  pop() {
    const max = this.values[0];
    console.log("maxxx", max);
    const end = this.values.pop();
    console.log("enddd", end);
    this.values[0] = end;

    console.log("valueeee", this.values);

    let index = 0;
    const length = this.values.length;
    const current = this.values[0];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild < current) swap = leftChildIndex;
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightChild < current) ||
          (swap !== null && rightChild < leftChild)
        )
          swap = rightChildIndex;
      }

      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = current;
      index = swap;
    }
    console.log("this.values at end", this.values);
    return max;
  }
}

var KthLargest = function (k, nums) {
  this.heap = new BH();
  nums.forEach((n) => this.heap.add(n));

  console.log("dad", this.heap);
  this.k = k;
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  this.heap.add(val);
  console.log("added", val, this.heap);
  while (this.heap.values.length > this.k) {
    //console.log('add', val, 'size', this.heap.values);
    this.heap.pop();
  }
  const kth = this.heap.values[0];
  return kth;
};
