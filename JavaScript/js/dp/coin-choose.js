/** 
 * https://www.geeksforgeeks.org/optimal-strategy-for-a-game-dp-31/
 * Consider a row of n coins of values v1 . . . vn, where n is even. We play a game against an opponent by alternating turns. In each turn, a player selects either the first or last coin from the row, removes it from the row permanently, and receives the value of the coin. Determine the maximum possible amount of money we can definitely win if we move first.
 * coins = [ 8, 15, 3, 7 ];
 */
//Recurssion
function coinsFromBag(coins) {
    let sum = 0;
    sum = coins.reduce((a,b) => a + b, 0);
    return chooseHelper(coins, 0, coins.length - 1, sum);

    function chooseHelper(coins, left, right, sum) {
        if (right == left + 1)
            return Math.max(coins[left], coins[right]);
        return Math.max(sum - chooseHelper(coins, left + 1, right, sum - coins[left]),
            sum - chooseHelper(coins, left, right - 1, sum - coins[right]));
    }
}

console.log(coinsFromBag([8, 15, 3, 7]));

//DP
function game(coins) {
    let size = coins.length;
    let table = [[]];
    for (let gap = 0; gap < size; ++gap) { 
        for (let i = 0, j = gap; j < size; ++i, ++j)  {
            let x = ((i + 2) <= j) ? table[i + 2][j] : 0; 
            let y = ((i + 1) <= (j - 1)) ? table[i + 1][j - 1] : 0; 
            let z = (i <= (j - 2)) ? table[i][j - 2] : 0; 

            table[i][j] = Math.max(coins[i] + Math.min(x, y), coins[j] + Math.min(y, z)); 
        }
    }
    return table[0][size - 1]; 
}

