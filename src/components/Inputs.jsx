import React, { useState } from 'react';
import { UilSearch, UilMapMarker } from '@iconscout/react-unicons';

// function Inputs({ setQuery, units, setUnits, weather: { name, country } }) {
function Inputs({ setQuery, weather: { name, country } }) {
    const [city, setCity] = useState('');
    const [isClassNameActive, setClassNameActive] = useState(false);

    const handleSearchClick = () => {
        setClassNameActive((prevState) => !prevState);
        if (city !== '') {
            setQuery({ q: city })
            setCity('');
        }

    }
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearchClick();
        }
    };

    const handleLocationClick = () => {

        setClassNameActive(false);
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;

                setQuery({ lat, lon });
            })
        }
    }

    return (
        <>
            <div className='flex flex-row justify-between my-6'>
                <div className={isClassNameActive ? 'hidden' : 'flex items-center my-3'}>
                    <p className='text-xl font-medium'>{`${name}, ${country}`}</p>
                </div>
                <div className='flex items-center my-3'>
                    <input
                        value={city}
                        onKeyDown={handleKeyDown}
                        onChange={(e) => setCity(e.currentTarget.value)}
                        type="text"
                        placeholder='search city...'
                        className={isClassNameActive ? 'bg-white bg-opacity-20 rounded-2xl text-xl font-light p-2  shadow-xl focus:outline-none capitalize placeholder:lowercase placeholder:text-gray-400 ' : 'hidden'}
                    />
                </div>
                <div className='flex items-center'>

                    <UilSearch size={25}
                        className='m-4 cursor-pointer transition ease-out hover:scale-125'
                        onClick={handleSearchClick} />
                    <UilMapMarker size={25}
                        className='m-4 cursor-pointer transition ease-out hover:scale-125'
                        onClick={handleLocationClick} />
                </div>

            </div>
        </>
    )
}

export default Inputs;