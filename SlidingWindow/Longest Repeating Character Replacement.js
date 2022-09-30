// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
 var characterReplacement = function (s, k) {
    let start = 0;
    let end = 0;
    let map = new Map();
    let mostFreqCharacter = 0;
    let longestLength = 0;
  
    while (s.length > end) {
      map.has(s[end]) ? map.set(s[end], map.get(s[end]) + 1) : map.set(s[end], 1);
  
      mostFreqCharacter = Math.max(mostFreqCharacter, map.get(s[end]));
  
      let remaining = end - start + 1 - mostFreqCharacter;
  
      if (remaining > k) {
        map.set(s[start], map.get(s[start]) - 1);
        start++;
      }
      longestLength = Math.max(longestLength, end - start + 1);
      end++;
    }
    return longestLength;
  };
