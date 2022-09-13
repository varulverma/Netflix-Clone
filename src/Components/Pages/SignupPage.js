import React from "react";
import FooterComponent from "../Dumb/Footer/FooterComponent/FooterComponent";
import HeaderWrapper from "../Dumb/Header/HeaderWrapper/HeaderWrapper";
import Logo from "../Dumb/Header/Logo/Logo";
import Navbar from "../Dumb/Header/Navbar/Navbar";
import SignInComponent from "../Smart/SignInComponent/SignInComponent";
import SignUpComponent from "../Smart/SignUpComponent/SignUpComponent";

function SignUpPage() {
  return (
    <>
      <HeaderWrapper>
        <Navbar className="navbarHome ">
          <Logo />
        </Navbar>
        <SignUpComponent />
      </HeaderWrapper>
      <FooterComponent />
    </>
  );
}

export default SignUpPage;