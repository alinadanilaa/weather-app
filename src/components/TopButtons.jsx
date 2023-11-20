import React from 'react'

function TopButtons() {

    const cities = [
        {
            id: 1,
            title: 'Bucharest'
        },
        {
            id: 2,
            title: 'London'
        },
        {
            id: 3,
            title: 'Madrid'
        },
        {
            id: 4,
            title: 'Tokyo'
        },
        {
            id: 5,
            title: 'Amsterdam'
        },
    ]


    return (
        <div className="flex items-center justify-around my-6">
            {cities.map((city) => (
                <button key={city.id} className=" text-lg font-medium">
                    {city.title}
                </button>
            ))}

        </div>
    );
}

export default TopButtons;