// PROBLEM 
// Given a string, reverse only all the consonants in the string and return it. 
// The consonants can may be in both upper and lower cases, and may appear more
// than once in the string.
//
// EXAMPLES
// console.log(reverseConsonants("") === "");
// console.log(reverseConsonants("s") === "s");
// console.log(reverseConsonants("hello") === "lelho");
// console.log(reverseConsonants("leetcode") === "deectole");
// console.log(reverseConsonants("example") === "elapmxe");
// console.log(reverseConsonants("Consonants") === "sotnonasnC");
//
// DATA STRUCTURES
// Array
//
// ALGORITHM
// - convert string to array of characters
// - initialize two pointer variables, i and j, to index values 0 and 
//   the last index value of the array (array length - 1)
// - while i is less than array length and j is greater than 0, loop:
//    - check if array elements at i and j are consonants
//      - swap array elements if so
//      - if one element isn't a consonant, increment i or decrement j,
//        depending on which index value it is associated with
//
// CODE

function reverseConsonants(str) {
  if (str.length <= 1) return str;

  let i = 0;
  let j = str.length - 1
  let chars = str.split('')

  while (i < j) {
    // if both elements are consonants: switch elements
    if ((chars[i].match(/[^aeiou]/i)) && (chars[j].match(/[^aeiou]/i))) {
      let temp = chars[i];
      chars[i] = chars[j];
      chars[j] = temp;
      i += 1;
      j -= 1;
      continue;
    // if either element is a vowel: move pointer 
    } else if (chars[i].match(/[aeiou]/i)) {
      i += 1;
      continue
    } else if (chars[j].match(/[aeiou]/i)) {
      j -= 1;
      continue;
    }  
  }
 
  return chars.join('');
}

// TESTS
console.log(reverseConsonants("") === "");
console.log(reverseConsonants("s") === "s");
console.log(reverseConsonants("bcdfg") === "gfdcb");
console.log(reverseConsonants("hello") === "lelho");
console.log(reverseConsonants("leetcode") === "deectole");
console.log(reverseConsonants("example") === "elapmxe");
console.log(reverseConsonants("Consonants") === "sotnonasnC");
