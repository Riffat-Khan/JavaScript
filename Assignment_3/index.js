console.log(123);

//<<<<<<<<<<<<<<<<<<<    Array Methods Assignment     >>>>>>>>>>>>>>>>>>>>>>>//

// ****************push***************//
/*Adds one or more elements to the end of an array 
and returns the new length of the array*/
const fruits = ['apple', 'banana'];
fruits.push('orange');
console.log(fruits); // Output: ['apple', 'banana', 'orange']

// ****************pop***************//
/*Removes the last element from an array and returns that element*/
const fruits_1 = ['apple', 'banana', 'orange'];
const removedFruit = fruits_1.pop();
console.log(removedFruit); // Output: 'orange'
console.log(fruits_1); // Output: ['apple', 'banana']

// ****************shift***************//
/*Removes the first element from an array and 
returns that element. It also updates 
the indices of the remaining elements*/
const fruits_2 = ['apple', 'banana', 'orange'];
const RemovedFruit = fruits_2.shift();
console.log(RemovedFruit); // Output: 'apple'
console.log(fruits_2); // Output: ['banana', 'orange']

// ****************unshift***************//
/*Adds one or more elements to the beginning of 
an array and returns the new length of the array*/
const fruits_3 = ['banana', 'orange'];
fruits_3.unshift('apple');
console.log(fruits_3); // Output: ['apple', 'banana', 'orange']

// ****************concat***************//
/*Combines two or more arrays and returns a new array*/
const fruits_4 = ['apple', 'banana'];
const vegetables = ['carrot', 'tomato'];
const combined = fruits_4.concat(vegetables);
console.log(combined); // Output: ['apple', 'banana', 'carrot', 'tomato']

// ****************slice***************//
/*Returns a shallow copy of a portion of an array 
selected from start to end (end not included)*/
const numbers = [1, 2, 3, 4, 5];
const sliced = numbers.slice(1, 4);
console.log(sliced); // Output: [2, 3, 4]

// ****************splice***************//
/*Changes the content of an array by removing, replacing, 
or adding elements at a specific index*/
const fruits_5 = ['apple', 'banana', 'orange'];
fruits_5.splice(1, 1, 'grape', 'kiwi');
console.log(fruits_5); // Output: ['apple', 'grape', 'kiwi', 'orange']

// ****************map***************//
/*Creates a new array with the results of calling a provided 
function on every element in the original array*/
const numbers_1 = [1, 2, 3, 4, 5];
const squaredNumbers = numbers_1.map((number) => number * number);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

// ****************filter***************//
/*Creates a new array with all elements that 
pass a test implemented by a provided function*/
const numbers_2 = [1, 2, 3, 4, 5];
const evenNumbers = numbers_2.filter((number) => number % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

// ****************find***************//
/*Returns the first element in the array 
that satisfies a provided testing function*/
const fruits_6 = ['apple', 'banana', 'orange'];
const foundFruit = fruits_6.find((fruit) => fruit === 'banana');
console.log(foundFruit); // Output: 'banana'

// ****************indexOf***************//
/*Returns the first index at which a given element can be 
found in the array, or -1 if it is not present*/
const fruits_7 = ['apple', 'banana', 'orange'];
const index = fruits_7.indexOf('banana');
console.log(index); // Output: 1

// ****************every***************//
/*Tests whether all elements in the array pass the provided function*/
const numbers_3 = [2, 4, 6, 8, 10];
const allEven = numbers_3.every((number) => number % 2 === 0);
console.log(allEven); // Output: true

// ***************some***************//
/*Tests whether at least one element in 
the array passes the provided function*/
const numbers_4 = [1, 2, 3, 4, 5];
const hasEven = numbers_4.some((number) => number % 2 === 0);
console.log(hasEven); // Output: true

// ****************reduce***************//
/*Applies a function against an accumulator and each 
element in the array to reduce it to a single value*/
const numbers_5 = [1, 2, 3, 4, 5];
const sum = numbers_5.reduce((accumulator, number) => accumulator + number, 0);
console.log(sum); // Output: 15

// ****************sort***************//
/*Sorts the elements of an array in place and returns the sorted array*/
const fruits_8 = ['banana', 'apple', 'orange'];
fruits_8.sort();
console.log(fruits_8); // Output: ['apple', 'banana', 'orange']

// ****************reverse***************//
/*Reverses the order of the elements in an array in place*/
const numbers_6 = [1, 2, 3, 4, 5];
numbers_6.reverse();
console.log(numbers_6); // Output: [5, 4, 3, 2, 1]

// ****************join***************//
/*Joins all elements of an array into a string, 
optionally using a specified separator*/
const fruits_9 = ['apple', 'banana', 'orange'];
const joined = fruits_9.join(', ');
console.log(joined); // Output: 'apple, banana, orange'

// ****************includes***************//
/*Determines whether an array includes a certain element, 
returning true or false as appropriate*/
const fruits_10 = ['apple', 'banana', 'orange'];
const includesBanana = fruits_10.includes('banana');
console.log(includesBanana); // Output: true

// ****************isArray***************//
/*Returns true if the provided value is an array, false otherwise*/
const fruits_11 = ['apple', 'banana', 'orange'];
console.log(Array.isArray(fruits_11)); // Output: true

const number = 42;
console.log(Array.isArray(number)); // Output: false

// ****************findIndex***************//
/*Returns the index of the first element in the array 
that satisfies a provided testing function*/
const numbers_7 = [10, 20, 30, 40, 50];
const Index = numbers_7.findIndex((number) => number > 30);
console.log(Index); // Output: 3

// ****************flat***************//
/*Creates a new array with all sub-array elements 
concatenated recursively up to the specified depth*/
const numbers_8 = [1, [2, [3, [4, [5]]]]];
const flattened = numbers_8.flat(3);
console.log(flattened); // Output: [1, 2, 3, 4, 5]

// ****************reduceRight***************//
/*Applies a function against an accumulator and 
each element in the array (from right to left) 
to reduce it to a single value*/
const numbers_9 = [1, 2, 3, 4, 5];
const sumRightToLeft = numbers_9.reduceRight((accumulator, number) => accumulator + number, 0);
console.log(sumRightToLeft); // Output: 15

// ****************fill***************//
/*Fills all or a portion of an 
array with a static value*/
const numbers_10 = [1, 2, 3, 4, 5];
numbers_10.fill(0, 2, 4);
console.log(numbers_10); // Output: [1, 2, 0, 0, 5]
