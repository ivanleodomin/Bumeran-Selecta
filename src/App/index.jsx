import React from "react";
import Home from "../views/Home";
import { Switch, Route } from 'react-router'
import Vacants from '../components/Vacants'
import Statistics from "../components/Statistics";
import NotFound from "../components/NotFound";
import Header from "../views/Heading";
import RecruitersList from "../views/RecruitersList";
import Recruiters from "../components/Recruiters";

function App() {
  return (
    <div>
    <div>
      <Header/>
      </div>

      <Home/>

      <div>
        <Switch>
        <Route  exact path='/recruiters' component={Recruiters} /> 
        <Route path='/vacants' component={Vacants} /> 
        <Route path='/statistics' component={Statistics} />
        <Route component={NotFound} />
        </Switch>  
        </div> 
    </div>
  );
}

export default App;
