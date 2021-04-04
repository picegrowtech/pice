import React from "react";
import Content from "../../utils/content.json";
import "./styleSheet.css";
const InnerpgeBanner = () => {
  return (
    <div className="aboutBg">
      <div className="container"><h2>{Content.aboutUsTxt}</h2></div>
    </div> 
  );
};


export default InnerpgeBanner;




 