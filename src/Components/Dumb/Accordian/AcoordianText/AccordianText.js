import React from "react";
import './AccordianText.css';

function AccordianText({children, isOpen, ...restProps}) {
  return (
    isOpen === true ?
    <div className="accordianText" {...restProps}>
      {children}
    </div> : null
  );
}

export default AccordianText;
