// PROBLEM
// Given a sentence as a string `str`, reverse all characters in each word
// while ensuring that case of each character remains unchanged. Spaces should
// be preserved, as well as the overall order of the words.
//
// Solve without using Array#reverse.
//
// EXAMPLES
// console.log(reverseWords("Hello World") === "olleH dlroW");
// console.log(reverseWords("JavaScript is fun") === "tpircSavaJ si nuf");
// console.log(reverseWords("Coding in the sun") === "gnidoC ni eht nus");
// console.log(reverseWords("Launch School") === "hcnuaL loohcS");
//
// DATA STRUCTURE
// Array
//
// ALGORITHM
// split argument into array of words
// iterate over each word
//    initialize two pointers to 0 and word.length - 1
//    while firstPointer < secondPointer:
//        swap!
// join words and return resulting string
// CODE

function reverseWords(str) {
  let words = str.split(' ');
  return words.map(reverseWord).join(' ');
}

function reverseWord(word) {
  let chars = word.split('');
  let start = 0;
  let end = chars.length - 1;
  
  while (start < end) {
    [chars[start], chars[end]] = [chars[end], chars[start]]
    start += 1;
    end -= 1;
  }
  return chars.join('');
}

// TESTS
console.log(reverseWords("Hello World") === "olleH dlroW");
console.log(reverseWords("JavaScript is fun") === "tpircSavaJ si nuf");
console.log(reverseWords("Coding in the sun") === "gnidoC ni eht nus");
console.log(reverseWords("Launch School") === "hcnuaL loohcS");
