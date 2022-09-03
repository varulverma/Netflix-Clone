import React from "react";
import Seperator from "../../Seperator/Seperator";
import JumboItem from "../Jumboitem/JumboItem";
import "./JumboComponent.css";

function JumboComponent() {
  const jumboData = [
    {
      title: "Enjoy on your TV.",
      subtitle:
        "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
      imageSrc: "images/home/jumboimage2.jpg",
    },
    {
      title: "Download your shows to watch offline.",
      subtitle:
        "Save your favourites easily and always have something to watch.",
      imageSrc: "images/home/jumboimage1.jpg",
    },
    {
      title: "Watch everywhere.",
      subtitle:
        "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
      imageSrc: "images/home/jumboimage3.jpg",
    },
    {
      title: "Create profiles for children.",
      subtitle:
        "Send children on adventures with their favourite characters in a space made just for them—free with your membership.",
      imageSrc: "images/home/jumboimage4.png",
    },
  ];

  return (
    <div className="jumboComponent">
      {jumboData.map((item, index) => (
        <>
          <JumboItem
            alignment={index % 2 === 0}
            title={item.title}
            subtitle={item.subtitle}
            imageSrc={item.imageSrc}
          ></JumboItem>
          <Seperator />
        </>
      ))}
    </div>
  );
}

export default JumboComponent;
