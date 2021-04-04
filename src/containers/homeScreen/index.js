import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { injectReducer, injectSaga } from "redux-inject-reducer-and-saga";
import reducer from "./reducer";
import saga from "./saga";
import { createStructuredSelector } from "reselect";
import * as actions from "./actions";
import * as selectors from "./selectors";
import Navbar from "../../components/navbar/index";
import HomeBanner from "../../components/homebanner/index";
import HomeContent from "../../components/homecontent/index";
import SupportConferences from "../../components/supportedconferences/index";
import HomeCsraFeatures from "../../components/homecsrafeatures/index";
import Footer from "../../components/footer/index";
import Content from "../../utils/content.json";
import { Menu } from "../../components/identicalFunc/index";

class HomeScreen extends React.Component {
  state = {};
  render() {
    return (
      <>
        <Navbar menu={Menu(Content.homeMenuOpt)} />
        <HomeBanner />
        <HomeContent />
        <SupportConferences />
        <HomeCsraFeatures />
        <Footer />
      </>
    );
  }
}

function mapStateToProps(state) {
  return createStructuredSelector({ getFetchedData: selectors.FetchedData() });
}

function mapDispatchToProps(dispatch) {
  return {
    bookTicket: (details) => dispatch(actions.StartbookTicket(details)),
  };
}

const withReducer = injectReducer({ key: "HomeScreen", reducer: reducer });
const withSaga = injectSaga({ key: "HomeScreen", saga: saga });
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withReducer, withSaga, withConnect)(HomeScreen);
