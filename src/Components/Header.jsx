import React, { useState } from 'react'
import '../Styles/Header.css';

const Header = () => {
    const [nav, setNav] = useState(false);

    const listenScroll = () => {

        const scrollValue = document?.documentElement?.scrollTop;
        scrollValue > 400 ? setNav(true) : setNav(false);
        
    }
    
    
    window.addEventListener("scroll", listenScroll);
    // "header-comp"
  return (
    <>

    
    
      <header className={nav === true ? "header-comp sticky" : "header-comp"}>
        <div className="header-container">

            <div className="header-flex-bx">
                <div className="header-logo">
                    <img src="./images/nav-logo-2.png" className='light-logo' alt="" />
                    <img src="./images/nav-logo.png" className='dark-logo' alt="" />

                </div>

                <div className="navbar">
                    <nav className="nav">
                        <div className="nav-links">
                            <li><a href="#">Home</a></li>
                            <li className=''><a href="#about">About</a></li>
                            <li className='li-about li-serv-dropd-dwn'><a href="#">Ecosystem<i class="fa-solid fa-angle-down"></i></a>

                                <ul>
                                    <li><a href="#">Kabadpe</a></li>
                                    <li><a href="#">TGSS</a></li>
                                    <li><a href="#">Climconnect</a></li>

                                </ul>
                            
                            </li>
                            <li><a href="#imapct">Impact</a></li>
                            <li><a href="#contact">Contact</a></li>


                        </div>
                    </nav>
                </div>

            
                
            </div>
            
        </div>
      </header>
    </>
  )
}

export default Header
