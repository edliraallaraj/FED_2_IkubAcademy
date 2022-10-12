// Task 1 : Create 3 variables of different types, where you will display the following output in the log.The variables must be of different types. You can use the way you prefer.
let petname = ("Kiki");
console.log(petname);
console.log(typeof(petname));

let age = 28
console.log(age);
console.log(typeof(age));

let arrayofbrowsers = ['Google Chrome', 'Firefox','Microsoft Edge', 'Opera']
console.log(arrayofbrowsers);
console.log(typeof arrayofbrowsers);

// Task 2 : Declare an array of number types and access its 4th element.
let arrayofoddno = ['1','3','5','7','9']
console.log(arrayofoddno);
console.log(arrayofoddno[4]);

// Task 3 : Declare an array of string types and an array of number type. In the array strings, line programming languages, while in the numbers, the years when these languages ​​were created.You will output something like "Javascript was created in 1978" according to the links of the two respective arrays.
let arrayofproglang = ['Javascript', 'Python', 'Java', 'C++', 'PHP', 'Kotlin']
console.log(arrayofproglang);
let arrayofyears = ['1995', '1991', '1995', '1985', '1994', '2010']
console.log(arrayofyears);
console.log(`${arrayofproglang [0]} is created in ${arrayofyears [0]}`)
console.log(`${arrayofproglang [1]} is created in ${arrayofyears [1]}`)
console.log(`${arrayofproglang [2]} is created in ${arrayofyears [2]}`)
console.log(`${arrayofproglang [3]} is created in ${arrayofyears [3]}`)
console.log(`${arrayofproglang [4]} is created in ${arrayofyears [4]}`)
console.log(`${arrayofproglang [5]} is created in ${arrayofyears [5]}`)

// Extra examples created by me

let teamname = "FC Inter"
console.log(`Hello, my favorite football team is ${teamname}`)
console.log(typeof(teamname));
let pet = "dogs"
console.log(`I really like pets. I am obsessed with all of them. But my favorites are ${pet}.`)

let shoppinglist = ['cheese', 'yougurt', 'eggs', 'ham', 'milk']
console.log(shoppinglist);
shoppinglist.push('butter') /*  'cheese', 'yougurt', 'eggs', 'ham', 'milk', 'butter'. Added one more item*/
shoppinglist[0] = 'bread'; /* now the shopping list will change because the index (0) item is no longer cheese but bread */

let  amI26YearsOld = true;
console.log(amI26YearsOld);
let  amI30YearsOld = false;
console.log(amI30YearsOld);
