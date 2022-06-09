<<<<<<< HEAD
import './App.css';
import React, { Component } from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Events from './components/events';
import Historical from './components/historical';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className='App'>
        {/* <Navbar /> */}
      <Switch>
        <Route exact path='/' component={Events}/>
        <Route path='/historical' component={Historical}/>
        {/* <Route path='/contact' component={Contact}/> */}
        {/* <Route path='/:post_id' component={Post}/> */}
      </Switch>
      </div>
      </BrowserRouter>
    )
  }
}

export default App
=======
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar.component";
import LateNightBrew from "./components/lateNightBrew.component";
import Food from "./components/Food.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";


function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/LateNightBrew" exact component={LateNightBrew} />
        <Route path="/Food" component={Food} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
>>>>>>> 37c3993a1631aa9149fcf5882919a43b075b3673
