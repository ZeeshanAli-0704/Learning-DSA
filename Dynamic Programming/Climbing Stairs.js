/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let map = {};
  const callDFS = (step) => {
    if (map[step]) {
      return map[step];
    }
    if (step === 0) {
      return 1;
    }
    if (step < 0) {
      return 0;
    }
    map[step] = callDFS(step - 1) + callDFS(step - 2);
    return map[step];
  };
  return callDFS(n);
};

console.log(climbStairs(2));
console.log(climbStairs(3));
