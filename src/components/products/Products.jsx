import React from 'react'
import '../products/Products.css'
function Products() {
  return (
    <div>
       <div className='cards'>
      <div className='card1'>
         <p className='cards__text'>Everyday Fresh &  <br />Clean with Our Products</p>
         <button className='cards__button'>Shop Now</button>
      </div>
      <div className='card2'>
         <p className='cards__text'>Make your Breakfast <br />Healthy and Easy</p>
         <button className='cards__button'>Shop Now</button>
      </div>
      <div className='card3'>
         <p className='cards__text'>The best Organic <br />Products Online</p>
         <button className='cards__button'>Shop Now</button>
      </div>
    </div>
    </div>
  )
}

export default Products
