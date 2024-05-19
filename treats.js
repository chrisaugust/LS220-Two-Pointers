// PROBLEM DESCRIPTION
// Imagine you have pets with varying appetite levels and treats of various sizes.
// You want to maximize the number of satisfied pets by giving them treats where
// the size meets or exceeds their appetite level.
// Given two arrays, where the elements of the first array represent pet appetite
// level, and the elements of the second represent treat size, write a function that
// returns the maximum possible number of satisfied pets.
//
// MORE ABSTRACTLY
// Given two arrays of integers, determine the maximum number of matches where
// an element from the second array is >= an element from the first array.
//
// EXAMPLES
// console.log(assignTreats([3, 4, 2], [1, 2, 3]) === 2);
// console.log(assignTreats([1, 5], [5, 5, 6]) === 2);
// console.log(assignTreats([1, 2, 3], [3]) === 1);
// console.log(assignTreats([2], [1, 2, 1, 1]) === 1);
// console.log(assignTreats([4, 3, 1], [2, 1, 3]) === 2);
// console.log(assignTreats([1,2,3], [1,2,3]) === 3);
// console.log(assignTreats([4, 5, 6], [1,2,3]) === 0);
// 
// DATA STRUCTURE
// Arrays
//
// ALGORITHM
// initialize satisfiedPets variable to 0
// sort both arrays (ascending order)
// assign 2 pointer variables to 0
// iterate over both arrays, comparing element values at indices referenced by pointers
//
// if treat size >= pet appetite
//    increment satisfiedPets
//    increment both pointers
// else
//    increment treat size pointer
//     
//
// CODE

function assignTreats(petAppetiteLevels, treatSizes) {
  let numSatisfiedPets = 0;
  let pet = 0;
  let treat = 0;

  petAppetiteLevels.sort(sortAscending);
  treatSizes.sort(sortAscending);

  //for (let treat= 0; treat < treatSizes.length; treat++) {
  //  if (treatSizes[treat] >= petAppetiteLevels[pet]) {
  //    numSatisfiedPets += 1;
  //    pet += 1;
  //  } 
  //}
  while (pet < petAppetiteLevels.length && treat < treatSizes.length) {
    if (treatSizes[treat] >= petAppetiteLevels[pet]) {
      numSatisfiedPets += 1;
      pet++;
    }
    treat++;
  }

  return numSatisfiedPets;  
}

function sortAscending(a, b) {
  return a - b;
}

// TESTS
console.log(assignTreats([3, 4, 2], [1, 2, 3]) === 2);
console.log(assignTreats([1, 5], [5, 5, 6]) === 2);
console.log(assignTreats([1, 2, 3], [3]) === 1);
console.log(assignTreats([2], [1, 2, 1, 1]) === 1);
console.log(assignTreats([4, 3, 1], [2, 1, 3]) === 2);
console.log(assignTreats([1,2,3], [1,2,3]) === 3);
console.log(assignTreats([4, 5, 6], [1,2,3]) === 0);
