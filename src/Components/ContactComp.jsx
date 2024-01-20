import React from "react";
import "../Styles/Contact.css";

const ContactComp = () => {
  return (
    <>
      <section id="contact" className="contact-comp">
        <div className="common-container">
          <div className="cont-grid">
            <div className="left-contact-form-bx">
              <span>SEND US EMAIL</span>
              <h2>Feel free to write</h2>

              <form action="#" className="form-bx">
                <div className="contct-form-grid">
                  <div className="contct-bx">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter Name"
                      autoComplete="off"
                      required
                    />
                  </div>

                 
                  <div className="contct-bx">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="Enter Mobile No."
                      autoComplete="off"
                      required
                    />
                  </div>
                </div>

                <div className="contct-form-grid">
                <div className="contct-bx">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter Email"
                      autoComplete="off"
                      required
                    />
                  </div>
                  
                  <div className="contct-bx">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      placeholder="Enter Subject"
                      autoComplete="off"
                      required
                    />
                  </div>

                 
                </div>

                <div className="contc-tbx">
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="5"
                    placeholder="Enter Message"
                    autoComplete="off"
                    required
                  ></textarea>
                </div>

                <button className="contc-tsubmit-btn">Send Message</button>
              </form>
            </div>

            <div className="right-contact-info-bx left-contact-form-bx">
              <span>NEED ANY HELP?</span>
              <h2>Get in touch with us</h2>
              <p>
                
                Lorem ipsum is simply free text available dolor sit amet
                consectetur <br/> notted adipisicing elit sed do eiusmod tempor
                incididunt simply dolore magna.
              </p>

              <div className="office-address-main-bx">

                <div className="office-addrs-bx">
                    <div className="left-addrs-icon">
                    <ion-icon name="call-outline"></ion-icon> 
                    </div>
                    <div className="addrs-info">
                    <h6>Have any question?</h6>
                    <p>Free +92 (020)-9850</p>
                    </div>
                </div>

                <div className="office-addrs-bx">
                    <div className="left-addrs-icon">
                    <ion-icon name="mail-outline"></ion-icon>
                    </div>
                    <div className="addrs-info">
                    <h6>Write email</h6>
                    <p>needhelp@company.com</p>
                    </div>
                </div>


                <div className="office-addrs-bx">
                    <div className="left-addrs-icon">
                    <ion-icon name="navigate-outline"></ion-icon> 
                    </div>
                    <div className="addrs-info">
                    <h6>Visit anytime</h6>
                    <p>66 broklyn golden street. New York</p>
                    </div>
                </div>
                
              </div>
              
              {/* <ion-icon name="call-outline"></ion-icon> <ion-icon name="mail-outline"></ion-icon>
              <ion-icon name="navigate-outline"></ion-icon> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactComp;
