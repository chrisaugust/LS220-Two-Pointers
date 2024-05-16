// PROBLEM
// Given an array of integers, sorted in ascending order, implement a function that
// modifies the array in place so that the array starts with unique elements, returning
// the count of unique elements.
//
// The elements at the end of the array after the unique elements are not
// important.
//
// Ensure that the array is modified in place.
//
// EXAMPLES
// input => output
// [3, 3, 5, 7, 7, 8] => 4
// [1, 1, 2, 2, 2, 3, 4, 4, 5] => 5
// [0] => 1
// [-5, -3, -3, -1, 0, 0, 0, 1] => 5
// [6, 6, 6, 6, 6, 6, 6] => 1
// 
// ALGORITHM
// anchor/runner pointer strategy
//
// anchor pointer i assigned 0
// runnner pointer j assigned 1
// compare elements at i and j
//    unique:
//      increment both i and j
//    duplicates:
//      increment j until next element found
//      swap value at j with value at i+1
//      increment i 
//     
// stop when j hits end of array
// return i + 1 (num unique elements)
// CODE

function reduceToUnique(array) {
  if (array.length <= 1) return array.length;

  let i = 0;
  let j = 1;

  while (j < array.length - 1) {
    if (array[i] < array[j]) {
      i += 1;
      j += 1;
    } else if (array[i] === array[j]) {
      j += 1;
      if (array[i] < array[j]) {
        // insert next unique element at index i+1,
        // and figure out where to put element that's being replaced
        let temp = array[i+1];
        array[i+1] = array[j];
        i += 1;
      }
    }    
  } 

  return i + 1;
}
 
// TESTS
function testReduceToUnique(array, expectedLength) {
  const originalReference = array;
  const resultLength = reduceToUnique(array);
  const isSameObject = originalReference === array;
  const isLengthCorrect = resultLength === expectedLength;
  const isModifiedCorrectly = array.slice(0, expectedLength).every((val, idx, arr) => idx === 0 || val > arr[idx - 1]);

  return isSameObject && isLengthCorrect && isModifiedCorrectly;
}

console.log(testReduceToUnique([3, 3, 5, 7, 7, 8], 4));
console.log(testReduceToUnique([1, 1, 2, 2, 2, 3, 4, 4, 5], 5));
console.log(testReduceToUnique([0], 1));
console.log(testReduceToUnique([-5, -3, -3, -1, 0, 0, 0, 1], 5));
console.log(testReduceToUnique([6, 6, 6, 6, 6, 6, 6], 1));
