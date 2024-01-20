import React from "react";
import '../Styles/Climate.css';

const Climate = () => {
  return (
    <>
      <section  className="climate-comp">

        <div className="green-trees-img">
            <img src="./images/hero-shape-1.png" alt="" />
        </div>

        <div className="green-grass-img">
            <img src="./images/hero-shape-6.png" alt="" />
        </div>

        <div className="sun-img">
            <img src="./images/sun.png" alt="" />
        </div>

        <div className="brown-tree-img">
            <img src="./images/hero-shape-2.png" alt="" />
        </div>

        <div className="bird-img">
            <img src="./images/bird.png" alt="" />
        </div>
        
        <div className="common-container">
          <div className="climate-grid grid grid-two-col grid-gap">
            <div className="climate-info">
              <h2>What are climate stripes</h2>
              <p>
                Climate stripes, also known as climate barcodes or climate
                timelines, are a visual representation of global or regional
                temperature data over a period of time, typically decades or
                centuries. They were popularized by climate scientist Ed Hawkins
                and are used to communicate the long-term trends and variations
                in temperature.
              </p>

              <p>
                The concept behind climate stripes is simple yet powerful. Each
                stripe in the bar represents a single year's temperature, with
                colors indicating whether that year was warmer or cooler than
                the long-term average. Typically, shades of blue are used for
                cooler years, while shades of red are used for warmer years. The
                result is a visually striking and intuitive representation of
                temperature changes over time
              </p>
            </div>

            <div className="climate-img">
                <img src="./images/climate-img.png" alt="" />

                <h6 className="year-text">1910</h6>
                
                <h6 className="year-text2">2023</h6>
            </div>
            
          </div>
        </div>

       
        
      </section>
    </>
  );
};

export default Climate;
