/* Homework 02
1. Declare variables and use all the different operators that were shown ( print the results)
2. Try out the different types of loggings in the console
* Bonus: Try and find out new types of loggings in the console
*/

// Aritmetic operators

let x = 15;
let y = 30;
let z = 55;

let operation = x + y + z;
console.log(operation);

let operation1 = x * y / z;
console.log(operation1);

let operation2 = y % x;  /* ne bas ja razbiram ovaa funkcija, kako bi bila matematicki? */
console.log(operation2);

let operation3 = (z - x) * y;
console.log(operation3);

x++;
console.log(x);
console.log(operation3);

z--;
console.log(z);

// Comparision operators

let a = 20;
let b = '20';
let c = 35;

console.log('does a equals to b', a == b);
console.log('does a equals to b', a === b);
console.log('does not a equals to b', a != b);
console.log('does not a equals to b', a !== b);

console.log('does a > b', a > b);
console.log('does a < c', a < c);


// Logical operators

console.log('a < 30 && b > 40 && c < 50' , a < 30 && b > 40 && c < 50);
console.log('a < 30 || b > 40 || c < 50' , a < 30 || b > 40 || c < 50);
console.log('! a < 30 || b > 40 || c < 50' , !(a < 30 || b > 40 || c < 50));


// Type of loggings

console.error('This is my mistake!'); 
console.table(['green', 'yellow', 'red']); 
console.log(['green', 'yellow', 'red']);
let person = { name: 'Ivana', year: 1989 };
console.dir(person);
console.dir(location); 
console.log(location);
console.info('Ivana SIljanoska ');

setTimeout(() => {
    console.timeEnd('homework');
}, 1000); 

