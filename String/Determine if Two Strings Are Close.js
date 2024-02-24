/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
const closeStrings = function (word1, word2) {
  if (word1.length !== word2.length) {
    return false;
  }

  let map1 = {};
  let map2 = {};

  for (let i = 0; i < word1.length; i++) {
    let char = word1[i];
    if (map1[char]) {
      map1[char] = map1[char] + 1;
    } else {
      map1[char] = 1;
    }
  }

  for (let i = 0; i < word2.length; i++) {
    let char = word2[i];
    if (map2[char]) {
      map2[char] = map2[char] + 1;
    } else {
      map2[char] = 1;
    }
  }

  if (Object.entries(map1).length !== Object.entries(map2).length) {
    return false;
  }

  // check if keys are same or not

  for (let key in map1) {
    if (!map2[key]) {
      return false;
    }
  }

  let array1 = Object.values(map1).sort();
  let array2 = Object.values(map2).sort();
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
};

console.log(closeStrings("uau", "ssx"));
