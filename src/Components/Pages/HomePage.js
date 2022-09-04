import React from "react";
import Seperator from "../Dumb/Seperator/Seperator";
import HeaderComponent from "../Smart/HeaderComponent";
import JumboComponent from "../Dumb/Jumbo/JumboComponent/JumboComponent";
import AccordianComponent from "../Dumb/Accordian/AccordianComponent/AccordianComponent";

function HomePage() {
  return (
    <>
      <HeaderComponent />
      <Seperator />
      <JumboComponent />
      <Seperator />
      <AccordianComponent />
    </>

  );
}

export default HomePage;
