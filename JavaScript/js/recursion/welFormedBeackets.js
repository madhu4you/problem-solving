function find_all_well_formed_brackets(n) {
    return bracketHelper(n, 0, 0, "", []);
}

function bracketHelper(num, left, right, subset, result) {
    if (right === num) return result.push(subset);
    if (left < num) {
        bracketHelper(num, left + 1, right, subset + "(", result);
    }
    if (right < left) {
        bracketHelper(num, left, right + 1, subset + ")", result);
    }
    return result;
}