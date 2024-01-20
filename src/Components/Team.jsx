import React from "react";
import "../Styles/Team.css";
import Data from "../data";

const Team = () => {
  return (
    <>
      <section className="team-comp">
        <div className="common-container">
          <div className="team-heading">
            <span>OUR TEAM</span>
            <h2>Know our expert team agents.</h2>
          </div>

          <div className="team-grid grid grid-three-col grid-gap">
            {Data.map((curelem, index) => {
              return (
                <>
                  <div className="team-bx" key={curelem.id}>
                    <div className="team-img">
                      <img src={curelem.Img} alt="" />
                    </div>
                    <div className="team-det-bx">
                      <h4>{curelem.Name}</h4>
                      <p>{curelem.para}</p>

                      <div className="team-soc-flex-bx">
                        <a href="#">
                          <i class="fa-brands fa-facebook-f"></i>
                        </a>
                        <a href="#">
                          <i class="fa-brands fa-instagram"></i>
                        </a>
                        <a href="#">
                          <i class="fa-brands fa-twitter"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
