import React, { useEffect, useState } from 'react';
import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react';
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs'
import TimeAndLocation from './components/TimeAndLocation'
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forecast from './components/Forecast.jsx';
import getFormattedWeatherData from './services/weatherService';
import Temperature from './components/Temperature.jsx';
import ProgressBar from './components/ProgressBar.jsx';

function App() {

  const [query, setQuery] = useState({ q: 'Bucharest' });
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);

  //The useEffect hook is a React hook that allows you to perform 
  //side effects (as data fetching, subscriptions, or manually changing the DOM) 
  //in your functional components.
  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then(
        (data) => {
          setWeather(data)
          //It updates the component's state, triggering a re-render of the component with the new weather data.
        });
    };
    fetchWeather();
  }, [query, units])
  // The dependency array at the end of the useEffect ([query, units]) specifies that 
  // the effect should run whenever the values of query or units change. This is a common 
  // practice to ensure that the effect is re-run when specific dependencies change.


  const formatBackground = () => {
    if (!weather) return ' from-pink-200 to-purple-400';
    const treshold = units == 'metric' ? 15 : 59;
    if (weather.temp >= treshold) return ' from-pink-200 to-purple-400';

    return ' from-blue-300 to-purple-400';
  }


  return (
    <div className={`mx-auto max-w-screen-md mt-4 py-5 px-10
    bg-gradient-to-tr h-fit shadow-xl shadow-gray-400 sm:my-0 sm:px-5
       ${formatBackground()}`}>
      <div >


        {weather && (
          <>
            <div>
              <Inputs setQuery={setQuery} weather={weather} />
              <Temperature units={units} setUnits={setUnits} weather={weather} />
              <TimeAndLocation weather={weather} />
              <TemperatureAndDetails weather={weather} />

              <Forecast title="hourly forecast" items={weather.hourly} />
              <Forecast title="daily forecast" items={weather.daily} />
            </div>
            <div>
              {/*<ProgressBar weather={weather} />
               <TopButtons setQuery={setQuery} /> */}
            </div>
          </>)}

      </div>



    </div>
  );
}

export default App;
