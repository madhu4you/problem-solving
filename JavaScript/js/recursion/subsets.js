/*
- Find the subset of the given number
- input {1, 2, 3}
*/
function generate_all_subsets(s) {
    let allSubset = [];
    return helper(input, allSubset, 0, "");
}

function helper(input, allSubset, index, subset) {
    if(index === input.length) {
        allSubset.push(subset);
    }
    else {
        helper(input, allSubset, index+1, subset);
        helper(input, allSubset, index+1, subset + input[index]);
    }
  return allSubset;
}