let reverseString = function (str) {
    if (str === "") return false;
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}

console.log(reverseString("Hello World!!!"));