let ages = [32, 25, 30, 33, 16, 40];

console.log(ages);

let sum = 0;
ages.forEach(age => {
    sum += age;

});

console.log(sum);


// loops
// counter e isto sto i 'i' (indeks)
    // 1. FOR loop

sum = 0;
for(let i = 0; i < ages.length; i++) {
    console.log('i = ', i);
    console.log(`ages[${i}] = ` , ages[i]);
    sum += ages [i];
    console.log('sum with FOR = ', sum);
};

    // 2. for of loop

sum = 0;
for (let age of ages) {
    console.log(age);
    sum += age;
  
};

console.log('sum with FOR OF', sum);

    // 3. while loop

sum = 0;
let counter = 0;
while(counter < ages.length) {
    sum += ages[counter];
    counter++;
}
console.log ('sum with WHILE', sum);



    // 4. do while loop (prvin se izvrsuva uslovot, pa potoa se proveruva)
counter = 0;
sum = 0;
do {
    sum += ages[counter];
    counter++;

} while(counter < ages.length);   

console.log('sum with DO WHILE', sum);

