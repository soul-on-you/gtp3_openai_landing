import React from "react";
import "./footer.css";
import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className="footer section__padding">
      <div className="footer__CTA">
        <h1 className="gradient__text">
          Do you want to step in to the future before others
        </h1>
        <button className="footer__CTA__button">Request Early Access</button>
      </div>

      <div className="footer__container">
        <div className="footer__container__left">
          <img src={logo} alt="logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>

        <div className="footer__container__right">
          <div className="footer__container__right__links">
            <h4>Links</h4>
            <p>Overons</p>
            <p>Social Media</p>
            <p>Counters</p>
            <p>Contact</p>
          </div>

          <div className="footer__container__right__links">
            <h4>Company</h4>
            <p>Terms & Conditions </p>
            <p>Privacy Policy</p>
            <p>Contact</p>
          </div>

          <div className="footer__container__right__links">
            <h4>Get in touch</h4>
            <p>Crechterwoord K12 182 DK Alknjkcb</p>
            <p>085-132567</p>
            <p>info@payme.net</p>
          </div>
        </div>
      </div>

      <div className="footer__container__bottom">
        <p>
          &copy; 2021-{new Date().getFullYear()} GPT-3. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
