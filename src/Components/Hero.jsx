import React, { useState } from 'react'
import '../Styles/Hero.css';

const Hero = () => {

    
  return (
    <>
      <section className="hero-comp">

        <div className="video">
            <video autoPlay loop muted plays-inline>
                <source  src='../video/earth-rotate.mp4'/>
            </video>
        </div>
        
        <div className="common-container2 home-container">

            <div className="home-grid grid grid-two-col grid-gap">

                <div className="left-home-info-bx">
                    <h5>#bringback<span>blue</span> </h5>
                    <h1>Climate is getting <span>Warmer</span></h1>

                    <div className="home-btns-flex-bx">

                        <button className="comn-btn hero-btn">
                            Recycle
                        </button>

                        <button className="comn-btn comn-btn3 hero-btn2">
                            Shop green
                        </button>
                        
                    </div>
                    
                </div>

                <div className="clim-img-bx">

                    <div className="clim-img">
                        <img src="./images/globa-img.png" alt="" />

                        <div className="climate-text-bx">
                            <h6>Climate</h6>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis recusandae obcaecati exercitationem error rerum, natus nesciunt magnam deserunt debitis maiores.</p>
                        </div>
                        
                    </div>
                    
                </div>
                
            </div>
            
        </div>
      </section>
    </>
  )
}

   {/* <div className="home-img">
                        <img src="./images/girl-img.png" alt="" />
                    </div> */}

export default Hero
