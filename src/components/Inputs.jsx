import React, { useState } from 'react';
import { UilSearch, UilMapMarker } from '@iconscout/react-unicons';

function Inputs({ setQuery, units, setUnits }) {
    const [city, setCity] = useState('');
    const handleSearchClick = () => {
        if (city !== '') setQuery({ q: city })
    }

    const handleLocationClick = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;

                setQuery({ lat, lon });
            })
        }
    }

    const handleunitsChange = (e) => {
        const selectedUnit = e.currentTarget.name; //metric or imperial

        if (units !== selectedUnit) setUnits(selectedUnit);
    }

    return (
        <div className='flex flex-row justify-center my-6'>
            <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>

                <input
                    value={city}
                    onChange={(e) => setCity(e.currentTarget.value)}
                    type="text"
                    placeholder='search city...'
                    className='bg-white bg-opacity-20 rounded-2xl text-xl font-light p-2 w-full shadow-xl 
                    focus:outline-none capitalize placeholder:lowercase placeholder:text-gray-400 '
                />
                <UilMapMarker size={25}
                    className='cursor-pointer transition ease-out hover:scale-125'
                    onClick={handleLocationClick} />
                <UilSearch size={25}
                    className='cursor-pointer transition ease-out hover:scale-125'
                    onClick={handleSearchClick} />
            </div>

            <div className='flex flex-row w-1/4 items-center justify-center'>
                <button name='metric'
                    className='text-xl font-light transition ease-out hover:scale-125'
                    onClick={handleunitsChange}>
                    °C
                </button>
                <p className='text-xl mx-1'>|</p>
                <button name='imperial'
                    className='text-xl font-light transition ease-out hover:scale-125'
                    onClick={handleunitsChange}>
                    °F
                </button>
            </div>
        </div>
    )
}

export default Inputs;