function createPhoneNumber(numbers) {
    if (numbers.length < 10 || numbers.length > 10) return false;
    let slate = "";
    for (let i = 0; i < numbers.length; i++) {
        if (i === 0) slate = "(";
        if (i === 3) slate += ") ";
        if (i === 6) slate += " - ";
        slate += numbers[i];
    }
    return slate;
}

function createPhoneNumber(numbers) {
    return numbers.reduce((p, c) => p.replace('x', c), "(xxx) xxx-xxxx");
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));