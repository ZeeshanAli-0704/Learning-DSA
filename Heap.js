class Heap {
  constructor() {
    this.data = [];
  }

  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  getLeftChildIndex(i) {
    return 2 * i + 1;
  }

  getRightChildIndex(i) {
    return 2 * i + 2;
  }

  swap(i1, i2) {
    let temp = this.data[i1];
    this.data[i1] = this.data[i2];
    this.data[i2] = temp;
  }
  //maxheap
  push(value) {
    this.data.push(value);
    this.heapifyUp();
  }
  //maxheap function
  heapifyUp() {
    let currentIndex = this.data.length - 1;
    while (
      this.data[currentIndex] > this.data[this.getParentIndex(currentIndex)]
    ) {
      this.swap(currentIndex, this.getParentIndex(currentIndex));
      currentIndex = this.getParentIndex(currentIndex);
    }
  }

  poll() {
    let maxValue = this.data[0];
    this.data[0] = this.data[this.data.length - 1];
    this.data.length--;
    this.heapifyDown();
    return maxValue;
  }
  //maxheap function to get max value
  heapifyDown() {
    let currentIndex = 0;

    while (this.data[this.getLeftChildIndex(currentIndex)] !== undefined) {
      let biggestChildIndex = this.getLeftChildIndex(currentIndex);

      if (
        this.data[this.getRightChildIndex(currentIndex)] !== undefined &&
        this.data[this.getRightChildIndex(currentIndex)] >
          this.data[this.getLeftChildIndex(currentIndex)]
      ) {
        biggestChildIndex = this.getRightChildIndex(currentIndex);
      }

      if (this.data[currentIndex] < this.data[biggestChildIndex]) {
        this.swap(currentIndex, biggestChildIndex);
        currentIndex = biggestChildIndex;
      } else {
        return;
      }
    }
  }
  //  min Heap logic
  add(element) {
    this.data.push(element);
    let index = this.data.length - 1;
    const current = this.data[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.data[parentIndex];

      if (parent >= current) {
        this.data[parentIndex] = current;
        this.data[index] = parent;
        index = parentIndex;
      } else break;
    }
  }
}

const heap = new Heap();
console.log(heap);

// heap.push(25);
// heap.push(5);
// heap.push(40);
// heap.push(70);
// heap.push(90);
// heap.push(44);
// heap.push(100);

heap.add(25);
heap.add(5);
heap.add(40);
heap.add(70);
heap.add(90);
heap.add(44);
heap.add(100);

console.log(heap.data.join(","));
