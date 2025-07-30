// Insertion Sort Algorithm
// Iterate through each element of the array, starting from the second element(index 1).
// For each element, compare it with the elements before it(starting from its own index and moving towards the beginning of the array).
// If the current element is smaller than the element before it, swap them.
// Repeat this process until the current element is in its correct sorted position relative to the elements before it.

const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j <=i && j>=0; j--) {
            if(arr[j] < arr[j-1]){
                let temp = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = temp;
            }
        }   
    }
    return arr;
};

console.log(insertionSort([13, 46, 24, 52, 20, 9]))