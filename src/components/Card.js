import React from 'react'
import star from '../assets/Star 1.png'

function Card(props) {
  return (
    <div className="card-item">
        <img src={props.img} alt='swimmer'className='main--photo'></img>
        <div className='price'>
            <img src={star} alt='star' className='card--star'></img>
            <span>{props.rate}</span>
            <span className='grey'>({props.number})·</span>
            <span className='grey'>{props.country}</span>
        </div>
        <p>{props.text}</p>
        <p><span className='bold--price'>From ${props.price}</span> / person</p>
    </div>
  )
}

export default Card