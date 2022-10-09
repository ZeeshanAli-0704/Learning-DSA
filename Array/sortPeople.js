// You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.

// For each index i, names[i] and heights[i] denote the name and height of the ith person.

// Return names sorted in descending order by the people's heights.

 

// Example 1:

// Input: names = ["Mary","John","Emma"], heights = [180,165,170]
// Output: ["Mary","Emma","John"]
// Explanation: Mary is the tallest, followed by Emma and John.
// Example 2:

// Input: names = ["Alice","Bob","Bob"], heights = [155,185,150]
// Output: ["Bob","Alice","Bob"]
// Explanation: The first Bob is the tallest, followed by Alice and the second Bob.

var sortPeople = function (names, heights) {
  let mapOfHeight = {};
  let sortedPeople = [];

  for (let i = 0; i < heights.length; i++) {
    mapOfHeight[heights[i]] = names[i];
  }

  let sortHeight = heights.sort((a, b) => b - a);

  for (let i = 0; i < sortHeight.length; i++) {
    let valueOfMap = mapOfHeight[sortHeight[i]];
    sortedPeople.push(valueOfMap);
  }

  return sortedPeople;
};

console.log(sortPeople(["Mary", "John", "Emma"], [180, 165, 170]));
