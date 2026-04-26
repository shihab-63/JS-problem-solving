/**
 * JavaScript Coding Challenge: Day #3
 *
 * Question:
 * Create a function named 'countChar' that takes two parameters:
 * 1. A string (e.g., a word)
 * 2. A character to be counted within that string.
 *
 * The function should return the total number of times the specified
 * character appears in the string [1].
 *
 * Constraints:
 * - The function must handle both lowercase and uppercase characters
 *   (Case-insensitive) [2, 3].
 *
 * Example:
 * If the input is ("Mississippi", "i"), the output should be 4 [1].
 *
 */

// Your code goes here:
const countChar = (word, char) => {
  const lowerWord = word.toLowerCase();
  const lowerChar = char.toLowerCase();

  let count = 0;
  for (let i = 0; i < lowerWord.length; i++) {
    if (lowerWord[i] === lowerChar) {
      count++;
    }
  }
  return count;
};

//? 2nd way to sloving This problem
const countCharWay2 = (word, char) => {
  word = word.toLowerCase();
  char = char.toLowerCase();

  const totalCount = word.split("").reduce((acc, curr) => {
    if (curr === char) {
      acc++;
    }
    return acc;
  }, 0);
  return totalCount;
};

// console.log(countChar("Mississippi", "i")); // Expected Output: 4
console.log(countCharWay2("Mississippi", "i")); // Expected Output: 4
