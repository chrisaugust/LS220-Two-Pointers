// PROBLEM
// Given an array of numbers `nums`, and an integer `k`, compute the average
// value of each contiguous subarray of length k within the array.
//
// Return an array containing the computed averages.
//
// EXAMPLES
// input => output
// [1, 2, 3, 4, 5, 6], 3 => [ 2, 3, 4, 5 ]
// [1, 2, 3, 4, 5], 2 => [1.5, 2.5, 3.5, 4.5]
//
// DATA STRUCTURE
// Array
//
// ALGORITHM
// k-window slide
// initialize empty results array to hold window averages 
// initialize windowSum variable to 0
// initialize start index value to 0
// loop over end pointer index values, from 0 to 1 less than input array's length
// when end index value equals or exceeds k - 1
//    divide window sum by k and push to results
//    subtract value of element at start index from window sum
//    increment start index value
// return results array
//
// CODE
// // first approach
// function findAverages(nums, k) {
//   let subarrays = [];
//   let endingIndex = nums.length - k;
//   
//   for (let i = 0; i <= endingIndex; i++) {
//     // debug --> probably misusing Array#slice
//     subarrays.push(nums.slice(i, i + k));
//   }
// 
//   console.log(subarrays);
//   return subarrays.map(average);
// }
// 
// function average(nums) {
//   return nums.reduce((acc, elem) => acc + elem, 0)/nums.length;
// }

// k-window slide approach
function findAverages(nums, k) {
  let start = 0;
  let windowSum = 0;
  let averages = [];

  for (let end = 0; end < nums.length; end++) {
    windowSum += nums[end];
    
    if (end >= k - 1) {
      averages.push(windowSum / k);
      windowSum -= nums[start];
      start++;
    }
  }

  return averages;
}
// TESTS
console.log(String(findAverages([1, 2, 3, 4, 5, 6], 3)) === String([ 2, 3, 4, 5 ]));
console.log(String(findAverages([1, 2, 3, 4, 5], 2)) === String([1.5, 2.5, 3.5, 4.5]));
console.log(String(findAverages([10, 20, 30, 40, 50], 4)) === String([ 25, 35 ]));
console.log(String(findAverages([5, 5, 5, 5, 5], 1)) === String([ 5, 5, 5, 5, 5 ]));
console.log(String(findAverages([1, 3, 2, 6, -1, 4, 1, 8, 2], 5)) === String([2.2, 2.8, 2.4, 3.6, 2.8]));
