import React, { useState } from 'react';

import { Route, Switch } from 'react-router-dom'
import './App.css'


import StatePage from './components/State_Page/State-Page.js'
import HomePage from './pages/HomePage/HomePage.js'
import NavBar from './components/NavBar/NavBar.js'



function App(props) {
  //Create State to store State name. setStateName is passed to the map and stateName is passed to State-Page
  const [stateName,setStateName]=useState('')


  const renderStatePage =(props)=>{
    return(
      <StatePage sName={stateName}/>
    )
  }

  const renderHomePage =(props)=>{
    return(
      <HomePage setSName={setStateName}/>
    )
  }
  
  return (

    <Switch>
      <div id={'app-container'}>
        <div className="nav-bar">
          <NavBar/>
        </div>
  {/*----------------------------------------------------- */}
        <div className={"body-container"}>
          <Route exact path="/" render={renderHomePage} />
          <Route exact path="/state-page" render={renderStatePage} />
        </div>
      </div>
    </Switch>

    
  );
}

export default App;