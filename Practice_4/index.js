console.log('Practice 4');

const user = {
  name: 'Nouman',
  age: 30,
  active: false,
  description: function getDes() {
    return 'Description';
  },
  giveNameAndAge: function getInfo() {
    return 'Nouman and 20'
  },
  getInfo() {
    return 'Anum'
  }
}
user.age = 'asad@gmail.com';


user.email = function addEmail () {
  return 'Add Email';
}

console.log(user)
console.log(user.active)
console.log(user.description)
console.log(user.description())
console.log(user.giveNameAndAge())
console.log(user.email)
console.log(user.email())
console.log(user.getInfo)
console.log(user.getInfo())


const userInfo = {
  name: 'Ali Raz',
  age: 20,
  active: true,
  status: function getStatus() {
    return this.active;
  },
  getAge() {
    return this.age;
  },
}
userInfo.status = false;
console.log(userInfo.status)
let a = 5;
let b = a;
b = 6;

console.log(a, b);


const newUserInfo = userInfo;
newUserInfo.active = false;
console.log(newUserInfo)
console.log(userInfo)

console.log({...userInfo, ...user})
console.log({...user, ...userInfo})

let userInformation = {
  name: 'Ali Raz',
  age: 20,
  active: true,
  status: function getStatus() {
    return this.active;
  },
  getAge() {
    return this.age;
  },
}

const userInformation2 = {...userInformation};
userInformation = null;
console.log(userInformation);
console.log(userInformation2);
console.log(userInformation2.status());

// // Object Destructuring

userInformation2.name;

const {
  name: userName, age, status: userStatus
} = userInformation2;

console.log(userName);
console.log(age);
console.log(userStatus());

// Optional Chaining
let courseInfo = {
  name: 'Web Dev',
  duration: 6,
  // active: true,
}

const course_status = courseInfo?.active;
console.log(course_status);

let courseInfo2 = null;

const course_status_2 = courseInfo2?.active;
console.log(course_status_2);


let courseInformation = {
  name: 'Web Dev',
  duration: 6,
  active: true,
}

// Object Methods
const objKeys = Object.keys(courseInformation);
console.log(objKeys);

const objValues = Object.values(courseInformation);
console.log(objValues);

const objEntries = Object.entries(courseInformation);
console.log(objEntries);

// Array Methods

let obj = {
  getInfo() {
    return 123;
  }
}

obj.getInfo()
const arr_0 = [23, 24, 25, 26, 30, 32];

// Typical for-loop
for (let i = 0; i<arr_0.length; i++) {
  console.log(arr_0[i]);
}

const printValue = (value) => console.log(value);
arr_0.forEach(printValue)
const arr = [23, 24, 25, 26, 30, 32];

arr.forEach((firstParam, secondParam, thirdParam) => {
  console.log(firstParam);
  console.log(secondParam);
  console.log(thirdParam);
})


arr.unshift(123);
console.log(arr);
arr.shift();
console.log(arr);

delete arr[4];

console.log(arr);
console.log(arr);

const removedItems = arr.splice(2, 2);
console.log(arr);
console.log(removedItems);

const addedItems = arr.splice(2, 0, 25, 46,656);

console.log(arr);
console.log(addedItems);

const arr2 = [123, 124, 125, 126, 130, 132];

console.log(arr2.slice(1,3))
const slicedArray = arr2.slice(1,3);
console.log(slicedArray);
console.log(arr2);

const halfTillEnd = arr2.slice((arr2.length/2), arr2.length);

console.log(halfTillEnd);

const array3=[1,2,3];
const array4=[4,5,3];
console.log([...array3, ...array4]);
console.log([...array3, array4]);

const array5=[4,5,3, 2,1,0,4,89,-1];

const isThere = array5.includes(-1);
console.log(isThere);

const checkIndexOf = array5.indexOf(12323131312);
const checkIndexOf4 = array5.indexOf(4);
// const checkFindIndex = array5.findIndex(5);

console.log(checkIndexOf);
console.log(checkIndexOf4);
// console.log(checkFindIndex);
const users = [
  {name: 'Riffat',email: 'riffat@gmail.com',active: true},
  {name: 'Ali Raza',email: 'aliRaza@gmail.com', active: false},
  {name: 'M Zain',email: 'mzain@gmail.com',active: true},
  {name: 'Tauseef',email: 'tauseef@outlook.com',active: true},
  {name: 'Iqra',active: true},
  {name: 'Iqra',active: false},
  {name: 'Hanan', email: 'hanan@yahoo.com', phone: 1234567890}
];

const iqraRecord = users.find((value) => value.name === 'Iqra');
const iqraRecordIndex = users.findIndex((value) => value.name === 'Iqra');
const allIqraRecords = users.filter((value) => value.name === 'Iqra');
const allActiveIqraRecords = users.filter((value) => value.name === 'Iqra' && !value.active);

console.log(iqraRecord)
console.log(iqraRecordIndex)
console.log(allIqraRecords)
console.log(allActiveIqraRecords)

const arrNums = [1,2,3,4,5];

const num2 = arrNums.map((x) => {
  return x*2;
});

console.log(arrNums)
console.log(num2)

const authUsers = users.map((x) => {
  x.active ? x.isAuthenticated = true : x.isAuthenticated = false;
  return x;
})

console.log(authUsers);

const authUsers2 = users.map((x) => {
    if (x.active){
      x.isAuthenticated = true;
    }

    return x;
  })
  
  console.log(authUsers2);