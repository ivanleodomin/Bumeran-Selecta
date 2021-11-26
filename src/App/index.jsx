import React from "react";
import { Switch, Route, Redirect } from "react-router";
import Home from "../views/Home";
import Vacants from "../components/Vacants";
import Statistics from "../components/Statistics";
import NotFound from "../components/NotFound";
import Header from "../components/Heading";
import FilteringTable from "../components/table/FilteringTable";
import RecruitersAdd from "../views/RecruitersAdd";
import Footer from "../components/Footer";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/recruiter/add">
          <RecruitersAdd />
        </Route>
        <Route path="/recruiters">
          <FilteringTable />
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
      <Footer />
    </>
  );
}

export default App;
