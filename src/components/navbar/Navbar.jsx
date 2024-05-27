import React from 'react'
import '../navbar/Navbar.css'
import logo from '../../assets/images/logo.svg'
import side from '../../assets/images/side.png'
export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar__logo'><img src={logo} alt="logo"/></div>
      <div className='navbar__select'>
        <form action="" className='form'>
          <input type="text" placeholder='Search for items..' />
          <select name="All Categories"> 
          <option value="option1">All categories</option>
          <option value="option2">Phones</option>
          <option value="option3">Laptops</option>
          <option value="option4">TV</option>
          </select>
        </form>
        </div> 
      <div className='navbar__side'>
        <img src={side} alt="userlikecart" />
      </div>
    </div>
  )
}
