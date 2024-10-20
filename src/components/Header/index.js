/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { IoPersonOutline } from "react-icons/io5";
import "./index.css";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";

export default function Header() {
  return (
    <CartContext.Consumer>
      {(value) => {
        const { cartList } = value;
        const count = cartList.length;
        return (
          <>
            <div className="offerContainer">
              <p className="offer-Banner ">
                Free Shipping on orders above 999/-
              </p>
              <p className=" phone-number">Call us on: +91 98768 05120</p>
            </div>
            <nav class="navbar navbar-expand-lg navbar-light">
              {/* <div class="container-fluid"> */}
              <div className="d-flex align-items-center mt-4 ms-5">
                <img className="navLogo" src="http://surl.li/zrvrmg" />
                <h1 className="navHeading ms-3">Chaperone</h1>
              </div>
              <div className="mobileCart">
                <div className="d-flex flex-column me-4">
                  <p className="numberCount">{count}</p>
                  <Link to="/cart">
                    <img className="cartImg" src="http://surl.li/sxstgj" />
                  </Link>
                  <span>Cart</span>
                </div>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
              </div>
              <div class="collapse navbar-collapse " id="navbarNav">
                <ul className="navbar-nav ms-auto me-auto ">
                  <li className="nav-item active me-4">
                    <Link className="nav-link active" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item me-4">
                    <Link className="nav-link" to="/products">
                      Plants & Pots
                    </Link>
                  </li>
                  <li className="nav-item me-4">
                    <a className="nav-link" href="#">
                      Tools
                    </a>
                  </li>
                  <li className="nav-item me-4">
                    <a className="nav-link" href="#">
                      Our Services
                    </a>
                  </li>
                  <li className="nav-item me-4">
                    <a className="nav-link" href="#">
                      Blog
                    </a>
                  </li>
                  <li className="nav-item me-4">
                    <a className="nav-link" href="#">
                      Our Story
                    </a>
                  </li>
                  <li className="nav-item me-4">
                    <a className="nav-link" href="#">
                      FAQs
                    </a>
                  </li>
                </ul>
              </div>
              <div className="rightContainer">
                <div className=" d-flex juctify-content-center align-items-center me-5 ">
                  <div className="d-flex flex-column  align-items-center">
                    <IoPersonOutline size="20px" />
                    <spam>My Profile</spam>
                  </div>
                  <div className="d-flex flex-column ms-4">
                    <p className="numberCount">{count}</p>
                    <Link to="/cart">
                      <img className="cartImg" src="http://surl.li/sxstgj" />
                    </Link>
                    <span>Cart</span>
                  </div>
                </div>
              </div>
              {/* </div> */}
            </nav>

            {/* <nav className="navbar navbar-expand-lg navbar-light">
              <div className="d-flex align-items-center mt-4 ms-5">
                <img className="navLogo" src="http://surl.li/zrvrmg" />
                <h1 className="navHeading ms-3">Chaperone</h1>
              </div>
              <div className="mobileCart">
                <div className="d-flex flex-column me-4">
                  <p className="numberCount">{count}</p>
                  <Link to="/cart">
                    <img className="cartImg" src="http://surl.li/sxstgj" />
                  </Link>
                  <span>Cart</span>
                </div>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
              <div
                className="collapse navbar-collapse d-flex justify-content-center align-items-center"
                id="navbarNav"
              >
                <ul className="navbar-nav ">
                  <li className="nav-item active me-4">
                    <Link className="nav-link active" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item me-4">
                    <Link className="nav-link" to="/products">
                      Plants & Pots
                    </Link>
                  </li>
                  <li className="nav-item me-4">
                    <a className="nav-link" href="#">
                      Tools
                    </a>
                  </li>
                  <li className="nav-item me-4">
                    <a className="nav-link" href="#">
                      Our Services
                    </a>
                  </li>
                  <li className="nav-item me-4">
                    <a className="nav-link" href="#">
                      Blog
                    </a>
                  </li>
                  <li className="nav-item me-4">
                    <a className="nav-link" href="#">
                      Our Story
                    </a>
                  </li>
                  <li className="nav-item me-4">
                    <a className="nav-link" href="#">
                      FAQs
                    </a>
                  </li>
                </ul>
              </div>
              <div className="rightContainer">
                <div className=" d-flex juctify-content-center align-items-center me-5 ">
                  <div className="d-flex flex-column  align-items-center">
                    <IoPersonOutline size="20px" />
                    <spam>My Profile</spam>
                  </div>
                  <div className="d-flex flex-column ms-4">
                    <p className="numberCount">{count}</p>
                    <Link to="/cart">
                      <img className="cartImg" src="http://surl.li/sxstgj" />
                    </Link>
                    <span>Cart</span>
                  </div>
                </div>
              </div>
            </nav> */}
          </>
        );
      }}
    </CartContext.Consumer>
  );
}
