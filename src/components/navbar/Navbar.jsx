import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import { CiMenuFries } from "react-icons/ci";
import { RiMenuUnfoldLine } from "react-icons/ri";

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className='navbar'>
        <div className='navbar__logo'>
            <img src={logo} alt='navbar__logo' />
        </div>
        <ul className="navbar__links">
            <li><a href="#home">HOME</a></li>
            <li><a href="#townhall" className='nowrap'>TOWN HALL</a></li>
            <li><a href="#troops">TROOPS</a></li>
            <li><a href="#strategy">STRATEGY</a></li>
            <li><a href="#about">ABOUT</a></li>
        </ul>
        <div className='navbar__smallscreen'>
            <CiMenuFries className='smallscreen_menu' color="#fff" fontSize={27} onClick={() => setToggleMenu(true)}/>
            {toggleMenu && (
            <div className="navbar__smallscreen__overlay slide-bottom">
                <RiMenuUnfoldLine fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
                <ul className="smallscreen__links">
                    <li><a href="#home" onClick={() => setToggleMenu(false)}>HOME</a></li>
                    <li><a href="#townhall" onClick={() => setToggleMenu(false)}>TOWN HALL</a></li>
                    <li><a href="#troops" onClick={() => setToggleMenu(false)}>TROOPS</a></li>
                    <li><a href="#strategy" onClick={() => setToggleMenu(false)}>STRATEGY</a></li>
                    <li><a href="#about" onClick={() => setToggleMenu(false)}>ABOUT</a></li>
                </ul>
            </div>
        )}
        </div>

    </nav>
  )
}

export default Navbar