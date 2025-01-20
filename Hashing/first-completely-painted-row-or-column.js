/**
 * @param {number[]} arr
 * @param {number[][]} mat
 * @return {number}
 */
var firstCompleteIndex = function (arr, mat) {
    let row = new Array(mat.length).fill(0);
    let col = new Array(mat[0].length).fill(0);

    let valueToIndex = new Map();
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            valueToIndex.set(mat[i][j], [i, j]);
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (valueToIndex.has(arr[i])) {
            let [rowIdx, colIdx] = valueToIndex.get(arr[i]);
            row[rowIdx]++;
            col[colIdx]++;

            if (row[rowIdx] === mat[0].length || col[colIdx] === mat.length) {
                return i;
            }
        }
    }

    return -1;
};