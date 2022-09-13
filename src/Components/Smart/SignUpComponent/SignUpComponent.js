import React from "react";
import SignButton from "../../Dumb/SignButton/SignButton";
import SignCaptcha from "../../Dumb/SignCaptcha/SignCaptcha";
import SignInput from "../../Dumb/SignInput/SignInput";
import SignInText from "../../Dumb/SignInText/SignInText";
import SignLink from "../../Dumb/SignLink/SignLink";
import SignTitle from "../../Dumb/SignTitle/SignTitle";
import "./SignUpComponent.css";

function SignUpComponent() {
  return (
    <div className="signInFormWrapper">
      <form className="signFormBase">
        <SignTitle>Sign Up</SignTitle>
        <SignInput type="text" placeholder="Name"></SignInput>     
        <SignInput type="text" placeholder="Email Address"></SignInput>
        <SignInput
          type="email"
          placeholder="Password"
          autoComplete="Off"
        ></SignInput>
        <SignButton>Sign In</SignButton>
        <SignInText>
          Already a User? <SignLink>SignIn Now !</SignLink>
        </SignInText>
        <SignCaptcha>
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          <SignLink >Learn More</SignLink>
        </SignCaptcha>
      </form>
    </div>
  );
}

export default SignUpComponent ;
