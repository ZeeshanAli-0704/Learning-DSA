/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function (matches) {
  let map = new Map();

  for (let i = 0; i < matches.length; i++) {
    let eachMatchResult = matches[i];
    let winner = eachMatchResult[0];
    let looser = eachMatchResult[1];

    // check & add winner & looser to map
    if (!map.has(winner)) {
      map.set(winner, 0);
    }
    if (!map.has(looser)) {
      map.set(looser, 0);
    }
    // update looser count
    map.set(looser, map.get(looser) + 1);
  }
  console.log(map);

  const mapSort1 = new Map([...map.entries()].sort((a, b) => a[0] - b[0]));

  console.log(mapSort1);
  let answere = [[], []];
  for (let [key, value] of mapSort1) {
    if (mapSort1.get(key) === 0) {
      answere[0].push(key);
    }
    if (mapSort1.get(key) === 1) {
      answere[1].push(key);
    }
  }

  console.log(answere);
  return answere;
};

console.log(
  findWinners([
    [1, 3],
    [2, 3],
    [3, 6],
    [5, 6],
    [5, 7],
    [4, 5],
    [4, 8],
    [4, 9],
    [10, 4],
    [10, 9],
  ])
);
