console.log(123);

// *************************** QUESTION 1 *********************
//Write a function that uses setTimeout to log the message "Hello, World!" after a delay of 2 seconds.

setTimeout(() => console.log("Hello World!"), 2000);


// *************************** QUESTION 2 *********************
//Implement a function that uses setInterval to display the current time in the format "HH:MM:SS" every second.

const Time = () => {

    setInterval(()=>
    {
        let currentdate = new Date();
        let currenttime = "Time : "+currentdate.getHours()+":"+currentdate.getMinutes()+":"+currentdate.getSeconds();
        console.log(currenttime);
    }, 1000);  
}  
Time();



// *************************** QUESTION 3 *********************
//Create a function called multiply that takes two numbers as arguments and returns their product. Implement a callback function called handleResult that logs the result to the console after a delay of 1 second.

const multiply = (x,y) => (x*y)

const handleResult = () =>{

    setTimeout(() => console.log(multiply(2,5)), 1000);
} 
handleResult()




// *************************** QUESTION 4 *********************
//Write a function called countdown that takes a number as an argument and logs the numbers from the given number to 1 with a delay of 1 second between each number. Use promises to handle the asynchronous behavior.

const countdown = ((num) => {
    if(num >= 1) {
        const promise_1 = new Promise((resolve, reject) => {
            setTimeout(() => resolve(num), 1000);
        });
        promise_1.then(() => {
                console.log(num);
                return countdown(num - 1);
            }).catch(() => console.log('Invalid num'));
    }
})

countdown(6);




// *************************** QUESTION 5 *********************
//Implement a function called fetchData that fetches data from the "https://jsonplaceholder.typicode.com/posts" API using fetch. Handle the response using promises and log the data to the console.

const fetchData = () =>{

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
         return response.json();
    })
    .then(data => console.log(data))
    .catch(() => console.log('Error'))
}
fetchData()





// *************************** QUESTION 6 *********************
//Create a function called sum that takes an array of numbers as an argument and returns a promise. The promise should resolve with the sum of all the numbers in the array after a delay of 2 seconds.

const sum = ((array) => {
    const add = array.reduce((a,b) => a+b)
    const promice_2 = new Promise((resolve, reject) => {
        setTimeout(() => (resolve(add)), 2000)
        })
    promise_3.then(() => console.log(add)).catch(() => console.log('Inavlid'))
})
sum([1,2,3,4,5])




// *************************** QUESTION 7 *********************
// Implement a function called repeat that takes a function and a number as arguments. The function should execute the given function repeatedly, with a delay of 500 milliseconds between each execution, for the specified number of times.

function repeat(good, times){
    let count=0;
    function execute(){
        good();
        count+=1;
            if(count<times)
            {
                setTimeout(execute, 500);
            }
        }
        execute();
    }
    function good(){ 
        console.log('THE END');
}

repeat(good, 5);


// *************************** QUESTION 8 *********************
//Write a function called fetchRandomUser that uses fetch to retrieve data from the "https://randomuser.me/api/" API. The function should return a promise that resolves with the first name and last name of a random user after a delay of 1 second.

function fetchRandomUser() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        fetch('https://randomuser.me/api/')
          .then(response => response.json())
          .then(data => {
            const user = data.results[0];
            const firstName = user.name.first;
            const lastName = user.name.last;
            resolve({ firstName, lastName });
        }).catch(error => {
            reject(error);
        });
      }, 1000);
    });
}
fetchRandomUser().then(user => { 
    console.log(user.firstName, user.lastName);
}).catch(error => {
    console.error(error);
});


// *************************** QUESTION 9 *********************
//Create a function called waitForCondition that takes a condition function and an interval as arguments. The function should repeatedly check the condition every specified interval, and once the condition evaluates to true, it should resolve a promise. Implement a callback function that logs a success message after the condition is met.

function waitForCondition(conditionFunc, interval) {
    return new Promise((resolve, reject) => {
      const intervalId = setInterval(() => {
        if (conditionFunc()) {
          clearInterval(intervalId);
          resolve();
        }
      }, interval);
    });
  }

const condition = () => {
    const currentTime = new Date().getSeconds();
    return currentTime >= 3;
};
  
const successCallback = () => {
    console.log('Condition met. Success!');
};
  
waitForCondition(condition, 3000).then(successCallback).catch(() => console.log('Invalid condition or error occurred.'));
  



function waitForCondition(conditionFunc, interval) {
    const promise_4 = new Promise((resolve, reject) => {
      const intervalId = setInterval(() => {
        if (conditionFunc()) {
          clearInterval(intervalId);
          resolve();
        }
      }, interval);
    });

    promise_4.then(successCallback).catch(() => console.log('Invalid condition or error occurred.'));
  
  }

  const condition = () => {
 
    const currentTime = new Date().getSeconds();
    return currentTime >= 3;
  };
  
const successCallback = () => console.log('Condition met. Success!');

waitForCondition(condition, 5000)


// *************************** QUESTION 10 *********************
//Write a function called fetchMultipleUrls that takes an array of URLs as an argument. The function should fetch data from all the URLs concurrently using promises and return an array of the resolved data. Each request should have a timeout of 3 seconds, and if any request takes longer than the timeout, it should be skipped and the corresponding element in the result array should be set to null.

function fetchMultipleUrls(urlArray) {
    const fetchPromises = urlArray.map((url) => {
      return new Promise((resolve, reject) => {
        const timeoutId = setTimeout(() => {
          resolve(null);
        }, 3000);
  
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            clearTimeout(timeoutId);
            resolve(data);
          })
          .catch((error) => {
            clearTimeout(timeoutId);
            resolve(null);
          });
      });
    });
  
    return Promise.all(fetchPromises);
}
  
fetchMultipleUrls(['https://jsonplaceholder.typicode.com/posts', https://randomuser.me/api/ , 'https://jsonplaceholder.typicode.com/posts'])
.then((resolvedData) => {
    console.log('Resolved Data:', resolvedData);
}).catch((error) => {
    console.log('Error occurred:', error);
});