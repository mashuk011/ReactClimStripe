import React from 'react'
import { NavLink } from 'react-router-dom'

const TopHeader = () => {
  return (
    <>

    <section className="top-header-comp">
        <div className="header-container">

           <div className="top-header-flex-bx">

            <div className="left-topheader-links-flex-bx">

                <li className='tp-hedr-link tplinkactive'> <NavLink to="#">Climstripe Shift</NavLink> </li>
                <li> <NavLink to="#">KabadPe</NavLink> </li>
                <li> <NavLink to="#">The Green Saman Shop</NavLink> </li>
                <li> <NavLink to="#">Climconnect</NavLink> </li>

                
            </div>


            <div className="right-top-header-flex-bx">

                <button className="download-btn">
                    <img src="/images/app-bg.png" alt="" />
                </button>

                <button className="download-btn">
                    <img src="/images/app-bg-2.png" alt="" />
                </button>

                <span>Download App</span>
                
            </div>
            
            
           </div>
            
        </div>
    </section>
      
    </>
  )
}

export default TopHeader
