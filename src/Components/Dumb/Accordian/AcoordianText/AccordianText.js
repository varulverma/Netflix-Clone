import React from "react";
import './AccordianText.css';

function AccordianText({children, ...restProps}) {
    const isOpen = true;
  return (
    isOpen === true ?
    <div className="accordianText" {...restProps}>
      {children}
    </div> : null
  );
}

export default AccordianText;
