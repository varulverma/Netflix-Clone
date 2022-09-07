import React from "react";
import "./AccordianTitle.css";

function AccordianTitle({ children, isOpen, handleClick, ...restProps }) {
  return (
    <div
      className="accordianTitle"
      {...restProps}
      onClick={() => handleClick()}
    >
      {children}
      {
        (isOpen === true && (
          <img className="accordianIcon" src="././images/icons/close.png"></img>
        ))
      }
      {
        (isOpen === false && (
          <img className="accordianIcon" src="././images/icons/plus.png"></img>
        ))
      }
    </div>
  );
}

export default AccordianTitle;
