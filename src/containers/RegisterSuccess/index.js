import React from "react";
import Navbar from "../../components/navbar/index";
import RegisterSuccessCnt from "../../components/registersuccesscontent/index";
import Footer from "../../components/footer/index";
import Content from "../../utils/content.json";
import { Menu } from "../../components/identicalFunc/index";

class RegisterSuccess extends React.Component {
  state = {};

  render() {
    return (
      <>
        <Navbar menu={Menu(Content.homeMenuOpt)} />
        <RegisterSuccessCnt />
        <Footer />
      </>
    );
  }
}

export default RegisterSuccess;
