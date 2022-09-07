import React from "react";
import "./FooterLink.css";

function FooterLink({ children, ...restProps }) {
  return (
    <a href="#" className="footerLink" {...restProps}>
      {children}
    </a>
  );
}

export default FooterLink;
