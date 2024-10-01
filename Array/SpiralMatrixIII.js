

// ### Explanation:

// 1. ** Initialization **:
// - `c` and `r` are initialized to the starting column(`cStart`) and row(`rStart`), respectively.
//    - `result` is initialized with the starting position`[r, c]`.
//    - `currentDirection` starts as `"E"` (East), meaning the initial direction is to the right.
//    - `stepsCircle` tracks how many steps should be taken in the current direction before changing direction.

// 2. ** Outer Loop **:
// - The loop continues until all cells in the matrix are visited(`result.length < rows * cols`).

// 3. ** Direction and Steps **:
// - For horizontal movements(East and West), `stepsCircle` is incremented by 1 because the number of steps increases every time you change from a horizontal to a vertical direction or vice versa.
//    - `currentCircleCount` is initialized to 0 and will count the steps taken in the current direction.

// 4. ** Inner Loop(Movement) **:
// - Depending on the`currentDirection`, the code updates the position by adjusting either the row or column:
// - `E`(East): Move right(increment column`c` by 1).
//      - `S`(South): Move down(increment row`r` by 1).
//      - `W`(West): Move left(decrement column`c` by 1).
//      - `N`(North): Move up(decrement row`r` by 1).
//    - After each move, the new position`[r, c]` is added to `result` if it lies within the bounds of the matrix(`0 <= r < rows` and`0 <= c < cols`).
//    - This process repeats until the number of steps for the current direction(`stepsCircle`) is completed.

// 5. ** Changing Direction **:
// - After completing the steps in the current direction, `currentDirection` is updated in the order of East → South → West → North → East, repeating in a clockwise manner.

// 6. ** Termination **:
// - The loop continues until all cells have been visited(`result.length` equals`rows * cols`).
//    - Finally, `result` is returned, which contains the sequence of coordinates in spiral order.

// ### Example:
// For the input`rows = 1`, `cols = 4`, `rStart = 0`, `cStart = 0`:
// - The matrix has 1 row and 4 columns.
// - The traversal starts at`[0, 0]`.
// - The function will output`[[0, 0], [0, 1], [0, 2], [0, 3]]`, which is the only valid spiral path for this configuration.

// ### Complexity:
// - ** Time Complexity **: O(rows * cols), because every cell in the matrix is visited exactly once.
// - ** Space Complexity **: O(rows * cols), as the result array stores all coordinates.

// ### Key Points:
// - The algorithm efficiently handles the spiral traversal by incrementally increasing the step count and correctly managing direction changes.
// - The boundary checks ensure that only valid coordinates are added to the result, avoiding out - of - bounds errors.


/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */
var spiralMatrixIII = function (rows, cols, rStart, cStart) {
    let c = cStart;
    let r = rStart;
    let result = [[r, c]];
    let currentDirection = "E";
    let stepsCircle = 0;

    while (result.length < rows * cols) {

        if (currentDirection == 'E' || currentDirection == 'W') {
            stepsCircle++;
        }
        //move in a direction
        let currentCircleCount = 0
        while (currentCircleCount < stepsCircle) {
            switch (currentDirection) {
                case 'E':
                    c = c + 1;
                    break;
                case 'S':
                    r = r + 1;
                    break;
                case 'W':
                    c = c - 1;
                    break;
                case 'N':
                    r = r - 1;
                    break;
            }
            currentCircleCount++;
            if (r < rows && c < cols && r >= 0 && c >= 0) {
                result.push([r, c])
            }
        };

        switch (currentDirection) {
            case 'E':
                currentDirection = "S"
                break;
            case 'S':
                currentDirection = "W"
                break;
            case 'W':
                currentDirection = "N"
                break;
            case 'N':
                currentDirection = "E"
                break;
        }
    }

    return result;
};


console.log(spiralMatrixIII(rows = 1, cols = 4, rStart = 0, cStart = 0));
