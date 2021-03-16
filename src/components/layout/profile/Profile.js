import React, { useState, useEffect } from 'react'
import './styles/Profile.css'
import ProfileHeader from './ProfileHeader'
import { Avatar } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';

import axios from './../../../api/axios';
import requests from './../../../api/Requests';

function Profile() {

    const [playerStats, setPlayerStats] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchPlayerStats);
            setPlayerStats(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }

        fetchData();
    }, [])

    console.log(playerStats);

    return (
        <div className='profile'>
            <div className="profile__body">
                <ProfileHeader />

                <div className="profile__main">
                    <div className="profile__summary">
                        <h4>Summary</h4>
                        <div className="profile__summaryGame">Game 1
                        <h5>Username</h5>
                            <h5>Game</h5>
                            <h5>stats</h5>
                        </div>
                        <div className="profile__summaryGame">Game 2</div>
                        <div className="profile__summaryGame">Game 3</div>
                        <div className="profile__summaryGame">Game 4</div>
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
                                        src="https://cdn.medal.tv/1845673/thumbnail-34827635-360p.jpg"
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
                            </div>
                        </div>
                    </div>

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
