import React from "react";
import { Switch, Route, Redirect } from "react-router";
import Home from "../views/Home";
import Vacants from "../views/Vacants";
import Statistics from "../views/Statistics";
import NotFound from "../views/NotFound";
import Navbar from "../components/Navbar";
import RecruitersAdd from "../views/RecruitersAdd";
import VacantsAdd from "../views/VacantsAdd";
import Recruiters from "../views/Recruiters";
import VacantIndividual from "../views/VacantIndividual"

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
        <Route path="/vacant/:id">
          <VacantIndividual />
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
