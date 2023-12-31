import { DateTime } from "luxon";

const API_KEY = '1fa9ff4126d95b8db54f3897a208e91c'; //appid
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

//1fa9ff4126d95b8db54f3897a208e91c 
//8583588fef72b811558a7d7c4a41324a -- mine 

//https://api.openweathermap.org/data/2.5/onecall?lat=48.8534&lon=2.3488&exclude=current,minutely,hourly,alerts&appid=1fa9ff4126d95b8db54f3897a208e91c&units=metric

const getWeatherData = (infoType, searchParams) => {
    //  Constructs the URL for the OpenWeatherMap API, including the API key 
    //  and additional parameters, and fetches weather data using the 'fetch' function.
    const url = new URL(BASE_URL + "/" + infoType);
    url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });
    return fetch(url).then((res) => res.json());
};

const formatCurrentWeather = (data) => {
    // Extracts relevant information from the current weather data and returns a formatted object.
    const {
        coord: { lat, lon },
        main: { temp, feels_like, temp_min, temp_max, humidity },
        name,
        dt,
        sys: { country, sunrise, sunset },
        weather,
        wind: { speed },
    } = data;

    const { main: details, icon } = weather[0];

    return {
        lat,
        lon,
        temp,
        feels_like,
        temp_min,
        temp_max,
        humidity,
        name,
        dt,
        country,
        sunrise,
        sunset,
        details,
        icon,
        speed,
    };
};

const formatForecastWeather = (data) => {
    // Extracts relevant information from the forecast weather data, 
    // focusing on daily and hourly forecasts, and returns a formatted object.
    let { timezone, daily, hourly } = data;
    daily = daily.slice(1, 8).map((d) => {
        return {
            title: formatToLocalTime(d.dt, timezone, "ccc"),
            temp: d.temp.day,
            icon: d.weather[0].icon,
        };
    });

    hourly = hourly.slice(1, 20).map((d) => {
        return {
            title: formatToLocalTime(d.dt, timezone, "hh:mm a"),
            temp: d.temp,
            icon: d.weather[0].icon,
        };
    });

    return { timezone, daily, hourly };
};

const getFormattedWeatherData = async (searchParams) => {
    //contains asynchronous operations and may use await to pause execution until a promise is resolved

    // Combines current weather and forecast data by calling getWeatherData  for both "weather" and
    // "onecall" types, and then formats the results using formatCurrentWeather and formatForecastWeather

    const formattedCurrentWeather = await getWeatherData(
        "weather",
        searchParams
    ).then(formatCurrentWeather);

    const { lat, lon } = formattedCurrentWeather;

    //Similar to the current weather, this code fetches forecast 
    // weather data from the OpenWeatherMap API using the "onecall" endpoint.
    const formattedForecastWeather = await getWeatherData("onecall", {
        lat,
        lon,
        exclude: "current,minutely,alerts",
        units: searchParams.units,
    }).then(formatForecastWeather);

    return { ...formattedCurrentWeather, ...formattedForecastWeather };
};

const formatToLocalTime = (
    // Converts a timestamp in seconds to a local time string, 
    // considering the provided timezone and format.
    secs,
    zone,
    format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);


const iconUrlFromCode = (code) =>
    `http://openweathermap.org/img/wn/${code}@2x.png`;
// Generates the URL for an OpenWeatherMap weather icon based on the provided code.

export default getFormattedWeatherData;

export { formatToLocalTime, iconUrlFromCode };
