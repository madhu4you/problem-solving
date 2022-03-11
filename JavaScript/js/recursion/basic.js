/**
 * Given a string of length N, print all combination of length c
 */

function combination(str, len) {
    let output = [];
    cHelper(str, 0, [], 0, len, output);
    return output;
}

function cHelper(str, p, buffer, bp, len, output) {
    if (bp === len) {
        output.push(buffer.join(""));
        return;
    }
    for(let i = p; i < str.length; i++) {
        buffer[bp] = str.charAt(i);
        cHelper(str, i+1, buffer, bp+1, len, output);
    }
}

console.log(combination("abcd", 2));

/**
 * Given a string of length N, print all permutation of length c
 */
function permutation(str, len) {
    let output = [];
    pHelper(str, [], 0, len, output, []);
    return output;
}

function pHelper(str, buffer, bp, len, output, visited) {
    if (bp === len) {
        output.push(buffer.join(""));
        return;
    }
    for(let i = 0; i < str.length; i++) {
        if(!visited[i]) {
            visited[i] = true;
            buffer[bp] = str.charAt(i);
            pHelper(str, buffer, bp+1, len, output, visited);
            visited[i] = false;
        }
    }
}

console.log(permutation("abcd", 2));