function combintion(n, k) {
    if(k==0 || k == n) return 1;
    let table = [];
    //base case
    for(let row = 0; row < n; row++) {
        table[row][0] = 1;
    }
    //Diagonal
    for(let col = 0; col < k; col++) {
        table[col][col] = 1;
    }
    for(let row = 0; row < n; row++) {
        for(let col = 0; col < k; col++) {
            table[row][col] = table[row-1][col] + table[row-1] + table[col-1];
        }
    }
    return table[n][k];
}