import React from "react";
import SignButton from "../../Dumb/SignButton/SignButton";
import SignCaptcha from "../../Dumb/SignCaptcha/SignCaptcha";
import SignInput from "../../Dumb/SignInput/SignInput";
import SignInText from "../../Dumb/SignInText/SignInText";
import SignLink from "../../Dumb/SignLink/SignLink";
import SignTitle from "../../Dumb/SignTitle/SignTitle";
import "./SignInComponent.css";

function SignInComponent() {
  return (
    <div className="signInFormWrapper">
      <form className="signFormBase">
        <SignTitle>Sign In</SignTitle>
        <SignInput type="text" placeholder="Email Address"></SignInput>
        <SignInput
          type="email"
          placeholder="Password"
          autoComplete="Off"
        ></SignInput>
        <SignButton>Sign In</SignButton>
        <SignInText>
          New to Netflix ? <SignLink>SignUp Now !</SignLink>
        </SignInText>
        <SignCaptcha>
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          <SignLink >Learn More</SignLink>
        </SignCaptcha>
      </form>
    </div>
  );
}

export default SignInComponent;
