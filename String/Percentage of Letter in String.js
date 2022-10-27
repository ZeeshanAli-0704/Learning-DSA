
// Given a string s and a character letter, return the percentage of characters in s that equal letter rounded down to the nearest whole percent.

 

// Example 1:

// Input: s = "foobar", letter = "o"
// Output: 33
// Explanation:
// The percentage of characters in s that equal the letter 'o' is 2 / 6 * 100% = 33% when rounded down, so we return 33.
// Example 2:

// Input: s = "jjjj", letter = "k"
// Output: 0
// Explanation:
// The percentage of characters in s that equal the letter 'k' is 0%, so we return 0.
/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function (s, letter) {
  const charMap = {};

  for (let i = 0; i < s.length; i++) {
    if (charMap[s[i]]) {
      charMap[s[i]]++;
    } else {
      charMap[s[i]] = 1;
    }
  }

  const letterCount = charMap[letter];

  if (letterCount) {
    let percent = (letterCount / s.length) * 100;
    return parseInt(percent);
  } else {
    return 0;
  }
};

console.log(percentageLetter("foobar", "o"));
