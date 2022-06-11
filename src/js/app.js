const key = 'c4f1f083adf5cee8bef3c3c18743abdd';
const inputField = document.querySelector('.city-name');
const searchIcon = document.querySelector('.search-icon i');
const cityData = document.querySelector('.city-data');
let previousCity = '';

searchIcon.addEventListener('click', getData);

async function getData() {
    if (inputField.value) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputField.value}&units=metric&appid=${key}`;
        clearInputField();

        try {
            const response = await fetch(url);
            const data = await response.json();
            displayElements(data);

        } catch (error) {
            inputField.value = 'Invalid city name!';

            setTimeout(() => {
                clearInputField();
            }, 2000);
        }
    }
}

function displayElements(data) {
    const { name } = data;
    const { temp, humidity } = data.main;
    const { country } = data.sys;
    const { main, icon, description } = data.weather[0];

    const nameEl = createComponent('h2', name, 'city-name');
    const tempEl = createComponent('h1', Math.round(Number(temp)) + " °C", 'city-temp');
    const humidityEl = createComponent('p', humidity + ' %', 'city-humidity');

    const countryFlagEl = createComponent('img', undefined, 'country-flag-img');
    countryFlagEl.src = "https://countryflagsapi.com/png/" + country;

    const iconEl = document.createElement('img', undefined, 'weather-icon');
    iconEl.src = "https://openweathermap.org/img/wn/" + icon + ".png";

    const weatherContent = createComponent('article', undefined, 'weather-content');
    const weatherTypeEl = createComponent('p', main, 'weather-type');
    const weatherDescEl = createComponent('p', `(${description})`, 'weather-description');

    weatherContent.appendChild(weatherTypeEl);
    weatherContent.appendChild(weatherDescEl);

    cityData.appendChild(nameEl);
    cityData.appendChild(tempEl);
    cityData.appendChild(iconEl);
    cityData.appendChild(weatherContent);
    cityData.appendChild(humidityEl);
    cityData.appendChild(countryFlagEl);

    displayImage(name);
}

function createComponent(type, content, className) {
    let element = document.createElement(type);
    if (conten !== undefined) {
        element.textContent = content;
    }
    element.classList.add(className);

    return element;
}

function displayImage(name) {
    document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";
}

function clearInputField() {
    inputField.value = '';
}