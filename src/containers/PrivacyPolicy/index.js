import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/index";
import PrivacyPolicyCnt from "../../components/privacypolicy/index";
import Footer from "../../components/footer/index";
import Content from "../../utils/content.json";

class TermsConditions extends React.Component {
  state = {};
  render() {
    return (
      <>
          <Navbar menu={Menu()} />
          <PrivacyPolicyCnt />
          <Footer />
      </>
    );
  }
}

export default TermsConditions;

function Menu() {
  return (
    <ul class="navbar-nav ml-auto">
      {Content.homeMenuOpt.map((item) => Options(item))}
    </ul>
  );
}
function Options(type) {
  return (
    <li key={type.name}>
      <Link to={type.link}>{type.name}</Link>
    </li>
  );
}
