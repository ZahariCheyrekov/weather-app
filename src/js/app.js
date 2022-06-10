const key = 'c4f1f083adf5cee8bef3c3c18743abdd';
const inputField = document.querySelector('.city-name');
const searchIcon = document.querySelector('.search-icon i');

searchIcon.addEventListener('click', getData);

async function getData() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputField.value}&units=metric&appid=${key}`;
    clearInputField();

    try {
        const response = await fetch(url);
        const data = await response.json();
        const { name } = data;
        const { temp, feels_like, temp_min, temp_max, humidity } = data.main;
        const { country } = data.sys;
        const { speed } = data.wind;
        const { icon, description, main } = data.weather[0];
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";

    } catch (error) {
        inputField.value = 'Invalid city name!';

        setTimeout(() => {
            clearInputField();
        }, 2000);
    }

    // console.log(name, temp, temp_min, temp_max, feels_like, humidity, country, speed, icon, description, main)
}

function clearInputField() {
    inputField.value = '';
}