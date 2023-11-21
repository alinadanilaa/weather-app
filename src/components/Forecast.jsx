import React from 'react'

function Forecast({ title }) {
    return (
        <div>
            <div className='flec items-center justify-center mt-6'>
                <p className='font-medium uppercase'>
                    {title}
                </p>
            </div>
            <hr className='my-2' />
            <div className=' flex flex-row items-center justify-between'>
                <div className=' bg-white bg-opacity-30 rounded-lg flex flex-col items-center justify-center'>
                    <p className='font-light text-sm'>
                        4:30 PM
                    </p>
                    <img src="./cloudy-night.png"
                        alt=""
                        className='w-12 my-1'
                    />
                    <p className='font-medium'>
                        22°
                    </p>
                </div>
                <div className=' bg-white bg-opacity-30 rounded-lg flex flex-col items-center justify-center'>
                    <p className='font-light text-sm'>
                        4:30 PM
                    </p>
                    <img src="./cloudy-night.png"
                        alt=""
                        className='w-12 my-1'
                    />
                    <p className='font-medium'>
                        22°
                    </p>
                </div>
                <div className=' bg-white bg-opacity-30 rounded-lg flex flex-col items-center justify-center'>
                    <p className='font-light text-sm'>
                        4:30 PM
                    </p>
                    <img src="./cloudy-night.png"
                        alt=""
                        className='w-12 my-1'
                    />
                    <p className='font-medium'>
                        22°
                    </p>
                </div>
                <div className=' bg-white bg-opacity-30 rounded-lg flex flex-col items-center justify-center'>
                    <p className='font-light text-sm'>
                        4:30 PM
                    </p>
                    <img src="./cloudy-night.png"
                        alt=""
                        className='w-12 my-1'
                    />
                    <p className='font-medium'>
                        22°
                    </p>
                </div>
                <div className=' bg-white bg-opacity-30 rounded-lg flex flex-col items-center justify-center'>
                    <p className='font-light text-sm'>
                        4:30 PM
                    </p>
                    <img src="./cloudy-night.png"
                        alt=""
                        className='w-12 my-1'
                    />
                    <p className='font-medium'>
                        22°
                    </p>
                </div>
                <div className=' bg-white bg-opacity-30 rounded-lg flex flex-col items-center justify-center'>
                    <p className='font-light text-sm'>
                        4:30 PM
                    </p>
                    <img src="./cloudy-night.png"
                        alt=""
                        className='w-12 my-1'
                    />
                    <p className='font-medium'>
                        22°
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Forecast;