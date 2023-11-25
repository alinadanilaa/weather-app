import React from 'react'
import {
    UilArrowUp,
    UilArrowDown,
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,

} from '@iconscout/react-unicons'
import { formatToLocalTime, iconUrlFromCode } from '../services/weatherService'

function TemperatureAndDetails({ weather: {
    speed, humidity, feels_like
} }) {
    return (
        <div>

            {/* <div className='flex font-light text-sm items-center justify-center'> */}

            <div className='flex flex-wrap items-center py-3'>
                <div className='flex items-center justify-center'>
                    <UilTemperature size={18} className='mr-1' />
                    Feels like:
                    <span className='font-medium px-2'>
                        {`${feels_like.toFixed()}°`}</span>

                    <p className='font-light px-2'>|</p>
                </div>
                <div className='flex items-center justify-center'>
                    <UilTear size={18} className='mr-1' />
                    Humidity:
                    <span className='font-medium ml-1'>
                        {`${humidity.toFixed()}%`}</span>
                    <p className='font-light px-2'>|</p>
                </div>
                <div className='flex items-center justify-center'>
                    <UilWind size={18} className='mr-1' />
                    Wind:
                    <span className='font-medium ml-1'>
                        {`${speed.toFixed()}km/h`}</span>
                </div>
            </div>
            {/* 
            <div className='flex flex-row items-center justify-center space-x-2 text-sm py-3'>
                < UilSun />
                <p className='font-light'>
                    Rise: <span className='font-medium ml-1'>
                        {formatToLocalTime(sunrise, timezone, 'hh:mm a')}</span>
                </p>
                <p className='font-light'>|</p>

                < UilSunset />
                <p className='font-light'>
                    Set: <span className='font-medium ml-1'>
                        {formatToLocalTime(sunset, timezone, 'hh:mm a')}</span>
                </p>
                <p className='font-light'>|</p>

                < UilArrowUp />
                <p className='font-light'>
                    High: <span className='font-medium ml-1'>
                        {`${temp_max.toFixed()}°`}</span>
                </p>
                <p className='font-light'>|</p>

                < UilArrowDown />
                <p className='font-light'>
                    Low: <span className='font-medium ml-1'>
                        {`${temp_min.toFixed()}°`} </span>
                </p>
                <p className='font-light'>|</p>

            </div> */}
        </div>
    )
}

export default TemperatureAndDetails