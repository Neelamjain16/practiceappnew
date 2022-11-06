import logo from './logo.svg';
import './App.css';
import Students from './Components/Students';
import Teachers from './Components/Teachers';
import WeatherComponent from './Components/WeatherComponent';
import Counter from './Components/Counter';
import AddUser from './Components/AddUser';


import {BrowserRouter as Router,Routes,Route,Link }from 'react-router-dom';

import React,{  useState } from 'react';

import LoginUser from './Components/LoginUser';

import PlanDetails from './Components/PlanDetails';
import MemberPlans from './Components/MemberPlans';
import SubmitClaims from './Components/SubmitClaims';
import UpdatePlans from './Components/UpdatePlans';
import MemberPlansFinal from './Components/MemberPlansFinal';



export const UserContext = React.createContext();

function App() {



  return (
    
    <div className="App">
       
        {/* <AddUser />
        <LoginUser/> 
        <PlanDetails/> */}
         
      
        <Router>
        <Routes>
        <Route exact path="/" element={<LoginUser/>}></Route>
        <Route exact path="/Register" element={<AddUser/>}></Route> 
        <Route exact path="/Plans" element={<PlanDetails/>}></Route> 
        <Route exact path="/MemberPlans" element={<MemberPlansFinal/>}></Route>
        <Route exact path="/Claims" element={<SubmitClaims/>}></Route>
        <Route exact path="/Update" element={<UpdatePlans/>}></Route>
        </Routes>
        </Router>
       
       
    </div>
      
  );
}



export default App;
