/**
 * Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. 
 * Return the answer in any order.
 * A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
 * 
 * Input: digits = "23"
 * Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
 * 
 * Input: digits = "2"
 * Output: ["a","b","c"]
 */

 var letterCombinations = function(digits) {
    if(digits === null || isNaN(digits) || digits === 1 || digits === 0) return false;
    let keypad = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    };
    let output = [];
    let cHelper = (i, slate) => {
        if(i === digits.length) {
            if(slate.length > 0)
                output.push(slate);
                return;
        }
        else {
            let keys = keypad[digits[i]];
           for(let k = 0; k < keys.length; k++) {
                cHelper(i+1, slate.concat(keys[k]));
           }
        }
    }
    cHelper(0, "");
    return output;
 }

 console.log(letterCombinations("23"));