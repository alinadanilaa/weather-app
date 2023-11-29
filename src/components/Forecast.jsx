import React from 'react'
// import { iconUrlFromCode } from '../services/weatherService';
import { useState } from 'react';
import { UilAngleLeftB, UilAngleRightB } from '@iconscout/react-unicons'

function Forecast({ title, items }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => Math.min(items.length - 4, prevIndex + 1));
    };

    const showPrevButton = currentIndex > 0;
    const showNextButton = currentIndex + 4 < items.length;
    return (
        <div>
            <div className='flec items-center justify-center mt-6'>
                <p className='font-medium uppercase'>
                    {title}
                </p>
            </div>
            <hr className='my-2' />

            <div className='flex flex-row items-center justify-center'>
                {showPrevButton && <button onClick={handlePrevClick} className='transition ease-out hover:scale-125'>
                    <UilAngleLeftB size={30} /></button>}

                <div className='flex flex-row items-center justify-between '>
                    {items.slice(currentIndex, currentIndex + 4).map((item, index) => (
                        <div key={index}
                            className='p-3 mx-6 bg-white bg-opacity-30 rounded-lg flex 
                            flex-col items-center justify-between
                            sm:mx-3'>
                            <p className='font-medium'>
                                {`${item.temp.toFixed()}°`}
                            </p>
                            <img /*src={iconUrlFromCode(item.icon)}*/
                                src={`./icons/${item.icon}.png`}
                                alt="icon" className='w-16  my-1' />
                            <p className='font-light text-sm text-center'>{item.title}</p>
                        </div>
                    ))}
                </div>
                {showNextButton && <button onClick={handleNextClick} className='transition ease-out hover:scale-125'>
                    <UilAngleRightB size={30} /></button>}
            </div>

        </div >
    )
}

export default Forecast;