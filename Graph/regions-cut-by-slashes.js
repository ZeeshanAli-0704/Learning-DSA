
function regionsBySlashes(grid) {
    let visted = {};
    let height = grid.length;
    let width = grid[0].length;//as n*n matrix - square

    grid = grid.map((elem) => elem.split(''));
    let partitions = 0

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            for (let cell = 0; cell < 4; cell++) {//dividing every cell to 4 parts separated by 2-diagonals
                let key = `${i}-${j}-${cell}`;
                if (!visted[key]) {
                    partitions++;
                    //console.log(key)
                    DFS(i, j, cell);
                }
            }
        }
    }

    function DFS(row, col, cell) {
        let stack = [[row, col, cell]];

        while (stack.length > 0) {
            //console.log(stack)
            let currPos = stack.pop();
            let currRow = currPos[0];
            let currCol = currPos[1];
            let currCell = currPos[2];

            let key = `${currRow}-${currCol}-${currCell}`;

            if (!visted[key]) {

                if (grid[currRow][currCol] === ' ') {//when NO Boundary
                    for (let cellDFS = 0; cellDFS < 4; cellDFS++) {
                        if (cellDFS !== currCell) {
                            stack.push([currRow, currCol, cellDFS])
                        }//pushing all subcells except the starting one
                    }
                }
                else if (grid[currRow][currCol] === '/') {
                    if (currCell === 0) {
                        stack.push([currRow, currCol, 1]);
                    }
                    else if (currCell === 1) {
                        stack.push([currRow, currCol, 0]);
                    }
                    else if (currCell === 2) {
                        stack.push([currRow, currCol, 3]);
                    }
                    else if (currCell === 3) {
                        stack.push([currRow, currCol, 2]);
                    }
                }
                else if (grid[currRow][currCol] === '\\') {
                    if (currCell === 0) {
                        stack.push([currRow, currCol, 3]);
                    }
                    else if (currCell === 3) {
                        stack.push([currRow, currCol, 0]);
                    }
                    else if (currCell === 1) {
                        stack.push([currRow, currCol, 2]);
                    }
                    else if (currCell === 2) {
                        stack.push([currRow, currCol, 1]);
                    }
                }


                //Now, connecting to adjacent cells via the subcells - with checking boundary condition
                if (currCell === 0 && currCol > 0) {
                    stack.push([currRow, currCol - 1, 2]);
                }
                else if (currCell === 1 && currRow > 0) {
                    stack.push([currRow - 1, currCol, 3]);
                }
                else if (currCell === 2 && currCol < width - 1) {
                    stack.push([currRow, currCol + 1, 0]);
                }
                else if (currCell === 3 && currRow < height - 1) {
                    stack.push([currRow + 1, currCol, 1]);
                }

                visted[key] = true;
            }
        }
    }

    return partitions;
}

console.log(regionsBySlashes(grid = [" /", "/ "]))
