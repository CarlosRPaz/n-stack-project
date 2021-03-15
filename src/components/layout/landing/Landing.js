import React, { useState } from 'react'
import './styles/Landing.css'
import Login from "../../auth/Login"
import logo from './../../../img/logo.png';
import Register from '../../auth/Register';

import SportsEsportsOutlinedIcon from '@material-ui/icons/SportsEsportsOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import OndemandVideoOutlinedIcon from '@material-ui/icons/OndemandVideoOutlined';

function Landing() {

    const [toggle, setToggle] = useState(true);

    const toggleSwitch = () => {
        setToggle(toggle => !toggle);
    }

    return (
        <div className='landing'>
            <div className="landing_leftright-container">
                <div className="landing__wrapper">
                    <div className="landing__left" id='style-3'>
                        <div className="landing__left-box">
                            <div className="landing__box-content">
                                <h1>Esports recruiting.</h1>
                                <h1>Reinvented.</h1>
                                <div className="landing__content-pitches">
                                    <div className="landing__content-pitch">
                                        <SportsEsportsOutlinedIcon className="content-pitch-icon" />
                                        <p>Welcome to n-Stack, the premiere professional esports community.</p>
                                    </div>
                                    <div className="landing__content-pitch">
                                        <PeopleAltOutlinedIcon className="content-pitch-icon" />
                                        <p>Connect, recruit, or be recruited by professional esports organizations.</p>
                                    </div>
                                    <div className="landing__content-pitch">
                                        <OndemandVideoOutlinedIcon className="content-pitch-icon" />
                                        <p>Share your highlights, statistics, achievements, and more.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="landing__left-box">
                            <div className="landing__box-content">
                                <div className="split-container">
                                    <div className="landing__box-split-graphic">splitLeft-odd</div>
                                    <div className="landing__box-split-pitch">
                                        <h2>Be Recruited</h2>
                                        <p>Join to be recruited by the best esports organizations in the industry. n-Stack offers an easy way to fill your profile, find team openings, and will make you much more visible to team recruiters.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="landing__left-box">
                            <div className="landing__box-content">
                                <div className="split-container">
                                    <div className="landing__box-split-pitch">
                                        <h2>Stack</h2>
                                        <p>When you want to play competitively, you can  ping players across the site to stack with you. You can easily filter and find players at your same skill level so you'll always have a chance at getting in that W.</p>
                                    </div>
                                    <div className="landing__box-split-graphic">
                                        1
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="landing__left-box">
                            <div className="landing__box-content">
                                <div className="split-container">
                                    <div className="landing__box-split-graphic">splitLeft-odd</div>
                                    <div className="landing__box-split-pitch">
                                        <h2>Share</h2>
                                        <p>Share your highlights, clips, and unbelievable moments. These are all part of your gaming resume, and will help you get recruited to a great team!</p>
                                        <p>Also, share memes.<br /> We love memes at n-Stack.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="landing__right">
                        <img
                            src={logo}
                            className="landing__logo"
                            alt="Website Logo">
                        </img>
                        <div className="landing__company">n-Stack</div>
                        <div className="landing__switch">
                            <div className="signinButton">Sign In</div><div className="registerButton" onClick={toggleSwitch}>Register</div>
                        </div>
                        {toggle ? <Login /> : <Register />}
                        <div className="landing__footer">
                            <div>About</div>
                            <div>Help</div>
                            <div>Articles</div>
                            <div>Privacy</div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Landing
