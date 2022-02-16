/*
- Find the subset of the given number
- input {1, 2, 3}
*/
function generate_all_subsets(input) {
    let allSubset = [];
    return helper(input, allSubset, 0, "");
}

function helper(input, allSubset, index, subset) {
    if (index === input.length) {
        allSubset.push(subset);
        return;
    } else {
        helper(input, allSubset, index + 1, subset);
        helper(input, allSubset, index + 1, subset + input[index]);
    }
    return allSubset;
}

function generate_all_subsets(s) {
    let allSubset = [];
    helper(0, "");

    function helper(index, subset) {
        if (index === s.length) {
            allSubset.push(subset);
            return;
        } else {
            helper(index + 1, subset);
            helper(index + 1, subset + s[index]);
        }
    }
    return allSubset;
}