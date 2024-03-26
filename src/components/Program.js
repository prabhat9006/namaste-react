// //CAP_DSA_JS

//  //Frequency Counter Pattern: Same squared value to another array.
// // 1st method 0(n^2)

// function same(arr1, arr2){
// if(arr1.length !== arr2.length){
// return false;
// }
// for(let i = 0; i<arr1.length; i++){
//   const itemIndex = arr2.indexOf(arr1[i] ** 2);
//   if(itemIndex === -1){
//     return false;
//   }
//   arr2.splice(itemIndex, 1);
// }
// return true;
// }

// const result1 = same([1,2,3,2], [9,1,4,4]);
// console.log(result1)

// // 2nd method 0(n)
// function same(arr1, arr2){
// if(arr1.length !== arr2.length){
// return false;
// }
// let frequencyArr1 = {};
// let frequencyArr2 = {};
// for(let i = 0; i<arr1.length; i++){
//   frequencyArr1[arr1[i]] = (frequencyArr1[arr1[i]] || 0) + 1;
// }
// for(let i = 0; i<arr2.length; i++){
//   frequencyArr2[arr2[i]] = (frequencyArr2[arr2[i]] || 0) + 1;
// }
// for(let key in frequencyArr1){
//   if(!(key ** 2 in frequencyArr2)){
//       return false;
//   }
//   if(frequencyArr2[key ** 2] !== frequencyArr1[key]){
//     return false;
//   }
// }
// return true;}

// // Frequency Counter: Anagram Challenge

// function validAnagram(first, second) {
//   if (first.length !== second.length) {
//     return false;
//   }
//   const lookup = {};
//   for (let i = 0; i < first.length; i++) {
//     let letter = first[i];
//     lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
//   }
//   for (let i = 0; i < second.length; i++) {
//     let letter = second[i];
//     if (!lookup[letter]) {
//       return false;
//     } else {
//       lookup[letter] -= 1;
//     }
//   }
//   return true;
// }

// // {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
// const result2 = validAnagram('anagrams', 'nagarams');
// console.log(result2);

// //Multiple Pointers Pattern: Sum Of Zero
// // 1st Method
// function sumOfZero(arr){
//   for(let i =0; i <=arr.length -1 ; i++){
//     for(let j = i + 0; j <=arr.length -1 ; j++){
//         if(arr[i] + arr[j] == 0){
//           return [arr[i], arr[j]];
//         }
//     }
//   }
// }
// console.log(sumOfZero([-4,-3,-2,-1,0,1,2,3,4]))

// // TC - O(n^2)
// // SC - O(1)

// // 2nd method

// function sumOFZero(arr){
//  let left = 0;
//  let right = arr.length-1;
//  while(left < right){
//   let sum = arr[left] + arr[right];
//   if(sum == 0){
//      return [arr[left], arr[right]];
//   }else if(sum > 0){
//     right--;
//   }else{
//     left++;
//   }
//  }
// }
// console.log(sumOFZero([-4,-3,-2,-1,0,1,2,4]))

// // TC - O(n)
// // SC - O(1)

// // Multiple Pointers: Count Unique Values Challenge

// function countUniueValues(arr){
// if(arr.length === 0) return 0;
//  let i = 0;
//  for(let j = 1 ; j<=arr.length-1; j++){
//     if(arr[i] !== arr[j]){
//       i++
//       arr[i] = arr[j];

//     }
//  }
//  return i+1
// }
// console.log(countUniueValues([1,2,3,4,4,4,7,7,12,12,13]))

// // TC - O(n)
// // SC - O(n)

//  //Sliding Window Pattern
// //1st method
// function maxSubarraySum(arr, num) {
//   if ( num > arr.length){
//     return null;
//   }
//   var max = -Infinity;
//   for (let i = 0; i < arr.length - num + 1; i ++){
//    let  temp = 0;
//     for (let j = 0; j < num; j++){
//       temp += arr[i + j];
//     }
//     if (temp > max) {
//       max = temp;
//     }
//   }
//   return max;
// }

// maxSubarraySum([2,6,9,2,1,8,5,6,3],3)

// // 2nd method

// function maxSubarraySum(arr, num){
//   let maxSum = 0;
//   let tempSum = 0;
//   if (arr.length < num) return null;
//   for (let i = 0; i < num; i++) {
//     maxSum += arr[i];
//   }
//   tempSum = maxSum;
//   for (let i = num; i < arr.length; i++) {
//     tempSum = tempSum - arr[i - num] + arr[i];
//     maxSum = Math.max(maxSum, tempSum);
//   }
//   return maxSum;
// }

// maxSubarraySum([2,6,9,2,1,8,5,6,3],3)

// Divide And Conquer Pattern - search Item
// Linear Search
// function  serachItem(arr, val){

//   for(let i=0; i<arr.length-1; i++){
//       if(arr[i] == val){
//           return 1;
//       }
//   }
// return -1
// }
// console.log(serachItem([1,2,3,4,5,6,7,8], 6)) // 1
// console.log(serachItem([1,2,3,4,5,6,7,8], 16)) // -1
// TC - O(n)

// Binary Search

// function binarySearch(arr, elem) {
//   var start = 0;
//   var end = arr.length - 1;
//   while(start <= end){
//     var middle = Math.floor((start + end) / 2);
//     if(elem < arr[middle]) {
//       end = middle -1;
//     }else if(elem > arr[middle]){
//       start = middle + 1;
//     }else{
//       return middle;
//     }
//   }
//   return -1
// }

//   console.log(serachItem([1,2,3,4,5,6,7,8], 6)) // 1
//   console.log(serachItem([1,2,3,4,5,6,7,8], 16)) // -1

// Frequency Counter - sameFrequency

// function sameFrequency(arr1,arr2){
//   if(arr1.length !== arr2.length){
//   return false;
//   }
//   let frequencyArr1 = {};
//   let frequencyArr2 = {};
//   let _arr1 = arr1.toString();
//   let _arr2 = arr2.toString();
//   for(let i = 0; i<_arr1.length; i++){
//     frequencyArr1[_arr1[i]] = (frequencyArr1[_arr1[i]] || 0) + 1;
//   }
//   for(let i = 0; i<_arr2.length; i++){
//     frequencyArr2[_arr2[i]] = (frequencyArr2[_arr2[i]] || 0) + 1;
//   }
//   for(let key in frequencyArr1){
//     if(frequencyArr2[key] !== frequencyArr1[key]){
//       return false;
//     }
// return true;
// }
// }

// Frequency Counter / Multiple Pointers - areThereDuplicates

// function areThereDuplicates(...args) {
//   let obj = {};

//   for(let i=0; i<=args.length-1; i++){
//     obj[args[i]] = ++obj[args[i]] || 1;
//   }
//   for(let key in obj){
//     if(obj[key] >1){
//       return true
//     }
//   }
//   return false;
// }
// console.log(areThereDuplicates(1, 2, 3)) // false
// console.log(areThereDuplicates(1, 2, 2)) // true
// console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true

// // Multiple Pointers - averagePair
// function averagePair(arr, num) {
//   if(arr.length == 0) return false
//   let start = 0
//   let end = arr.length-1;
//   while(start < end){
//     let avg = (arr[start]+arr[end]) / 2
//     if(avg === num) return true;
//     else if(avg < num) start++
//     else end--
//   }

//   return false;
// }
// console.log(averagePair([1,2,3],2.5)) // true
// console.log(averagePair([1,3,3,5,6,7,10,12,19],8)) // true
// console.log(averagePair([-1,0,3,4,5,6], 4.1)) // false
// console.log(averagePair([],4)) // false

// Multiple Pointers - isSubsequence
// function isSubsequence(str1, str2) {
//   var i = 0;
//   var j = 0;
//   if (!str1) return true;
//   while (j < str2.length) {
//     if (str2[j] === str1[i]) i++;
//     if (i === str1.length) return true;
//     j++;
//   }
//   return false;
// }

// Sliding Window - maxSubarraySum
// function maxSubarraySum(arr, num){
//   if (arr.length < num) return null;

//   let total = 0;
//   for (let i=0; i<num; i++){
//      total += arr[i];
//   }
//   let currentTotal = total;
//   for (let i = num; i < arr.length; i++) {
//      currentTotal += arr[i] - arr[i-num];
//      total = Math.max(total, currentTotal);
//   }
//   return total;
// }

// Sliding Window - minSubArrayLen

// function minSubArrayLen(nums, sum) {
//   let total = 0;
//   let start = 0;
//   let end = 0;
//   let minLen = Infinity;

//   while (start < nums.length) {
//     // if current window doesn't add up to the given sum then
// 		// move the window to right
//     if(total < sum && end < nums.length){
//       total += nums[end];
// 			end++;
//     }
//     // if current window adds up to at least the sum given then
// 		// we can shrink the window
//     else if(total >= sum){
//       minLen = Math.min(minLen, end-start);
// 			total -= nums[start];
// 			start++;
//     }
//     // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
//     else {
//       break;
//     }
//   }

//   return minLen === Infinity ? 0 : minLen;
// }

// // Sliding Window - findLongestSubstring

// function findLongestSubstring(str) {
//   let longest = 0;
//   let seen = {};
//   let start = 0;

//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (seen[char]) {
//       start = Math.max(start, seen[char]);
//     }
//     // index - beginning of substring + 1 (to include current in count)
//     longest = Math.max(longest, i - start + 1);
//     // store the index of the next char so as to not double count
//     seen[char] = i + 1;
//   }
//   return longest;
// }

// // Recursion

// function sum(num){
//   if(num == 1) return 1
//   console.log(num);
//   return num + sum(num -1);
// }

// console.log(sum(3));

// // Factorial

// function factorial(num){
//   let total = 1;
//   for(let i = num; i > 1; i--){
//       total *= i
//   }
//   return total;
// }
// console.log(factorial(3));

// // Factorial Recursion

// function factorial(num){
//   if(num === 1) return 1;
//   return num * factorial(num-1);
// }
// console.log(factorial(3));

// // //Helper Method Recursion

// function collectOddValues(arr){

//   let result = [];

//   function helper(helperInput){
//       if(helperInput.length === 0) {
//           return;
//       }

//       if(helperInput[0] % 2 !== 0){
//           result.push(helperInput[0])
//       }

//       helper(helperInput.slice(1))
//   }

//   helper(arr)

//   return result;
// }

// console.log(collectOddValues([1,2,3,4,5,6,7,8,9]))

// Pure Recursion

// function collectOddValues(arr){
//   let newArr = [];

//   if(arr.length === 0) {
//       return newArr;
//   }

//   if(arr[0] % 2 !== 0){
//       newArr.push(arr[0]);
//   }

//   newArr = newArr.concat(collectOddValues(arr.slice(1)));
//   return newArr;
// }

// console.log(collectOddValues([1,2,3,4,5,6,7,8,9]))

// Power Solution

// function power(base, exponent){
//     if(exponent === 0) return 1;
//     return base * power(base,exponent-1);
// }

// PRODUCT OF ARRAY SOLUTION

// function productOfArray(arr) {
//     if(arr.length === 0) {
//         return 1;
//     }
//     return arr[0] * productOfArray(arr.slice(1));
// }

// RECURSIVE RANGE SOLUTION

// function recursiveRange(num){
//     if(num === 0) return 0;
//     return num + recursiveRange(num-1);
// }

// FIBONACCI SOLUTION

// function fib(n){
//     if (n <= 2) return 1;
//     return fib(n-1) + fib(n-2);
// }

// Reverse Solution

// function reverse(str){
//   if(str.length <= 1) return str;
//   return reverse(str.slice(1)) + str[0];
// }

// console.log(reverse("prabhat"))

// isPalindrome Solution

// function isPalindrome(str){
//     if(str.length === 1) return true;
//     if(str.length === 2) return str[0] === str[1];
//     if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
//     return false;
// }

// someRecursive Solution

// function someRecursive(array, callback) {
//     if (array.length === 0) return false;
//     if (callback(array[0])) return true;
//     return someRecursive(array.slice(1),callback);
// }

// flatten Solution

// function flatten(oldArr){
//   var newArr = []
//   	for(var i = 0; i < oldArr.length; i++){
//     	if(Array.isArray(oldArr[i])){
//       		newArr = newArr.concat(flatten(oldArr[i]))
//     	} else {
//       		newArr.push(oldArr[i])
//     	}
//   }
//   return newArr;
// }

// capitalizeWords Solution

// function capitalizeWords (array) {
//   if (array.length === 1) {
//     return [array[0].toUpperCase()];
//   }
//   let res = capitalizeWords(array.slice(0, -1));
//   res.push(array.slice(array.length-1)[0].toUpperCase());
//   return res;

// }

// capitalizeFirst Solution

// function capitalizeFirst (array) {
//   if (array.length === 1) {
//     return [array[0][0].toUpperCase() + array[0].substr(1)];
//   }
//   const res = capitalizeFirst(array.slice(0, -1));
//   const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
//   res.push(string);
//   return res;
// }

// nestedEvenSum Solution

// function nestedEvenSum (obj, sum=0) {
//     for (var key in obj) {
//         if (typeof obj[key] === 'object'){
//             sum += nestedEvenSum(obj[key]);
//         } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0){
//             sum += obj[key];
//         }
//     }
//     return sum;
// }

// stringifyNumbers Solution

// function stringifyNumbers(obj) {
//   var newObj = {};
//   for (var key in obj) {
//     if (typeof obj[key] === 'number') {
//       newObj[key] = obj[key].toString();
//     } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
//       newObj[key] = stringifyNumbers(obj[key]);
//     } else {
//       newObj[key] = obj[key];
//     }
//   }
//   return newObj;
// }

// collectStrings Solution: Helper Method Recursion Version
// function collectStrings(obj) {
//     var stringsArr = [];

//     function gatherStrings(o) {
//         for(var key in o) {
//             if(typeof o[key] === 'string') {
//                 stringsArr.push(o[key]);
//             }
//             else if(typeof o[key] === 'object') {
//                 return gatherStrings(o[key]);
//             }
//         }
//     }
//     gatherStrings(obj);

//     return stringsArr;
// }

// collectStrings Solution: Pure Recursion Version

// function collectStrings(obj) {
//     var stringsArr = [];
//     for(var key in obj) {
//         if(typeof obj[key] === 'string') {
//             stringsArr.push(obj[key]);
//         }
//         else if(typeof obj[key] === 'object') {
//             stringsArr = stringsArr.concat(collectStrings(obj[key]));
//         }
//     }

//     return stringsArr;
// }

//  Linear Search Exercise

// function linearSearch(arr, val){
//     if(arr.length == 1 && arr[0] == val) return 0;
//   for(let i =0; i<=arr.length-1; i++){
//       if(arr[i] == val){
//           return i;
//       }
//   }
//   return -1
// }

//  BinarySearch Exercise
// function binarySearch(arr, elem) {
//   var start = 0;
//   var end = arr.length - 1;
//   while(start <= end){
//     var middle = Math.floor((start + end) / 2);
//     if(elem < arr[middle]) {
//       end = middle -1;
//     }else if(elem > arr[middle]){
//       start = middle + 1;
//     }else{
//       return middle;
//     }
//   }
//   return -1
// }
//   console.log(serachItem([1,2,3,4,5,6,7,8], 6)) // 1
//   console.log(serachItem([1,2,3,4,5,6,7,8], 16)) // -1

//  Naive String Search Implementation

// function naiveSearch(long, short){
//     var count = 0;
//     for(var i = 0; i < long.length; i++){
//         for(var j = 0; j < short.length; j++){
//            if(short[j] !== long[i+j]) break;
//            if(j === short.length - 1) count++;
//         }
//     }
//     return count;
// }

// naiveSearch("lorie loled", "lol");

//   BUBBLE SORT - 0(n^2)

// // UNOPTIMIZED VERSION OF BUBBLE SORT
// function bubbleSort(arr){
//   for(var i = arr.length; i > 0; i--){
//     for(var j = 0; j < i - 1; j++){
//       console.log(arr, arr[j], arr[j+1]);
//       if(arr[j] > arr[j+1]){
//         var temp = arr[j];
//         arr[j] = arr[j+1];
//         arr[j+1] = temp;
//       }
//     }
//   }
//   return arr;
// }

// // Optimized BubbleSort with noSwaps
// function bubbleSort(arr){
//   var noSwaps;
//   for(var i = arr.length; i > 0; i--){
//     noSwaps = true;
//     for(var j = 0; j < i - 1; j++){
//       if(arr[j] > arr[j+1]){
//         var temp = arr[j];
//         arr[j] = arr[j+1];
//         arr[j+1] = temp;
//         noSwaps = false;
//       }
//     }
//     if(noSwaps) break;
//   }
//   return arr;
// }

// console.log(bubbleSort([8,1,2,3,4,5,6,7]))

// Selection sort -  0(n^2)

// function selectionSort(arr){
//     for(var i = 0; i < arr.length; i++){
//         var lowest = i;
//         for(var j = i+1; j < arr.length; j++){
//             if(arr[j] < arr[lowest]){
//                 lowest = j;
//             }
//         }
//         if(i !== lowest){
//             //SWAP!
//             var temp = arr[i];
//             arr[i] = arr[lowest];
//             arr[lowest] = temp;
//         }
//     }
//     return arr;
// }
// selectionSort([0,2,34,22,10,19,17]);

// Insertion sort -  0(n^2)

// function insertionSort(arr){
// 	var currentVal;
//     for(var i = 1; i < arr.length; i++){
//         currentVal = arr[i];
//         for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
//             arr[j+1] = arr[j]
//         }
//         arr[j+1] = currentVal;
//     }
//     return arr;
// }

// insertionSort([2,1,9,76,4])

// Merge sort -

// // Merges two already sorted arrays
// function merge(arr1, arr2){
//     let results = [];
//     let i = 0;
//     let j = 0;
//     while(i < arr1.length && j < arr2.length){
//         if(arr2[j] > arr1[i]){
//             results.push(arr1[i]);
//             i++;
//         } else {
//             results.push(arr2[j])
//             j++;
//         }
//     }
//     while(i < arr1.length) {
//         results.push(arr1[i])
//         i++;
//     }
//     while(j < arr2.length) {
//         results.push(arr2[j])
//         j++;
//     }
//     return results;
// }
// merge([100,200], [1,2,3,5,6])

// Recursive Merge Sort

// // Merge function from earlier
// function merge(arr1, arr2){
//     let results = [];
//     let i = 0;
//     let j = 0;
//     while(i < arr1.length && j < arr2.length){
//         if(arr2[j] > arr1[i]){
//             results.push(arr1[i]);
//             i++;
//         } else {
//             results.push(arr2[j])
//             j++;
//         }
//     }
//     while(i < arr1.length) {
//         results.push(arr1[i])
//         i++;
//     }
//     while(j < arr2.length) {
//         results.push(arr2[j])
//         j++;
//     }
//     return results;
// }

// // Recursive Merge Sort
// function mergeSort(arr){
//     if(arr.length <= 1) return arr;
//     let mid = Math.floor(arr.length/2);
//     let left = mergeSort(arr.slice(0,mid));
//     let right = mergeSort(arr.slice(mid));
//     return merge(left, sright);
// }

// mergeSort([10,24,76,73])

//  Quick Sort- pivot

// // First Version
// function pivot(arr, start=0, end=arr.length+1){
//   function swap(array, i, j) {
//     var temp = array[i];
//     array[i] = array[j];
//     array[j] = temp;
//   }

//   var pivot = arr[start];
//   var swapIdx = start;

//   for(var i = start + 1; i < arr.length; i++){
//     if(pivot > arr[i]){
//       swapIdx++;
//       swap(arr,swapIdx,i);
//     }
//   }
//   swap(arr,start,swapIdx);
//   return swapIdx;
// }

//  Quick Sort Implementation

// function pivot(arr, start=0, end=arr.length+1){
//   function swap(array, i, j) {
//     var temp = array[i];
//     array[i] = array[j];
//     array[j] = temp;
//   }

//   var pivot = arr[start];
//   var swapIdx = start;

//   for(var i = start + 1; i < arr.length; i++){
//     if(pivot > arr[i]){
//       swapIdx++;
//       swap(arr,swapIdx,i);
//     }
//   }
//   swap(arr,start,swapIdx);
//   return swapIdx;
// }

// function quickSort(arr, left = 0, right = arr.length -1){
//     if(left < right){
//         let pivotIndex = pivot(arr, left, right) //3
//         //left
//         quickSort(arr,left,pivotIndex-1);
//         //right
//         quickSort(arr,pivotIndex+1,right);
//       }
//      return arr;
// }

// quickSort([100,-3,2,4,6,9,1,2,5,3,23])

// radixSort

// function getDigit(num, i) {
//   return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
// }

// function digitCount(num) {
//   if (num === 0) return 1;
//   return Math.floor(Math.log10(Math.abs(num))) + 1;
// }

// function mostDigits(nums) {
//   let maxDigits = 0;
//   for (let i = 0; i < nums.length; i++) {
//     maxDigits = Math.max(maxDigits, digitCount(nums[i]));
//   }
//   return maxDigits;
// }

// function radixSort(nums){
//     let maxDigitCount = mostDigits(nums);
//     for(let k = 0; k < maxDigitCount; k++){
//         let digitBuckets = Array.from({length: 10}, () => []);
//         for(let i = 0; i < nums.length; i++){
//             let digit = getDigit(nums[i],k);
//             digitBuckets[digit].push(nums[i]);
//         }
//         nums = [].concat(...digitBuckets);
//     }
//     return nums;
// }

// radixSort([23,345,5467,12,2345,9852])

// LinkedList

// Singly Linked List
// Push operation

// class Node{
//   constructor(val){
//     this.val = val;
//     this.next = null;
//   }
// }
// class SinglyLinkedList{
//   constructor(){
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }
//   push(val){
//     let newNode = new Node(val);
//     if(!this.head){
//       this.head = newNode;
//       this.tail = this.head;
//     }else{
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }
//     this.length++;
//     return this;
//   }
// }

// let list = new SinglyLinkedList();
// list.push("Prabhat");
// list.push("sinha");
// list.push("chandra");
// console.log(list);

// pop operation

//   pop(){
//     if(!this.head) return undefined;
//     var current = this.head;
//     var newTail = current;
//     while(current.next){
//       newTail = current;
//       current = current.next;
//     }
//     this.tail = newTail;
//     this.tail.next = null;
//     this.length--;
//     if(this.length === 0){
//       this.head = null;
//       this.tail = null;
//     }
//     return current
//   }

// shift operation

//   shift(){
//     var currentHead = this.head;
//     this.head = currentHead.next;
//     this.length--;
//     return currentHead;

//   }

// unshift operation

//   unShift(val){
//     var newNode = new Node(val);
//     if(!this.head){
//       this.head = newNode;
//       this.tail = this.head;
//     }
//     newNode.next = this.head;
//     this.head = newNode;
//     this.length++;
//     return this;
//   }

// get operation

//   get(index){
//     if(index < 0  || index >= this.length) return null;
//     var counter = 0;
//     var current = this.head;
//     while(counter !== index){
//         current = current.next;
//         counter++
//     }
//     return current;

//   }

// set operation

//   set(val , index){
//     let foundNode = this.get(index);
//       if(foundNode){
//         foundNode.val = val;
//         return true;
//       }
//       return false;
//   }

// Insert operation

//   insert(val , index){
//     if(index < 0  || index > this.length) return false;
//     if(index === this.length) return this.push(val);
//     if(index === 0) return this.unShift(val);
//     var newNode = new Node(val);
//     let prev = this.get(index -1);
//     let temp = prev.next;
//     prev.next = newNode;
//     newNode.next = temp;
//     this.length++;
//     return true
//   }

// remove operation

//   remove(index){
//     if(index < 0  || index > this.length) return false;
//     if(index === this.length-1) return this.pop();
//     if(index === 0) return this.shift();
//     let prevNode = this.get(index -1);
//     let removedNode = prevNode.next;
//     prevNode.next = removedNode.next;
//     this.length--;
//     return removedNode;
//   }

// reverse operation

//   reverse(){
//     var node = this.head;
//     this.head = this.tail;
//     this.tail = node;
//     var next;
//     var prev = null;
//     for(var i = 0; i < this.length; i++){
//       next = node.next;
//       node.next = prev;
//       prev = node;
//       node = next;
//     }
//     return this.print();
//   }

// DoublyLinkedList
// push()

// class Node{
//     constructor(val){
//         this.val = val;
//         this.next = null;
//         this.prev = null;
//     }
// }

// class DoublyLinkedList {
//     constructor(){
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }
//     push(val){
//         var newNode = new Node(val);
//         if(this.length === 0){
//             this.head = newNode;
//             this.tail = newNode;
//         } else {
//             this.tail.next = newNode;
//             newNode.prev = this.tail;
//             this.tail = newNode;
//         }
//         this.length++;
//         return this;
//     }
// }

// let Dl = new DoublyLinkedList();
// Dl.push("100");
// Dl.push("300");
// console.log(Dl);

// pop()

//   pop(){
//     if(!this.head) return undefined;
//     var poppedNode = this.tail;
//     if(this.length === 1){
//         this.head = null;
//         this.tail = null;
//     } else {
//         this.tail = poppedNode.prev;
//         this.tail.next = null;
//         poppedNode.prev = null;
//     }
//     this.length--;
//     return poppedNode;
// }

// let Dl = new DoublyLinkedList();
// Dl.push("100");
// Dl.push("300");
// Dl.push("400");
// Dl.push("500");
// Dl.pop();

// shift()

//     shift(){
//         if(this.length === 0) return undefined;
//         var oldHead = this.head;
//         if(this.length === 1){
//             this.head = null;
//             this.tail = null;
//         }else{
//             this.head = oldHead.next;
//             this.head.prev = null;
//             oldHead.next = null;
//         }
//         this.length--;
//         return oldHead;
//     }
// let Dl = new DoublyLinkedList();
// Dl.push("100");
// Dl.push("300");;
// Dl.push("500");
// Dl.shift();

// unshift()

//     unshift(val){
//         var newNode = new Node(val);
//         if(this.length === 0) {
//             this.head = newNode;
//             this.tail = newNode;
//         } else {
//             this.head.prev = newNode;
//             newNode.next = this.head;
//             this.head = newNode;
//         }
//         this.length++;
//         return this;
//     }
// let Dl = new DoublyLinkedList();
// Dl.push("100");
// Dl.push("300");;
// Dl.push("500");
// Dl.unshift(“80”);

// get()

// get(index){
//         if(index < 0 || index >= this.length) return null;
//         var count, current;
//         if(index <= this.length/2){
//             count = 0;
//             current = this.head;
//             while(count !== index){
//                 current = current.next;
//                 count++;
//             }
//         } else {
//             count = this.length - 1;
//             current = this.tail;
//             while(count !== index){
//                 current = current.prev;
//                 count--;
//             }
//         }
//         return current;
//     }
// let Dl = new DoublyLinkedList();
// Dl.push("100");
// Dl.push("300");;
// Dl.push("500");
// Dl.get(3);

// set()

//     set(index, val){
//         var foundNode = this.get(index);
//         if(foundNode != null){
//             foundNode.val = val;
//             return true;
//         }
//         return false;
//     }

// let Dl = new DoublyLinkedList();
// Dl.push("100");
// Dl.push("300");;
// Dl.push("500");
// Dl.set(2,700);

// insert()

//     insert(index, val){
//         if(index < 0 || index > this.length) return false;
//         if(index === 0) return !!this.unshift(val);
//         if(index === this.length) return !!this.push(val);

//         var newNode = new Node(val);
//         var beforeNode = this.get(index-1);
//         var afterNode = beforeNode.next;

//         beforeNode.next = newNode, newNode.prev = beforeNode;
//         newNode.next = afterNode, afterNode.prev = newNode;
//         this.length++;
//         return true;
//     }

// remove()

//     remove(index){
//         if(index < 0 || index >= this.length) return undefined;
//         if(index === 0) return this.shift();
//         if(index === this.length - 1) return this.pop();
//         var removedNode = this.get(index);
//         var beforeNode = removedNode.prev;
//         var afterNode = removedNode.next;
//         beforeNode.next = afterNode;
//         afterNode.prev = beforeNode;
//         // removedNode.prev.next = removedNode.next;
//         // removedNode.next.prev = removedNode.prev;
//         removedNode.next = null;
//         removedNode.prev = null;
//         this.length--;
//         return removedNode;
//     }

// Stack and Queues
// Stack

// class Node {
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }

// class Stack {
//     constructor(){
//         this.first = null;
//         this.last = null;
//         this.size = 0;
//     }
//     push(val){
//         var newNode = new Node(val);
//         if(!this.first){
//             this.first = newNode;
//             this.last = newNode;
//         } else {
//             var temp = this.first;
//             this.first = newNode;
//             this.first.next = temp;
//         }
//         return ++this.size;
//     }
//     pop(){
//         if(!this.first) return null;
//         var temp = this.first;
//         if(this.first === this.last){
//             this.last = null;
//         }
//         this.first = this.first.next;
//         this.size--;
//         return temp.value;
//     }
// }

// Queue

// class Node {
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }

// class Queue {
//     constructor(){
//         this.first = null;
//         this.last = null;
//         this.size = 0;
//     }
//     enqueue(val){
//         var newNode = new Node(val);
//         if(!this.first){
//             this.first = newNode;
//             this.last = newNode;
//         } else {
//             this.last.next = newNode;
//             this.last = newNode;
//         }
//         return ++this.size;
//     }

//     dequeue(){
//         if(!this.first) return null;

//         var temp = this.first;
//         if(this.first === this.last) {
//             this.last = null;
//         }
//         this.first = this.first.next;
//         this.size--;
//         return temp.value;
//     }
// }

// Binary Search Tree
// Binary Search Tree

// class Node {
//     constructor(value){
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// class BinarySearchTree {
//     constructor(){
//         this.root = null;
//     }
// }

// var tree = new BinarySearchTree();
// tree.root = new Node(10);
// tree.root.right = new Node(15);
// tree.root.left = new Node(7);
// tree.root.left.right = new Node(9);

// Insertion
// class Node {
//   constructor(value){
//       this.value = value;
//       this.left = null;
//       this.right = null;
//   }
// }
// class BinarySearchTree {
//   constructor(){
//       this.root = null;
//   }
//   insert(value){
//       var newNode = new Node(value);
//       if(this.root === null){
//           this.root = newNode;
//           return this;
//       }
//       var current = this.root;
//       while(true){
//         console.log(current.value, value);
//           if(value === current.value) return undefined;
//           if(value < current.value){
//               if(current.left === null){
//                   current.left = newNode;
//                   return this;
//               }
//                current = current.left; // making root for left node
//           } else {
//               if(current.right === null){
//                   current.right = newNode;
//                   return this;
//               }
//               current = current.right; // making root for right node
//           }
//       }
//   }
// }
// //      10
// //   5     13
// // 2  7  11  16
// var tree = new BinarySearchTree();
// tree.insert(10)
// tree.insert(5)
// tree.insert(13)
// tree.insert(11)
// tree.insert(2)
// tree.insert(16)
// tree.insert(7)
// console.log(tree);

// Find

// class Node {
//     constructor(value){
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// class BinarySearchTree {
//     constructor(){
//         this.root = null;
//     }
//     insert(value){
//         var newNode = new Node(value);
//         if(this.root === null){
//             this.root = newNode;
//             return this;
//         }
//         var current = this.root;
//         while(true){
//             if(value === current.value) return undefined;
//             if(value < current.value){
//                 if(current.left === null){
//                     current.left = newNode;
//                     return this;
//                 }
//                 current = current.left;
//             } else {
//                 if(current.right === null){
//                     current.right = newNode;
//                     return this;
//                 }
//                 current = current.right;
//             }
//         }
//     }
//     find(value){
//         if(this.root === null) return false;
//         var current = this.root,
//             found = false;
//         while(current && !found){
//             if(value < current.value){
//                 current = current.left;
//             } else if(value > current.value){
//                 current = current.right;
//             } else {
//                 found = true;
//             }
//         }
//         if(!found) return undefined;
//         return current;
//     }
//     contains(value){
//         if(this.root === null) return false;
//         var current = this.root,
//             found = false;
//         while(current && !found){
//             if(value < current.value){
//                 current = current.left;
//             } else if(value > current.value){
//                 current = current.right;
//             } else {
//                 return true;
//             }
//         }
//         return false;
//     }
// }

// //      10
// //   5     13
// // 2  7  11  16

// var tree = new BinarySearchTree();
// tree.insert(10)
// tree.insert(5)
// tree.insert(13)
// tree.insert(11)
// tree.insert(2)
// tree.insert(16)
// tree.insert(7)

//  Breadth First Search

// class Node {
//     constructor(value){
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// class BinarySearchTree {
//     constructor(){
//         this.root = null;
//     }
//     insert(value){
//         var newNode = new Node(value);
//         if(this.root === null){
//             this.root = newNode;
//             return this;
//         }
//         var current = this.root;
//         while(true){
//             if(value === current.value) return undefined;
//             if(value < current.value){
//                 if(current.left === null){
//                     current.left = newNode;
//                     return this;
//                 }
//                 current = current.left;
//             } else {
//                 if(current.right === null){
//                     current.right = newNode;
//                     return this;
//                 }
//                 current = current.right;
//             }
//         }
//     }
//     find(value){
//         if(this.root === null) return false;
//         var current = this.root,
//             found = false;
//         while(current && !found){
//             if(value < current.value){
//                 current = current.left;
//             } else if(value > current.value){
//                 current = current.right;
//             } else {
//                 found = true;
//             }
//         }
//         if(!found) return undefined;
//         return current;
//     }
//     contains(value){
//         if(this.root === null) return false;
//         var current = this.root,
//             found = false;
//         while(current && !found){
//             if(value < current.value){
//                 current = current.left;
//             } else if(value > current.value){
//                 current = current.right;
//             } else {
//                 return true;
//             }
//         }
//         return false;
//     }
//     BFS(){
//         var node = this.root,
//             data = [],
//             queue = [];
//         queue.push(node);

//         while(queue.length){
//            node = queue.shift();
//            data.push(node.value);
//            if(node.left) queue.push(node.left);
//            if(node.right) queue.push(node.right);
//         }
//         return data;
//     }
// }

// var tree = new BinarySearchTree();
// tree.insert(10);
// tree.insert(6);
// tree.insert(15);
// tree.insert(3);
// tree.insert(8);
// tree.insert(20);
// tree.BFS();

//  Depth First Search

//  DFSPreOrder(){
//         var data = [];
//         function traverse(node){
//             data.push(node.value);
//             if(node.left) traverse(node.left);
//             if(node.right) traverse(node.right);
//         }
//         traverse(this.root);
//         return data;
//     }
//     DFSPostOrder(){
//         var data = [];
//         function traverse(node){
//             if(node.left) traverse(node.left);
//             if(node.right) traverse(node.right);
//             data.push(node.value);
//         }
//         traverse(this.root);
//         return data;
//     }
//     DFSInOrder(){
//         var data = [];
//         function traverse(node){
//             if(node.left) traverse(node.left);
//             data.push(node.value);
//             if(node.right) traverse(node.right);
//         }
//         traverse(this.root);
//         return data;
//     }

//  Heap Insert

//  class MaxBinaryHeap {
//     constructor(){
//         this.values = [];
//     }
//     insert(element){
//         this.values.push(element);
//         this.bubbleUp();
//     }
//     bubbleUp(){
//         let idx = this.values.length - 1;
//         const element = this.values[idx];
//         while(idx > 0){
//             let parentIdx = Math.floor((idx - 1)/2);
//             let parent = this.values[parentIdx];
//             if(element <= parent) break;
//             this.values[parentIdx] = element;
//             this.values[idx] = parent;
//             idx = parentIdx;
//         }
//     }
// }

// let heap = new MaxBinaryHeap();
// heap.insert(41);
// heap.insert(39);
// heap.insert(33);
// heap.insert(18);
// heap.insert(27);
// heap.insert(12);
// heap.insert(55);

// Heap: ExtractMax

// class MaxBinaryHeap {
//     constructor(){
//         this.values = [];
//     }
//     insert(element){
//         this.values.push(element);
//         this.bubbleUp();
//     }
//     bubbleUp(){
//         let idx = this.values.length - 1;
//         const element = this.values[idx];
//         while(idx > 0){
//             let parentIdx = Math.floor((idx - 1)/2);
//             let parent = this.values[parentIdx];
//             if(element <= parent) break;
//             this.values[parentIdx] = element;
//             this.values[idx] = parent;
//             idx = parentIdx;
//         }
//     }
//     extractMax(){
//         const max = this.values[0];
//         const end = this.values.pop();
//         if(this.values.length > 0){
//             this.values[0] = end;
//             this.sinkDown();
//         }
//         return max;
//     }
//     sinkDown(){
//         let idx = 0;
//         const length = this.values.length;
//         const element = this.values[0];
//         while(true){
//             let leftChildIdx = 2 * idx + 1;
//             let rightChildIdx = 2 * idx + 2;
//             let leftChild,rightChild;
//             let swap = null;

//             if(leftChildIdx < length){
//                 leftChild = this.values[leftChildIdx];
//                 if(leftChild > element) {
//                     swap = leftChildIdx;
//                 }
//             }
//             if(rightChildIdx < length){
//                 rightChild = this.values[rightChildIdx];
//                 if(
//                     (swap === null && rightChild > element) ||
//                     (swap !== null && rightChild > leftChild)
//                  ) {
//                     swap = rightChildIdx;
//                 }
//             }
//             if (swap === null) break;
//             this.values[idx] = this.values[swap];
//             this.values[swap] = element;
//             idx = swap;
//         }
//     }
// }

// let heap = new MaxBinaryHeap();
// heap.insert(41);
// heap.insert(39);
// heap.insert(33);
// heap.insert(18);
// heap.insert(27);
// heap.insert(12);
// heap.insert(55);

//  Priority Queue

// class PriorityQueue {
//     constructor(){
//         this.values = [];
//     }
//     enqueue(val, priority){
//         let newNode = new Node(val, priority);
//         this.values.push(newNode);
//         this.bubbleUp();
//     }
//     bubbleUp(){
//         let idx = this.values.length - 1;
//         const element = this.values[idx];
//         while(idx > 0){
//             let parentIdx = Math.floor((idx - 1)/2);
//             let parent = this.values[parentIdx];
//             if(element.priority >= parent.priority) break;
//             this.values[parentIdx] = element;
//             this.values[idx] = parent;
//             idx = parentIdx;
//         }
//     }
//     dequeue(){
//         const min = this.values[0];
//         const end = this.values.pop();
//         if(this.values.length > 0){
//             this.values[0] = end;
//             this.sinkDown();
//         }
//         return min;
//     }
//     sinkDown(){
//         let idx = 0;
//         const length = this.values.length;
//         const element = this.values[0];
//         while(true){
//             let leftChildIdx = 2 * idx + 1;
//             let rightChildIdx = 2 * idx + 2;
//             let leftChild,rightChild;
//             let swap = null;

//             if(leftChildIdx < length){
//                 leftChild = this.values[leftChildIdx];
//                 if(leftChild.priority < element.priority) {
//                     swap = leftChildIdx;
//                 }
//             }
//             if(rightChildIdx < length){
//                 rightChild = this.values[rightChildIdx];
//                 if(
//                     (swap === null && rightChild.priority < element.priority) ||
//                     (swap !== null && rightChild.priority < leftChild.priority)
//                 ) {
//                    swap = rightChildIdx;
//                 }
//             }
//             if(swap === null) break;
//             this.values[idx] = this.values[swap];
//             this.values[swap] = element;
//             idx = swap;
//         }
//     }
// }

// class Node {
//     constructor(val, priority){
//         this.val = val;
//         this.priority = priority;
//     }
// }

// let ER = new PriorityQueue();
// ER.enqueue("common cold",5)
// ER.enqueue("gunshot wound", 1)
// ER.enqueue("high fever",4)
// ER.enqueue("broken arm",2)
// ER.enqueue("glass in foot",3)

//  Hash Function

// function hash(key, arrayLen) {
//   let total = 0;
//   for (let char of key) {
//     // map "a" to 1, "b" to 2, "c" to 3, etc.
//     let value = char.charCodeAt(0) - 96
//     total = (total + value) % arrayLen;
//   }
//   return total;
// }

// improving Our Hash Function

// function hash(key, arrayLen) {
//   let total = 0;
//   let WEIRD_PRIME = 31;
//   for (let i = 0; i < Math.min(key.length, 100); i++) {
//     let char = key[i];
//     let value = char.charCodeAt(0) - 96
//     total = (total * WEIRD_PRIME + value) % arrayLen;
//   }
//   return total;
// }

// hash_table_set_and_get

// class HashTable {
//   constructor(size=53){
//     this.keyMap = new Array(size);
//   }

//   _hash(key) {
//     let total = 0;
//     let WEIRD_PRIME = 31;
//     for (let i = 0; i < Math.min(key.length, 100); i++) {
//       let char = key[i];
//       let value = char.charCodeAt(0) - 96
//       total = (total * WEIRD_PRIME + value) % this.keyMap.length;
//     }
//     return total;
//   }
//   set(key,value){
//     let index = this._hash(key);
//     if(!this.keyMap[index]){
//       this.keyMap[index] = [];
//     }
//     this.keyMap[index].push([key, value]);
//   }
//   get(key){
//     let index = this._hash(key);
//     if(this.keyMap[index]){
//       for(let i = 0; i < this.keyMap[index].length; i++){
//         if(this.keyMap[index][i][0] === key) {
//           return this.keyMap[index][i][1]
//         }
//       }
//     }
//     return undefined;
//   }
// }

// let ht = new HashTable(17);
// ht.set("maroon","#800000")
// ht.set("yellow","#FFFF00")
// ht.set("olive","#808000")
// ht.set("salmon","#FA8072")
// ht.set("lightcoral","#F08080")
// ht.set("mediumvioletred","#C71585")
// ht.set("plum","#DDA0DD")

// Hash Table Keys and Values

// class HashTable {
//   constructor(size=53){
//     this.keyMap = new Array(size);
//   }

//   _hash(key) {
//     let total = 0;
//     let WEIRD_PRIME = 31;
//     for (let i = 0; i < Math.min(key.length, 100); i++) {
//       let char = key[i];
//       let value = char.charCodeAt(0) - 96
//       total = (total * WEIRD_PRIME + value) % this.keyMap.length;
//     }
//     return total;
//   }
//   set(key,value){
//     let index = this._hash(key);
//     if(!this.keyMap[index]){
//       this.keyMap[index] = [];
//     }
//     this.keyMap[index].push([key, value]);
//   }
//   get(key){
//     let index = this._hash(key);
//     if(this.keyMap[index]){
//       for(let i = 0; i < this.keyMap[index].length; i++){
//         if(this.keyMap[index][i][0] === key) {
//           return this.keyMap[index][i][1]
//         }
//       }
//     }
//     return undefined;
//   }
//   keys(){
//     let keysArr = [];
//     for(let i = 0; i < this.keyMap.length; i++){
//       if(this.keyMap[i]){
//         for(let j = 0; j < this.keyMap[i].length; j++){
//           if(!keysArr.includes(this.keyMap[i][j][0])){
//             keysArr.push(this.keyMap[i][j][0])
//           }
//         }
//       }
//     }
//     return keysArr;
//   }

//   values(){
//     let valuesArr = [];
//     for(let i = 0; i < this.keyMap.length; i++){
//       if(this.keyMap[i]){
//         for(let j = 0; j < this.keyMap[i].length; j++){
//           if(!valuesArr.includes(this.keyMap[i][j][1])){
//             valuesArr.push(this.keyMap[i][j][1])
//           }
//         }
//       }
//     }
//     return valuesArr;
//   }
// }

// let ht = new HashTable(17);
// ht.set("maroon","#800000")
// ht.set("yellow","#FFFF00")
// ht.set("olive","#808000")
// ht.set("salmon","#FA8072")
// ht.set("lightcoral","#F08080")
// ht.set("mediumvioletred","#C71585")
// ht.set("plum","#DDA0DD")
// ht.set("purple","#DDA0DD")
// ht.set("violet","#DDA0DD")

// ht.keys().forEach(function(key){
//   console.log(ht.get(key));
// })

//  Graph  Add Vertex

// class Graph{
//     constructor(){
//         this.adjacencyList = {};
//     }
//     addVertex(vertex){
//         if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
//     }
// }

// Graph  Add Edge

// class Graph{
//     constructor(){
//         this.adjacencyList = {};
//     }
//     addVertex(vertex){
//         if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
//     }
//     addEdge(v1,v2){
//         this.adjacencyList[v1].push(v2);
//         this.adjacencyList[v2].push(v1);
//     }
// }

// let g = new Graph();
// g.addVertex("Dallas");
// g.addVertex("Tokyo");
// g.addVertex("Aspen");

// Graph Remove Edge

// class Graph{
//     constructor(){
//         this.adjacencyList = {};
//     }
//     addVertex(vertex){
//         if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
//     }
//     addEdge(v1,v2){
//         this.adjacencyList[v1].push(v2);
//         this.adjacencyList[v2].push(v1);
//     }
//     removeEdge(vertex1,vertex2){
//         this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
//             v => v !== vertex2
//         );
//         this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
//             v => v !== vertex1
//         );
//     }
// }
// let g = new Graph();
// g.addVertex("Dallas");
// g.addVertex("Tokyo");
// g.addVertex("Aspen");
// g.addEdge("Dallas", "Tokyo");
// g.addEdge("Dallas", "Aspen");

// Graph Remove Vertex

// class Graph{
//     constructor(){
//         this.adjacencyList = {};
//     }
//     addVertex(vertex){
//         if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
//     }
//     addEdge(v1,v2){
//         this.adjacencyList[v1].push(v2);
//         this.adjacencyList[v2].push(v1);
//     }
//     removeEdge(vertex1,vertex2){
//         this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
//             v => v !== vertex2
//         );
//         this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
//             v => v !== vertex1
//         );
//     }
//     removeVertex(vertex){
//         while(this.adjacencyList[vertex].length){
//             const adjacentVertex = this.adjacencyList[vertex].pop();
//             this.removeEdge(vertex, adjacentVertex);
//         }
//         delete this.adjacencyList[vertex]
//     }
// }

// let g = new Graph();
// g.addVertex("Dallas");
// g.addVertex("Tokyo");
// g.addVertex("Aspen");
// g.addVertex("Los Angeles");
// g.addVertex("Hong Kong")
// g.addEdge("Dallas", "Tokyo");
// g.addEdge("Dallas", "Aspen");
// g.addEdge("Hong Kong", "Tokyo");
// g.addEdge("Hong Kong", "Dallas");
// g.addEdge("Los Angeles", "Hong Kong");
// g.addEdge("Los Angeles", "Aspen");
