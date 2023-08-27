let myName = 'Danish';

// Checking variable type
const typeName = typeof(myName);

console.log(typeof myName);

console.log(myName, typeName);

myName = 5;
const typeName2 = typeof(myName); 
console.log(myName, typeName2);


// Boolean data type
let lightStatus = false;
let lcdStatus = true;

console.log(lightStatus);
console.log(lcdStatus);


const typeStatus = typeof(lcdStatus);
console.log(typeof(lcdStatus));
console.log(typeStatus);


// Arrays
const arrayOfNumbers = [1, 2, 3, 4, 6];
console.log(arrayOfNumbers);
// Access value by index
console.log(arrayOfNumbers[2]);
// Length of Array
const lengthOfArray = arrayOfNumbers.length;
console.log(lengthOfArray);

console.log(arrayOfNumbers[lengthOfArray-1]); // Get last index value of array


// Array Manipulation

const numbersArray = [1, 2, 3, 4, 5];

// Add value into array
numbersArray.push(75);

console.log(numbersArray);
console.log(numbersArray.length);


numbersArray.push(75,65,3434);

console.log(numbersArray);

// Remove last index value from array

numbersArray.pop();

const arrayOfAllRounders = [
  1,
  "Danish",
  true,
  [5,5,5,5]
];

console.log(arrayOfAllRounders);



// Objects

const first_object = {
  name: 'Iqra',
  rollNumber: 1,
  attendance: true,
};

// scores: [5, 5, 10, 0],
// course_score: {
//   js: 10,
//   html: 5,
// }


first_object.name = 'Bushra'; // Changing object key name.

console.log(first_object.name); 

first_object.scores = [5, 5, 10, 0]; // Add a new key/value pair to object

console.log(first_object); 

delete first_object.attendance; // remove a key value pair from object

console.log(first_object);


first_object.course_score = {
  js: 10,
  html: 8,
}

console.log(first_object);

const html = first_object.course_score.html;  // accessing nested object value

console.log(html);


// Conditional Programming

let weather = 'sunny';

if (weather === 'rain') {
  console.log('Umbrella is required');
} else {
  console.log('Nothing is required');
}

// OR Operator
if (weather === 'rain' | weather === 'sunny') {
  console.log('Umbrella is required');
} else {
  console.log('Nothing is required');
}



// AND Operator

let js = 5;
let css = 10;

if (js>=5  &  css>=5) {
  console.log('Pass');
} else {
  console.log('Fail');
}


if (js>=5  &  css===10) {
  console.log('Pass');
} else {
  console.log('Fail');
}

// Difference between == & ===

let value = 5;

if (value == '5') console.log(true);
else console.log(false);

if (value === '5') console.log(true);
else console.log(false);


let value1 = 509;

if (value1 == ' 509      ') console.log(true);
else console.log(false);


// While Loops

let weatherCondition = 'rain';
let count = 0;
while (weatherCondition === 'rain') {
  console.log('It is Raining Outside');
  count +=1;
  console.log(count)
  if (count === 5) { 
    weatherCondition = 'sunny';
  }
}

while (weatherCondition === 'rain') {
  console.log('It is Raining Outside');
  count +=1;
  console.log(count)
  if (count === 5) { 
    console.log(weatherCondition);
    break;
  }
}

// Nested While Loop

while (true) {
  while (weatherCondition === 'rain') {
    console.log('It is Raining Outside');
    count +=1;
    console.log(count)
    if (count === 5) { 
      console.log(weatherCondition);
      break;
    }
  }
  break;
}

const arr = [1, 2, 3, 4, 5];
const arr1 = [];
for (let i = 0; i  <= arr.length; i++) {
  const multiple = arr[i]*2; 
  arr1.push(multiple);
}

console.log(arr1);


const arr2 = [1, 2, 3, 4, 5];

// Functions

// Non Parameterised Function
function add () {
  let a = 5;
  let b = 10;
  let c = a + b;
  console.log(c);
}

// calling a function
add();

// Parameterised Function

function addByParams (a, b) {
  let c = a + b;
  return c;
}

const output_1 = addByParams(); 
const output_2 = addByParams(10, 20);

console.log(output_1, output_2)