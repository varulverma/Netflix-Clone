import React from "react";
import FooterLink from "../FooterLink/FooterLink";
import "./FooterComponent.css";

function FooterComponent() {
  return (
    <div className="footerComponent">
      <div className="footerWrapper">
        <h3 className=" footerText "> Questions ? Call 000-800-040-1843 </h3>
        <div className="footerWrapperGrid">
          <div className="footerColumn">
            <FooterLink>FAQ</FooterLink>
            <FooterLink>Investor Relations</FooterLink>
            <FooterLink>Privacy</FooterLink>
            <FooterLink>Speed Test</FooterLink>
          </div>
          <div className="footerColumn">
            <FooterLink>Help Center</FooterLink>
            <FooterLink>Jobs</FooterLink>
            <FooterLink>Cookie Preferences</FooterLink>
            <FooterLink>Legal Notices</FooterLink>
          </div>
          <div className="footerColumn">
            <FooterLink>Account</FooterLink>
            <FooterLink>Way to Watch</FooterLink>
            <FooterLink>Corporate Information</FooterLink>
            <FooterLink>Only on Netflix</FooterLink>
          </div>
          <div className="footerColumn">
            <FooterLink>Media Center</FooterLink>
            <FooterLink>Terms of Use</FooterLink>
            <FooterLink>Contact Us</FooterLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterComponent;
