//* -------------------------------------------------------------------------
//* Programming Question: Hash Tag Generator
//* -------------------------------------------------------------------------

/**
 * ? You are required to implement a function generateHash that generates
 * ? a hash tag from a given input string.
 * * * The hash tag should be constructed as follows:
 * * 1. The input string should be converted to a hash tag format, where each word
 * is capitalized and concatenated together without spaces.
 * * 2. If the length of the input string is greater than 280 characters or if
 * the input string is empty or contains only whitespace, the function
 * should return false.
 * * 3. Otherwise, the function should return the generated hash tag prefixed with #.
 * * @example
 * str = "my name is shihab mollah"
 * output = "#MyNameIsshihabmollah"
 */

const generateHash = (str) => {
  if (str.length > 280 || str.trim().length === 0) {
    return false;
  }

  str = str.split(" ");
  str = str.map((word) => word.replace(word[0], word[0].toUpperCase()));
  str = `#${str.join("")}`;
  return str;
  //   console.log(str);
};

console.log(generateHash("my name is shihab mollah"));
