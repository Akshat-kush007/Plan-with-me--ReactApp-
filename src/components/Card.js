import React, { useState } from 'react'

export default function Card({ id, name, info, image, price, removeTour }) {
    const [showMore, toggleShowMore] = useState(false);
    const description = showMore ? info : info.substring(0, 200);

    function toggleShowMoreHandler() {
        toggleShowMore(!showMore);
    }
    return (
        <div className='card'>
            <img className='image' src={image} alt={name} />
            <hr />
            <div className="tour-info">
                <div className="tour-details">
                    <div className="tour-price">{`₹  ${price}`}</div>
                    <div className="tour-name">{name}</div>
                </div>
                <p className="description">
                    {description}
                    <span onClick={toggleShowMoreHandler} className="show-more">{showMore ? '...Show Less' : '...Show More'}</span>
                </p>
            </div>
            <button onClick={() => { removeTour(id) }} className='notIntrested-btn' >Not Intrested</button>
        </div>
    )
}
