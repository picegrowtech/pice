import React from "react";
import Content from "../../utils/content.json";
import ImgUrl from "../../Theme/images.json";
import "./styleSheet.css";
const dashboardSidebar = () => {
  return (
    <div class="collapse" id="navbarToggleExternalContent">
    	<div className="sidebarBg">
    		<ul>
    			<li><a href="/dashboard"><img src={ImgUrl.dashBoardIcon} alt="" /> {Content.dashbrdTxt}</a></li>
    			<li><a href="/team-info"><img src={ImgUrl.teamInfoIcon} alt="" /> {Content.teamInfo}</a></li>
    			<li><a href="/dashboard/results"><img src={ImgUrl.resultsIcon} alt="" /> {Content.ResultsTxt}</a></li>
    		</ul>
    	</div>   
    </div>	
  );
};

export default dashboardSidebar;




 