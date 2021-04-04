import React from "react";
import Home from "./containers/homeScreen/index";
import About from "./containers/AboutUs/index";
import Login from "./containers/login/index";
import Register from "./containers/Register/index";
import Dashboard from "./containers/Dashboard/index";
import RegisterSuccess from "./containers/RegisterSuccess/index";
import TermsConditions from "./containers/TermsConditions/index";
import PrivacyPolicy from "./containers/PrivacyPolicy/index";
import TeamInfo from "./containers/TeamInfo/index";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Content from "./utils/content.json";
const history = createBrowserHistory();

function App() {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route exact path={Content.homeMenuOpt[0].link}>
            <Home />
          </Route>
          <Route exact path={Content.homeMenuOpt[1].link}>
            <About />
          </Route>
          <Route exact path={Content.homeMenuOpt[2].link}>
            <Login />
          </Route>
          <Route exact path={Content.homeMenuOpt[3].link}>
            <Register />
          </Route>
          <Route exact path={Content.homeMenuOpt[4].link}>
            <Dashboard />
          </Route>
          <Route exact path="/success">
            <RegisterSuccess />
          </Route>
          <Route exact path="/terms-conditions">
            <TermsConditions />
          </Route>
          <Route exact path="/privacy-policy">
            <PrivacyPolicy />
          </Route>
          <Route exact path="/team-info">
            <TeamInfo />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
