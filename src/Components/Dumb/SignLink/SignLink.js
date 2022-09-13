import React from "react";
import './SignLink.css';

function SignLink({ children, ...restProps }) {
  return (
    <a className="signLink" {...restProps}>
      {children}
    </a>
  );
}

export default SignLink;
