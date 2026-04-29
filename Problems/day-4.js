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
