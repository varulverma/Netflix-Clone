import React from "react";
import './FeatureWrapper.css';

function FeatureWrapper({ children, ...restProp }) {
  return <div {...restProp}>{children}</div>;
}

export default FeatureWrapper;
