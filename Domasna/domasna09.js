
/*
    Homework 08
    1. jsonplaceholder tasks
    1.1 Get all users
    1.2 Print only the name and the username from the retrieved data
    1.3 On some user, update it's data
    1.4 Add new user
    1.5 Delete a user 

    *** Bonus 
    Get all comments for the posts from jsonplaceholder. For each post, count it's comments.
*/

// 1.1.

let httpRequest;



let makeRequest = () => {
    httpRequest = new XMLHttpRequest();
    if(!httpRequest) {
        console.console.error('Cannot creat an XMLHttpRequest instance');
        return false;

    }
    httpRequest.onreadystatechange = showResult;


    httpRequest.open('GET', 'https://jsonplaceholder.typicode.com/users');
    httpRequest.send();

};

let showResult = () => {
    try {
        if(httpRequest.readyState === XMLHttpRequest.DONE) { 
            if(httpRequest.status === 200) { 
           
                console.log(httpRequest.responseText);

            } else {
                console.error('There was a problem with the request');
            };
        };

    } catch(error) {
        console.error('error', error);
    };

};

makeRequest();


// 1.2


// 1.3.

/*     let user = { 
        "id": 10,
        "name": "Kalina Siljanoska",
        "username": "Moriah.Stanton",
        "email": "kalinag@t.mk",
        "address": {
          "street": "Kattie Turnpike",
          "suite": "Suite 198",
          "city": "Tetovo",
          "zipcode": "1200",
          "geo": {
            "lat": "-38.2386",
            "lng": "57.2232"
          }
        },
        "phone": "024-648-3804",
        "website": "ambrose.net",
        "company": {
          "name": "Hoeger LLC",
          "catchPhrase": "Centralized empowering task-force",
          "bs": "target end-to-end models"
        }

    };



httpRequest.open('PUT', 'https://jsonplaceholder.typicode.com/users/10'); 
httpRequest.setRequestHeader('Content-Type', 'application/json');
httpRequest.send(JSON.stringify(user)); */



// 1.4.



let user = { 
    "id": 11,
    "name": "Kalina DuBuque",
    "username": "Moriah.Stanton",
    "email": "Rey.Padberg@karina.biz",
    "address": {
      "street": "Kattie Turnpike",
      "suite": "Suite 198",
      "city": "Skopje",
      "zipcode": "1000",
      "geo": {
        "lat": "-38.2386",
        "lng": "57.2232"
      }
    },
    "phone": "024-648-3804",
    "website": "ambrose.net",
    "company": {
      "name": "Hoeger LLC",
      "catchPhrase": "Centralized empowering task-force",
      "bs": "target end-to-end models"
    }

};



fetch('https://jsonplaceholder.typicode.com/users', {
method: 'POST', 
body: JSON.stringify({
    body: user

}),
headers: {
    'Content-Type': 'application/json'
}
})
.then (response =>{  /* dobivame promise */
return response.json();
})
.then (data => {
console.log(data)
})
.catch(error => {
console.error('error', error);
})


// 1.5


fetch('https://jsonplaceholder.typicode.com/users/10', { 
    method: 'DELETE'
    
})
.then (response =>{ 
    return response.json();
})
.then (data => {
    console.log(data)
})
.catch(error => {
    console.error('error', error);
});
