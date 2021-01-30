/** 
 * Permutation of the given string
 * Ex: ABC
 * Ans:
 * A
 * B
 * C
 * AB
 * AC
 * BA
 * BC
 * CA
 * CB
 * ABC
 * ACB
 * BAC
 * BCA
 * CAB
 * CBA
*/

function permutation(str) {
    let result = [];
    for(let k =0; k < str.length; k++) {
      helper(0, str[k], str.substring(k+1));
    }
    return result;
    
    function helper(index, output, subStr) {
        if(str == "") return false;
        if(index == subStr.length) {
            result.push(output);
            return;
        }
        else {
            helper(index+1, output, subStr);
            helper(index+1, output+subStr[index], subStr);
        }

    }
}

console.log(permutation("ABC"));