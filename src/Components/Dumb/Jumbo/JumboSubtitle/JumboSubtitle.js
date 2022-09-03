import React from "react";
import "./JumboSubtitle.css";

function JumboSubtitle({ children, ...restProps }) {
  return (
    <h2 className="jumboSubtitle" {...restProps}>
      {children}
    </h2>
  );
}

export default JumboSubtitle;
