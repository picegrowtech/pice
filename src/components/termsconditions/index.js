import React from "react";
import Content from "../../utils/content.json";
import "./styleSheet.css";
const TermsContent = () => {
  return (
    <div className="termsConditionsBg">
      <div className="container">
      	<h2>{Content.TermsTitle}</h2>
      	<h5>{Content.TermsIntro}</h5>
      	<p>{Content.TermsWelcome}</p>
      	<p>{Content.TermsCnt1}</p>
      	<p>{Content.TermsCnt2}</p>
		<p>{Content.TermsCnt3}</p>
		<p>{Content.TermsCnt4}</p>
      
      <h5>{Content.TermsTitle2}</h5>
	  <p>{Content.TermsCnt21}</p>

	  <h5>{Content.TermsTitle3}</h5>
	  <p>{Content.TermsCnt31}</p>
	  <p>{Content.TermsCnt32}</p>
	  <p>{Content.TermsCnt33}</p>
	  <p>{Content.TermsCnt34}</p>
	  <p>{Content.TermsCnt35}</p>
	  <p>{Content.TermsCnt36}</p>

	  <h5>{Content.TermsTitle4}</h5>
	  <p>{Content.TermsCnt41}</p>
	  <p>{Content.TermsCnt42}</p>
	  <p>{Content.TermsCnt43}</p>
	  <p>{Content.TermsCnt44}</p>
	  <p>{Content.TermsCnt45}</p>
	  <p>{Content.TermsCnt46}</p>

	  <h5>{Content.TermsTitle5}</h5>
	  <p>{Content.TermsCnt51}</p>

	  <h5>{Content.TermsTitle6}</h5>
	  <p>{Content.TermsCnt61}</p>

	  <h5>{Content.TermsTitle7}</h5>
	  <p>{Content.TermsCnt71}</p>
      </div>
    </div> 
  );
};


export default TermsContent;




 