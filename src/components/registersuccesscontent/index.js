import React from "react";
import ImgUrl from "../../Theme/images.json";
import Content from "../../utils/content.json";
import "./styleSheet.css";
const RegisterSuccessCnt = () => {
  return (
    <div className="registerThanksBg">
	    <div className="container">
	      <div className="thanksContent">
	      	<h3>{Content.RgstrThnksTitle}</h3>
	      	<img src={ImgUrl.RegisterSuccIcon} alt="" />
	      	<p>{Content.RgstrThnksMsg}</p>
	      	<a href="/" className="btn">{Content.goToHome}</a>
	      </div>
	    </div>
	  </div>
  );
};


export default RegisterSuccessCnt;