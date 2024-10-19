/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./index.css";
export default function Footer() {
  return (
    <>
      <div className="footerContainer">
        <div className="footerTopContainer">
          <div className="subscribeContainer">
            <h1 className="footerTopHeading">SUBSCRIBE TO OUR NEWSLETTER</h1>
            <p className="subscribePara">
              Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut
              necesbus enim
            </p>
            <input
              className="emailInput"
              placeholder="Enter Your Email Address"
              type="email"
            />
            <button className="subscribeBtn">SUBSCRIBE</button>
          </div>
          <div className="aboutService">
            <div className="aboutContainer">
              <h1 className="footerTopHeading ">ABOUT US</h1>
              <p className="para">Our Story</p>
              <p className="para">Blogs</p>
              <p className="para">Careers</p>
              <p className="para">Contact Us</p>
              <p className="para">Help & Support</p>
            </div>
            <div className="serviceContainer">
              <h1 className="footerTopHeading">OUR SERVICES</h1>

              <p className="para">Book Maap</p>
              <p className="para">Plant Day Care</p>
              <p className="para">Rent Plants</p>
              <p className="para">Plants & Pots</p>
              <p className="para">Gardening Tools</p>
            </div>
          </div>
          <div className="usefulTouch">
            <div className="usefulContainer">
              <h1 className="footerTopHeading">USEFUL LNKS</h1>
              <p className="para">My Account</p>
              <p className="para">Orders & Returns</p>
              <p className="para">Track Order</p>
              <p className="para">Privacy Popcy</p>
              <p className="para">Return, Refund & Replacement Policy</p>
            </div>
            <div className="touchContainer">
              <h1 className="footerTopHeading">GET IN TOUCH</h1>
              <p className="para">
                Address: F-262, First Floor, Sushant Lok Phase-III, Sector-57,
                Gurgaon, Haryana, India 122003
              </p>
              <p className="para">Call: +919958287272</p>
              <p className="para">Email: care@chaperoneplants.com</p>
            </div>
          </div>
        </div>
        <div className="footerMidContainer">
          <h1 className="midHeading">CHAPERONE</h1>
          <p className="midPara">
            Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut
            necessitatibus enim ut internos accusantium a numquam autem ab rerum
            omnis. Non molestiae ratione et laborum doloribus aut molestiae
            voluptates ut porro excepturi sit molestiae obcaecati qui quis
            beatae est voluptatem eius. Et architecto nihil id labore omnis hic
            iste deleniti et porro aspernatur.
          </p>
        </div>
        <div className="footerBottom">
          <h1 className="followHeading">Follow us on</h1>
          <ul className="FooterLogoContainer">
            <li>
              <img className="imgs" src="http://surl.li/gnxzzr" />
            </li>
            <li>
              <img className="imgs" src="http://surl.li/cfcqnj" />
            </li>
            <li>
              <img className="imgs" src="http://surl.li/qedoei" />
            </li>
            <li>
              <img className="imgs" src="http://surl.li/vzpalv" />
            </li>
            <il>
              <img className="imgs" src="http://surl.li/wxgorm" />
            </il>
          </ul>
        </div>
        <hr className="line" />
        <p className="copyRights">© 2023, chaperone.com All rights reserved.</p>
      </div>
    </>
  );
}
