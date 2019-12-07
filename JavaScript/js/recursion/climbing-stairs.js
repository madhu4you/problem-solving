/**
 * Climbing the stairs
 * "n" is stairs ex: n =3
 * "k" sets ex: k = {1, 2}
 * Result  =  3
 */

 function climbingStaris(stairs, setps) {
    if(stairs <= 0) retrun;
    return climbingStarisHelper(stairs, setps);
 }

 function climbingStarisHelper(input, setps) {
    if(input === 0) return 1;
    if(input < 0 ) return 0;
    let result = 0;
    for(i = 0; i < setps.length; ++i) {
        result += climbingStarisHelper(input-setps[i], setps);
    }
    return result;
 }

 console.log(climbingStaris(3, [1, 2]));
