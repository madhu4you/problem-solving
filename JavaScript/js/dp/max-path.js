/**
 * https://www.geeksforgeeks.org/maximum-path-sum-matrix/
 * https://www.geeksforgeeks.org/count-possible-paths-top-left-bottom-right-nxm-matrix/
 * Count all possible paths from top left to bottom right of a M x N matrix
*/
function maxPath(grid) {
    let table = [[]];
    let rowLength = grid[0].length;
    let colLength = grid.length;
    tabel[0][0] = grid[0][0];
    for (let row = 1; row <= rowLength - 1; ++row) 
        table[row][0] = table[row - 1][0] + grid[row][0];

    for (let col = 1; col <= colLength - 1; ++col) 
        table[0][col] = table[0][col-1] + grid[0][col];

    for (let row = 1; row <= rowLength - 1; ++row ) {
        for (let col = 1; col <= colLength - 1; ++col) {
            table[row][col] = grid[row][col] + Math.max(table[row-1][col], table[row][col-1]);
        }
    }
    return table[rowLength-1][colLength-1];
}