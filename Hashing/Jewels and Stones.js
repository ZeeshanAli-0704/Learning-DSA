/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  let map = {};
  for (let i = 0; i < stones.length; i++) {
    if (map[stones[i]]) {
      map[stones[i]]++;
    } else {
      map[stones[i]] = 1;
    }
  }
  let count = 0;
  for (let i = 0; i < jewels.length; i++) {
    if (map[jewels[i]]) {
      count = count + map[jewels[i]];
    }
  }
  return count;
};

console.log(numJewelsInStones("aA", "aAAbbbb"));
