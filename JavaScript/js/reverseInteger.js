let reverse = (num) => {
    let result = 0;
    while(num > 0) {
        let remainder = parseInt(num % 10);
        result = (result * 10) + remainder;
        num = parseInt(num / 10);
    }
    return result;
}
console.log(reverse(123));

let reverseInt = (num) => {
    return num.toString().split('').reverse().join('');
}
console.log(reverseInt(123));