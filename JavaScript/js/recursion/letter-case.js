/** 
 * Letter case permutaion
 * input = "a1b2";
 * result = ["a1b2", "A1b2", "a1B2", "A1B2"];
*/

function letterCase(input) {
    return letterCase(input, "", 0, current);
}

function letterCase(input, subset, i, current) {
    if (i === input.length) return subset.push(current);
    else {
        if (typeof input[0] === "string") {

        }
    }
}