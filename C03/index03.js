// Task 01
// Declare two variables (type number). Assign values 
// to the variable

// Da se deklariraat dve promenlivi (broevi)

let x = 5;
let y = 3;
let z = '5';
let a = 4;


// Arithmetic operators:
/* 
        + -> addition
        - -> subtraction
        * -> multiplication
        / -> division
        %  -> modulus (remainder)
        ++ -> increment (vrednosta na promenlivata ke se zgolemi za eden)
                        (add +1 on the value of the variable)
        -- -> decrement (subtract -1 of the value of the variable)                
*/

console.log(5 + 3);
console.log(5 - 3);


let sum = x + y;
console.log(sum);

/* koga ednata promenliva e string vo toj slucaj ke ni gi spoi brojkite*/
sum = x + z;

console.log(sum);
console.log(typeof sum);

x = x + 1;
console.log(x);

x++;
console.log(x);

// Task 02
// Decrese the value of the variable x by 1

x--;
console.log(x);

x = x - 1;
console.log(x);

// Task 03
// Choose two operators and implement it over the variables

let operator = x / y * a
console.log(operator);

operator = x * y - a
console.log(operator);

// Operatori za sporedba
// Comparison operators
/*  
    == -> equals to (only by value) (dali imaat ista vrednost dve promenlivi, bez razlika na tipot)
    === -> equals to (by value and by type) (dali imaat ista vrednost dve promenlivi, zemajki go vo predvid i tipot)        
    != -> not equal to (only by value (dali se razlicni bez ogled na tipot)
    !== -> not equal to (by value and by type (dali se razlicni i po vrednost i tip)

kaj slednite ne se sporeduva tipot:
    > -> greater than (Pogolemo)
    < -> smaller than (Pomalo)
    >= -> greater or equal to (pogolemo i ednakvo)
    <= -> smaller or equal to (pomalo i ednakvo) 

*/

x = 5;
z = '5';
console.log('does x equals to z', x == z);

x = 5;
z = '6';
console.log('does x equals to z', x == z);
/* koga ima == vrednostite gi sporeduva bez razlika kakva vrednost se, dali e string ili number */


x = 5;
z = '5';
console.log('does x equals to z', x === z);
/* koga imame === vo ovoj slucaj se proveruva i tipot, ednoto e string a drugoto e number */


// Task 04
// use some comparision operator over the variables.


x = 5;
y = 3;
z = '5';

check = x !== z;
console.log('does x not equal to z', check);

check = x >= z;
console.log(check);


// Logicki operatori
// Logical operators
/* 
    || -> or (ili)
    && -> and (i)
    ! -> not (dava sprotivno od toa sto e razultatot (true e false, false e true))

*/

x = 6;
y = 3;
// (x < 10 && y > 1)   ->  koga ima && (i) mora da se ispolneti site uslovi za da ima true
//  x < 10 || y > 1    -> koga ima || (ili) moze samo eden uslov da bide ispolnet za da bide true  

console.log(x < 10 && y > 1);
console.log(x < 10 || y > 1);

y = 0;
console.log('x < 10 && y > 1', x < 10 && y > 1);
console.log('x < 10 && y > 1', x < 10 || y > 1);

// koga imame ! (not) go negirame dobieniot rezultat
console.log('x < 10 && y > 1 wit not operator', !(x < 10 && y > 1)); /* !(true i false) = false -> !false = true*/
console.log('x < 10 && y > 1 wit not operator', !(x < 10 || y > 1)); /* !(true i false) = true -> !true = false*/



// ============================================================================

// Vidovi na logiranja (najcesto se koristat error i log)

console.error('The user is not logged in!'); // outputs an error message  /* () ja prikazuva porakata no kako greska */
console.table(['apples', 'oranges', 'bananas']); // displays data as a table /* podatocite gi pecati vo tabela */
console.log(['apples', 'oranges', 'bananas']);
let person = { name: 'Ivana', year: 2021 };
console.dir(person);
console.dir(location); // dislays interactive list of the properties of the specified object
console.log(location);
console.info('Semos course: JavaScript basics.');

setTimeout(() => {
    console.timeEnd('script');
}, 5000);

/*
Homework 02
1. Declare variables and use all the different operators that were shown ( print the results)
2. Try out the different types of loggings in the console
* Bonus: Try and find out new types of loggings in the console
*/