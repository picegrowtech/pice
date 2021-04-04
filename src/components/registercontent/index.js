import React, {useState} from "react";
import ImgUrl from "../../Theme/images.json";
import Content from "../../utils/content.json";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import "./styleSheet.css";
const RegisterContent = (props) => {
const [fName, setFName]=useState("")
const [lname, setLName]=useState("")
const [orgName, setOrgName]=useState("")
const [phNo, setPhNo]=useState(0)
const [email, setEmail]=useState("")
const [pass, setPass]=useState("")
const [cnfrmPass, setCnfrmPass]=useState("")
const [cnfrncName, setCnfrncName]=useState("")
const [cnfrncURL, setCnfrncURL]=useState("")
const [cnfrncRole, setCnfrncRole]=useState("")
const [strDate, setStrDate]=useState("")
const [submitionSys, setSubmitionSys]=useState("")
const [startDate, setStartDate] = useState(new Date());
const [endDate, setEndDate] = useState(new Date());
const Rgstr=()=>{
	props.onSbmitReg({fName,lname,orgName, phNo, email,password:pass,cnfrmPass,cnfrncName,cnfrncURL,cnfrncRole,strDate,endDate,submitionSys});
}
  return (
    <div className="registerBg">
	    <div className="container">
	      <div className="RgstrBxbg">
	        <h3>{Content.RgstrTitleFst} <span>{Content.csraTitle}</span> {Content.RgstrTitleLst}</h3>
	        <form className="registerForm">
	          <div class="form-group">
	            <input onChange={(inp)=>setFName(inp.target.value)} type="text" class="form-control" id="firstName" placeholder={Content.FrmFstName} />
	          </div>
	          <div  class="form-group">
	            <input onChange={(inp)=>setLName(inp.target.value)}  type="text" class="form-control" id="lastName" placeholder={Content.FrmLstName} />
	          </div>
	          <div class="form-group">
	            <input onChange={(inp)=>setOrgName(inp.target.value)}  type="text" class="form-control" id="orgName" placeholder={Content.FrmorgName} />
	          </div>
	          <div class="form-group">
	            <input onChange={(inp)=>setPhNo(inp.target.value)}  type="text" class="form-control" id="phone" placeholder={Content.FrmPhone} />
	          </div>
	          <div class="form-group">
	            <input onChange={(inp)=>setEmail(inp.target.value)}  type="text" class="form-control" id="email" placeholder={Content.FrmEmail} />
	          </div>
	          <div class="form-group">
	            <input onChange={(inp)=>setPass(inp.target.value)}  type="password" class="form-control" id="pwd" placeholder={Content.FrmPwd} />
	          </div>
	          <div class="form-group">
	            <input onChange={(inp)=>setCnfrmPass(inp.target.value)}  type="password" class="form-control" id="pwd" placeholder={Content.FrmCnfrPwd} />
	          </div>
	          <div class="form-group">
	            <input onChange={(inp)=>setCnfrncName(inp.target.value)}  type="text" class="form-control" id="lastName" placeholder={Content.FrmCnfrName} />
	          </div>
	          <div class="form-group">
	            <input onChange={(inp)=>setCnfrncURL(inp.target.value)}  type="text" class="form-control" id="ConfUrl" placeholder={Content.FrmCnfrUrl} />
	          </div>
	          <div class="form-group">
		          <select onChange={(inp)=>setCnfrncRole(inp.target.value)}  style={{ backgroundImage: `url(${ImgUrl.selectArw})` }} class="form-control" id="exampleFormControlSelect1" onchange='CheckColors(this.value);'>
		          	<option value={Content.FrmRleConf}>{Content.FrmRleConf}</option>
		          	<option value={Content.FrmRleConfOpt1}>{Content.FrmRleConfOpt1}</option>
		          	<option value={Content.FrmRleConfOpt2}>{Content.FrmRleConfOpt2}</option>
		          	<option value={Content.FrmRleConfOpt3}>{Content.FrmRleConfOpt3}</option>
		          	<option value={Content.FrmRleConfOpt4}>{Content.FrmRleConfOpt4}</option>
		          	<option value={Content.FrmRleConfOpt5}>{Content.FrmRleConfOpt5}</option>
		          </select>
		          <input type="text" class="form-control hidden_txtbox" name="color" id="color" placeholder=""  style={{ display: 'none' }} />
	          </div>
	          <div class="form-group date" style={{ backgroundImage: `url(${ImgUrl.CalendarIcn})` }}>
	         	<DatePicker dateFormat="dd/MM/yyyy" placeholderText="" minDate={new Date()} selected={startDate} onChange={date => setStartDate(date)} />
	          </div>
	           <div class="form-group date" style={{ backgroundImage: `url(${ImgUrl.CalendarIcn})` }}>
	            <DatePicker dateFormat="dd/MM/yyyy" placeholderText="" minDate={new Date()} selected={endDate} onChange={date => setEndDate(date)} />
	          </div>
	          <div class="form-group">
		          <select onChange={(inp)=>setSubmitionSys(inp.target.value)}  style={{ backgroundImage: `url(${ImgUrl.selectArw})` }} class="form-control" id="exampleFormControlSelect1">
		          	<option>{Content.FrmSubSystem}</option>
		          	<option>{Content.FrmSubSystemOpt1}</option>
		          	<option>{Content.FrmSubSystemOpt2}</option>
		          	<option>{Content.FrmSubSystemOpt3}</option>
		          </select>
	          </div>
			  <div class="form-group">
				<div class="form-check">
					<label class="chkBcxLabl">{Content.FrmIagreto} <a href="#">{Content.FrmTermsTxt}</a>, <a href="#">{Content.FrmPrvcyPcy}</a> {Content.FrmuseCook}
					  <input type="checkbox" />
					  <span class="checkmark"></span>
					</label>
				</div>
			  </div>
	          <div class="form-group d-flex justify-content-center align-items-center">
	             <button onClick={()=>Rgstr()} type="button" class="btn btn-submit">{Content.FrmrgstrBtn}</button>
	          </div>
	        </form>
	        
	      </div>
	    </div>
	  </div>
  );
};


export default RegisterContent;