console.log('Error Handling');

console.log('try.....catch');

try {
  console.log(name);
} catch {
  console.log('Name is not defined');
}


try {
  console.log(name);
} catch (error) {
  console.log(error);
}
let name = 'Saba';

try {
  if (name === 'Saba') {
    console.log("Name is Saba");
  } else {
    throw Error('Name is not Saba')
  }
} catch (error) {
  console.log(error);
}


const usersData = [
  {
    user_name: "rahim",
    password: '12345'
  },
  {
    user_name: "saba",
    password: '12345'
  },
  {
    user_name: "shehryar",
    password: '12345'
  }
]

let userName = 'rahim';
let password = '123456';

try {
  let userData = usersData.find(values =>
    values.user_name === userName &&
    values.password === password
  );

  if (!userData) {
    throw Error('User not exist')
  } else {
    console.log(userData)
  }
} catch (error) {
  console.log(error)
}


try {
  console.log("classRoom")
} catch (error) {
  console.log(error)
} finally {
  console.log('Bunk')
}

let className = 'Web Dev';
try {
  try {
    console.log(classRoom)
  } catch (error) {
    console.log(error)
  }
  try {
    console.log(projector)
  } catch (error) {
    console.log(error)
  }
  try {
    console.log(className)
  } catch (error) {
    console.log(error)
  }
  console.log(className)


} catch (error) {
  console.log("Main Catch")
  console.log(error)
}