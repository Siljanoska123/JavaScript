/*
    Homework 05

    1. Loop through the arrays and print the elements.
    2. Loop through the students array and print the details of the students
    3. Create a loop and print the first 10 numbers.
    4. Create a loop and print the first 10 numbers (even only - hint start from 0 and increase the counter for 2).
        a. starting from 0 && using a conditional statement (increase the counter for 1)
    5. Create a loop and print the first 10 numbers (odd only - hint start from 1 and increase the counter for 2).
        a. starting from 0 && using a conditional statement (increase the counter for 1)
*/

// 1
let fruits = ['Apple', 'Banana', 'Orange'];

console.log('fruits',fruits);

// 2

let students = [
    {
        firstName: 'John',
        lastName: 'Doe',
        index: 20201
    },
    {
        firstName: 'Jane',
        lastName: 'Doe',
        index: 20202
    },
    {
        firstName: 'David',
        lastName: 'Vinoth',
        index: 20203
    },
    {
        firstName: 'Divya',
        lastName: 'Ishitha',
        index: 20204
    },
    {
        firstName: 'Thomas',
        lastName: 'Edgardson',
        index: 20205
    }
];

// 2

students.forEach(student => {
    console.log(`${student.firstName} ${student.lastName} ${student.index}`)
});


// 3 Create a loop and print the first 10 numbers.

for(let i = 1; i <= 10; i++) {
    console.log(`first 10 numbers: [${i}] = `, i);

};

// 4. Create a loop and print the first 10 numbers (even only - hint start from 0 and increase the counter for 2).

for(let i = 2; i <= 10; i+=2) {
    console.log(`even numbers: [${i}] = `, i);

};

//         a. starting from 0 && using a conditional statement (increase the counter for 1)
 

for(let i = 0; i<= 10; i++) 
if(i % 2 === 0) {
    console.log(i)
};

// 5 Create a loop and print the first 10 numbers (odd only - hint start from 1 and increase the counter for 2).

for(let i = 1; i <= 10; i+=2) {
    console.log(`odd numbers: [${i}] = `, i);

};

// a. starting from 0 && using a conditional statement (increase the counter for 1)

for(let i = 0; i<= 10; i++) 
if(i % 2 > 0) {
    console.log(i)
};


