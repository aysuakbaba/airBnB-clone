import React from 'react'
import star from '../assets/Star 1.png'

function Card({img , rate , number , country , text , price , openSpots}) {
  return (
    <div className="card-item">
        {openSpots === 0 && <div className='card--badge'>SOLD OUT</div>}
        <img src={img} alt='swimmer'className='main--photo'></img>
        <div className='price'>
            <img src={star} alt='star' className='card--star'></img>
            <span>{rate}</span>
            <span className='grey'>({number})·</span>
            <span className='grey'>{country}</span>
        </div>
        <p>{text}</p>
        <p><span className='bold--price'>From ${price}</span> / person</p>
    </div>
  )
}

export default Card