var findOriginalArray = function (changed) {
  let sortedNumbes = [...changed].sort((a, b) => a - b);

  let map = new Map();
  let arraaaay = [];

  for (let i = 0; i < sortedNumbes.length; i++) {
    let half = sortedNumbes[i] / 2;
    if (map.has(half)) {
      arraaaay.push(half);
      map.set(half, map.get(half) - 1);
      if (map.get(half) === 0) {
        delete map.delete(sortedNumbes[i] / 2);
      }
    } else {
      map.set(sortedNumbes[i], map.get(sortedNumbes[i]) + 1 || 1);
    }
  }

  return arraaaay;
};

console.log(findOriginalArray([1, 3, 4, 2, 6, 8]));
