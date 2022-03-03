/**
 * Input: "I Live in a house"
 * output: "house a in live I"
 */

function reverseWord(word) {
    if(word.length < 0 || null === word) return word;
    let output = "";
    let s = "";
    for(let i = word.length -1 ; i >=0; i--) {
        if(word.charAt(i) === " ") {
            output += s+" ";
            s = "";
        }
        else {
            s = word.charAt(i) + s;
        }
    }
    return output + s;
}

console.log(reverseWord("I Live in a house"));