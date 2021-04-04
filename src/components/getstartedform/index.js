import React, { useState } from "react";
import Content from "../../utils/content.json";
import ImgUrl from "../../Theme/images.json";
import "./styleSheet.css";
import { BtnLink } from "../../components/identicalFunc/index";
const GetStartedForm = (props) => {
	const [input1, setInput1] = useState("")
	const [input2, setInput2] = useState("")
	const [input2File, setInput2File] = useState("")
	const [input3, setInput3] = useState("")
	const [input3File, setInput3File] = useState("")
	const [input4, setInput4] = useState("")
	const [input5, setInput5] = useState("")
	const [input5File, setInput5File] = useState("")
	const [input6, setInput6] = useState("")
	const [input6File, setInput6File] = useState("")
	const [input7, setInput7] = useState("")
	const [input7File, setInput7File] = useState("")
	const [input8, setInput8] = useState("")
	const [input8File, setInput8File] = useState("")
	const submit = () => {
		console.log("am c")
		props.onSbmitGetStrtFrm({
			input1,
			input2,
			input2File,
			input3,
			input3File,
			input4,
			input5,
			input5File,
			input6,
			input6File,
			input7,
			input7File,
			input8,
			input8File,
		});
	}
	const getBase64 = (event, stateVar) => {
		let file = event.target.files[0];
		let reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = function (e) {
			stateVar(e.target.result)
		};
	}
	return (
		<div className="getstartedBg">
			<div className="container">
				<div className="getStartedContent">
					<h2>{Content.GetStartedTxt}</h2>
					<form className="formBg">
						<div className="qusBx">
							<h6>{Content.ques1}</h6>
							<div className="form-group">
								<select onChange={(inp) => setInput1(inp.target.value)} style={{ backgroundImage: `url(${ImgUrl.selectArw})` }} className="form-control">
									<option value={Content.YsTxt}>{Content.YsTxt}</option>
									<option value={Content.NoTxt}>{Content.NoTxt}</option>
								</select>
							</div>
						</div>
						<div className="qusBx">
							<h6>{Content.ques2}</h6>
							<div className="form-group">
								<select onChange={(inp) => setInput2(inp.target.value)} style={{ backgroundImage: `url(${ImgUrl.selectArw})` }} className="form-control">
									<option value={Content.YsTxt}>{Content.YsTxt}</option>
									<option value={Content.NoTxt}>{Content.NoTxt}</option>
								</select>
							</div>
						</div>
						<div className="qusBx">
							<h6>{Content.ques3}</h6>
							<div className="button-wrap">
								<label className="fileBtnbg" for="upload1" placeholder={Content.ChsFile}>{Content.ChsFile}</label>
								<input onChange={(inp) => getBase64(inp, setInput2File)} id="upload1" type="file" />
							</div>
						</div>
						<div className="qusBx">
							<h6>{Content.ques4}</h6>
							<div className="form-group">
								<select onChange={(inp) => setInput3(inp.target.value)} style={{ backgroundImage: `url(${ImgUrl.selectArw})` }} className="form-control">
									<option value={Content.YsTxt}>{Content.YsTxt}</option>
									<option value={Content.NoTxt}>{Content.NoTxt}</option>
								</select>
							</div>
						</div>
						<div className="qusBx">
							<h6>{Content.ques5}</h6>
							<div className="button-wrap">
								<label className="fileBtnbg" for="upload2" placeholder={Content.ChsFile}>{Content.ChsFile}</label>
								<input onChange={(inp) => getBase64(inp, setInput3File)} id="upload2" type="file" />
							</div>
						</div>
						<div className="qusBx">
							<h6>{Content.ques6}</h6>
							<div className="form-group">
								<select onChange={(inp) => setInput4(inp.target.value)} style={{ backgroundImage: `url(${ImgUrl.selectArw})` }} className="form-control">
									<option value={Content.YsTxt}>{Content.YsTxt}</option>
									<option value={Content.NoTxt}>{Content.NoTxt}</option>
								</select>
							</div>
						</div>
						<div className="qusBx">
							<h6>{Content.ques7}</h6>
							<div className="form-group">
								<select onChange={(inp) => setInput5(inp.target.value)} style={{ backgroundImage: `url(${ImgUrl.selectArw})` }} className="form-control">
									<option value={Content.YsTxt}>{Content.YsTxt}</option>
									<option value={Content.NoTxt}>{Content.NoTxt}</option>
								</select>
							</div>
						</div>
						<div className="qusBx">
							<h6>{Content.ques8}</h6>
							<div className="button-wrap">
								<label className="fileBtnbg" for="upload3" placeholder={Content.ChsFile}>{Content.ChsFile}</label>
								<input onChange={(inp) => getBase64(inp, setInput5File)} id="upload3" type="file" />
							</div>
						</div>
						<div className="qusBx">
							<h6>{Content.ques9}</h6>
							<div className="form-group">
								<select onChange={(inp) => setInput6(inp.target.value)} style={{ backgroundImage: `url(${ImgUrl.selectArw})` }} className="form-control">
									<option value={Content.YsTxt}>{Content.YsTxt}</option>
									<option value={Content.NoTxt}>{Content.NoTxt}</option>
								</select>
							</div>
						</div>
						<div className="qusBx">
							<h6>{Content.ques10}</h6>
							<div className="button-wrap">
								<label className="fileBtnbg" for="upload4" placeholder={Content.ChsFile}>{Content.ChsFile}</label>
								<input onChange={(inp) => getBase64(inp, setInput6File)} id="upload4" type="file" />
							</div>
						</div>
						<div className="qusBx">
							<h6>{Content.ques11}</h6>
							<div className="form-group">
								<select onChange={(inp) => setInput7(inp.target.value)} style={{ backgroundImage: `url(${ImgUrl.selectArw})` }} className="form-control">
									<option value={Content.YsTxt}>{Content.YsTxt}</option>
									<option value={Content.NoTxt}>{Content.NoTxt}</option>
								</select>
							</div>
						</div>
						<div className="qusBx">
							<h6>{Content.ques12}</h6>
							<div className="button-wrap">
								<label className="fileBtnbg" for="upload5" placeholder={Content.ChsFile}>{Content.ChsFile}</label>
								<input onChange={(inp) => getBase64(inp, setInput7File)} id="upload5" type="file" />
							</div>
						</div>

						<div className="qusBx">
							<h6>{Content.ques13}</h6>
							<div className="form-group">
								<input onChange={(inp) => setInput8(inp.target.value)} type="text" className="form-control" placeholder="" />
							</div>
						</div>
						<div className="qusBx">
							<h6>{Content.ques14}</h6>
							<div className="button-wrap">
								<label className="fileBtnbg" for="upload6" placeholder={Content.ChsFile}>{Content.ChsFile}</label>
								<input onChange={(inp) => getBase64(inp, setInput8File)} id="upload6" type="file" />
							</div>
						</div>
						<div className="form-group">
							<input onClick={submit} type="button" className="btn btn-submit" value={Content.SubFrProcess} />
							{BtnLink(props.resPath, Content.ChkPrvResult)}
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default GetStartedForm;




