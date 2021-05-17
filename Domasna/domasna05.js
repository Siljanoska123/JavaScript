/*  Homework 04
1. Create three person objects with properties firstName and lastName and add coresponding values. Print the values of the properties of the objects. Use both approaches.
2. Add the property age and coresponding value to the objects. Use both approaches.
3. Find out which person is older.
4. Create array people. Populate the array with the three person objects.
5. Find the sum of the years of the people. (hint: use forEach)
6. Find the average of the years of the people.
7. Find and understand the documentation about the following methods:
    - pop
    - push
    - map
    - filter
    - sort
*/

// 1

let person1 = {
    firstName: 'Ivana',
    lastName: 'Siljanoska',
};

let person2 = {
    firstName: 'Maja',
    lastName: 'Sapundziev',
};

let person3 = {
    firstName: 'Ivan',
    lastName: 'Martinovski',
};

console.log('first name person 1', person1.firstName);
console.log('last name person 1', person1['lastName']);

console.log('first name person 2', person2.firstName);
console.log('last name person 2', person2['lastName']);

console.log('first name person 3', person3.firstName);
console.log('last name person 3', person3['lastName']);

// 2

person1.age = 32;
person2['age'] = 28;
person3.age = 10;

// 3

if(person1.age > person2.age && person1.age > person3.age) {
    console.log('the oldest is ', person1);
} else if(person2.age > person1.age && person2.age > person3.age) {
    console.log('the oldest is ', person2);
} else {
    console.log('the oldest is', person3)
};

// 4

let people = [person1, person2, person3];
console.log('people', people);

// 5

people.forEach (person => {
    console.log(`${person.age}`);
});

// let sum = 0;
// let sumAge = [person1.age, person2['age'], person3.age];

// sumAge.forEach(person => {
//     console.log(`${person.age}`);

// });

// NE ZNAM SO forEach :(


// 6

let sum = people[0].age + people[1].age +  people[2].age
console.log('sum years', sum);

let average = sum / people.length

console.log('average years', average)



// 7
// pop method

let fruits = ['banana', 'orange', 'apple', 'mango'];
console.log(fruits);

fruits.pop();

console.log(fruits);

// push method

fruits.push('kiwi');

console.log(fruits);

// map

let array = [2, 5, 7, 9];
console.log('array', array);

let map = array.map(x => x * 2);

console.log('array with map', map);

// filter

let words = fruits.filter (fruit => fruit.length > 5 );

console.log('5 letters words', words);

// sort

fruits = ['banana', 'orange', 'apple', 'mango'];

fruits.sort();
console.log('sort fruits', fruits);






