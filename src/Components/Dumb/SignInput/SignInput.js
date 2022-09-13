import React from "react";
import "./SignInput.css";

function SignInput({ ...restProps }) {
  return <input className="signInput" {...restProps} />;
}

export default SignInput;
