// Given a string s, return true if the s can be palindrome after deleting at most one character from it.


// Example 1:
// Input: s = "aba"
// Output: true


/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  let pstring = s;
  let deletionAllowed = 1;
  let start = 0;
  let end = s.length - 1;

  while (start <= end) {
    if (pstring[start] === pstring[end]) {
      start++;
      end--;
    } else if (deletionAllowed) {
      return (
        checkPalindrome(pstring, start + 1, end) ||
        checkPalindrome(pstring, start, end - 1)
      );
    } else {
      return false;
    }
  }
  return true;
};

const checkPalindrome = (s, i, j) => {
  let left = i;
  let right = j;
  while (left < right) {
    if (s.charAt(left) == s.charAt(right)) {
      left++;
      right--;
Given a string s, return true if the s can be palindrome after deleting at most one character from it.

Example 1:

Input: s = "aba"
Output: true    }
    if (s.charAt(left) != s.charAt(right)) {
      return false;
    }
  }
  return true;
};

console.log(validPalindrome("abc"));

console.log(validPalindrome("abcd"));
