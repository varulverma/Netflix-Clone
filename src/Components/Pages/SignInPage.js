import React from "react";
import FooterComponent from "../Dumb/Footer/FooterComponent/FooterComponent";
import HeaderWrapper from "../Dumb/Header/HeaderWrapper/HeaderWrapper";
import Logo from "../Dumb/Header/Logo/Logo";
import Navbar from "../Dumb/Header/Navbar/Navbar";
import SignInComponent from "../Smart/SignInComponent/SignInComponent";

function SignInPage() {
  return (
    <>
      <HeaderWrapper>
        <Navbar className="navbarHome ">
          <Logo />
        </Navbar>
        <SignInComponent />
      </HeaderWrapper>
      <FooterComponent />
    </>
  );
}

export default SignInPage;
