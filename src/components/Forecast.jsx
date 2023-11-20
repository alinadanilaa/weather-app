import React from 'react'

function Forecast() {
    return (
        <div>
            <div className='flec items-center justify-center mt-6'>
                <p className='font-medium uppercase'>
                    Hourly Forecast
                </p>
            </div>
            <hr className='my-2' />
            <div className='flex-row items-center justify-between'>
                <div className='flex flex-col items-center justify-center'>
                    <p className='font-light text-sm'>
                        4:30 PM
                    </p>
                    <img src="./cloudy-night.png"
                        alt=""
                        className='w-12 my-1'
                    />

                </div>
            </div>
        </div>
    )
}

export default Forecast;