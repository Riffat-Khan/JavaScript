//******************ASSIGNMENT 1 ******************//


/*  ================
                    Question 1
                               ===================*/
/* Write the code, one line for each action:
Create an empty object user.
Add the property name with the value John.
Add the property surname with the value
Smith.
Change the value of the name to Pete.
Remove the property name from the object. */

const user = {
    name : 'Jhon', surname : 'Smith'
}
user.name = 'Pete';
console.log(user)
delete user.name ;
console.log(user)




/*  ================
                    Question 2
                               ===================*/

// Check if an object is empty or not //

if(Object.keys(user).length) console.log('is not empty')
else console.log('is empty')




/*  ================
                    Question 3
                               ===================*/

/* We have an object storing salaries
of our team:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
Write the code to sum
all salaries and store in the
variable sum. Should be 390 in the example above.

If salaries is empty, then the result must be 0. */

let salaries = {
    Jhon : 100,
    Ann : 160,
    Pete : 130
}

let salaries_arr = Object.values(salaries)
let sum = 0;
salaries_arr.forEach((elements) => {
    sum += elements
})
console.log(sum);




/*  ================
                    Question 4
                               ===================*/

/* Create a function multiplyNumeric(obj) that multiplies
all numeric property values of obj by 2.
For instance:
// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
Please note that multiplyNumeric
does not need to return
anything. It should modify the object in-place.
P.S. Use typeof to check for a number here. */

let menu = {
    width : 200,
    length : 400,
    name : 'peter'
}
Object.keys(menu).forEach((elements) => { 
    if(Number.isInteger(menu[elements]))
    {
        menu[elements]*=2;

    }
})
console.log(Object.values(menu));




/*  ================
                    Question 5
                               ===================*/

/* Create a parameterised
function inside an object */

let obj = {
    name : 'riffat',
    status : true,
    fun(num,str){
        return num+str;
    } 
}
console.log(obj.fun(1,'abc'));