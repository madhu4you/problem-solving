/**
 * https: //www.geeksforgeeks.org/count-possible-paths-top-left-bottom-right-nxm-matrix/
 * Consider a maze mapped to a matrix with an upper left corner at coordinates(row, column) = (0, 0).You can only move either towards right or down from a cell.You must determine the number of distinct paths through the maze.You will always start at a position(0, 0), the top left, and end up at(n - 1, m - 1), the bottom right.
 * As an example, consider the following diagram where '1'
 * indicates an open cell and '0'
 * indicates blocked.You can only travel through open cells, so no path can go through the cell at(0, 2).There are two distinct paths to the goal.
 */

function numberOfPaths(matrix) {
    // Write your code here
    const MOD = 1e9 + 7;
    let colSize = matrix[0].length;
    let rowSize = matrix.length;
    let table = [];
    for (let i = 0; i < rowSize; i++) {
        table[i] = [];
        for (let j = 0; j < colSize; j++) {
            table[i].push(0);
        }
    }

    //1st Row set to 1
    for (let i = 0; i < rowSize; i++) {
        if (matrix[i][0] === 1)
            table[i][0] = 1;
        else break;
    }
    //1st Column Set to 1    
    for (let j = 0; j < colSize; j++) {
        if (matrix[0][j] === 1)
            table[0][j] = 1;
        else break;
    }

    for (let row = 1; row < rowSize; row++) {
        for (let col = 1; col < colSize; col++) {
            if (matrix[row][col] === 1) {
                table[row][col] = (table[row - 1][col] + table[row][col - 1]) % MOD;
            }
        }
    }
    return table[rowSize - 1][colSize - 1];
}


function findMaxPath(currentRow, currentColumn, destRow, destCol) {
    // Base condition
    if (currentRow > destRow || currentColumn > destCol) {
        return 0;
    }
    // Successful path found
    if (currentRow === destRow && currentColumn === destCol) {
        return 1;
    }
    // Finding the number of paths that can be formed from increasing
    // the current row's Count and Current column's count one after the other.
    const pathsInRows = findMaxPath(currentRow + 1, currentColumn, destRow, destCol);
    const pathsInColums = findMaxPath(currentRow, currentColumn + 1, destRow, destCol);
    return (pathsInRows + pathsInColums);
}


function findMaxPathSrcToDes(rows, cols) {
    // Initial rows and columns to begin with.0,0 is the first row and col index we are choosing
    return findMaxPath(0, 0, rows - 1, cols - 1);
}

const num_of_paths = findMaxPathSrcToDes(3, 3);
console.log('Number of Paths', num_of_paths);