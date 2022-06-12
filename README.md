# Weather-App

I will be really happy if you check out the project from the given link and tell me more about what you think: https://zaharicheyrekov.github.io/Weather-App/

# About this project

This is a weather application which tells you what is the weather in the given city. It gives you more information about the temperature, type of the weather, humidity (in percents) and the country in which the specific destination is located.

# API

It turns out that API is such a useful thing. So this is my first project in which I use an API.

## OpenWeatherMap

OpenWeatherMap is the first thing that I used to get the work done. It is an online service, owned by OpenWeather Ltd, that provides global weather data via API, including current weather data, forecasts, nowcasts and historical weather data for any geographical location. The company provides a minute-by-minute hyperlocal precipitation forecast for any location.

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

The other cool thing about OpenWeatherMap is that they also give you the ability to get an weather icon from the weather section of the above json file. To be more clear, it gives you code for the icon.
`https://openweathermap.org/img/wn/${icon}.png`
