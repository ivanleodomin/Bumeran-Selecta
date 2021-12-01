import React from "react";
import { Switch, Route, Redirect } from "react-router";
import Home from "../views/Home";
import Vacants from "../views/Vacant/Vacants";
import Statistics from "../views/Statistics";
import NotFound from "../views/NotFound";
import Navbar from "../components/Navbar";
import RecruitersAdd from "../views/Recruiter/RecruitersAdd";
import VacantsAdd from "../views/Vacant/VacantsAdd";
import Recruiters from "../views/Recruiter/Recruiters";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/recruiter-form">
          <RecruitersAdd />
        </Route>
        <Route exact path="/vacant-form">
          <VacantsAdd />
        </Route>
        <Route path="/recruiters">
          <Recruiters />
        </Route>
        <Route path="/vacants">
          <Vacants />
        </Route>
        <Route path="/stadistics">
          <Statistics />
        </Route>    
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route component={NotFound} />
        <Route path="*">
          <Redirect to="/404" />
        </Route>
      </Switch>
    </>
  );
}

export default App;
