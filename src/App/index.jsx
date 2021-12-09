import React, { Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router";
import Home from "../views/Home";
import Vacants from "../views/Vacant/Vacants";
import Statistics from "../views/Statistics";
import NotFound from "../views/NotFound";
import Navbar from "../components/Navbar";
import RecruitersAdd from "../views/Recruiter/RecruitersAdd";
import VacantsAdd from "../views/Vacant/VacantsAdd";
import VacantEdit from "../views/Vacant/VacantEdit";
import RecruiterEdit from "../views/Recruiter/RecruiterEdit";
import LinkRecruiter from "../views/Vacant/LinkRecruiter";
const Recruiters = lazy(() => import("../views/Recruiter/Recruiters"));

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
        <Route exact path="/vacant-edit/:id">
          <VacantEdit />
        </Route>
        <Route exact path="/recruiter-edit/:id">
          <RecruiterEdit />
        </Route>
        <Route path="/recruiters">
          <Suspense fallback={<h1>cargando...</h1>}>
            <Recruiters />
          </Suspense>
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
