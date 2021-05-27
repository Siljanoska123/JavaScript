/* Homework 07
    1. Write functions to calculate the perimeter and the area of a rectangle
    2. Write functions to calculate the perimeter and the area of a circle

    async await, promises, .then .catch 
    3. Write a function that compares two numbers. The function should return the bigger number. Wait for the function to return the result. 
    If some of the parameters is not a number, reject the call and return appropriate error. Print the result.
    4.  Write a function that compares range of a given number. The function should return whether the number is smaller or bigger than 25. 
    Wait for the function to return the result. If the number is smaller than 25, reject the call and return appropriate error. Print the result.
    5.  Write a function that will transform the elements from a given array to upper cases (hint: word.toUpperCase()). 
    The array can contain elements from all types. If that's the case, reject the call and return appropriate error. Print the result.
    Example array:
    const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
    const complicatedArray = ['cucumber', 44, true]; */

 
// 1. perimeter = (a+b)*2       area = a*b


let area = (x = 0, y = 0) => {
    let a = x * y;
    return a;
};

let area_of_rectangle = 10*5 ;
console.log('area_of_rectangle', area_of_rectangle);

let perimeter = (x = 0, y = 0) =>{
    let p = area * 2;
    return p;
};

let perimeter_of_rectangle = area_of_rectangle * 2;
console.log('perimeter_of_rectangle', perimeter_of_rectangle);


// 2 perimetar = 2 * r * pi  area = r2 * pi

const pi = 3.14;

let circle_a = (r = 0) => {
    let C_a = r * r * pi;
    return C_a;

};

let area_of_circle = 10 * 10 * pi;
console.log('area_of_circle', area_of_circle);



let circle_p = (r = 0) => {
    let C_p = 2 * r * pi;
    return C_p;

};

let perimeter_of_circle = 2 * 10 *  pi;
console.log('perimeter_of_circle', perimeter_of_circle);

// 3.
/* Write a function that compares two numbers. The function should return the bigger number. Wait for the function to return the result. 
If some of the parameters is not a number, reject the call and return appropriate error. Print the result. */



// let compares = (x = 0, y = 0) => {
//     let comp = x > y;
//     return x;
//     let compa = x < y;
//     return y; 
// };

// let compares_two_numbers = (5,2);
// console.log(compares_two_numbers);




// Promise  (se koristi za da gi izbegneme asynchronous codes)
let x = 10;
let y = 20;

let compares_func = () => {
    if(x > y);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('TIMEOUT',);
            // return resolve('finished');
            return reject('x = ', x);
        }, 2000);

    });

};




let wait_for_response = async () => {
    try{
        console.log('try');
        let response = await compares_func();
        console.log('success')
        console.log('response', response);
    } catch (error) {
        console.log('catch');
        console.log(error);

    }
};

wait_for_response();
