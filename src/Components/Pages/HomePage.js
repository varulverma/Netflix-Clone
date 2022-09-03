import React from "react";
import SignInButton from "../Dumb/Header/SignInButton/SignInButton";
import Seperator from "../Dumb/Seperator/Seperator";
import HeaderComponent from "../Smart/HeaderComponent";
import JumboComponent from "../Dumb/Jumbo/JumboComponent/JumboComponent";

function HomePage() {
  return (
    <>
      <HeaderComponent />
      <Seperator />
      <JumboComponent />
    </>
  );
}

export default HomePage;
