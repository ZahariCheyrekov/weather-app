const key = 'c4f1f083adf5cee8bef3c3c18743abdd';

const inputField = document.querySelector('.city-name');
const searchIcon = document.querySelector('.search-icon i');
const cityData = document.querySelector('.city-data');

let previousCity = '';

window.addEventListener("keypress", (ev) => {
    if (ev.key === "Enter") {
        ev.preventDefault();
        searchIcon.click();
    }
});

searchIcon.addEventListener('click', getData);

async function getData() {
    if (previousCity == inputField.value) {
        return;
    }

    if (inputField.value) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputField.value}&units=metric&appid=${key}`;
        previousCity = inputField.value;
        clearInputField();
        clearPrevCityData();

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

    const cityWeatherInfo = createComponent('article', undefined, 'city-weather-info');
    const cityWeatherDeg = createComponent('div', undefined, 'city-weather-deg');
    const nameEl = createComponent('h2', name, 'city-location');
    const tempEl = createComponent('h1', Math.round(Number(temp)) + " °C", 'city-temp');

    const iconEl = createComponent('img', undefined, 'weather-icon');
    iconEl.src = "https://openweathermap.org/img/wn/" + icon + ".png";

    const weatherContent = createComponent('article', undefined, 'weather-content');
    const weatherTypeEl = createComponent('p', main, 'weather-type');
    const weatherDescEl = createComponent('p', `(${description})`, 'weather-description');

    const humidityEl = createComponent('p', `Humidity: ${humidity}%`, 'city-humidity');

    const countryFlagEl = createComponent('img', undefined, 'country-flag-img');
    countryFlagEl.src = "https://countryflagsapi.com/png/" + country;

    cityWeatherDeg.appendChild(nameEl);
    cityWeatherDeg.appendChild(tempEl);

    cityWeatherInfo.appendChild(cityWeatherDeg);
    cityWeatherInfo.appendChild(iconEl);

    weatherContent.appendChild(weatherTypeEl);
    weatherContent.appendChild(weatherDescEl);

    cityData.appendChild(cityWeatherInfo);
    cityData.appendChild(weatherContent);
    cityData.appendChild(humidityEl);
    cityData.appendChild(countryFlagEl);

    displayImage(name);
}

function clearPrevCityData() {
    while (cityData.firstChild) {
        cityData.removeChild(cityData.firstChild);
    }
}

function createComponent(type, content, className) {
    let element = document.createElement(type);
    element.textContent = content;
    element.classList.add(className);

    return element;
}

function displayImage(name) {
    document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";
}

function clearInputField() {
    inputField.value = '';
}