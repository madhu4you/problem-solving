//Bottom Up
function fib(n) {
    let num = [1, 1];
    for(let i =2;  i <= n;  i++ ) {
        num[i] = num[i-1] + num[i-2];
    }
    return  num[n];
}

console.log(fib(3));


//Top Down

function fibonacci(n) {
    let memo = [1, 1];
    function helper(n) {
        if(!memo[n]) {
            memo[n] =  helper(n-1) + helper(n-2);
        }
        return memo[n];
    }
    return helper(n);
}

console.log(fibonacci(3));

//Less space

function fibTab(n)  {
    let table = [0, 1, 1];
    for(let i = 3; i <=n; i++) {
        table[i % 3] = table[(i-1) % 3] + table[(i-2) % 3];
    }
    return table[n % 3];
}