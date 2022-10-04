// The athletes are placed based on their scores, where the 1st place athlete has the highest score, the 2nd place athlete has the 2nd highest score, and so on. The placement of each athlete determines their rank:

// The 1st place athlete's rank is "Gold Medal".

// The 2nd place athlete's rank is "Silver Medal".

// The 3rd place athlete's rank is "Bronze Medal".

// For the 4th place to the nth place athlete, their rank is their placement number (i.e., the xth place athlete's rank is "x").

// Return an array answer of size n where answer[i] is the rank of the ith athlete.


var findRelativeRanks = function (score) {
  const sortedArray = score.sort((a, b) => b - a);
  console.log(sortedArray);
  let count = 1;
  let obj = {};
  for (let i = 0; i < sortedArray.length; i++) {
    obj[score[i]] = getValue(count);
    count++;
  }
  console.log(obj);

  for (const property in obj) {
    console.log(property, obj[property]);
    const indexOfProperty = score.indexOf(property);
    score[indexOfProperty] = obj[property];
  }
  console.log(score);
};

const getValue = (count) => {
  switch (count) {
    case 1:
      return "Gold Medal";
    case 2:
      return "Silver Medal";
    case 3:
      return "Bronze Medal";
    default:
      return count;
  }
};

findRelativeRanks([10, 3, 8, 9, 4]);
