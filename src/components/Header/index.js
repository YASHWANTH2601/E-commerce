/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { IoPersonOutline } from "react-icons/io5";
import "./index.css";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <div className="offerContainer">
        <p className="offer-Banner ">Free Shipping on orders above 999/-</p>
        <p className=" phone-number">Call us on: +91 98768 05120</p>
      </div>
      <nav class="navbar navbar-expand-lg navbar-light">
        <div className="d-flex align-items-center mt-4 ms-5">
          <img className="navLogo" src="http://surl.li/zrvrmg" />
          <h1 className="navHeading ms-3">Chaperone</h1>
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
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse flex justify-content-center align-items-center"
          id="navbarNav"
        >
          <ul class="navbar-nav ">
            <li class="nav-item active me-4">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item me-4">
              <Link class="nav-link" to="/products">
                Plants & Pots
              </Link>
            </li>
            <li class="nav-item me-4">
              <a class="nav-link" href="#">
                Tools
              </a>
            </li>
            <li class="nav-item me-4">
              <a class="nav-link" href="#">
                Our Services
              </a>
            </li>
            <li class="nav-item me-4">
              <a class="nav-link" href="#">
                Blog
              </a>
            </li>
            <li class="nav-item me-4">
              <a class="nav-link" href="#">
                Our Story
              </a>
            </li>
            <li class="nav-item me-4">
              <a class="nav-link" href="#">
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
              <img className="cartImg" src="http://surl.li/sxstgj" />
              <span>Cart</span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
