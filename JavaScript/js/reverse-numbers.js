var reverseNumber = function(num) {
    if(isNaN(num)) return false;
    num = num.toString().split('');
    num = num.reverse();
    num = num.join('');
    return Number(num);
}