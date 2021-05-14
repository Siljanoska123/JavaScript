/*
    Homework 03
    1. Declare variables and use the assignment operators ( print the results)
    2. Write a JavaScript conditional statement to sort three numbers. Print the result.
    3. Compute the average marks of the following students. Then, use the average to determine the corresponding grade. 
    Student_Name	Marks
    David	        80
    Vinoth	        77
    Divya	        88
    Ishitha	        95
    Thomas	        68

    Range	Grade
    <60	    F
    <70	    D
    <80	    C
    <90	    B
    <100	A

    4. For a given day, print out whether it is a day of the work week or weekend.
    5. For a given month, print out in which season it belongs.
     */


// 1

let x = -10;
let y = -20;

x *= 4;
console.log('x = ', x);
y /= 2;
console.log('y =', y);

// 2

let a = 3;
let b = 7;
let c = 5;

if(a > b && a > c && b > c) {
    console.log('a, b, c', a, b, c);
} else if(a > b && a > c && c > b) {
    console.log('a, c, b', a, c, b);
} else if(b > a && b > c && a > c) {
    console.log('b, a, c', b, a, c);
} else if(b > a && b > c && c > a) {
    console.log('b, c, a', b, c, a);
} else if(c > a && c > b && a > b) {
    console.log('c, a, b', c, a, b);
} else {
    console.log('c, b, a', c, b, a)
}

// 3

    let student1 = 80;
    let student2 = 77;
    let student3 = 88;
    let student4 = 95;
    let student5 = 68;




sum = student1 + student2 + student3 + student4 + student5;
console.log('sum', sum);    

average = sum / 5;
console.log('average marks', average);



if(average < 60) {
    console.log('average grade is F');
} else if(average < 70 ) {
    console.log('average grade is D');
}  else if(average < 80) {
    console.log('average grade is C');
} else if(average < 90) {
    console.log('average grade is B');
} else {
    console.log('average grade is A')
}

// 4

let day = 'Friday' ;

switch(day) {
    case 'Sunday' :
        console.log('It is weekend');
        break; 
    case 'Friday' :
        console.log('It is work day');
        break;       
    default:      
        console.log('You have mistake :)');
}

// 5

// March = 3

let month = 3;

if (3 <= month <= 5) {
    console.log('spring');
} else if (6 <= month <= 8) {
    console.log('summer');
} else if (9 <= month <= 11) {
    console.log('fall');
} else{
    console.log('winter');
}

