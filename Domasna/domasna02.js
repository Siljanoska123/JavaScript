/* Homework 01
1. For all the primitive types - Declare variables. Assign values on the variables.
2. Print the values of the variables.
3. Print the type of the variables.
4. Create a constant. Assign value to the constant. 
5. Try to assign another value to the constant. What happens?
6. For all the reference types - Declare variables. Assign values on the variables.
7. Print the values of the variables.
8. Print the type of the variables.
*Bonus: What is the type of the array variable? 
*/ 


let name = 'Ivana';
console.log(name);
console.log(typeof name);

let age = 32;
console.log(age);
console.log(typeof age);

let lastName;
console.log(lastName);
console.log(typeof lastName);

let Surname = null;
console.log(Surname);
console.log(typeof Surname);

let economy = true;
console.log(typeof economy);
console.log(economy);

const year = 2021;
console.log(year);

// year = 2022;
console.log(year); 
// konstantite ne moze da se menuvaat


let student1 = {
    fName: 'Branko',
    lName: 'Siljanoski',
    number: 1111,
};

console.log(student1);
console.log(typeof student1);

let student2 = {
    fName: 'Ivana',
    lName: 'Janchevska',
    number: 2222,
};

console.log(student2);
console.log(typeof student2);

let student3 = {
    fName: 'Marijana',
    lName: 'Siljanoski',
    number: 3333,
};

console.log(student3);
console.log(typeof student3);


let students = [student1, student2, student3];
console.log(students);
console.log(students);