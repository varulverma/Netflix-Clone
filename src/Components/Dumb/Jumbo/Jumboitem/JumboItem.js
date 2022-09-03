import React from "react";
import JumboTitle from "../JumboTitle/JumboTitle";
import JumboSubtitle from "../JumboSubtitle/JumboSubtitle";
import JumboImage from "../JumboImage/JumboImage";
import "./JumboItem.css";

function JumboItem({
  children,
  alignment,
  title,
  subtitle,
  imageSrc,
  imageAlt,
  ...restProps
}) {
  return (
    <div className="jumboItem">
      {alignment === true && (
        <>
          <div>
            <JumboTitle>{title}</JumboTitle>
            <JumboSubtitle> {subtitle}</JumboSubtitle>
          </div>
          <div>
            <JumboImage src={imageSrc} alt={imageAlt}></JumboImage>
          </div>
        </>
      )}
      {alignment === false && (
        <>
          <div>
            <JumboImage src={imageSrc} alt={imageAlt}></JumboImage>
          </div>
          <div>
            <JumboTitle>{title}</JumboTitle>
            <JumboSubtitle> {subtitle}</JumboSubtitle>
          </div>
        </>
      )}
    </div>
  );
}

export default JumboItem;
