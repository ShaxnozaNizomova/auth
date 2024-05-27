import React from 'react'
import "./Admin.css"
import {  Outlet } from 'react-router-dom'
import admin from '../../assets/images/admin.jpg'
import admin2 from '../../assets/images/admin2.jpg'
const Admin = () => {
  return (
    <div className='admin'>
        <div className="admin__left">
              <h4 className='Admin__title'>Admin panel</h4>
              <p className='footer__text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, recusandae
necessitatibus quasi incidunt alias adipisci pariatur earum iure beatae assumenda
rerum quod. Tempora magni autem a voluptatibus neque.</p>
<p className='footer__text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, recusandae
necessitatibus quasi incidunt alias adipisci pariatur earum iure beatae assumenda
rerum quod. Tempora magni autem a voluptatibus neque.</p>
<p className='footer__text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, recusandae
necessitatibus quasi incidunt alias adipisci pariatur earum iure beatae assumenda
rerum quod. Tempora magni autem a voluptatibus neque.</p>
<img src={admin2} alt="" />
        </div>
        <div className="admin__right">
           <img src={admin} alt="" />
        </div>
   <Outlet/>
    </div>
  )
}

export default Admin