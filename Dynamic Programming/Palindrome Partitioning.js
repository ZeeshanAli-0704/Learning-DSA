// https://leetcode.com/problems/palindrome-partitioning/


var partition = function (s) {
  // buffer for partition in DFS
  let partition = [];
  // final output of palindrome substrings
  let result = [];

  const isPalindrome = (str) => str === str.split("").reverse().join("");

  const dfs = (s, partition) => {
    // Base case:
    // Empty string must be palindrome
    if (0 == s.length) {
      result.push([...partition]);
      return;
    }

    // General cases:
    for (let i = 0; i < s.length; i++) {
      let prefix = s.substring(0, i + 1);
      let postfix = s.substring(i + 1);

      // Current prefix is palindrome, keep trying to make more partition in postfix by DFS
      if (isPalindrome(prefix)) {
        dfs(postfix, [...partition, prefix]);
      }
    }
    return;
  };

  dfs(s, partition);

  return result;
};
console.log(partition("aab"));
