import React from 'react'
import '../NavBar/NavBar.css'
import logo from '../Assests/logo.svg'
import { IoSearch } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";
function NavBar() {
  return (
    <div className='NavBar-sec'>
      <div className='NavBar'>
        <div className='Nav-logo'>
        <img src={logo} alt='logo'/>
        </div>

        <div className='Nav-right-sec'>

        <div className='Nav-links'>
        <ul>
            <li><a href='#'>Top Selling</a></li>
            <li><a href='#'>Activities</a></li>
            <li><a href='#'>Burj Khalifa</a></li>
            <li><a href='#'>Desert Safari</a></li>
            <span className='line'></span>

        </ul>
        </div>
        <div className='Nav-btns'>
        <a href='#'>Login</a>
        <IoSearch className='search-icon'/>
        <FiShoppingBag className='shop-icon'/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
