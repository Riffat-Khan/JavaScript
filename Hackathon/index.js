console.log(123);

/**************************** QUESTION 1 ********************************/
/*Creat a var without assigning any value
to it and check its value*/

let str;
console.log(str); //undefined


/**************************** QUESTION 2 ********************************/

let string = 'riffat';
string = 34;
string = true;
console.log(string);//true


/**************************** QUESTION 3 ********************************/
// let num = 345;
// const num = 345;// num already declared
// console.log(num);

/**************************** QUESTION 4 ********************************/
let num = 345;
let num = 345;// num already declared
console.log(num);


/**************************** QUESTION 5 ********************************/
// let string_1 = 'riffat';
// let number = 56;

// console.log(number+number);
// console.log(string_1+string_1);
// console.log(string_1+ number);
// console.log(number+string_1);


/**************************** QUESTION 6 ********************************/
let string_1 = 'riffat';
let number = 56;
let bool = true;

console.log(number + string_1 + bool);
console.log( bool + number + string_1);
console.log(string_1 + number + bool);
console.log(string_1 + bool + number);


/**************************** QUESTION 7 ********************************/
let username = 'Asma';
let age = 20;
console.log(`"My name is ${username}, I am ${age} years old"`);




/**************************** QUESTION 8 ********************************/

let number = 456;
console.log(typeof number);




/**************************** QUESTION 19 ********************************/

let array = [1,45,56,'riffat', 'asma', 'study', 56, true, 'arr', 'end'];
array.pop();
array.push('val2', 123);
console.log(array.length);
console.log(array)
array.splice(7,1)
console.log(array)



/**************************** QUESTION 10 ********************************/

let object = {
    name : 'bunny',
    age : 89
}
object.email = 'abc@xyx.com';
console.log(object);
object.age = true;
console.log(object);
let copy = {...object}
delete copy.name;// delete copy['name']
console.log(copy);



/**************************** QUESTION 11 ********************************/

let tempearture = 56;
if(tempearture>= 40) console.log('AC is required');
else if(tempearture<=5) console.log('Heater is required');
else console.log('Weather seems cool');



/**************************** QUESTION 12 ********************************/

let name1 = 'Xsaaaa';
let age = -56;
let name = name1.toLowerCase()
if(name1[0] == 'A' && age> 15) console.log(`${name} ${age}`);
else if (name1[0] == 'X' && age == undefined) console.log('Unknown Data');
else if(name1.length == 10 || age>0) console.log('Name contains 10 letters');
else console.log('Data is faulty');



/**************************** QUESTION 13 ********************************/

for(let i=1; i<=5; i++)
{
    let space =  ''.repeat(6-i);
    let asterisk = '*'.repeat(i);
    console.log( asterisk + space);
}



for(let i=1; i<=5; i++)
{
    let asterisk =  '*'.repeat(6-i);
    let space = ''.repeat(i);
    console.log( asterisk + space);
}



for(let i=1; i<=5; i++)
{
    let space =  ' '.repeat(5-i);
    let asterisk = '*'.repeat(i);
    let asterisk1 = '*'.repeat(i-1);
    console.log(space + asterisk + asterisk1 + space);
}

