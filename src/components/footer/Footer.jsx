import React from 'react'
import '../footer/Footer.css'
import logo from '../../assets/images/logo.svg'
import facebook from '../../assets/images/facebook.svg'
import ball from '../../assets/images/ball.svg'
import twitter from '../../assets/images/twitter.svg'
import insta from '../../assets/images/insta.svg'
import type1 from  '../../assets/images/type.jpg'
function Footer() {
    const links = ["About us","Delivery Information","Privacy Policy","Term & Conditions","Contact Us","Support Center"]
    const links2 = ["Dairy&Bakery","Fruits&Vegatables","Snacjs&Spices","Juice&Drinks","Chicken&Meat","Fast Food"]
  return (
    <div className='footer'>
      <div className='footer__cards'>
        <div className='footer__card1'>
            <img src={logo} alt="logo" />
            <p className='footer__text'> FoodTrove is the biggest market of grocery products. Get your daily needs from our store.</p>
            <p className='footer__text'>51 Green St.Huntington ohaio beach ontario, NY 11746 KY 4783, USA.</p>
            <p className='footer__text'>example@email.com</p>
            <p className='footer__text'>+91 123 4567890</p>
        </div>
        <div className='footer__card2'>
             <p className='footer__title'>Contact Us</p>
             {
                        links.map((value,index) =>{
                            return <li key={index}><a className="footer__text" href="#">{value}</a></li>
                        })
                    }
        </div>
        <div className='footer__card3'>
             <p className='footer__title'>Category</p>
             {
                        links2.map((value,index) =>{
                            return <li key={index}><a className="footer__text" href="#">{value}</a></li>
                        })
                    }
        </div>
        <div className='footer__card4'>
            <p className='footer__title'>Subscribe Our Newsletter</p>
            <input className='input' type="text" placeholder='Search Here' />
            <div className='icons'>
          <img src={facebook} alt="facebok" />
          <img src={ball} alt="ball" />
          <img src={twitter} alt="twitter" />
          <img src={insta} alt="instagram" />
            </div>
            <img src={type1} alt="imgs"/>
        </div>
      </div>
      <p className='footer__title1'>2024 <span className='footer__span'>FoodTrove, </span>All rights reserved.</p>
    </div>
  )
}

export default Footer
