import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__bar">
        <p>
          100% Secure. We value your privacy. By submitting your email and phone
          number in the form(s) on our site, you give consent to receiving
          occasional emails and SMS text messages about special offers, or other
          information, from us.{" "}
        </p>
        <p className="p">
          {" "}
          Copyright Ⓒ 2024 US Mortgage Homes. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
export default Footer;
