import { DateTime } from "luxon";

const API_KEY = '8583588fef72b811558a7d7c4a41324a'; //appid
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

const getWeatherData = async (infoType, searchParams) => {
    try {
        const url = new URL(BASE_URL + "/" + infoType);
        url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

        const res = await fetch(url);
        if (!res.ok) throw new Error(`API request failed: ${res.statusText}`);

        return await res.json();
    } catch (error) {
        console.error("Fetch error:", error);
        return null;
    }
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
    if (!data || !data.list) {
        console.error("No forecast data received");
        return { timezone: null, daily: [], hourly: [] };
    }

    const { city, list } = data;
    const timezone = city.timezone || "UTC";

    // Group data into daily forecasts
    const daily = list.filter((item) => item.dt_txt.includes("12:00:00")).map((d) => ({
        title: formatToLocalTime(d.dt, timezone, "ccc"),
        temp: d.main.temp,
        icon: d.weather[0].icon,
    }));

    // Extract hourly forecasts for next 24 hours
    const hourly = list.slice(0, 8).map((d) => ({
        title: formatToLocalTime(d.dt, timezone, "hh:mm a"),
        temp: d.main.temp,
        icon: d.weather[0].icon,
    }));

    return { timezone, daily, hourly };
};


const getFormattedWeatherData = async (searchParams) => {
    // Fetch current weather
    const formattedCurrentWeather = await getWeatherData("weather", searchParams).then(formatCurrentWeather);

    const { lat, lon } = formattedCurrentWeather;

    // Fetch 5-day forecast instead of One Call API
    const formattedForecastWeather = await getWeatherData("forecast", {
        lat,
        lon,
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
