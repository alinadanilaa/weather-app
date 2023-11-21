import React from 'react'
import { iconUrlFromCode } from '../services/weatherService';

function Forecast({ title, items }) {
    return (
        <div>
            <div className='flec items-center justify-center mt-6'>
                <p className='font-medium uppercase'>
                    {title}
                </p>
            </div>
            <hr className='my-2' />
            <div className=' flex flex-row items-center justify-between'>

                {items.map((item) => (
                    <div className=' bg-white bg-opacity-30 rounded-lg flex flex-col items-center justify-center' >
                        <p className='font-light text-sm'>
                            {item.title}
                        </p>
                        <img src={iconUrlFromCode(item.icon)}
                            alt="icon"
                            className='w-12 my-1'
                        />
                        <p className='font-medium'>
                            {`${item.temp.toFixed()}°`}
                        </p>
                    </div>
                ))}


            </div>
        </div >
    )
}

export default Forecast;