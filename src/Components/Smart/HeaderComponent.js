import React from "react";
import FeatureTitle from "../Dumb/Header/Featuretitle/FeatureTitle";
import FeatureWrapper from "../Dumb/Header/FeatureWrapper/FeatureWrapper";
import HeaderWrapper from "../Dumb/Header/HeaderWrapper/HeaderWrapper";
import Navbar from "../Dumb/Header/Navbar/Navbar";
import Logo from "../Dumb/Header/Logo/Logo";
import SignInButton from "../Dumb/Header/SignInButton/SignInButton";
import SubscribeWrapper from "../Dumb/Forms/Subscribe/SubscribeWrapper/SubscribeWrapper";
import SubscribeEmail from "../Dumb/Forms/Subscribe/SubscribeEmail/SubscribeEmail";
import SubscribeButton from "../Dumb/Forms/Subscribe/SubscribeButton/SubscribeButton";
import Seperator from "../Dumb/Seperator/Seperator";

function HeaderComponent() {
  return (
    <>
      <HeaderWrapper>
        <Navbar className="navbar-home">
          <Logo />
          <SignInButton />
        </Navbar>
        <FeatureWrapper className="feature-wrapper-home">
          <FeatureTitle className="feature-title-home">
            Unlimited movies, TV shows and more.
          </FeatureTitle>
        </FeatureWrapper>
        <SubscribeWrapper>
          <SubscribeEmail type="email" />
          <SubscribeButton>Get Started</SubscribeButton>
        </SubscribeWrapper>
      </HeaderWrapper>
    </>
  );
}

export default HeaderComponent;
