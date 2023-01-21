// https://leetcode.com/problems/restore-ip-addresses/description/
var restoreIpAddresses = function (s) {
  let ans = [];
  // if length is greater than 12 that means str cannot be divided in 4 part of each part max 3
  // if length is less than 4 means not able to generate 4 parts
  if (s.length > 12 || s.length < 4) return [];

  function backtrack(start, substrings) {
    // we have 4 parts of string
    if (substrings.length == 4) {
      let strAddress = [...substrings].join(".");
      // strAddress is of length s + 3(dot) & comparing it with s.length + 3 dots
      // also means that we have reached the end of string & considered all numbers from string s
      if (strAddress.length == s.length + 3) {
        ans.push(strAddress);
        return;
      }
    }
    // i = start becoz we have to move to nect index every time
    for (let i = start; i < s.length; i++) {
      let temp = s.substring(start, i + 1);
      // temp should be less than 255
      if (Number(temp) <= 255) {
        // temp[0] ==0 means that any part of ip cannot have leading zero
        // & if so we will not consider that as valid part & move to next index
        if (temp[0] == 0 && temp.length >= 2) continue;
        backtrack(i + 1, [...substrings, temp]);
      }
    }
  }

  backtrack(0, []);
  return ans;
};

console.log(restoreIpAddresses("25525511135"));
