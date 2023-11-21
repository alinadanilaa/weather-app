import React from 'react'
import { formatToLocalTime } from '../services/weatherService'

function TimeAndLocation({ weather: { dt, timezone, name, country } }) {
    return (
        <div>
            <div className='flex items-center justify-center my-3'>
                <p className='text-4xl font-medium'>{`${name}, ${country}`}</p>

            </div>
            <div className='flex flex-col items-center justify-center my-6'>
                {formatToLocalTime(dt, timezone)}
                {/* <p className=' text-2xl font-extralight'>
                    14th Nov '23
                </p>
                <p className=' text-xl font-extralight'>
                    Tuesday | 12:45 PM
                </p> */}
            </div>
        </div >
    )
}

export default TimeAndLocation