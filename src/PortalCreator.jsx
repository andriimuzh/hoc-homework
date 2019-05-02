import React from "react";
import ReactDOM from "react-dom";

const PortalCreator = (BaseComponent) => {
  const parent = document.querySelector("body");
  const PortalCreator = props => 
  ReactDOM.createPortal(<BaseComponent {...props} />, parent);
  return PortalCreator
}

export default PortalCreator;