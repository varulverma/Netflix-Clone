import React from "react";
import "./SignCaptcha.css";

function SignCaptcha({ children, ...restProps }) {
  return (
    <p className="signCaptcha" {...restProps}>
      {children}
    </p>
  );
}

export default SignCaptcha;
