import React from "react";
import "./AccordianTitle.css";

function AccordianTitle({ children, ...restProps }) {
  var isOpen = true;
  return (
    <div className="accordianTitle" {...restProps}>
      {children}
      {
        (isOpen = true && (
          <img className="accordianIcon" src="././images/icons/close.png"></img>
        ))
      }
      {
        (isOpen = false && (
          <img className="accordianIcon" src="././images/icons/plus.png"></img>
        ))
      }
    </div>
  );
}

export default AccordianTitle;
