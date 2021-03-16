import React from 'react'
import './styles/ProfileHeader.css'
import { Avatar } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AddIcon from '@material-ui/icons/Add';
import ChatIcon from '@material-ui/icons/Chat';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import { useSelector } from "react-redux";
import { selectUser } from "./../../../features/userSlice";

import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitchIcon from "./../../../img/twitchicon.svg";

function ProfileHeader() {
    const user = useSelector(selectUser);
    return (
        <div className="profileheader">
            <div className="profileheader__cover">
                <img
                    src="https://i.redd.it/c868lq3xsdb21.jpg"
                    alt=""
                />
            </div>
            <div className="profileheader__body">

                <div className="profileheader__bodyLeft">
                    <Avatar className='profileheader__avatar'
                        src={user.photoUrl}
                        alt=""
                    />
                </div>
                <div className="profileheader__bodyMiddle">
                    <div className='profileheader__bodyUsername'>{user.displayName}</div>
                    <div className="profileheader__bodyTitle">
                        <span className="profileheader__bodyPosition">Content Creator</span>
                        <span>&nbsp;for&nbsp;</span>
                        <span className='profileheader__bodyTeam'>St. Louis Sounders</span>
                    </div>
                    <div className='profileheader__bodyBio'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ut labore et dolore magna ut labore et dolore magna ut labore et dolore magna ut labore et dolore magna.
                    </div>
                    <div className='profileheader__bodyStats'>
                        <div className='profileheader__bodyStatsCol'>
                            <span className='profileheader__bodyStatsColTitle'>Followers</span>
                            <span className='profileheader__bodyStatsColNumber'>26.3k</span>
                        </div>
                        <div className='profileheader__bodyStatsCol'>
                            <span className='profileheader__bodyStatsColTitle'>Connections</span>
                            <span className='profileheader__bodyStatsColNumber'>648</span>
                        </div>
                        <div className="profileheader__socials">
                            <img src={TwitchIcon} className="profileheader__socialIcons-twitch" alt="" />
                            <YouTubeIcon className="profileheader__socialIcons" />
                            <TwitterIcon className="profileheader__socialIcons" />
                            <LinkedInIcon className="profileheader__socialIcons" />
                        </div>
                    </div>
                </div>
                <div className="profileheader__bodyRight">
                    <div className="profileheader__bodyRight__buttonfield">
                        <button className='recruitButton'><AssignmentIcon className='buttonIcon' />Recruit</button>
                        <button className='followButton'><AddIcon className='buttonIcon' />Follow</button>
                        <button className='connectButton'><GroupAddIcon className='buttonIcon' />Connect</button>
                        <button className='messageButton'><ChatIcon className='buttonIcon' />Message</button>
                        <MoreVertIcon className='moreverticon' />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProfileHeader
