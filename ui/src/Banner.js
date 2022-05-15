import React from 'react'
import poolImg from './assets/images/lounge/princesspool.JPG'
const Banner = () => {
  return (
    <div>
        <div style={{backgroundImage: `url(${poolImg})`,  backgroundSize: 'cover', width: '100%', height: '80vh'}}>
            <div class="slider-content slider-animated-2 text-center" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', color: 'white'}}>
                <h1 style={{marginTop: '5em', fontSize: '3em'}} class="animated">OUR POOL DECK</h1>
                <h3 class="animated">Fresh Heathy and Organic.</h3>
                <div class="slider-btn mt-90">
                    <a style={{color: 'white'}} class="animated" href="#product-details">Check it out</a>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Banner;