console.log('hello 123');

//******************ASSIGNMENT 2 ******************//


/*  ================
                    Question 1
                               ===================*/

/*
Let’s try 5 array operations.
Create an array styles with items “Jazz” and “Blues”.
Append “Rock-n-Roll” to the end.
Replace the value in the middle with “Classics”. Your code for finding the middle value should work for any arrays with odd length.
Strip off the first value of the array and show it.
Prepend Rap and Reggae to the array.*/

let array = ['Jazz', 'Blues']
let Append = array.push('Rock-n-Roll');
console.log(array);
let Replace = array.splice(array.length/2,1,'Classics');
console.log(array)
let strip = array.shift()
console.log(array)
let prepend = array.unshift('Rap', 'Raggae')
console.log(array)


/*  ================
                    Question 2
                               ===================*/
/* Write the function sumInput() that:
Calculates and returns the sum of array items.*/

function sumInput()
{
    const array = [291, 270, 289, 33, 27];
    let sum = 0;
    array.forEach((item) => 
    {
        sum += item;
    })
    return(sum);
}
console.log(sumInput());


/*  ================
                    Question 3
                               ===================*/
/*Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
The function should not modify the array. It should return the new array.
For instance:
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
console.log( filtered ); // 3,1 (matching values)
console.log( arr ); // 5,3,8,1 (not modified)*/

function filterRange(arr_2, a, b)
{
    let filtered = [];
    arr_2.forEach((element) =>
    {
        if(element >= a && element <= b) filtered = filtered.concat(element);
    })
    return filtered;
}
let arr_2 = [5, 3, 8, 1];
console.log(filterRange(arr_2, 1, 4));
console.log(arr_2);



/*  ================
                    Question 4
                               ===================*/
/*Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
The function should only modify the array. It should not return anything.
For instance:
let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4
console.log( arr ); // [3, 1] */
function filterRangeInPlace(arr_1, a, b)
{
    arr_1.forEach((element, index) =>
    {
        if(!(element >= a && element <= b)) arr_1.splice(index,1);
    })
    return arr_1;
}
let arr_1 = [5, 3, 8, 1];
filterRangeInPlace(arr_1, 1, 4); 
console.log( arr_1 );



/*  ================
                    Question 5
                               ===================*/
/*You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.
For instance:
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };
let users = [ john, pete, mary ];
let names =  ... your code 
console.log( names ); // John, Pete, Mary*/

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };
let users = [ john, pete, mary ];

let names = users.map(user => user.name);
console.log(names);




/*  ================
                    Question 6
                               ===================*/
/*You have an array of user objects, each one has name, surname and id.
Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.
For instance:
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };
let users = [ john, pete, mary ];
let usersMapped =  ... your code ... 
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
console.log( usersMapped[0].id ) // 1
console.log( usersMapped[0].fullName ) // John Smith
So, actually you need to map one array of objects to another. Try using => here. There’s a small catch.*/

let John = { name: "John", surname: "Smith", id: 1 };
let Pete = { name: "Pete", surname: "Hunt", id: 2 };
let Mary = { name: "Mary", surname: "Key", id: 3 };
let Users = [John, Pete, Mary];

let usersMapped = Users.map(User => ({
  fullName: User.name +' '+ User.surname,
  id: User.id
}));

console.log(usersMapped[0].id);
console.log(usersMapped[0].fullName);


/*  ================
                    Question 7
                               ===================*/
/*Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.
The formula for the average is (age1 + age2 + ... + ageN) / N.
For instance:
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };
let arr = [ john, pete, mary ];
console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28*/

let JHON = { name: "John", age: 25 };
let PETE = { name: "Pete", age: 30 };
let MARY = { name: "Mary", age: 29 };
let arr = [ 
    JHON, PETE, MARY ];
let sum = 0;
function getAverageAge(arr){
    arr.forEach((element) => 
    {
        sum += element.age;
    })
    let avg = sum/arr.length;
    return avg;

}
console.log(getAverageAge(arr));



/*  ================
                    Question 8
                               ===================*/
/*Let arr be an array.
Create a function unique(arr) that should return an array with unique items of arr.
For instance:
function unique(arr) {
  your code
}
let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
alert( unique(strings) );*/

function unique(arr) {
    arr = new Set(arr);
    strings = Array.from(arr);

    return strings;
  }
  
  let strings = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];
  console.log(unique(strings));