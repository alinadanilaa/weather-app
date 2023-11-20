import React, { useState } from 'react';
import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react';
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs'
import TimeAndLocation from './components/TimeAndLocation'
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forecast from './components/Forecast.jsx';


function App() {


  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32
    bg-gradient-to-tr from-pink-200 to-purple-400 
    h-fit shadow-xl shadow-gray-400">
      <TopButtons />
      <Inputs />

      <TimeAndLocation />
      <TemperatureAndDetails />
      <Forecast />
    </div>
  );
}

export default App;
