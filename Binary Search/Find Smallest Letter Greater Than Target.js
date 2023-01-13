//https://leetcode.com/problems/find-smallest-letter-greater-than-target/description/

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let left = 0; // sets left index
  let right = letters.length; // sets max right index

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (target < letters[mid]) {
      // letters[mid] is greater than our target so we set our
      // right index to the mid index
      right = mid;
    } else {
      // if letters[mid] > target then we set left index to mid + 1
      left = mid + 1;
    }
  }
  // edge case when we knw that left pointer has reached at the end of list means smallest character not available
  if(left === letters.length){
    return letters[0]
  }
  return letters[left];
};
