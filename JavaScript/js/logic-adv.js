// We want to make a row of bricks that is goal inches long. We have a number of small bricks (1 inch each) and big bricks (5 inches each).
// Return true if it is possible to make the goal by choosing from the given bricks. This is a little harder than it looks and can be done without any loops.
function makeBricks(small, big, goal) {
  const maxBig = parseInt(goal / 5);
  let bigLen = maxBig <= big ? maxBig * 5 : big * 5;
  return bigLen + small >= goal;
}
console.log(makeBricks(3, 1, 8)); // → true
console.log(makeBricks(3, 1, 9)); // → false
console.log(makeBricks(3, 2, 10)); // → true
// Given 3 int values, a b c, return their sum. However,
// if one of the values is the same as another of the values, it does not count towards the sum.
function loneSum(a, b, c) {
  if (a != b && a != c && b != c) return a + b + c;
  if (a === b) {
    return a === c ? 0 : c;
  }
  if (a === c) {
    return b;
  }
  return a;
}
console.log(loneSum(1, 2, 3)); // → 6
console.log(loneSum(3, 2, 3)); // → 2
console.log(loneSum(3, 3, 3)); // → 0
// Given 3 int values, a b c, return their sum. However, if one of the values is 13 then it does not count towards the sum and values to its right do not count.
// So for example, if b is 13, then both b and c do not count.
function luckySum(a, b, c) {
  let sum = 0;
  if (a === 13) return sum;
  sum += a;
  if (b === 13) return sum;
  sum += b;
  if (c === 13) return sum;
  sum += c;
  return sum;
}
console.log(luckySum(1, 2, 3)); // → 6
console.log(luckySum(1, 2, 13)); // → 3
console.log(luckySum(1, 13, 3)); // → 1

// Given 3 int values, a b c, return their sum. However, if any of the values is a teen -- in the range 13..19 inclusive -- then that value counts as 0, except 15 and 16 do not count as a teens.
// Write a separate helper "function fixTeen(int n) {"that takes in an int value and returns that value fixed for the teen rule.
//In this way, you avoid repeating the teen code 3 times (i.e. "decomposition"). Define the helper below and at the same indent level as the main noTeenSum().
function noTeenSum(a, b, c) {
  return fixTeen(a) + fixTeen(b) + fixTeen(c);

  function fixTeen(n) {
    if (n == 15 || n === 16) return n;
    if (n >= 13 && n <= 19) return 0;
    return n;
  }
}
console.log(noTeenSum(1, 2, 3)); // → 6
console.log(noTeenSum(2, 13, 1)); // → 3
console.log(noTeenSum(2, 1, 14)); // → 3

// For this problem, we'll round an int value up to the next multiple of 10 if its rightmost digit is 5 or more, so 15 rounds up to 20.
// Alternately, round down to the previous multiple of 10 if its rightmost digit is less than 5, so 12 rounds down to 10. Given 3 ints, a b c,
// return the sum of their rounded values. To avoid code repetition,
// write a separate helper "function round10(int num) {" and call it 3 times. Write the helper entirely below and at the same indent level as roundSum().

function roundSum(a, b, c) {
  return round10(a) + round10(b) + round10(c);

  function round10(n) {
    let remainder = n % 10;
    if (remainder >= 5) {
      return (1 + parseInt(n / 10)) * 10;
      // return n + 10 - remainder;
    } else {
      return parseInt(n / 10) * 10;
      //return n - remainder;
    }
  }
}

console.log(roundSum(16, 17, 18)); // → 60
console.log(roundSum(12, 13, 14)); // → 30
console.log(roundSum(6, 4, 4)); // → 10

// Given three ints, a b c, return true if one of b or c is "close" (differing from a by at most 1), while the other is "far", differing from both other values by 2 or more.
// Note: Math.abs(num) computes the absolute value of a number.
function closeFar(a, b, c) {
  if (Math.abs(a - b) <= 1) {
    return Math.abs(a - c) > 1 && Math.abs(b - c) > 1;
  }
  return Math.abs(b - c) > 1;
}
console.log(closeFar(1, 2, 10)); // → true
console.log(closeFar(1, 2, 3)); // → false
console.log(closeFar(4, 1, 3)); // → true

// Given 2 int values greater than 0, return whichever value is nearest to 21 without going over. Return 0 if they both go over.
function blackjack(a, b) {
  if (a <= 21) {
    return b <= 21 && b > a ? b : a;
  }
  return b <= 21 ? b : 0;
}
console.log(blackjack(19, 21)); // → 21
console.log(blackjack(21, 19)); // → 21
console.log(blackjack(19, 22)); // → 19

// Given three ints, a b c, one of them is small, one is medium and one is large.
// Return true if the three values are evenly spaced, so the difference between small and medium is the same as the difference between medium and large.
function evenlySpaced(a, b, c) {
  if((a === b || b === c || c==a) && !(a === b && b===c))
    return false;
    const x = Math.abs(a-b);
    const y = Math.abs(a-c);
    const z = Math.abs(c-b);

    return x  === y || y === z || x === z;
}
console.log(evenlySpaced(2, 4, 6)); // → true
console.log(evenlySpaced(4, 6, 2)); // → true
console.log(evenlySpaced(4, 6, 3)); // → false

// We want make a package of goal kilos of chocolate. We have small bars (1 kilo each) and big bars (5 kilos each).
//Return the number of small bars to use, assuming we always use big bars before small bars. Return -1 if it can't be done.
function makeChocolate(small, big, goal) {
    let maxBig = parseInt( goal / 5);
    let res = 0;
    if(maxBig <= big) {
        res = maxBig * 5;
    }
    else {
        res = big * 5;
    }
    let smallBar = goal - res;
    return (smallBar <= small) ? smallBar : -1;
}
console.log(makeChocolate(4, 1, 9)); // → 4
console.log(makeChocolate(4, 1, 10)); // → -1
console.log(makeChocolate(4, 1, 7)); // → 2
