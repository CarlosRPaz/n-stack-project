import React, { useState, useEffect } from 'react'
import './styles/Profile.css'
import ProfileHeader from './ProfileHeader'
import { Avatar } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';

import rein from './../../../img/rein.PNG';
import winston from './../../../img/winston.PNG';
import sigma from './../../../img/sigma.PNG';

import axios from './../../../axios';
import requests from './../../../Requests';

function Profile() {

    const [playerStats, setPlayerStats] = useState([]);

    {/*
    useEffect(() => {
        fetch("https://call-of-duty-modern-warfare.p.rapidapi.com/warzone/Amartin743/psn", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "4dd84053b2msh20aab8d254b90e5p1f4505jsn5f8f2d5658ad",
                "x-rapidapi-host": "call-of-duty-modern-warfare.p.rapidapi.com"
            }
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setPlayerStats(data.br);
                console.log('playerStats >>>');
                console.log(playerStats.wins);
            })
            .catch(err => {
                console.error(err);
            });
    }, []);
    */}

    return (
        <div className='profile'>
            <div className="profile__body">
                <ProfileHeader />

                <div className="profile__main">
                    <div className="profile__summary">
                        <h4>Summary</h4>
                        <div className="profile__summary-game-wrapper">
                            <div className="profile__summary-game">
                                <div className="profile__summary-game-header-top">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/en/thumb/5/51/Overwatch_cover_art.jpg/220px-Overwatch_cover_art.jpg"
                                        alt=""
                                    />
                                    <div className="profile__summary-game-header-top-info">
                                        <h5>Overwatch</h5>
                                        <div className="profile__summary-game-header-top-info-col-container">
                                            <div className="profile__summary-game-header-top-info-col">
                                                <h6>Skill Rating</h6>
                                                <img
                                                    src="https://d1u1mce87gyfbn.cloudfront.net/game/rank-icons/rank-GrandmasterTier.png"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="profile__summary-game-header-top-info-col">
                                                <h6>Main Role</h6>
                                                <img
                                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Tank_icon.svg/1200px-Tank_icon.svg.png"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="profile__summary-game-header-bottom">
                                    <div className="profile__summary-game-header-bottom1">
                                        <h6>Main Characters</h6>
                                        <div>
                                            <img src={rein} alt="" />
                                            <img src={winston} alt="" />
                                            <img src={sigma} alt="" />
                                        </div>
                                    </div>
                                    <div className="profile__summary-game-header-bottom2">
                                        <h6>Competitive Stats</h6>
                                        <div >
                                            <p>Dmg / 10 min: <span>000</span></p>
                                            <p>Elims / 10 min: <span>000</span></p>
                                            <p>Deaths / 10 min: <span>000</span></p>
                                            <p>Hours played: <span>000</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="profile__summary-game">
                                {/*<h5>Call of Duty: Modern Warfare</h5>
                                <p>Wins: {playerStats.wins}</p>
                                <p>Kills: {playerStats.kills}</p>
                                <p>K/D: {playerStats.kdRatio}</p>
                                <p>Top-Tens: {playerStats.topTen}</p>*/}
                            </div>
                            <div className="profile__summary-game">Game 1 </div>
                        </div>
                    </div>

                    <div className="profile__submain">
                        <div className="profile__teams">
                            <h4>Teams</h4>
                            <div className="profile__team">Team 1</div>
                            <div className="profile__team">Team 2</div>
                            <div className="profile__team">Team 3</div>
                            <div className="profile__team">Team 4</div>
                        </div>
                        <div className="profile__highlights">
                            <h4>Highlights</h4>
                            <div className="highlights__row">
                                <div className="profile__highlight">
                                    <img
                                        src="https://s3.us-east-1.amazonaws.com/dexerto-assets-production-cbbdf288/uploads/thumbnails/_thumbnailLarge/Zenyatta-Overwatch-stat-improvements-discord-orb-healing-orb.jpg"
                                        alt=""
                                    />
                                    <div className="highlight__body">
                                        <div className="highlight__title">Zenyatta 6k</div>
                                        <div className="highlight__stats">
                                            <div className="highlight__stat">
                                                <div className="highlight__statNum">23.6k</div>
                                                <div className="highlight__statType">Views</div>
                                            </div>
                                            <div className="highlight__stat">
                                                <div className="highlight__statNum">12.2k</div>
                                                <div className="highlight__statType">Likes</div>
                                            </div>
                                            <div className="highlight__stat">
                                                <div className="highlight__statNum">3.2k</div>
                                                <div className="highlight__statType">Comments</div>
                                            </div>
                                        </div>
                                        <MoreVertIcon className="highlight__moreoptions" />
                                    </div>
                                </div>
                                <div className="profile__highlight">
                                    <img
                                        src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/146475015/original/21cf05c6aad50767b611edf6dd79ce9207d9959a/make-rainbow-six-siege-thumbnail.jpg"
                                        alt=""
                                    />
                                    <div className="highlight__body">
                                        <div className="highlight__title">Rainbow 6 Siege Ace</div>
                                        <div className="highlight__stats">
                                            <div className="highlight__stat">
                                                <div className="highlight__statNum">23.6k</div>
                                                <div className="highlight__statType">Views</div>
                                            </div>
                                            <div className="highlight__stat">
                                                <div className="highlight__statNum">12.2k</div>
                                                <div className="highlight__statType">Likes</div>
                                            </div>
                                            <div className="highlight__stat">
                                                <div className="highlight__statNum">3.2k</div>
                                                <div className="highlight__statType">Comments</div>
                                            </div>
                                        </div>
                                        <MoreVertIcon className="highlight__moreoptions" />
                                    </div>
                                </div>
                            </div>
                            <div className="highlights__row">
                                <div className="profile__highlight">
                                    <img
                                        src="https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/073dba976a525dca1486244934e37cf2-1598900291/xarthurjuve14x---SND-with-Ax50/design-a-custom-high-quality-modern-warfare-thumbnail.png"
                                        alt=""
                                    />
                                    <div className="highlight__body">
                                        <div className="highlight__title">Search & Destroy Ace</div>
                                        <div className="highlight__stats">
                                            <div className="highlight__stat">
                                                <div className="highlight__statNum">23.6k</div>
                                                <div className="highlight__statType">Views</div>
                                            </div>
                                            <div className="highlight__stat">
                                                <div className="highlight__statNum">12.2k</div>
                                                <div className="highlight__statType">Likes</div>
                                            </div>
                                            <div className="highlight__stat">
                                                <div className="highlight__statNum">3.2k</div>
                                                <div className="highlight__statType">Comments</div>
                                            </div>
                                        </div>
                                        <MoreVertIcon className="highlight__moreoptions" />
                                    </div>
                                </div>
                                <div className="profile__highlight">
                                    <img
                                        src="https://cdn.medal.tv/1845673/thumbnail-34827635-360p.jpg"
                                        alt=""
                                    />
                                    <div className="highlight__body">
                                        <div className="highlight__title">Warzone 180 Headshot</div>
                                        <div className="highlight__stats">
                                            <div className="highlight__stat">
                                                <div className="highlight__statNum">23.6k</div>
                                                <div className="highlight__statType">Views</div>
                                            </div>
                                            <div className="highlight__stat">
                                                <div className="highlight__statNum">12.2k</div>
                                                <div className="highlight__statType">Likes</div>
                                            </div>
                                            <div className="highlight__stat">
                                                <div className="highlight__statNum">3.2k</div>
                                                <div className="highlight__statType">Comments</div>
                                            </div>
                                        </div>
                                        <MoreVertIcon className="highlight__moreoptions" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*<button onClick={getProfile}>Get Profile</button>*/}

                    <div className="profile__reviews">
                        <h4>Reviews</h4>
                        <div className="profile__reviewsContainer">
                            <div className="profile__review">
                                <div className="profile__reviewHeader">
                                    <Avatar className='profile__reviewHeaderAvatar'
                                        src="https://images.unsplash.com/photo-1530602055568-20643ad3132b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjN8fHZpZGVvZ2FtZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                        alt=""
                                    />
                                    <div className="profile__reviewHeaderReviewer">
                                        <div className="profile__reviewHeaderReviewerName">Lazerbeam</div>
                                        <div className="profile__reviewHeaderReviewerTitle">Content Creator for <span>Phoenix Duelers</span></div>
                                    </div>
                                </div>
                                <div className="profile__reviewQuote">
                                    <FormatQuoteIcon className="reviewQuoteIcon1" />
                                    <div className="profile__reviewQuoteWords">
                                        These are the words that I speak, for they are the words that belong here. Any readers in comms? Of course.
                                    </div>
                                    <FormatQuoteIcon className="reviewQuoteIcon2" />
                                </div>
                            </div>
                            <div className="profile__review">
                                <div className="profile__reviewHeader">
                                    <Avatar className='profile__reviewHeaderAvatar'
                                        src="https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
                                        alt=""
                                    />
                                    <div className="profile__reviewHeaderReviewer">
                                        <div className="profile__reviewHeaderReviewerName">Dantes</div>
                                        <div className="profile__reviewHeaderReviewerTitle">Head Coach for <span>Bear Players</span></div>
                                    </div>
                                </div>
                                <div className="profile__reviewQuote">
                                    <FormatQuoteIcon className="reviewQuoteIcon1" />
                                    <div className="profile__reviewQuoteWords">
                                        These are the words that I speak, for they are the words that belong here. Any readers in comms? Of course.
                                    </div>
                                    <FormatQuoteIcon className="reviewQuoteIcon2" />
                                </div>
                            </div>
                            <div className="profile__review">
                                <div className="profile__reviewHeader">
                                    <Avatar className='profile__reviewHeaderAvatar'
                                        src="https://images.unsplash.com/photo-1545062990-4a95e8e4b96d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
                                        alt=""
                                    />
                                    <div className="profile__reviewHeaderReviewer">
                                        <div className="profile__reviewHeaderReviewerName">Phantom</div>
                                        <div className="profile__reviewHeaderReviewerTitle">Assistant Coach for <span>Hacienda Heights Phantoms</span></div>
                                    </div>
                                </div>
                                <div className="profile__reviewQuote">
                                    <FormatQuoteIcon className="reviewQuoteIcon1" />
                                    <div className="profile__reviewQuoteWords">
                                        These are the words that I speak, for they are the words that belong here. Any readers in comms? Of course.
                                    </div>
                                    <FormatQuoteIcon className="reviewQuoteIcon2" />
                                </div>
                            </div>
                            <div className="profile__review">
                                <div className="profile__reviewHeader">
                                    <Avatar className='profile__reviewHeaderAvatar'
                                        src="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"
                                        alt=""
                                    />
                                    <div className="profile__reviewHeaderReviewer">
                                        <div className="profile__reviewHeaderReviewerName">Kittssssss</div>
                                        <div className="profile__reviewHeaderReviewerTitle">Mans for <span>Clowns</span></div>
                                    </div>
                                </div>
                                <div className="profile__reviewQuote">
                                    <FormatQuoteIcon className="reviewQuoteIcon1" />
                                    <div className="profile__reviewQuoteWords">
                                        These are the words that I speak, for they are the words that belong here. Any readers in comms? Of course.
                                    </div>
                                    <FormatQuoteIcon className="reviewQuoteIcon2" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
