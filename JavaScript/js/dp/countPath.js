function countPaths(m, n) {
    let table = [[]];

    for(let i = 0; i < m; i++) {
        table[i][0] = 1;
    }
    for(let j = 0; j < n; j++) {
        table[0][j] = 1;
    }

    for(let row = 0; row < m; row++) {
        for (let col = 0; col< n; col++) {
            table[row][col] = table[row-1][col] + table[row][col-1];
        }
    }
    return table[m][n];
}