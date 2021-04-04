import React from "react";
import Content from "../../utils/content.json";
import "./styleSheet.css";
const PrivacyCnt = () => {
  return (
    <div className="termsConditionsBg">
      <div className="container">
      	<h2>{Content.PrvcyTitle}</h2>

      	<h5>{Content.PrvcyTitle1}</h5>
      	<p>{Content.PrvcyCnt1}</p>
      	<p>{Content.PrvcyCnt2}</p>
      	<p>{Content.PrvcyCnt3}</p>
      
      <h5>{Content.PrvcyTitle2}</h5>
	  <p>{Content.PrvcyCnt21}</p>
	  <p>{Content.PrvcyCnt22}</p>
	  <p>{Content.PrvcyCnt23}</p>
	  <p>{Content.PrvcyCnt24}</p>
	  <p>{Content.PrvcyCnt25}</p>
	  <p>{Content.PrvcyCnt26}</p>
	  <p>{Content.PrvcyCnt27}</p>
	  <p>{Content.PrvcyCnt28}</p>

	  <h5>{Content.PrvcyTitle3}</h5>
	  <p>{Content.PrvcyCnt31}</p>

	  <h5>{Content.PrvcyTitle4}</h5>
	  <p className="mt-20 mb-10"><strong>{Content.PrvcyTitle41}</strong></p>
	  <p>{Content.PrvcyCnt41}</p>

	  <h5>{Content.PrvcyTitle5}</h5>
	  <p>{Content.PrvcyCnt51}</p>

	  <h5>{Content.PrvcyTitle6}</h5>
	  <p>{Content.PrvcyCnt61}</p>

	  <h5>{Content.PrvcyTitle7}</h5>
	  <p>{Content.PrvcyCnt71}</p>
	  <p>{Content.PrvcyCnt72}</p>

	  <h5>{Content.PrvcyTitle8}</h5>
	  <p>{Content.PrvcyCnt81}</p>
      </div>
    </div> 
  );
};


export default PrivacyCnt;




 