// assignment operators (dodeluvacki operatori)
/* 
    = -> assign value
    += -> add and assign value
    -= -> subtract and assign value 
    *= -> multiply and assign value
    /= -> divide and assign value
    %= -> find module and assign value

*/


// examples

let x = 2;
// x = x + 3;
x += 3; /* ova e zamena za prethodnoto */

console.log('x = ', x);

let y = 6;
y -= 3

console.log('y = ', y);

x = 5;
x *= 2;
console.log('x = ', x);

y = 6;
y /= 3

console.log('y = ', y);

// Proveruvanje na uslovi
// Conditional statements

// example

let a = -5;
let b = -7;

// let sum = a + b; samo za primer bese dadeno
// console.log('sum = ', sum);


// da ne moze da sobere dva negativni broevi za da gi sobereme
/* ako a >= 0 i b e >= 0, togas go pecatime sum, inaku, da javi greska ....(console.error*/
// stavame && bidejki dvata broevi sakame da se pogolemi od nula
// ako sakame samo eden da bide pogolem od nula togas stavame ||

if (a >= 0 && b >= 0) {
    sum = a + b;
    console.log('The sum of the numbers is ', sum);
} else {
    console.error('The numbers must be positive.');
}

a = 5;
b = 7;
if (a >= 0 && b >= 0) {
    sum = a + b;
    console.log('The sum of the numbers is ', sum);
} else {
    console.error('The numbers must be positive.');
}

a = 0;

if (a > 0) {
    console.log('a is posotoven number');
} else if(a < 0) {
    console.log('a is negative nuber');
} else {
    console.log('a equals zero')
}

a = 5;

if (a > 0) {
    console.log('a is posotoven number');
} else if(a < 0) {
    console.log('a is negative nuber');
} else {
    console.log('a equals zero')
}

a = -9;

if (a > 0) {
    console.log('a is posotoven number');
} else if(a < 0) {
    console.log('a is negative nuber');
} else {
    console.log('a equals zero')
}


// Task 02
// Define variable and assign value to it. Check if the value is even or odd 
// dali vrednosta e parna ili neparna

b = 10;
if(b % 2 > 0 ) {
    console.log('This number is odd');
} else{
    console.log('This number is even');
}


let number = 5;

if(number % 2 === 0) {
    console.log('The number is even');
} else {
    console.log('The number is odd');
}

// Alerts (alerti prozorcinja)

    // 1. alert

/* alert('Hello world'); */

    // 2. alert with confirmation - tuka moze da se zacuva odgovorot na korisnikot
    
/* confirm('Do you really want to leave?')   */  

// da go zapamtime odgovorot 
let result = confirm('Do you really want to leave?');
console.log('confirm result', result);

if(result) {
    console.log('The user wants to leave.');
} else {
    console.log('The user wants to stay');
} 

// switch -case

let variable = 'name';

switch(variable) {
    case 'age' : /* dali variable e = so age */
        console.log('The variable has value age');
        break; /* mora da ima break toa znali koga ima tocen blok da se izvrsi i so nego zapirame, da ne odi ponataka */
    case 'lastName' :
        console.log('The variable has value lastName');
        break;
    case 'name' :
        console.log('The variable has value name');
        break;       
    default:   /* dokolku ne najde uslov sto ke se ispolni */    
        console.log('The variable has unknown value');
}


// Task 03
// Define variable and assign value to it. Check if the value is even or odd 
// with  switch case

let c = 23;

switch(c % 2) { /* sporeduvame so 0 ili 1 */
    case 0:
        console.log('the number is even');
        break;
    default:
        console.log('The numner is odd');
}


// GRESNO: vo ovoj slucaj sporeduvame so true
/* switch(c) {
    case 'c % 2 == 0':
        console.log('the number is even');
        break;
    default:
        console.log('The numner is odd');
} */
