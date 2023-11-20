import React from 'react';
import { UilSearch, UilMapMarker } from '@iconscout/react-unicons';

function Inputs() {
    return (
        <div className='flex flex-row justify-center my-6'>
            <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>

                <input type="text"
                    placeholder='search city...'
                    className='bg-pink-50 bg-opacity-20 rounded-2xl text-xl font-light p-2 w-full shadow-xl 
                    focus:outline-none capitalize placeholder:lowercase placeholder:text-gray-400 '
                />
                <UilMapMarker size={25} className='cursor-pointer transition ease-out hover:scale-125' />
                <UilSearch size={25} className='cursor-pointer transition ease-out hover:scale-125' />
            </div>

            <div className='flex flex-row w-1/4 items-center justify-center'>
                <button name='metric' className='text-xl font-light'>
                    °C
                </button>
                <p className='text-xl mx-1'>|</p>
                <button name='imperial' className='text-xl font-light'>
                    °F
                </button>
            </div>
        </div>
    )
}

export default Inputs;