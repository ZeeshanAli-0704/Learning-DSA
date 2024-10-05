/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
    let newSortedArr = [...arr].sort((a, b) => a - b);
    let result = [];
    let indexMap = new Map();
    for (let i = 0; i < arr.length; i++) {
        let indexOfElement = newSortedArr.indexOf(arr[i]);
        if (!indexMap.has(arr[i])) {
            indexMap.set(arr[i], indexOfElement + 1)
        }
    };
    console.log(Object.values(indexMap))
    return result
};

console.log(arrayRankTransform([37, 12, 28, 9, 100, 56, 80, 5, 12]))