import React from 'react'
import { formatToLocalTime } from '../services/weatherService'
import { DateTime } from "luxon";

function TimeAndLocation({ weather: { dt, timezone, name, country } }) {
    return (
        <div>
            {/* <div className='flex items-center justify-center my-3'>
                <p className='text-4xl font-medium'>{`${name}, ${country}`}</p>

            </div> */}
            <div className='flex flex-col my-6'>
                {/* {formatToLocalTime(dt, timezone)} */}
                <div>
                    <p className='text-2xl font-extralight'>
                        {DateTime.fromSeconds(dt).setZone(timezone).toFormat(" dd LLL yyyy")}
                    </p>
                    <p className='text-xl font-extralight'>
                        {DateTime.fromSeconds(dt).setZone(timezone).toFormat("cccc | hh:mm a")}
                    </p>
                </div>
            </div>
        </div >
    )
}

export default TimeAndLocation