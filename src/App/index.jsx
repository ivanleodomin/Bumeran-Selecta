import React from "react";
import Home from "../views/Home";
import { Switch, Route } from 'react-router'
import Vacants from '../components/Vacants'
import Statistics from "../components/Statistics";
import NotFound from "../components/NotFound";
import Header from "../components/Heading";
//import BasicTable from "../components/table/BasicTable";
//import SortingTable from "../components/table/SortingTable";
import FilteringTable from "../components/table/FilteringTable";
import AddRecruiterForm from "../components/AddRecruiterForm";
import { HiMenuAlt1 } from "react-icons/hi";
import Modal from "../components/Modal";

function App() {
  return (
    <div>
    <div>
      <Header/>
      </div>

      <Home/>

      <div>
        <Switch>
        <Route exact path='/recruiter/add' component={AddRecruiterForm } />
        <Route path='/recruiters' component={FilteringTable} /> 
        <Route path='/vacants' component={Vacants} /> 
        <Route path='/statistics' component={Statistics} />
        <Route component={NotFound} />
        </Switch>  
        
        </div> 
    </div>
  );
}

export default App;
