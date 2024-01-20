import React from "react";
import "../Styles/Mobile.css";

const Mobile = () => {
  return (
    <>
      <section className="mobile-comp">
        <div className="blur-bx"></div>
        <div className="common-container mobile-container">
          <div className="mobile-grid grid grid-two-col grid-gap">
            <div className="left-mobile-info-bx">
              <h2>Let’s Build Amazing Mobile Apps Together</h2>
              <p>
                Sit amet consectetur adipiscing elit, sed do eiusmod tempor
                idunte ut labore et dolore magna aliqua. Quis ipsum suspendisse
                ultrices gravida. Risus commodo viverra maecenas accumsan
              </p>

              <div className="mob-btns-flex">

                <button className="mob-btn comn-btn hero-btn">
                    Apple Store
                <i class="fa-brands fa-apple"></i>
                </button>
                
                <button className="mob-btn2 comn-btn hero-btn">
                    Goole Play
                    <i class="fa-brands fa-google-play"></i>
                </button>
              </div>
              
            </div>

            <div className="mobile-img">
                <img src="./images/mob-img.png" alt="" />
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Mobile;
