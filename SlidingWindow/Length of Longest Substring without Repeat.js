var lengthOfLongestSubstring = function (s) {
  let slow = 0,
    fast = 0,
    max = 0,
    set = new Set();

  while (fast < s.length) {
    if (!set.has(s[fast])) {
      set.add(s[fast]);
      fast++;
    } else {
      set.delete(s[slow]);
      slow++;
    }
    max = set.size > max ? set.size : max;
  }
  return max;
};

console.log(lengthOfLongestSubstring("abcabcdbb"));
