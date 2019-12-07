/*
- Find the subset of the given number
- input {1, 2, 3}
*/
function subsets(input) {
    let totalSubset = Math.pow(2, input.length);
    return helper([], input);
}

function helper(subSet, input) {
    if(input.length === 0) {
        return subset;
    }
    else {
        include = helper(subset, input[i]);
        exclude = helper(subset + input[0]);
    }
} 