import React from "react";
import './Navbar.css';

function Navbar({ children, ...restProp }) {
  return <nav {...restProp}>{children}</nav>;
}

export default Navbar;
