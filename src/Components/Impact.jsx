import React from "react";
import "../Styles/Impact.css";
import "../Styles/Team.css";
// import ImpactData from "./ImpactData";

const Impact = () => {
  return (
    <>
      <section id="imapct" className="impact-comp">
        <div className="common-container">
          <div className="team-heading space-botm">
            <span>Small Step</span>
            <h3>Big Impact</h3>
          </div>

          <div className="impact-flex-bx">
                  <div className="imp-bx" >
                    <div className="imp-img">
                      <img src="./images/imp-1.png" alt="" />
                    </div>
                    <div className="imp-info">
                      <h6> 200 </h6>
                      <p> KGS. OF PLASTIC WE SAVED </p>
                    </div>
                  </div>

                  <div className="imp-bx imp-bx2 " >
                    <div className="imp-img">
                      <img src="./images/imp-2.png" alt="" />
                    </div>
                    <div className="imp-info">
                      <h6> 40 </h6>
                      <p> NO. OF TREE PLANTED </p>
                    </div>
                  </div>

                  <div className="imp-bx imp-bx3" >
                    <div className="imp-img">
                      <img src="./images/imp-3.png" alt="" />
                    </div>
                    <div className="imp-info">
                      <h6> 1200 </h6>
                      <p> KGS. OF CO2 OFFSET </p>
                    </div>
                  </div>

                  <div className="imp-bx imp-bx4" >
                    <div className="imp-img">
                      <img src="./images/imp-4.png" alt="" />
                    </div>
                    <div className="imp-info">
                      <h6> 462 </h6>
                      <p> KGS. OF PLASTIC RECYCLED </p>
                    </div>
                  </div>

                  <div className="imp-bx imp-bx5" >
                    <div className="imp-img">
                      <img src="./images/imp-5.png" alt="" />
                    </div>
                    <div className="imp-info">
                      <h6> 330 </h6>
                      <p> PEOPLE MADE AWARE ON CLIMATE CHANGE </p>
                    </div>
                  </div>

                  <div className="imp-bx imp-bx4" >
                    <div className="imp-img imp-icon">
                    <i class="fa-solid fa-droplet"></i>
                    </div>
                    <div className="imp-info imp-info2">
                      <h6> 13.8
 </h6>
                      <p> Cr. Litres of Water Saved </p>
                    </div>
                  </div>

                  <div className="imp-bx imp-bx5" >
                    <div className="imp-img imp-icon">
                    <i class="fa-solid fa-bolt-lightning"></i>
                    </div>
                    <div className="imp-info imp-info2">
                      <h6> 5.65 </h6>
                      <p> KWH Of Electricity Saved </p>
                    </div>
                  </div>

                  <div className="imp-bx imp-bx2" >
                    <div className="imp-img imp-icon">
                    <i class="fa-solid fa-bottle-droplet"></i>
                    </div>
                    <div className="imp-info imp-info2">
                      <h6> 2.5 </h6>
                      <p> Lakhs Litres of Oil Saved </p>
                    </div>
                  </div>

                  <div className="imp-bx imp-bx3" >
                    <div className="imp-img imp-icon">
                    <i class="fa-brands fa-pagelines"></i>
                    </div>
                    <div className="imp-info imp-info2">
                      <h6> 10.24 </h6>
                      <p> Th. Number Of Tree Saved </p>
                    </div>
                  </div>
                  
          </div>
        </div>
      </section>
    </>
  );
};

export default Impact;
