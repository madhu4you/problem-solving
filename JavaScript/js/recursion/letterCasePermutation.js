function letterCasePermutation(s) {
    if (!s) return false;
    let output = [];
    helper(s, 0, "");
    return output;

    function helper(str, index, slate) {
        if (index >= str.length) {
            output.push(slate);
            return output;
        }
        if (isNaN(str[index])) {
            helper(str, index + 1, slate + str[index].toUpperCase());
        }
        helper(str, index + 1, slate + str[index]);
    }
}

console.log(letterCasePermutation("a1b2"));