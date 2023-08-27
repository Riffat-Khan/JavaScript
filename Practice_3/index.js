console.log('Practice 3');

function subtract (a, b) {
    console.log(a-b); 
    return a - b;
//     console.log('a-b');
}

const res = subtract(15,4);

console.log(subtract(15,4))


const subtraction_Arrow_Fusnction = (a,b) => {
    return a - b;
};

console.log(subtraction_Arrow_Fusnction(100,45));


const subtraction = (a,b) => a - b;

console.log(subtraction(100,45));

// function subtract (a, b)  a - b;


let a = 5, b = 10;


if (a>b) {
    const result = a;
} else {
    const result = b;
}
    
const result = a > b ? a : b;

console.log(result)

let value_1 = 5;
let value2 = 10;

console.log(value_1 > value2);
console.log(value_1 < value2);

let valueString1 = 'Dann';
let value_string_1 = 'Dann';

let valueNum = 34343;

console.log(valueNum.length);

let valueBol = true;

console.log(valueBol.length);
console.log(valueString1.length);
console.log(valueString1 > value_string_1);
console.log(valueString1 < value_string_1);
console.log(valueString1 === value_string_1);

let stringValue = 'Danish';

if (stringValue.length === 0) console.log('Empty String 1');
if (stringValue === '') console.log('Empty String 2');
if (stringValue) console.log('Non Empty String');
if (!stringValue) console.log('Empty String 3');


let initialValue;

console.log(initialValue)

initialValue = null;

console.log(initialValue);


const giveMyCourse_Typical_IfElse = (ai, wd, seo, gd, cs) => {
  if (ai) {
    return ai;
  } else if (wd) {
    return wd;
  } else if (seo) {
    return seo;
  } else if (gd) {
    return gd
  } else if (cs) {
    return cs;
  } else {
    return 'Ghar Jao';
  }
}

const giveMyCourse = (ai, wd, seo, gd, cs) => 
  ai || wd || seo || gd || cs || 'Ghar Jao';
const response = 
  giveMyCourse('', null, null, null, '');

  console.log(response)

const giveMyCourseModulesAND = (js, html, css, react, db, nodejs) => 
  js && html && css && react && db && nodejs && 'Pass';  

const giveMyCourseModulesCombinationOfAndOr = (js, html, css, react, db, nodejs) => 
  js && (html || css || react) && db && nodejs && 'Pass';  

const response_1 = 
giveMyCourseModulesCombinationOfAndOr('JS', 'HTML', 'CSS', '', 'DB', 'NODEJS');
  
console.log(response_1);