import React from 'react'
import img2 from './img2.jpeg'
import './Slider.css'

function Slider() {
  return (
    <div className='sliderContainer'>
      <img src={img2} alt='img' class='imgg' />
      <div className='row pt-5 pb-5 container1 '>
        <div className='col-sm-12 col-md-4 col-lg-4 div1'>
          
          <div className='divIcons'>
            <ion-icon name="cart"></ion-icon>
            <p className='text-center divP'>Variedad de productos</p>
          </div>
        </div>

        <div className='col-sm-12 col-md-4 col-lg-4 div1'>
          <div className='divIcons'>
            <ion-icon name="logo-usd"></ion-icon>
            <p className='text-center divP'>El mejor precio del mercado</p>
          </div>
        </div>

        <div className='col-sm-12 col-md-4 col-lg-4 div1'>
          <div className='divIcons'>
            <ion-icon name="call"></ion-icon>
            <p className='text-center divP'>Atención personalizada</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Slider