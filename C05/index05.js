// Nizi i objekti (arraya and object)

// Objects

/* 
let car1 type = 'Audi';
let car2 type = 'BMW';
let car 3 type = 'Mercedes';
 */

let car = {
    color: 'black',
    year: 2018,
    type: 'Audi',
    model: 'A4',
}

console.log(car);

// dot operator (tocka operator)

console.log('car type', car.type);

console.log('car model', car.model);

// Task 01
// Print the year of the car (postojat tri nacini) (koristi samo 1 i 3)

    // 1
console.log('car year', car.year);

    // 2

let carYear = car.year;
console.log(carYear);

    // 3

console.log('car year', car['year']);

/* dodavame novo svojstvo na objectot CAR */

// 1. car.doors = 5;

// 2. 
car['doors'] = 5;


console.log(car);
console.log('car doors', car['doors']);


// ARRAYS (nizi)


let carA = {
    color: 'black',
    year: 2018,
    type: 'Audi',
    model: 'A4',
}

let carB = {
    color: 'red',
    year: 2016,
    type: 'BMW',
    model: 'x6',
}

let cars = [carA, carB];
console.log('cars', cars);

// za da pecatime nekoe svojstvo kaj nizi 
// primer:pristapuvame bojata na kola B:
// broenjeto pocnuva od 0 zatoa carA e 0, a carB e 1


console.log('carB color', cars[1].color);
console.log('carA color', cars[0]['color']);


// za da vidime kolku elementi ima nizata: - so ____.length
console.log('array length', cars.length - 1);

// Task 02
// In the cars array on the first element add the doors property

// dodavame svojstvo na objekti vo niza

cars[0].doors = 5;
cars[1].doors = 3;

// vtor nacin
/* 
    cars[0]['doors'] = 5;
    cars[1]['doors'] = 3 
*/

console.log(cars);



// pop
// push


// forEach method (za site elementi)

cars.forEach(car => {
    console.log(car.type);
    console.log(car.type);
});

// za da spoime vo edno
cars.forEach(car => {

console.log(`${car.type} ${car.model}`);
});