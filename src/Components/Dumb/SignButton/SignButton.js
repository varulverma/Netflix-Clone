import React from "react";
import "./SignButton.css";

function SignButton({ children, ...restProps }) {
  return (
    <button className="signFormButton" {...restProps}>
      {children}
    </button>
  );
}

export default SignButton;
