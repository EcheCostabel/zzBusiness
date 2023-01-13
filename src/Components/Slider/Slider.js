import React from 'react'
import img2 from './img2.jpeg'
import {UilShoppingCartAlt} from '@iconscout/react-unicons'
import './Slider.css'

function Slider() {
  return (
    <div className='sliderContainer'>
      <img src={img2} alt='img' class='imgg' />
      <div className='pt-5 pb-5 container1'>
        <div className='col-xs-12 col-md-4 col-lg-4 div1'>
          {/* <UilShoppingCartAlt/> */}
        </div>
        <div className='col-xs-12 col-md-4 col-lg-4 div1'>B</div>
        <div className='col-xs-12 col-md-4 col-lg-4 div1'>C</div>
      </div>
    </div>

  )
}

export default Slider