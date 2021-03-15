import React from 'react'
import './styles/Navbar.css'
import { Link } from "react-router-dom";

import logo from './../../../img/logo.png';
import SearchIcon from '@material-ui/icons/Search';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar } from '@material-ui/core';
import { useSelector } from "react-redux";
import { selectUser } from "./../../../features/userSlice";

function Navbar() {

    const user = useSelector(selectUser);

    return (
        <div className='navbar'>
            <div className='navbar__left'>
                <Link to='/'>
                    <img
                        src={logo}
                        className="navbar__logo"
                        alt="Website Logo">
                    </img>
                </Link>
            </div>

            <div className='navbar__middle'>
                <div className="navbar__middleLeft">
                    <Link to='/' style={{ textDecoration: 'none' }}><div className='navbar__option'>Home</div></Link>
                    <Link to='/teams' style={{ textDecoration: 'none' }}><div className='navbar__option'>Teams</div></Link>
                    <Link to='/stacks' style={{ textDecoration: 'none' }}><div className='navbar__option'>Stacks</div></Link>
                    <Link to='/articles' style={{ textDecoration: 'none' }}><div className='navbar__option'>Articles</div></Link>
                    <Link to='/explore' style={{ textDecoration: 'none' }}><div className='navbar__option'>Explore</div></Link>
                </div>
                <div className="navbar__middleRight">
                    <div className="navbar__search">
                        <SearchIcon className="navbar__searchIcon" />
                        <input type="text" className="navbar__searchInput" placeholder='Search...' />
                    </div>
                </div>
            </div>

            <div className='navbar__right'>
                <div className="navbar__iconBox">
                    <ChatIcon className="navbar__icon" />

                    <NotificationsIcon className="navbar__icon" />
                    <Link to='/profile'>
                        <Avatar className="navbar__iconAvatar" src={user.photoUrl} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
