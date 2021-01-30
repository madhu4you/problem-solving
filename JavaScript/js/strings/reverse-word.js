let reverseWordV2 = function (str) {
    if (str === "") return false;
    let splitStr = str.split(" ");
    let result = [];
    for (let i = splitStr.length - 1; i >= 0; i--) {
        result.push(splitStr[i]);
    }
    return result.join(" ");
}

console.log(reverseWordV2("Hello World!!!"));