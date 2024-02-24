/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
const findJudge = function (n, trust) {
    if (n === 1) return 1;
    const trustCount = new Array(n + 1).fill(0);
    console.log(trustCount);
    for (let i = 0; i < trust.length; i++) {
        trustCount[trust[i][0]]--;
        trustCount[trust[i][1]]++;
    }
    console.log(trustCount);
    for (let i = 0; i <= n; i++) {
        if (trustCount[i] === n - 1) return i;
    }
    return -1;
};


// console.log(findJudge(n = 2, trust = [[1, 2]]))
console.log(findJudge(n = 3, trust = [[1, 2], [2, 3]]))
// console.log(findJudge(n = 3, trust = [[1, 3], [2, 3], [3, 1]]))