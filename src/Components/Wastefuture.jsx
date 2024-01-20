import React from "react";
import "../Styles/Wastefuture.css";

const Wastefuture = () => {
  return (
    <>
      <section className="zero-waste-future-comp">
        <div className="common-container">
          <div className="comn-heading">
            <h2>We are committed to a zero-waste future.</h2>
          </div>

          <div className="z-w-f-grid grid grid-three-col grid-gap">

            <div className="z-w-f-bx">
            <div className="z-w-f-main-det">
                
                <div className="z-w-f-img">
                <div className="z-icon">
                    <img src="./images/recycle-sign.png" alt="" />
                </div>
                </div>
                <div className="z-w-f-det-bx">
                    <h4>Recycling and upcycling</h4>
                    <button className="comn-btn z-w-f-btn">
                    Kabadpe
                    </button>
                </div>
                </div>
            </div>

            <div className="z-w-f-bx">
                <div className="z-w-f-main-det">
                <div className="z-w-f-img">
                <div className="z-icon">
                    <img src="./images/shopping-bag.png" alt="" />
                    </div>
                </div>
                <div className="z-w-f-det-bx">
                    <h4>Eco-friendly products and Packaging</h4>
                    <button className="comn-btn z-w-f-btn">
                    the green saman shop
                    </button>
                </div>
                </div>
            </div>

            <div className="z-w-f-bx">
                <div className="z-w-f-main-det">
                <div className="z-w-f-img">
                    <div className="z-icon">
                    <img src="./images/promotion.png" alt="" />
                    </div>
                </div>
                <div className="z-w-f-det-bx">
                    <h4>Connect with other climate enthusiast and fundraise</h4>
                    <button className="comn-btn z-w-f-btn">
                    climconnect
                    </button>
                </div>
                </div>
            </div>
            
          </div>
          
        </div>
      </section>
    </>
  );
};

export default Wastefuture;
