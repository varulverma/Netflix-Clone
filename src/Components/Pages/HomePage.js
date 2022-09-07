import React from "react";
import Seperator from "../Dumb/Seperator/Seperator";
import HeaderComponent from "../Smart/HeaderComponent";
import JumboComponent from "../Dumb/Jumbo/JumboComponent/JumboComponent";
import AccordianComponent from "../Dumb/Accordian/AccordianComponent/AccordianComponent.js";
import FooterComponent from "../Dumb/Footer/FooterComponent/FooterComponent";

function HomePage() {
  return (
    <>
      <HeaderComponent />
      <Seperator />
      <JumboComponent />
      <AccordianComponent />
      <Seperator/>
      <FooterComponent/> 
    </>

  );
}

export default HomePage;
