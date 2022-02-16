/**
 * Input: aaaabbbbccca
 * output: 4a4b3c1a
 */

let runningString = (str) => {
    //Base condition
    if(str === null || str.length < 0) return str;
    //Variables
    let output = "";
    let prev = str[0];
    let counter = 1;
    //Iteration
    for(let i = 1; i <= str.length; i++) {
        if(str[i] === prev) counter++;
        else if(str[i] !== prev) {
            output += `${counter}${prev}`;
            prev = str[i];
            counter = 1; 
        }
    }
    return output;
}

console.log(runningString("aaaabbbbccca"));