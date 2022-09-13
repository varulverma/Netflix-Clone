import React from "react";
import './SignInText.css';

function SignInText({ children, ...restProps }) {
  return <p className="signInText">{children}</p>;
}

export default SignInText;
