import React from "react";
import './SignTitle.css';

function SignTitle({ children, ...restProps }) {
  return <h1 className="signTitle">{children}</h1>;
}

export default SignTitle;
