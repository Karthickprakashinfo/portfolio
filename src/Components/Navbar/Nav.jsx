import React from 'react'
import Menu from '../Assets/menu.png'
import './Nav.css'

function Nav() {
  return (
    <div>
         <header>
        <a href='#Home' className='logo'>Developer<span>KP.</span></a>
            <div className="bc bx-menu" id="menu-icon">
            <img src={Menu} alt='no img'/>
         </div>   
        <ul className="navlist">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="top-btm">
            <a href="#contact" className="h-btn">Contact me</a>
        </div>       
        </header>
    </div>
  )
}

export default Nav