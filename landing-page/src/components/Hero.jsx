import React from 'react'
import hero from '../assets/hero.png'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-text">
        <h1 className="hero-title">Hi there </h1>
        <span>I'm web developer</span>
        <p className="hero-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed odio inventore, 
        obcaecati eos cupiditate iure tempora quae neque quis debitis.</p>
        <button className="hero-btn">let's talk</button>
      </div>
      <div className="hero-img">
        <img src={hero} className='img1' alt='hero' />
      </div>
    </div>
  )
}

export default Hero