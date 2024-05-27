import React from 'react'
import '../navbar/Topnavbar.css'
import bar from '../../assets/images/bar.svg'
import { NavLink } from 'react-router-dom'
export default function Topnavbar() {
    const links = ["Category","Products","Pages"]
  return (
    <div className='border'>
      <div className='topnavbar'>
      <div className='topnavbar__bar'>
        <img src={bar} alt="bar"/>
      </div>
      <div className='topnavbar__menu'>
        <ul className='menu'>
          <li><NavLink to={"/"}>Home</NavLink></li>
        {
                        links.map((value,index) =>{
                            return <li key={index}><a href="#">{value}</a></li>
                        })
                    }
             <li><NavLink to={"/admin"}>Admin</NavLink> </li>
             <li><NavLink to={"/register"}>Login</NavLink> </li>
        </ul>
      </div>
      <div className='topnavbar__number'>
        <p className='number'>+123 ( 456 ) ( 7890 )</p>
      </div>
    </div>
    </div>

  )
}
