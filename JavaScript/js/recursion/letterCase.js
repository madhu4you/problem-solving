/**
 * letterCase("a1b2");
 * Ouput: ["a1b2", "A1b2", "a1B2", "A1B2"];
 */

function letterCase(str) {
    if(str.length < 1) return false;
    let result = [];
    let caseHelper = (index, slate) => {
        if(index === str.length) {
            result.push(slate);
            return;
        }
        else {
            if(!isNaN(str[index])) {
                caseHelper(index+1, slate.concat(str[index]));
            }
            else {
                caseHelper(index+1, slate.concat(str[index].toUpperCase()));
                caseHelper(index+1, slate.concat(str[index].toLowerCase()));
            }
        }
    }
    caseHelper(0, "");
    return result;
}

console.log(letterCase("a1b2"))