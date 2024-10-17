/**
 * Function to calculate the minimum number of swaps required to move all '1's to the right side.
 * @param {string} s - The input binary string.
 * @return {number} - The minimum number of swaps.
 */
var minimumSteps = function (s) {
    let start = 0;
    let end = s.length - 1;
    let swapCount = 0;
    let charArray = s.split("");  // Convert string to array for easier manipulation

    // Traverse the string from both ends
    while (start < end) {
        if (charArray[start] === '1') {
            // Move `end` pointer to skip over '1's at the right side
            while (charArray[end] === '1' && end > start) {
                end--;
            }
            // Perform the swap and update the count
            swapCount += (end - start);
            [charArray[start], charArray[end]] = [charArray[end], charArray[start]];  // Swap elements
            start++;
        } else {
            // Move `start` pointer if no swap needed
            start++;
        }
    }
    return swapCount;
};

// Test cases
console.log(minimumSteps("100"));   // Output: 1
console.log(minimumSteps("0111"));  // Output: 2
console.log(minimumSteps("101"));   // Output: 1
console.log(minimumSteps("101"));   // Output: 1
