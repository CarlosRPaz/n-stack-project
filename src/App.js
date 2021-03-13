import React from 'react';
import './App.css';
import Home from './components/layout/home/Home'
import Footer from './components/layout/footer/Footer'
import Landing from './components/layout/landing/Landing'
import Navbar from './components/layout/navbar/Navbar'
import Profile from './components/layout/profile/Profile'
import Teams from './components/layout/teams/Teams'
import Stacks from './components/layout/stacks/Stacks'
import Articles from './components/layout/articles/Articles'
import Explore from './components/layout/explore/Explore'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path='/profile'>
            <Navbar />
            <Profile />
            <Footer />
          </Route>
          <Route path='/teams'>
            <Navbar />
            <Teams />
            <Footer />
          </Route>
          <Route path='/stacks'>
            <Navbar />
            <Stacks />
            <Footer />
          </Route>
          <Route path='/articles'>
            <Navbar />
            <Articles />
            <Footer />
          </Route>
          <Route path='/explore'>
            <Navbar />
            <Explore />
            <Footer />
          </Route>
          <Route path='/landing'>
            <Landing />
          </Route>
          <Route path='/'>
            <Navbar />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
