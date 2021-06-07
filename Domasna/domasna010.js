/* <!-- /*
    1. Create account here - https://openweathermap.org
    2. Find your API key
    3. Read the documentation for the API 
    4. In the html file create one input field and one button
    5. In the input field you should enter the city for which you will gather the weather information
    6. On click on the button, make API call and get the weather information for the city that is entered into the input field
    7. Show the weather information into separate html element.
*/

let submit = document.querySelector('.submit')
let inputValue = document.querySelector('.inputValue')
let city = document.querySelector('.city')
let temperature = document.querySelector('.temperature')

submit.addEventListener('click', function(){
    fetch('api.openweathermap.org/data/2.5/weather?q={inputValue}&appid={5f23c0bde240fc4faa02e981c0a8a5aa}')
    .then(response => { 
        console.log(response);
        return response.json();
    })
    .then(data => {
        let cityValue = data ['city'];
        let temperatureValue = data['main']['temperature'];
        
        
        city.innerHTML = cityValue;
        temperatureValue.innerHTML = temperatureValue
        console.log(data);


    })

    .catch(error => {
        console.error('Wrong city name', error)
    })
})