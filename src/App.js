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
