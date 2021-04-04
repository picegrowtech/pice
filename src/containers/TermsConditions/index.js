import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/index";
import Termsconditions from "../../components/termsconditions/index";
import Footer from "../../components/footer/index";
import Content from "../../utils/content.json";

class TermsConditions extends React.Component {
  state = {};
  render() {
    return (
      <>
          <Navbar menu={Menu()} />
          <Termsconditions />
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
