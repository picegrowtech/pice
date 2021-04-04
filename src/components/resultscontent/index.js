import React from "react";
import Content from "../../utils/content.json";
import ImgUrl from "../../Theme/images.json";
import "./styleSheet.css";
const resultsContent = () => {
  return (
    <div className="resultCntBg">
    	<div className="container">
    		<div className="resultCnt">
    		<h3>{Content.ResultsTxt}</h3>
	    		<div className="resultTable table-responsive">
	    			<table>
		    			<tr>
		    				<th>{Content.resultsTitle}</th>
		    				<th>{Content.DnloadTxt}</th>
		    			</tr>
		    			<tr>
		    				<td>{Content.TopReviewers}</td>
		    				<td><a className="btn" href="#">{Content.DwnloadCSV}</a></td>
		    			</tr>
		    			<tr>
		    				<td>{Content.FinalAssingment}</td>
		    				<td><a className="btn" href="#">{Content.DwnloadCSV}</a></td>
		    			</tr>
		    			<tr>
		    				<td>{Content.MissingReviews}</td>
		    				<td><a className="btn" href="#">{Content.DwnloadCSV}</a></td>
		    			</tr>
		    			<tr>
		    				<td>{Content.RelevantPapers}</td>
		    				<td><a className="btn" href="#">{Content.DwnloadCSV}</a></td>
		    			</tr>
		    			<tr>
		    				<td>{Content.coiname}</td>
		    				<td><a className="btn" href="#">{Content.DwnloadCSV}</a></td>
		    			</tr>
		    			<tr>
		    				<td>{Content.SourceofCnflict}</td>
		    				<td><a className="btn" href="#">{Content.DwnloadCSV}</a></td>
		    			</tr>
		    		</table>
	    		</div>
        	</div>
    	</div>
    </div>	
  );
};

export default resultsContent;




 