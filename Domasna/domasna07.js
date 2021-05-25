/*
    Homework 06
    1. Create an array of objects (objects to represent book details). 
    For each book create a paragraph that will contain information about the title of the book and the author. 
    Add those elements to the page. 
    Use ul and li to display the book details. 
    2. Change the style of the book, depending on whether you have read the book. (hint: use loops)
    3. On hover of the book details, change the style of the element.

    Bonus:
    <!DOCTYPE html>
    <html>
    <head>
    <meta charset="utf-8"/>
    <title>About Me</title>
    </head>
    <body>
    <h1>About Me</h1>
    
    <ul>
        <li>Nickname: <span id="nickname"></span></li>
        <li>Favorites:  <span id="favorites"></span></li>
        <li>Hometown: <span id="hometown"></span></li>
    </ul>
    
    </body>
    </html>
    
    This changes need to be applied to the code above
    1. Set the following body style - font-family to 'Arial, sans-serif'.
    2. Fill in the values ​​in the span tags.
    3. Add the listItem class to each li tag. (hint: use loops)
    All elements with the listItem class should have white font color, red background color, and font size 14.
*/


let books = [
    {
        title: 'Zivotot e roman',
        autor: 'Guillaume Musso',
        page: 200,
    },
    
    {
        title: '7 godini podocna',
        autor: 'Guillaume Musso',
        page: 150,

    },
    {
        title: 'Ringispil',
        autor: 'Jelena Bacic Alimpic',
        page: 150,

    },
];

let p = document.createElement ('p');
p.innerHTML = books[0];
console.log(p);


let p1 = document.createElement ('p1');
p1.innerHTML = books[1];
console.log(p1);


let p2 = document.createElement ('p2');
p2.innerHTML = books[2];
console.log(p2);

document.body.appendChild(p);
document.body.appendChild(p1);
document.body.appendChild(p2);

// ne znam dali e dobro?!

// 2
