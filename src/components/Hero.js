import React from 'react'
import photo from '../assets/Group 77.png'

function Hero() {
  return (
    <div className='hero'>
        <img src={photo} alt='group' className='hero--photo'></img>
        <div>
        <h1 className='hero--header'>Online Experiences</h1>
        <p className='hero--text'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    </div>
  )
}

export default Hero