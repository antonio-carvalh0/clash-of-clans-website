import React from 'react'
import war from '../../assets/war.jpg'
import './header.css'
const Header = () => {
  return (
    <div className='header' id='home'>
      <img src={war} alt='app__header__img'/>
      <h1 className='nowrap'> CLASH OF <span className='nowrap orange'>CLANS</span></h1>
      <h2 className='header__h1'> In the realm of <span className='nowrap orange'>Clash of Clans</span>, every battle tells a tale of strategy and strength</h2>
      <button type='button' className='custom__button nowrap'>play now</button>                
    </div>
  )
}

export default Header
