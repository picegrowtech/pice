import React from "react";
import Content from "../../utils/content.json";
import ImgUrl from "../../Theme/images.json";
import "./styleSheet.css";
import { BtnLink } from "../../components/identicalFunc/index";
const dashboardDfltCnt = (props) => {
  return (
    <div className="dashbrdDfltCntBg">
    	<div className="dashbrdDfltCnt">
            <h3>{Content.DashbrdDfltCnt}</h3>            
					 {BtnLink(props.gtStrFrmPath, Content.NxtTxt)}
        </div>
    </div>	
  );
};

export default dashboardDfltCnt;




 