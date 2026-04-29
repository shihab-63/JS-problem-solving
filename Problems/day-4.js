/**
 * JavaScript Coding Challenge: Day #4
 *
 * Problem:
 * Create a function named 'checkTriangleType' that takes three parameters (a, b, c) [2].
 * These parameters represent the lengths of the three sides of a triangle [1].
 *
 * Your function should return:
 * 1. "equilateral": If all three sides are equal in length [3].
 * 2. "isosceles": If exactly two sides are equal in length [4].
 * 3. "scalene": If all three sides have different lengths [4].
 *
 * Examples:
 * console.log(checkTriangleType(3, 3, 3)); // Expected: "equilateral" [4]
 * console.log(checkTriangleType(3, 4, 3)); // Expected: "isosceles" [4]
 * console.log(checkTriangleType(5, 8, 6)); // Expected: "scalene" [4]
 */

const checkTriangleType = (a, b, c) => {
  if (a === b && b === c) {
    return "equilateral";
  } else if (a === b || b === c || c === a) {
    return "isosceles";
  } else {
    return "Scalene";
  }
};

console.log(checkTriangleType(3, 3, 3)); // Expected: "equilateral" [4]
console.log(checkTriangleType(3, 4, 3)); // Expected: "isosceles" [4]
console.log(checkTriangleType(5, 8, 6)); // Expected: "scalene" [4]

/**
 * JavaScript Coding Challenge: Similar to Day #4
 *
 * Problem: Find the Largest Number
 * Create a function named 'findLargest' that takes three numbers as parameters (a, b, c).
 * This is similar to the triangle challenge as it also handles three inputs [1].
 *
 * Your function should return:
 * - The largest value among the three numbers provided.
 *
 * Examples:
 * console.log(findLargest(10, 25, 15)); // Expected: 25
 * console.log(findLargest(5, 5, 2));    // Expected: 5
 * console.log(findLargest(-1, -5, 0));  // Expected: 0
 *
 * Logic Hint:
 * - Use 'if-else' or 'if-else if' statements to compare the numbers,
 *   just like you compared triangle sides [2], [3].
 * - Think about using comparison operators like '>' or '>='.
 */

const findLargest = (a, b, c) => {
  // Write your code here...
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
};

console.log(findLargest(10, 25, 15));
console.log(findLargest(5, 5, 2));
console.log(findLargest(-1, -5, 0));
// Test your logic:
// console.log(findLargest(10, 25, 15));
// console.log(findLargest(100, 50, 75));

/**
 * JavaScript Coding Challenge: Number Status
 *
 * Problem:
 * Create a function named 'checkNumber' that takes one parameter (num).
 *
 * Your function should return:
 * 1. "Positive": If the number is greater than 0.
 * 2. "Negative": If the number is less than 0.
 * 3. "Zero": If the number is exactly 0.
 *
 * Examples:
 * console.log(checkNumber(10));  // Expected: "Positive"
 * console.log(checkNumber(-5));  // Expected: "Negative"
 * console.log(checkNumber(0));   // Expected: "Zero"
 */

const checkNumber = (num) => {
  // Write your logic here...
  if (num > 0) {
    return "Positive";
  } else if (num < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
};
console.log(checkNumber(10));
console.log(checkNumber(-5));
console.log(checkNumber(0));
