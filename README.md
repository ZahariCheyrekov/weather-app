# Weather-App

I will be really happy if you check out the project from the given link and tell me more about what you think: https://zaharicheyrekov.github.io/weather-app/

# About this project

This is a weather application which tells you what is the weather in the given city. It gives you more information about the temperature, type of the weather, humidity (in percents) and the country in which the specific destination is located.

# API

It turns out that API is such a useful thing. So this is my first project in which I use an API.

## OpenWeather

OpenWeather is the first thing that I used to get the work done. It is an online service, owned by OpenWeather Ltd, that provides global weather data via API, including current weather data, forecasts, nowcasts and historical weather data for any geographical location. The company provides a minute-by-minute hyperlocal precipitation forecast for any location.

This is what data can you get by simply entering the destination you want:

```json
{
    "coord": {
        "lon": 23.3242,
        "lat": 42.6975
    },
    "weather": [
        {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 16.83,
        "feels_like": 16.87,
        "temp_min": 16.83,
        "temp_max": 17.25,
        "pressure": 1014,
        "humidity": 88
    },
    "visibility": 10000,
    "wind": {
        "speed": 3.6,
        "deg": 280
    },
    "clouds": {
        "all": 100
    },
    "dt": 1655017038,
    "sys": {
        "type": 1,
        "id": 6366,
        "country": "BG",
        "sunrise": 1655002099,
        "sunset": 1655057093
    },
    "timezone": 10800,
    "id": 727011,
    "name": "Sofia",
    "cod": 200
}
``` 
The link looks like this: `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`

The other cool thing about OpenWeather is that they also give you the ability to get a weather icon from the weather section of the above json file. To be more clear, it gives you code for the icon.
`https://openweathermap.org/img/wn/${icon}.png`

You can learn more about here: https://openweathermap.org/.

## Country Flags API

The next API used is Country Flags API. Country Flags API is an API designed to save developers time from having to download hundreds of flags and handling different cases for identifying how to get a certain country's flag (by name or by code).

I get the country name from the OpenWeather json file and give it to Country Flags API. Then I store the information in img tag and add it to the html.
`https://countryflagsapi.com/png/${country}`

You can learn more about here: https://www.countryflagsapi.com/.

## Unsplash

The other cool thing wich I implemented is using background images from Unsplash. Unsplash is a platform that has gifted hundreds of thousands of their own photos to fuel creativity around the world.

It is really simple. You just enter the desired location and when you click search icon or enter button the Unsplash is searching for an image which was taken from the same place and it gives it to you.
`https://source.unsplash.com/1600x900/${name}`

You can learn more about here: https://unsplash.com/.

# Summary

This is an applications which gives you information about the weather from the desired destination.

### Tools used in this project: 

- <a href="https://openweathermap.org/">OpenWeatherMap</a>
- <a href="https://countryflagsapi.com/">Country Flags API</a>
- <a href="https://unsplash.com/">Unsplash</a>
- <a href="https://www.postman.com/">Postman</a>
- <a href="https://fonts.google.com/">Google Fonts</a>
- <a href="https://fontawesome.com/">Font Awesome</a>

# Images

### Computer search

![weather-app-base](https://user-images.githubusercontent.com/95768526/173223311-d101ce58-1ffe-40b3-9324-7dc5f3036da2.png)

### Computer location

![weather-app-computer-search](https://user-images.githubusercontent.com/95768526/173223380-67defa3e-95af-4b05-a849-db24427dd3a5.png)

### Mobile search

![weather-app-mobile](https://user-images.githubusercontent.com/95768526/173223531-2c203036-2e91-4f26-b09a-0a31fb37b027.png)

### Mobile location

![weather-app-mobile](https://user-images.githubusercontent.com/95768526/173223489-a65bcc00-8d3f-42ec-a05b-2bc3bdc55057.png)
