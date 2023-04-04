import React from 'react';
import Card from './Card';

export default function Cards({ tours, removeTour }) {
    return (
        <div className="tours-container">
            <h2 className="title">Plan With Me</h2>
            <div className='card-container'>
                {
                    tours.map((tour) => <Card key={tour.id} {...tour} removeTour={removeTour} />)
                }
            </div>
        </div>
    )
}
