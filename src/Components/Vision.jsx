import React, { useState } from "react";
import "../Styles/Vision.css";
import '../Styles/Team.css'

const Vision = () => {
  const [tabs, setTabs] = useState(1);

  const tabFunction = (index) => {
    setTabs(index);
  };

  return (
    <>
      <section id="about" className="vision-comp">
        <div className="common-container">
          <div className="common-heading vision-heading team-heading">
            <span>Know</span>
            <h2>About Us</h2>
          </div>

          <div className="vision-tabs-main-bx">
            <div className="tab-btns-flex-bx">
              <button onClick={() => tabFunction(1)} className={tabs === 1 ?  "tab-btn-bx tabbtnactive" : "tab-btn-bx"}>
                  <div className="tab-btn-icon">
                    <img src="./images/tab-btn-1.png" alt="" />
                  </div>
                Who We Are
              </button>

              <button onClick={() => tabFunction(2)} className={tabs === 2 ?  "tab-btn-bx tabbtnactive" : "tab-btn-bx"}>
                  <div className="tab-btn-icon">
                    <img src="./images/tab-btn-2.png" alt="" />
                  </div>
                Vision
              </button>

              <button onClick={() => tabFunction(3)} className={tabs === 3 ?  "tab-btn-bx tabbtnactive" : "tab-btn-bx"}>
                  <div className="tab-btn-icon">
                    <img src="./images/tab-btn-3.png" alt="" />
                  </div>
                Mission
              </button>
            </div>

      <div className="tabs-grid-main-bx">


            <div
              className={
                tabs === 1
                  ? "tabs-grid-bx tabsactive grid grid-two-col grid-gap"
                  : "tabs-grid-bx grid grid-two-col grid-gap"
              }
            >
              <div className="left-vision-info-bx">
                <h3>Who We Are</h3>
                <p>
                  ClimStripe Shift is on a mission to create a sustainable
                  future where waste is viewed as a valuable resource rather
                  than a burden. We aim to inspire individuals and organizations
                  to adopt eco-friendly practices, conserve resources, and take
                  responsibility for their environmental impact
                </p>
              </div>

              <div className="right-vision-img-bx">
                <div className="vision-img">
                  <img src="./images/vision-1.jpg" alt="" />

                  <div className="environment-icon">
                    <img src="./images/save-the-world.png" alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div
              className={
                tabs === 2
                  ? "tabs-grid-bx tabs-grid-bx-abs tabsactive grid grid-two-col grid-gap"
                  : "tabs-grid-bx tabs-grid-bx-abs grid grid-two-col grid-gap"
              }
            >
              <div className="left-vision-info-bx">
                <h3>Vision</h3>
                <p>
                  ClimStripe Shift is on a mission to create a sustainable
                  future where waste is viewed as a valuable resource rather
                  than a burden. We aim to inspire individuals and organizations
                  to adopt eco-friendly practices.
                </p>
              </div>

              <div className="right-vision-img-bx">
                <div className="vision-img">
                  <img src="./images/vision-2.jpg" alt="" />

                  <div className="environment-icon">
                    <img src="./images/save-the-world.png" alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div
              className={
                tabs === 3
                  ? "tabs-grid-bx tabs-grid-bx-abs tabsactive grid grid-two-col grid-gap"
                  : "tabs-grid-bx tabs-grid-bx-abs grid grid-two-col grid-gap"
              }
            >
              <div className="left-vision-info-bx">
                <h3>Mission</h3>
                <p>
                  ClimStripe Shift is on a mission to create a sustainable
                  future where waste is viewed as a valuable resource rather
                  than a burden. We aim to .
                </p>
              </div>

              <div className="right-vision-img-bx">
                <div className="vision-img">
                  <img src="./images/vision-3.jpg" alt="" />

                  <div className="environment-icon">
                    <img src="./images/save-the-world.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
      </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Vision;
