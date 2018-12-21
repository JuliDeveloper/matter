import React from 'react';
import './Card.css';

function Card({sticker, title, cost}) {
    return <div className='card'>
        <div className='image'>
            <span className='sticker'>{sticker}</span>
        </div>
        <h4 className='card__title'>{title}</h4>
        <h5 className='cost'>{cost}</h5>
        <button className='button__hover'>quick view</button>
    </div>
}

export default Card;