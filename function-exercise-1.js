function addTwoNumbers(x, y) {
  console.log(x + y);
}
addTwoNumbers(3, 12);
function myName(Name) {
  console.log(`my name is ${Name}`);
}
myName("tyler");

// Create a function that takes two numbers as arguments and returns their sum.

function Somme(a, b) {
  return a + b;
}
console.log(Somme(7, 15));
/*Write a function that takes the base and height of a triangle as arguments and returns its area.*/
function TriangleArea(e, c) {
  return e * c * 0.5;
}
console.log(TriangleArea(10, 12));

/* 
Write a function that takes the height and the width of rectangle as arguments and returns its perimeter. */
function RectanglePerimetre(j, t) {
  return j * t;
}
console.log(RectanglePerimetre(6, 6));
/*Write a function that takes a number as argument and returns it square root .
console.log(SquareNumber(9))*/
function SquareNumber(h) {
  return h * h;
}
/*Write a function that takes hours as argument  and converts its into seconds.
 */
function HourToSecond(i) {
  return i * 3600;
}
console.log(HourToSecond(24));

/*
/*Create a function that  takes a string as argument and returns the length of this string.*/
function stringLength(string) {
  return string.length;
}
console.log(stringLength("hello"));

console.log;
/*write a function that takes a string as argument and returns it to number*/
function stringToNumber(stringedNumber) {
  return Number(stringedNumber);
}
console.log(stringToNumber("9083"));

// write a function that takes a number as argument and returns it to string

function numberToString(number) {
  return number.toString();
}
console.log(numberToString(092384109248));

// Exercise 1
// <h3>Write a function which checks given input/parameter:</h3>
// <ul>
//   <li>If input/parameter is divisible by 3 print => Fizz</li>
//   <li>If input/parameter is divisible by 5 print => Buzz</li>
//   <li>If input/parameter is divisible by 3 or 5 print => FizzBuzz</li>
//   <li>If input/parameter is NOT divisible by 3 or 5 print => given Input Number/Value</li>
//   <li>If input/parameter is other than Number/Value print => 'Nan - Not a Number! Please Input Number' </li>
// </ul>
function checkNumber(input) {
  if (typeof input !== "number") {
    return "NaN";
  } else if (input % 3 === 0 && input % 5 === 0) {
    return "FizzBuzz";
  } else if (input % 3 === 0) {
    return "Fizz";
  } else if (input % 5 === 0) {
    return "Buzz";
  } else {
    return "given input number/value";
  }
}
console.log(checkNumber(90))

// Exercise 2

// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n.
//  In simple terms, the Factorial of 7 is solved like this:
// 7 _ 6 _ 5 _ 4 _ 3 _ 2 _ 1 = 5,040
function 

// Example:
// > console.log(factorializer(7));
// > 5040

// Exercise 3
// Identify if a number is Odd or Even?
// A function that lets you know if a number is Even or Odd

// Example:
// > console.log(oddOrEven(7));
// > "Odd"

// Exercise 4

// Return the sum of a number going back to it's root. In other words, the function will work like this:

// addUp(5);
// 5 + 4 + 3 + 2 + 1 + 0 = 15
// Example:
// > console.log(addUp(8));
// > 36

// Exercise 5

// Create a function  that takes a string as argument and returns true if a string is empty and false otherwise.
// isEmpty(“ ”)➞ true
// isEmpty(“Chaima”)➞ false

// Exercise 6

// Create a function that takes two strings as arguments and returns true if
// the total number of characters in the first string is equal to the total number of characters in the second string.
// Otherwise return false.

// isEqualStr (“ Simplon”,”tunis ”)➞ false
// isEqualStr (“CA”,”FS”)➞ true

// Exercise 7

// Create a function that takes two numbers, a and b, return true if a can be divided evenly by b , return false otherwise.
// oneDevideByTwo(9,3)➞true
// oneDevideByTwo(10,2)➞true
// oneDevideByTwo(13,2)➞false

// Exercise 8

// Create a function that takes in a mood and return a sentence in the following format:
// "Today, I am feeling {mood}". However, if no argument is passed, return "Today, I am feeling neuter".
// moodToday("happy") ➞ "Today, I am feeling happy"
// moodToday( ) ➞ "Today, I am feeling neuter"

// Exercise 9

// Write a function that validates whether two strings are identical. Make it case insensitive.
// match(“HELLO WORLD”) and (”hello world”) → true
// match("mask", "mAskinG") ➞ false

// Exercise 10

// Create a function that takes a string as argument and returns "upper" if all the letters in a word are uppercase, "lower" if lowercase and "mixed" for any mix of the two.
// getCase("javascript..") ➞ "lower"
// getCase("SHOUT!") ➞ "upper"

// Exercise 11

// Create a function that takes  a string as argument (of a person’s first and last name) and returns a string with the first and last name swapped.
// swapName("Ada Lovelace") ➞ "Lovelace Ada"
// swapName(“Alan Turing”)➞  “Turing Alan”

// Exercise 12

// Create a function that takes a string and returns a string with its letters in alphabetical order.
// AlphabetSoup("javascript") ➞ "aacijprstv"
// AlphabetSoup(“simplon”) ➞”ilmnops”

// Exercise 13

// Create a function that takes a number as argument and returns the incrementing (+1) for each odd number and decrementing (-1) for each even number.
// incrementOrDecrement(5) ➞4
// incrementOrDecrement(2) ➞3
