/** 
 * Factorial of a Number 
 * 1. Using for loop
 * 2. Recursion Method
 */

function factorial(num) {
    let output = 1;
    for (i = num; i > 1; i--) {
        output *= i
    }
    return output;
}

function factorialRecursion(num) {
    if (num == 1 || num == 0) {
        return num;
    }
    return num * factorialRecursion(num - 1);
}