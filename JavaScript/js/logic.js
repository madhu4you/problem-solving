// When squirrels get together for a party, they like to have cigars. A squirrel party is successful when
// the number of cigars is between 40 and 60, inclusive. Unless it is the weekend, in which case there is
// no upper bound on the number of cigars. Return true if the party with the given values is successful, or false otherwise.
function cigarParty(cigars, isWeekend) {
  return isWeekend ? cigars >= 40 : cigars >= 40 && cigars <= 60;
}
console.log(cigarParty(30, false)); //→ false
console.log(cigarParty(50, false)); //→ true
console.log(cigarParty(70, true)); //→ true

// You and your date are trying to get a table at a restaurant. The parameter "you" is the stylishness of
// your clothes, in the range 0..10, and "date" is the stylishness of your date's clothes.
// The result getting the table is encoded as an  value with 0=no, 1=maybe, 2=yes. If either of you
// is very stylish, 8 or more, then the result is 2 (yes). With the exception that if either of you has
// style of 2 or less, then the result is 0 (no). Otherwise the result is 1 (maybe).
function dateFashion(you, date) {
  if (you <= 2 || date <= 2) return 0;
  if (you >= 8 || date >= 8) return 2;

  return 1;
}
console.log(dateFashion(5, 10)); // → 2
console.log(dateFashion(5, 2)); // → 0
console.log(dateFashion(5, 5)); // → 1

// The squirrels in Palo Alto spend most of the day playing. In particular, they play if the temperature
// is between 60 and 90 (inclusive). Unless it is summer, then the upper limit is 100 instead of 90.
// Given an  temperature and a boolean isSummer, return true if the squirrels play and false otherwise.
function squirrelPlay(temp, isSummer) {
  let max = isSummer ? 100 : 90;
  return temp >= 60 && temp <= max;
}

console.log(squirrelPlay(70, false)); //→ true
console.log(squirrelPlay(95, false)); //→ false
console.log(squirrelPlay(95, true)); // → true

// You are driving a little too fast, and a police officer stops you. Write code to compute the result,
// encoded as an  value: 0=no ticket, 1=small ticket, 2=big ticket.
// If speed is 60 or less, the result is 0.
// If speed is between 61 and 80 inclusive, the result is 1. If speed is 81 or more, the result is 2.
// Unless it is your birthday -- on that day, your speed can be 5 higher in all cases.
function caughtSpeeding(speed, isBirthday) {
  let maxSpeed = isBirthday ? 5 : 0;
  if (speed <= 60 + maxSpeed) return 0;
  if (speed >= 61 && speed <= 80 + maxSpeed) return 1;
  if (speed >= 81 + maxSpeed) return 2;
}
console.log(caughtSpeeding(60, false)); // → 0
console.log(caughtSpeeding(65, false)); // → 1
console.log(caughtSpeeding(65, true)); // → 0

// Given 2 ints, a and b, return their sum. However, sums in the range 10..19 inclusive,
// are forbidden, so in that case just return 20.
function sortaSum(a, b) {
  let sum = a + b;
  return sum >= 10 && sum <= 19 ? 20 : sum;
}

console.log(sortaSum(3, 4)); // → 7
console.log(sortaSum(9, 4)); // → 20
console.log(sortaSum(10, 11)); // → 21

// Given a day of the week encoded as 0=Sun, 1=Mon, 2=Tue, ...6=Sat, and a boolean indicating
// if we are on vacation, return a string of the form "7:00" indicating when the alarm clock should ring.
// Weekdays, the alarm should be "7:00" and on the weekend it should be "10:00". Unless we are on vacation
// -- then on weekdays it should be "10:00" and weekends it should be "off".
function alarmClock(day, vacation) {
  let weekend = isWeekend(day);

  if (vacation) {
    return weekend ? "off" : "10:00";
  }
  return !weekend ? "7:00" : "10:00";

  function isWeekend(day) {
    return day === 0 || day === 6;
  }
}
console.log(alarmClock(1, false)); // → "7:00"
console.log(alarmClock(5, false)); // → "7:00"
console.log(alarmClock(0, false)); // → "10:00"

// The number 6 is a truly great number. Given two  values, a and b, return true if either one is 6.
// Or if their sum or difference is 6. Note: the function Math.abs(num) computes the absolute value of a number.
function love6(a, b) {
  return a === 6 || b === 6 || a + b === 6 || Math.abs(a - b) === 6;
}

console.log(love6(6, 4)); // → true
console.log(love6(4, 5)); // → false
console.log(love6(1, 5)); // → true

// Given a number n, return true if n is in the range 1..10, inclusive. Unless "outsideMode" is true,
// in which case return true if the number is less or equal to 1, or greater or equal to 10.
function in1To10(n, outsideMode) {
  return outsideMode ? n <= 1 || n >= 10 : n >= 1 && n <= 10;
}

console.log(in1To10(5, false)); //→ true
console.log(in1To10(11, false)); // → false
console.log(in1To10(11, true)); // → true

//We'll say a number is special if it is a multiple of 11 or if it is one more than a multiple of 11.
//Return true if the given non-negative number is special. Use the % "mod" operator -- see Introduction to Mod
function specialEleven(n) {
  return n % 11 === 0 || (n - 1) % 11 === 0;
}
console.log(specialEleven(22)); // → true
console.log(specialEleven(23)); // → true
console.log(specialEleven(24)); // → false

//Return true if the given non-negative number is 1 or 2 more than a multiple of 20. See also: Introduction to Mod
function more20(n) {
  return (n - 1) % 20 === 0 || (n - 2) % 20 === 0;
}
console.log(more20(20)); // → false
console.log(more20(21)); // → true
console.log(more20(22)); // → true

//Return true if the given non-negative number is a multiple of 3 or 5, but not both. Use the % "mod" operator -- see Introduction to Mod
function old35(n) {
  let mod3 = n % 3 == 0;
  let mod5 = n % 5 == 0;
  return (mod3 && !mod5) || (!mod3 && mod5);
}

console.log(old35(3)); // → true
console.log(old35(10)); // → true
console.log(old35(15)); // → false

//Return true if the given non-negative number is 1 or 2 less than a multiple of 20.
//So for example 38 and 39 return true, but 40 returns false. See also: Introduction to Mod
function less20(n) {
  return (n + 1) % 20 == 0 || (n + 2) % 20 == 0;
}
console.log(less20(18)); // → true
console.log(less20(19)); // → true
console.log(less20(20)); // → false

// Given a non-negative number "num", return true if num is within 2 of a multiple of 10.
// Note: (a % b) is the remainder of dividing a by b, so (7 % 5) is 2.
function nearTen(num) {
  return num % 10 <= 2 || num % 10 >= 8;
}
console.log(nearTen(12)); // → true
console.log(nearTen(17)); // → false
console.log(nearTen(19)); // → true

// Given 2 s, a and b, return their sum. However, "teen" values in the range 13..19 inclusive,
// are extra lucky. So if either value is a teen, just return 19.
function teenSum(a, b) {
  return (a >= 13 && a <= 19) || (b >= 13 && b <= 19) ? 19 : a + b;
}

console.log(teenSum(3, 4)); // → 7
console.log(teenSum(10, 13)); // → 19
console.log(teenSum(13, 2)); // → 19

// Your cell phone rings. Return true if you should answer it.
// Normally you answer, except in the morning you only answer if it is your mom calling.
// In all cases, if you are asleep, you do not answer.
function answerCell(isMorning, isMom, isAsleep) {
  if (isAsleep) return false;
  if (isMom) return true;
  return !isMorning;
}
console.log(answerCell(false, false, false)); // → true
console.log(answerCell(false, false, true)); // → false
console.log(answerCell(true, false, false)); // → false

// We are having a party with amounts of tea and candy. Return the  outcome of the party encoded
// as 0=bad, 1=good, or 2=great. A party is good (1) if both tea and candy are at least 5.
// However, if either tea or candy is at least double the amount of the other one, the party is great (2).
// However, in all cases, if either tea or candy is less than 5, the party is always bad (0).
function teaParty(tea, candy) {
  if (tea < 5 || candy < 5) return 0;
  if (tea >= candy * 2 || candy >= tea * 2) return 2;
  return 1;
}
console.log(teaParty(6, 8)); // → 1
console.log(teaParty(3, 8)); // → 0
console.log(teaParty(20, 6)); // → 2

//Given a string str, if the string starts with "f" return "Fizz".
//If the string ends with "b" return "Buzz". If both the "f" and "b" conditions are true, return "FizzBuzz".
//In all other cases, return the string unchanged. (See also: FizzBuzz Code)
function fizzString(str) {
  if (str.startsWith("f") && str.endsWith("b")) {
    return "FizzBuzz";
  }
  if (str.startsWith("f")) {
    return "Fizz";
  }
  if (str.endsWith("b")) {
    return "Buzz";
  }
  return str;
}

console.log(fizzString("fig")); // → "Fizz"
console.log(fizzString("dib")); // → "Buzz"
console.log(fizzString("fib")); // → "FizzBuzz"

//Given an int n, return the string form of the number followed by "!". So the int 6 yields "6!".
//Except if the number is divisible by 3 use "Fizz" instead of the number, and if the number is divisible by 5 use "Buzz",
//and if divisible by both 3 and 5, use "FizzBuzz". Note: the % "mod" operator computes the remainder after division, so 23 % 10 yields 3.
//What will the remainder be when one number divides evenly into another? (See also: FizzBuzz Code and Introduction to Mod)
function fizzString2(n) {
  let s = "";
  if (n % 3 === 0) {
    s += "Fizz";
  }
  if (n % 5 === 0) {
    s += "Buzz";
  }
  return (s) ? s+"!" : n+"!";
}

console.log(fizzString2(1)); // → "1!"
console.log(fizzString2(2)); // → "2!"
console.log(fizzString2(3)); // → "Fizz!"

// Given three s, a b c, return true if it is possible to add two of the s to get the third.
function twoAsOne(a, b, c) {
    return (a === b + c) || (b === a + c) || (c === a + b);
}
console.log(twoAsOne(1, 2, 3)); // → true
console.log(twoAsOne(3, 1, 2)); // → true
console.log(twoAsOne(3, 2, 2)); // → false

// Given three s, a b c, return true if b is greater than a, and c is greater than b.
// However, with the exception that if "bOk" is true, b does not need to be greater than a.
function inOrder(a, b, c, bOk) {
    return (bOk) ? (c > b) : (b > a && c > b);
}

console.log(inOrder(1, 2, 4, false)); // → true
console.log(inOrder(1, 2, 1, false)); // → false
console.log(inOrder(1, 1, 2, true)); // → true

// Given three s, a b c, return true if they are in strict increasing order,
// such as 2 5 11, or 5 6 7, but not 6 5 7 or 5 5 7.
// However, with the exception that if "equalOk" is true, equality is allowed, such as 5 5 7 or 5 5 5.
function inOrderEqual(a, b, c, equalOk) {
    return (equalOk) ? (a <= b && b <=c) : (a < b && b < c);
}
console.log(inOrderEqual(2, 5, 11, false)); // → true
console.log(inOrderEqual(5, 7, 6, false)); // → false
console.log(inOrderEqual(5, 5, 7, true)); // → true

// Given three s, a b c, return true if two or more of them have the same rightmost digit.
// The s are non-negative. Note: the % "mod" operator computes the remainder, e.g. 17 % 10 is 7.
function lastDigit(a, b, c) {
    const modA = a % 10;
    const modb = b % 10;
    const modc = c % 10;
    return (modA === modb) || (modA === modc) || (modb === modc);
}

console.log(lastDigit(23, 19, 13)); // → true
console.log(lastDigit(23, 19, 12)); // → false
console.log(lastDigit(23, 19, 3)); // → true

// Given three s, a b c, return true if one of them is 10 or more less than one of the others.
function lessBy10(a, b, c) {
  return (Math.abs(a-b) >= 10 ||
         Math.abs(b-c) >= 10 ||
         Math.abs(c-a) >= 10);
}
console.log(lessBy10(1, 7, 11)); // → true
console.log(lessBy10(1, 7, 10)); // → false
console.log(lessBy10(11, 1, 7)); // → true

// Return the sum of two 6-sided dice rolls, each in the range 1..6.
// However, if noDoubles is true, if the two dice show the same value,
// increment one die to the next value, wrapping around to 1 if its value was 6.
function withoutDoubles(die1, die2, noDoubles) {
    if(noDoubles && die1 == die2) {
        die1++;
        if(die1 == 7) die1 = 1;
    }
    return die1 + die2;
}
console.log(withoutDoubles(2, 3, true)); // → 5
console.log(withoutDoubles(3, 3, true)); // → 7
console.log(withoutDoubles(3, 3, false)); // → 6

// Given two  values, return whichever value is larger. However if the two values have the same remainder when divided by 5
// then the return the smaller value. However, in all cases, if the two values are the same, return 0.
// Note: the % "mod" operator computes the remainder, e.g. 7 % 5 is 2.
function maxMod5(a, b) {
    if(a === b) return 0;
    const modA = a % 5;
    const modB = b % 5;
    if(modA  === modB) return (a < b) ? a : b;
    return (a > b) ? a : b;
}
console.log(maxMod5(2, 3)); // → 3
console.log(maxMod5(6, 2)); // → 6
console.log(maxMod5(3, 2)); // → 3

// You have a red lottery ticket showing ints a, b, and c, each of which is 0, 1, or 2.
// If they are all the value 2, the result is 10. Otherwise if they are all the same, the result is 5.
// Otherwise so long as both b and c are different from a, the result is 1. Otherwise the result is 0.
function redTicket(a, b, c) {
    if(a === 2 && b == 2 && c === 2) return 10;
    if(a === b && b === c & c === a) return 5;
    if(a != b && a != c) return 1;
    return 0;
}
console.log(redTicket(2, 2, 2)); // → 10
console.log(redTicket(2, 2, 1)); // → 0
console.log(redTicket(0, 0, 0)); // → 5

// You have a green lottery ticket, with ints a, b, and c on it.
// If the numbers are all different from each other, the result is 0. If all of the numbers are the same,
// the result is 20. If two of the numbers are the same, the result is 10.
function greenTicket(a, b, c) {
    if(a==b && b == c && c == a) return 20;
    if(a==b || a == c || b == c) return 10;
    return 0;
}
console.log(greenTicket(1, 2, 3)); // → 0
console.log(greenTicket(2, 2, 2)); // → 20
console.log(greenTicket(1, 1, 2)); // → 10


// You have a blue lottery ticket, with ints a, b, and c on it.
// This makes three pairs, which we'll call ab, bc, and ac.
// Consider the sum of the numbers in each pair. If any pair sums to exactly 10, the result is 10.
// Otherwise if the ab sum is exactly 10 more than either bc or ac sums, the result is 5. Otherwise the result is 0.
function blueTicket(a, b, c) {
    const ab = a+b;
    const ac = a+c;
    const bc= b+c;
    if( ab == 10 || ac == 10 || bc == 10) return 10;
    if(ab == bc + 10 || ab == ac + 10) return 5;
    return 0;
}
console.log(blueTicket(9, 1, 0)); // → 10
console.log(blueTicket(9, 2, 0)); // → 0
console.log(blueTicket(6, 1, 4)); // → 10

// Given two ints, each in the range 10..99, return true if there is a digit that appears in both numbers,
// such as the 2 in 12 and 23. (Note: division, e.g. n/10, gives the left digit while the % "mod" n%10
// gives the right digit.)
function shareDigit(a, b) {
    if ((a <=10 && a >= 99) || (b <=10 && b >= 99 )) return false;
    const fDigitA = parseInt(a / 10);
    const fDigitB = parseInt(b / 10);
    const lDigitA = parseInt(a % 10);
    const lDigitB = parseInt(b % 10);
    return (fDigitA == fDigitB || lDigitA == lDigitB || fDigitA == lDigitB || fDigitB == lDigitA );
}

function shareDigit2(a, b) {
    if ((a <=10 && a >= 99) || (b <=10 && b >= 99 )) return false;
   const digitA = a.toString().split("");
   const digitB = b.toString().split("");
   return digitA.some((n) => {
        return (digitB.indexOf(n) >=0) ? true : false;
   });
}
console.log(shareDigit2(12, 23)); // → true
console.log(shareDigit2(12, 43)); // → false
console.log(shareDigit2(12, 44)); // → false

// Given 2 non-negative ints, a and b, return their sum, so long as the sum has the same number of digits as a.
// If the sum has more digits than a, just return a without b.
//Note: one way to compute the number of digits of a non-negative  n is to convert it to a
// string with String.valueOf(n) and then check the length of the string.)

function sumLimit(a, b) {
    const aLen = getLength(a);
    const sum = a + b;
    function getLength(num) {
        let len = 0;
        while(num > 0) {
            len++;
            num = parseInt(num / 10);
        }
        return len;
    }
    return (getLength(sum) == aLen) ? sum : a ;
}
console.log(sumLimit(2, 3)); // → 5
console.log(sumLimit(8, 3)); // → 8
console.log(sumLimit(8, 1)); // → 9
