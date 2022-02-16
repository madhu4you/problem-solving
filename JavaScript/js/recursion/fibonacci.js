function fib(n) {
    if (n <= 1) return 1;
    return fib(n - 1) + fib(n - 2);
}

console.log(fib(5));

//Top Down Dynamic programming

function fibonacci(n) {
    let memo = [];
    if (n <= 1) return n;
    else memo[n] = memo[n - 1] + memo[n - 2];
    if (memo[n]) return memo[n];
}
//Bottom Up DP

function fib(n) {
    let tabel = [];
    tabel[0] = 1;
    tabel[1] = 1;
    for (let i = 2; i <= n; i++) {
        tabel[i] = tabel[i - 1] + tabel[i - 2];
    }
    return tabel[n];
}

//OR

function fib(n) {
    let tabel = [];
    tabel[0] = 1;
    tabel[1] = 1;
    for (let i = 2; i <= n; i++) {
        tabel[i % 3] = tabel[(i - 1) % 3] + tabel[(i - 2) % 3];
    }
    return tabel[n % 3];
}

let fibRec = (n, b1, b2) => {
    if(n === 0) return b2;
    return fibRec(n - 1, b2, b1+b2);
}

console.log(fibRec(5, 0, 1));