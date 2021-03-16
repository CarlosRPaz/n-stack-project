import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

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

import { auth } from './firebase';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => { // on any auth state change, do:
      if (userAuth) {
        // user is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          }))
      } else {
        // user is logged out
        dispatch(logout());
      }
    })
  }, [])

  return (
    <Router>
      <Switch>
        <Route path='/landing'>
          {user ? <Redirect to='/home' /> : <Landing />}
        </Route>
        <Route path='/home'>
          {!user ? <Redirect to='/landing' /> : <div className="app"><Navbar />< Home /> <Footer /></div>}
        </Route>
        <Route path='/profile'>
          {!user ? <Redirect to='/landing' /> : <div className="app"><Navbar />< Profile /> <Footer /></div>}
        </Route>
        <Route path='/teams'>
          {!user ? <Redirect to='/landing' /> : <div className="app"><Navbar />< Teams /> <Footer /></div>}
        </Route>
        <Route path='/stacks'>
          {!user ? <Redirect to='/landing' /> : <div className="app"><Navbar />< Stacks /> <Footer /></div>}
        </Route>
        <Route path='/articles'>
          {!user ? <Redirect to='/landing' /> : <div className="app"><Navbar />< Articles /> <Footer /></div>}
        </Route>
        <Route path='/explore'>
          {!user ? <Redirect to='/landing' /> : <div className="app"><Navbar />< Explore /> <Footer /></div>}
        </Route>
        <Route path='/'>
          {!user ? <Redirect to='/landing' /> : <Redirect to='/home' />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
