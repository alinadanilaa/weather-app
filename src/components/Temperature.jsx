import React from 'react'

import { iconUrlFromCode } from '../services/weatherService'


function Temperature({ units, setUnits, weather: {
    details, icon, temp,
} }) {

    const handleunitsChange = (e) => {
        const selectedUnit = e.currentTarget.name; //metric or imperial

        if (units !== selectedUnit) setUnits(selectedUnit);
    }
    return (
        <>
            <div className='flex items-center  justify-between'>
                <div className='flex-row  text-lg items-center justify-center'>
                    <p className='flex items-center'>

                        <img
                            src={`./icons/${icon}.png`}
                            alt="icon"
                            className='w-24 mr-5' /> {/*{details}*/}
                    </p>
                </div>
                <div className='flex max-w-fit items-center bg-white bg-opacity-20 rounded-2xl'>
                    <button name='metric'
                        className={`${units === 'metric' ? 'bg-white bg-opacity-40 rounded-2xl' : ''} text-xl font-light p-2 transition ease-out hover:scale-125 `}
                        onClick={handleunitsChange}>
                        °C
                    </button>
                    <button name='imperial'
                        className={`${units === 'imperial' ? 'bg-white bg-opacity-40 rounded-2xl' : ''} text-xl font-light p-2 transition ease-out hover:scale-125 `}
                        onClick={handleunitsChange}>
                        °F
                    </button>
                </div>
            </div>
            <div className='flex items-center justify-between py-3' >

                <p className='flex align-start text-8xl font-thin items-center' style={{ alignItems: 'flex-start' }}>
                    {`${temp.toFixed()}`}
                    <span className='text-4xl'> °</span>
                </p>
            </div>

        </>
    )
}

export default Temperature