import { Switch, Route, Redirect } from "react-router";
import { useHistory } from "react-router-dom";
import React from "react";
import Home from "../views/Home";
import Vacants from "../views/Vacant/Vacants";
import NotFound from "../views/NotFound";
import Navbar from "../components/Navbar";
import RecruitersAdd from "../views/Recruiter/RecruitersAdd";
import VacantsAdd from "../views/Vacant/VacantsAdd";
import VacantEdit from "../views/Vacant/VacantEdit";
import RecruiterEdit from "../views/Recruiter/RecruiterEdit";
import LinkRecruiter from "../views/Vacant/LinkRecruiter";
import Recruiters from "../views/Recruiter/Recruiters";
import Graph from "../components/charts/Graph.jsx";
import TinyBarCh from '../components/charts/TinyBarCh.jsx'

import RegionSelector from "../views/RegionSelector";
import { useSelector } from "react-redux";

function App() {
  const country = useSelector((state) => state.country).value;
  const history = useHistory();


  React.useEffect(() => {
    if (!country) history.push("/");
  }, [country]);

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <RegionSelector />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/recruiter-form">
          <RecruitersAdd />
        </Route>
        <Route exact path="/vacant-form">
          <VacantsAdd />
        </Route>
        <Route exact path="/vacant-edit/:id">
          <VacantEdit />
        </Route>
        <Route exact path="/recruiter-edit/:id">
          <RecruiterEdit />
        </Route>
        <Route path="/recruiters/:id">
          <Recruiters />
        </Route>
        <Route path="/recruiters">
          <Recruiters />
        </Route>
        {/*Preguntar*/}
        <Route path="/vacants/:id">
          <Vacants />
        </Route>
        <Route path="/vacants/">
          <Vacants />
        </Route>
        {/*Preguntar*/}
        <Route exact path="/link-recruiter/:id">
          <LinkRecruiter />
        </Route>
        <Route path="/stadistics">
          <Graph />
          <TinyBarCh/>
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
