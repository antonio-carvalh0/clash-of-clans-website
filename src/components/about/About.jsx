import React from 'react'
import './about.css'
import barb from '../../assets/barb2.webp'
import { IoLogoGooglePlaystore } from "react-icons/io5";


const About = () => {
  return (
    <div className='about' id='about'>
        <h1>AB<span className='orange'>O</span>UT</h1>
        <h2>Clash of Clans is a mobile strategy game where players build, upgrade, and defend their villages. The game involves training troops, engaging in battles, participating in Clan Wars, and progressing through various leagues. Regular updates and events keep the gameplay dynamic, making resource management and strategic planning essential for success</h2>
        <div className='about__container'>
            <img src={barb} />
            <button className='custom__button'>GET NOW</button>
            <IoLogoGooglePlaystore className='play_Store'/>
        </div>
    </div>
  )
}

export default About