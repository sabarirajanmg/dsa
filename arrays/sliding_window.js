// https://www.geeksforgeeks.org/window-sliding-technique/


// Given an array of integers of size ‘n’, Our aim is to calculate the maximum sum of ‘k’ consecutive elements in the array.

function maxSumOfSubArray(arr, subArraySize) {
   let sum = 0;
   let maxSum = 0;
   
   for (let i = 0; i < subArraySize; i ++) {
       sum += arr[i];
   }
   maxSum = sum;
   
   for (let i = 1; i < arr.length - subArraySize + 1; i++) {
       sum = sum - arr[i-1] + arr[i + subArraySize - 1];
       if (sum > maxSum) {
           maxSum = sum;
       }
   }
   
   return maxSum;
}

const arr = [-2, 124, 3, 6, 8, 11, -9, 111];
console.log(maxSumOfSubArray(arr, 5))