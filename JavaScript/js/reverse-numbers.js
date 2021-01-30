var reverseNumber = function (num) {
    if (isNaN(num)) return false;
    num = num.toString().split('');
    num = num.reverse();
    num = num.join('');
    return Number(num);
}

var reverse = function (x) {
    let negative = false;
    let output = 0;
    if (x < 0) {
        negative = true;
        x *= -1;
    }
    while (x > 0) {
        output = output * 10 + x % 10;
        x = parseInt(x / 10);
    }
    if (negative) {
        output *= -1;
    }
    if (output < Math.pow(-2, 31) || output > Math.pow(2, 31)) {
        output = 0;
    }
    return output;
}

console.log(reverse(1534));
console.log(reverse(1534236469));

var numberReverse = function (x) {
    let negative = false;
    if (x < 0) {
        negative = true;
        x *= -1;
    }
    let res = x.toString().split("").reverse().join("");
    if (res < Math.pow(-2, 31) || res > Math.pow(2, 31)) {
        return 0;
    }
    return (negative) ? res * -1 : res;
}

console.log(numberReverse(-1534));
console.log(numberReverse(1534236469));