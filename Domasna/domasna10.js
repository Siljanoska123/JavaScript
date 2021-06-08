let submit = document.querySelector('.submit');
let inputValue = document.querySelector('.inputValue');
let city = document.querySelector('.city');
let temp = document.querySelector('.temp');

submit.addEventListener('click', weatherfunc=()=> {
    fetch('api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=5f23c0bde240fc4faa02e981c0a8a5aa&lang=mk')
    .than(response => response.json())
    .than(data => {
        let cityValue = data ['city'];
        let tempValue = data['main']['temp'];

                
        city.innerHTML = cityValue;
        temperatureValue.innerHTML = temperatureValue
        console.log(data);

    })

    .catch(error => {
        console.error('Wrong city name', error)
    })
})