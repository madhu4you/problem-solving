/**
 * A child is trying to climb the staircase. 
 * The maximum number of steps he can climb at time is two; that  is, he can climb either one step or two steps at a time.
 * If there are n steps in total in how many different ways can he climb.
 */

function staircase(n)  {
    let steps = [1, 2];
    for(i = 2; i <=n; i++) {
        steps[i] = steps[i-1] + steps[i-2];
    }
    return steps[n];
}

console.log(staircase(4));


function staircase2(n)  {
    let steps = [1, 2, 3];
    for(i = 3; i <=n; i++) {
        steps[i % 3] = steps[(i-1) % 3] + steps[(i-2) % 3];
    }
    return steps[n % 3];
}

console.log(staircase2(4));