/**
 * Given two numbers m and n. Find all numbers between these two numbers such that difference between adjacent digit is 1
 * For ex m =0 n =22
 * O/p - 0,1,2,3,4,5,6,7,8,9,10,12,21
 */

function findNum(m, n) {
    let s = '';
    for(let i = m; i<=n; i++) {
        if(stepNum(i))
            s += i + ' ';
    }
    return s;
}


function stepNum(num) {
    let prevDigit = -1;
    while (parseInt(num) > 0) {
        let currDigit = parseInt(num) % 10;
        if(prevDigit != -1) {
            if(Math.abs(currDigit - prevDigit) != 1)
                return false;
        }
        num /= 10;
        prevDigit = currDigit;
    }
    return true;
}