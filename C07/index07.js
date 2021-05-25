// DOM manipulation (document object modul)

// Element selection (selekcija na elementi)
    // 1. document.getElementById('element_id'); (document e celata sodrzina od html i e veke definirana promenliva)

let element = document.getElementById('main');
console.log(element.innerHTML); /* so inner.HTML ja gledame samo sodrzinata */
element.innerHTML = 'New paragraph text'; /* ja menuvame sodrzinata */
console.log(element.innerHTML);

    // 2. document.getElementsByName('element_name'); (tuka e elementS)

let elements_input = document.getElementsByName('first_name');
console.log(elements_input);

console.log('My first name is', elements_input[0].value);

   // 3. document.getElementsByClassName('class_name'); (tuka e elementS)

let elements_class = document.getElementsByClassName('colors');

console.log('colors', elements_class);

  // 4. document.querySelector('.class_name'); (ni go dava samo prviot element)

let element_qs = document.querySelector('.colors');
console.log(element_qs);

  // 5. document.querySelectorAll('.class_name');

let element_qs_all = document.querySelectorAll('.colors');
console.log(element_qs_all);

// Element creation
    // 1. document.createElement('ELEMENT_TYPE');


let p = document.createElement('p');
// console.log(p); !!! mora da ima ednas bidejki i dvata console.log ke ni gi pecati

p.innerHTML = 'Some text here';
console.log(p);

// 2. element.appendChild();
/* da go dodademe vo html */ /* .body potencirame kade da go stavi elementot */

document.body.appendChild(p);


let lemon = document.createElement('li');

lemon.innerHTML = 'lemon';

console.log(lemon);

let ul_fruits = document.getElementById('fruits');

ul_fruits.appendChild(lemon);


// Element styling

    // 1. element.style.css_property

let paragraph = document.getElementById('main');
paragraph.style.backgroundColor = 'red';
paragraph.style.color = 'white';
paragraph.style.width = '150px';

    // 2. element.classList.add('class_name');

let list = document.getElementById('fruits');
list.classList.add('style');


// Event listeners
    // click
    // mouse over
    // mouse out

// document.getElementById('fruits').addEventListener('mouseover', mouse_over);

let mouse_over = () => {
    list.style.backgroundColor = 'MediumSeaGreen';
} ;

let mouse_out = () => {
    list.style.backgroundColor = 'coral';
} ;

let click = () => {
    alert ('Hello user!');
    // list.removeEventListener('click', click);
} ;


list.addEventListener('mouseover', mouse_over); /* more da isto ime kako kaj let */
list.addEventListener('mouseout', mouse_out);
list.addEventListener('click', click);