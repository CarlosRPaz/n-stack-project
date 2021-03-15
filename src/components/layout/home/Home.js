import React from 'react'
import './styles/Home.css'

import { useDispatch, useSelector } from "react-redux";
import { auth } from './../../../firebase';
import { logout, selectUser } from "./../../../features/userSlice";
import Feed from './Feed';

function Home() {

    const user = useSelector(selectUser);

    const dispatch = useDispatch();

    const logoutOfApp = () => {
        dispatch(logout());
        auth.signOut();

    }

    return (
        <div className="home">
            <div className="home__body">
                <div className="home__sidebar">
                    <div className="home__sidebar-widget">home__sidebar-widget1</div>
                    <div className="home__sidebar-widget">home__sidebar-widget2</div>
                    <div className="home__sidebar-widget">home__sidebar-widget3</div>
                    <div className="home__sidebar-widget">home__sidebar-widget4</div>
                </div>
                <div className="home__feed">
                    <Feed />
                    <button className='logoutButton' onClick={logoutOfApp}>Logout</button>
                </div>

            </div>
        </div>
    )
}

export default Home
