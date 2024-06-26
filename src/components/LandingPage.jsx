// LandingPage.js

import React from "react";
import img from "../assets/home.jpg";
import { useState } from "react";
import "./LandinPage.css";
import Modal from "./Modal";
const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  return (
    <div className="container lg-auto ">
      <div className="container__left "></div>
      <div className="container__right">
        <img src={img} alt="women" className="img" />
        <div className="right__content">
          {/* <h1>ENJOY</h1>
          <h4>Travelling moment</h4> */}
          <h4>
            US Mortgage Home can help you secure that best interest rates for
            your mortgage across the entire USA.
          </h4>
          <div className="action__btns">
            <button className="btn primary__btn" onClick={openModal}>
              Explore More and subscribe
            </button>
            {isOpen && <Modal />}
          </div>
          <div className="socials">
            <span>
              <i className="ri-instagram-line"></i>
            </span>
            <span>
              <i className="ri-twitter-fill"></i>
            </span>
            <span>
              <i className="ri-facebook-fill"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
