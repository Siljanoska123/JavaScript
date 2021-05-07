/* declare variable */
let name = 'Ivana';

/* let - za da pravime deklaracija  i nejzinata promenliva moze da se smeni*/
/* name - imeto na promenlivata vrednost. 
            Sekogas zborovite se odvojuvaat so golema bukva (studentName) ili so dolna crta (student_name) */
/* operator = asign value  (davame nekakva vrednost)*/

console.log('Hello World');

// Task 01
// Declare variable with your name. Print the value
// Variable in the console.


let Surname = 'Siljanoska';
console.log(Surname);

/* ako sakame da ispecatime vo console, koristime console.log  (pecati se sto e vo navodnicite)*/

Surname = 'Janchevska'; /* ako sakame da dadema nova vrednost na promenlivata */

console.log(Surname);

const pi = 3.14;

console.log(pi);

// Tack 02
// Change the value of the variable pi. Print its value.
// What happens?

/* const ne moze da se menuvaat */


// pi = 5;
// console.log(pi);

let year = 2021;

// primitive types
    /* 
    string '' {testualna vrednost (ime, prezime, profesija)}
    number 12
    boolean (true/false {flegovi, indikator,}
    undefined (ne davame vrednost)
    null (da ima vrednost null)
    */

let isWinter = false;
let isSpring = true;

/* let lastName;
console.log(lastName); */

let lastName = null;
console.log(lastName);

console.log(typeof isWinter); 


// Task 03
// print the type of the year variable.

console.log(typeof year); 
            // year e number, ako 2021 go stavime vo navodnici ke bide string

// reference types
    /* object (js znae deka ima objekt dokolku ima zaradi {})
            array (niza) (js znae deka ima niza dokolku ima zaradi []) 
        
    */

let fName = 'Rachel';
let lName = 'Taylor';
let age = 35;

let person = {
    fName: 'Rachel',
    lName: 'Taylor',
    age: 35,
};

let person1 = {
    fName: 'Ivana',
    lName: 'Siljanoska',
    age: 35,
};

let people = [person, person1];

// mora da se zapazuva HOMOGENOSTA kaj nizite i objektite

console.log(people)

// Task 04
// Make the bad examle to be good :)

// before
let people2 = [person, 'orange'];   /* bad example */

// after
let fruits = ['apple', 'orange'];   /* good example */



