import React from 'react'
import { MdShoppingCart } from "react-icons/md";
import { AiOutlineWhatsApp } from "react-icons/ai";

import './header.css'

const Header = () => {
  return (
    <div>
      <nav className='nav-container'>
        <ul className='nav-links'>
          <li><a href='home'>Home</a></li>
          <li><a href='order'>Order</a></li>
          <li><a href='food'>Food</a></li>
          <li><a href='restaurant'>Restaurant</a></li>
          <li><a href='testimonials'>Testimonials</a></li>
          <li><a href='contactus'>Contact Us</a></li>
        </ul>
        <div className='icon-container'>
          <MdShoppingCart />
          <AiOutlineWhatsApp />
        </div>
      </nav>
    </div>
  )
}

export default Header
