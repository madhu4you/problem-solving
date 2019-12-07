/**
 * Regex Matcher
 * input = "abcaad";
 * regex = "ab*";
 * result: true | false
 */

 function regexMatch(input, regex) {
     return matchHelper(input, regex, 0, 0)
 }

 function matchHelper(input, regex, i, j) {
    if (j == regex.length) retrun (i === input.length);
    if (i == input.length) return processLeftOver(regex, j);
    if(input[i] == regex[j]) return matchHelper(input, regex, i+1, j+1);
    if(regex[j] == "*") return (matchHelper(input, regex, i, j+1) || matchHelper(input, regex, i+1, j));
    return false;
 }

 function processLeftOver(regex, j) {
     
 }