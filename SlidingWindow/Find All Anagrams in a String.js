/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
// Approach: Sliding Window with HashMap to keep count of letters needed to satisfy anagram
// Time Complexity: O(S + P)
// Space Complexity: O(1)
var findAnagrams = function (s, p) {
  if (!s || s.length < p.length) return [];

  // Result is the output array that stores start indices,
  // freqMap maps each character in p to its count

  const result = [],
    freqMap = {};
  let count = 0,
    start = 0,
    end = 0;

  for (let char of p) {
    if (freqMap[char] === undefined) count++;
    freqMap[char] = (freqMap[char] || 0) + 1;
  }

  // Iterate over s using two pointers (start and end)
  while (end < s.length) {
    let char = s[end]; // The 'current' character
    // If the current character exists in the frequency map, then decrement it's count
    // and if the count reaches 0, then we know we got the right # of occurences for it
    if (freqMap[char] !== undefined) {
      freqMap[char] -= 1;
      if (freqMap[char] === 0) count--;
    }

    end++;

    // Once we reach count = 0, then check to see if it is
    // a valid anagram and move the window to the right
    while (count === 0) {
      let temp = s[start];
      if (freqMap[temp] !== undefined) {
        freqMap[temp] += 1;
        if (freqMap[temp] > 0) count++;
      }

      // If it is valid, then add the start index to the result
      if (end - start === p.length) result.push(start);
      start++;
    }
  }

  return result;
};

var findAnagrams = function (s, p) {
  let sCount = new Array(26).fill(0);
  let pCount = new Array(26).fill(0);

  let result = [];

  for (let i = 0; i < p.length; i++) {
    sCount[s.charCodeAt(i) - 97]++;
    pCount[p.charCodeAt(i) - 97]++;
  }

  if (matching(sCount, pCount)) result.push(0);

  for (let i = p.length; i < s.length; i++) {
    // remove letter count which is not in window
    sCount[s.charCodeAt(i - p.length) - 97]--;
    // add letter count
    sCount[s.charCodeAt(i) - 97]++;

    if (matching(sCount, pCount)) result.push(i - p.length + 1);
  }

  return result;
};

const matching = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};
