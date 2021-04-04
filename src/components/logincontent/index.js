import React, { useState } from "react";
import ImgUrl from "../../Theme/images.json";
import Content from "../../utils/content.json";
import "./styleSheet.css";
const LoginContent = (props) => {
	const [email, setEmail] = useState("")
	const [password, setPass] = useState("")
	const login = () => {
		props.onSbmitLogin({ email, password });
	}
	return (
		<div className="loginBg">
			<div className="container">
				<div className="loginBxbg">
					<h3>{Content.singInTxt}</h3>
					<form className="loginForm">
						<div class="form-group">
							<input onChange={(inp) => setEmail(inp.target.value)} style={{ backgroundImage: `url(${ImgUrl.loginUsrIcn})` }} type="email" class="form-control" id="emailAddress" placeholder={Content.emailAddress} />
						</div>
						<div class="form-group">
							<input onChange={(inp) => setPass(inp.target.value)} style={{ backgroundImage: `url(${ImgUrl.loginPwdIcn})` }} type="password" class="form-control" id="password" placeholder={Content.Pwd} />
						</div>
						<div class="form-group d-flex justify-content-between align-items-center">
							<button onClick={() => login()} type="button" class="btn btn-submit">{Content.singInTxt}</button>
							<a href="#" className="frgtPwd">{Content.FrgtPwdTxt}</a>
						</div>
					</form>
					<p>{Content.newToCSRA}<a href="/signup">{Content.signUpNow}</a></p>
				</div>
			</div>
		</div>
	);
};


export default LoginContent;