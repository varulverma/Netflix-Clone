import React from "react";
import "./SignInButton.css";

function SignInButton() {
  return (
    <div>
      <a className="sign-in-button" href="/login">
        {" "}
        Sign In
      </a>
    </div>
  );
}

export default SignInButton;
