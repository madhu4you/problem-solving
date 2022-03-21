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
    for (let i = p; i < str.length; i++) {
        buffer[bp] = str.charAt(i);
        cHelper(str, i + 1, buffer, bp + 1, len, output);
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
    for (let i = 0; i < str.length; i++) {
        if (!visited[i]) {
            visited[i] = true;
            buffer[bp] = str.charAt(i);
            pHelper(str, buffer, bp + 1, len, output, visited);
            visited[i] = false;
        }
    }
}

console.log(permutation("abcd", 2));

/**
 * Generate all the string of n bits
 */
function generateBinaryString(n) {
    let output = [];
    function Binary(n, slate) {
        if (n < 1) {
            output.push(slate);
            return;
        }
        else {
            Binary(n-1, slate+"0");
            Binary(n-1, slate+"1");
        }
    }
    Binary(n, "");
    return output;
}

console.log(generateBinaryString(4));

/**
 * Tower Of Honai
 */

function towerOfHonai(n) {
    function honaiHelper(n, f, t, a) {
        if(n == 1) {
            console.log(`Move Disk ${n} from ${f} to ${t}`);
        }
        else {
            honaiHelper(n-1, f, a, t);
            console.log(`Move Disk ${n} from ${f} to ${t}`);
            honaiHelper(n-1, a, t, f);
        }
    }
    honaiHelper(n, "Source", "Destination", "Aux");
}

towerOfHonai(3);

/**
 * Generate all the strings of length n drawn from 0... k – 1.
 */

function generateString(n, k) {
    let output = [];
    function kString(p, k, slate) {
        if(p === n) {
            output.push(slate);
            return;
        }
        else {
            for(let i = 0; i < k; i++) {
                kString(p+1, k, slate+i);
            }
        }
    }
    kString(0, k, "");
    return output;
}

console.log(generateString(3, 2));