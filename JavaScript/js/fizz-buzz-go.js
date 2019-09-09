function fizzBuzzGo(num) {
    var output='';
    if(!isNaN(num)) {
        if (num % 3 === 0) output += 'fizz';
        if (num % 5 ===0) output += 'buzz';
        if (output) return output;
        return num.toString();
    }
    else
        return -1;
}