function footballScroe(n) {
    let num = [];
    num[0] = 1;
    for (let i = 1; i <= n; i++) {
        num[i] = (i < 2 ? 0 : num[i - 2]) +
            (i < 3 ? 0 : num[i - 3]) +
            (i < 6 ? 0 : num[i - 6])
    }
    return num[n];
}

//Optimal solution
function footballScroeOptimized(n) {
    let num = [];
    num[0] = 1;
    for (let i = 1; i <= n; i++) {
        num[i % 7] = (i < 2 ? 0 : num[(i - 2) % 7]) +
            (i < 3 ? 0 : num[(i - 3) % 7]) +
            (i < 6 ? 0 : num[(i - 6) % 7])
    }
    return num[n % 7];
}