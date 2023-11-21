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




  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32
    bg-gradient-to-tr from-pink-200 to-purple-400 
    h-fit shadow-xl shadow-gray-400">
      <TopButtons />
      <Inputs />


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
