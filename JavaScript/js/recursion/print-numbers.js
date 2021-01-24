function printNum(n) {
    let output = [];
    helper(n);

    function helper(n) {
        if (n == 0) {
            return 0;
        } else {
            output.push(n);
            helper(n - 1);
        }
    }
    return output;
}
console.log(printNum(10));

function factorial(n) {
    if (n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(3));

function binary(n) {
    let result = [];
    helper(n, "");

    function helper(n, str) {
        if (n < 1) {
            result.push(str);
            return;
        }
        helper(n - 1, str + "0");
        helper(n - 1, str + "1");
    }
    return result;
}

console.log(binary(4));

function generateString(n, k) {
    let result = [];
    helper(n, k, "");

    function helper(n, k, str) {
        if (n < 1) {
            result.push(str);
            return;
        }
        for (let j = 0; j < k; j++) {
            helper(n - 1, k, str + j);
        }
    }
    return result;
}
console.log(generateString(4, 2));

function towerOfHonai(n, s, d, e) {
    if (n < 1) return;
    towerOfHonai(n - 1, s, e, d);
    console.log("Move Disk " + n + " from " + s + " to " + d);
    towerOfHonai(n - 1, e, d, s);
}
//console.log(towerOfHonai(4, "A", "B", "C"));

function sortArray(arr) {
    return helper(arr.length);

    function helper(n) {
        if (n === 1) {
            return 1;
        }
        return (arr[n - 1] < arr[n - 2]) ? 0 : helper(n - 1);
    }
}

console.log(sortArray([2, 3, 4, 1, 2, 3, 4]));