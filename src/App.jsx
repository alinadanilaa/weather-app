import React, { useEffect, useState } from 'react';
import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react';
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs'
import TimeAndLocation from './components/TimeAndLocation'
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forecast from './components/Forecast.jsx';
import getFormattedWeatherData from './services/weatherService';


function App() {

  const [query, setQuery] = useState({ q: 'Bucharest' });
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then(
        (data) => {
          setWeather(data)
        });
    };
    fetchWeather();
  }, [query, units])


  const formatBackground = () => {
    if (!weather) return ' from-pink-200 to-purple-400';
    const treshold = units == 'metric' ? 20 : 60;
    if (weather.temp >= treshold) return ' from-pink-200 to-purple-400';

    return ' from-blue-300 to-purple-400';
  }


  return (
    <div className={`mx-auto max-w-screen-md mt-4 py-5 px-32
    bg-gradient-to-tr    h-fit shadow-xl shadow-gray-400
       ${formatBackground()}`}>
      <TopButtons setQuery={setQuery} />
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />


      {weather && (
        <div>
          <TimeAndLocation weather={weather} />
          <TemperatureAndDetails weather={weather} />

          <Forecast title="hourly forecast" items={weather.hourly} />
          <Forecast title="daily forecast" items={weather.daily} />
        </div>
      )}

    </div>
  );
}

export default App;
